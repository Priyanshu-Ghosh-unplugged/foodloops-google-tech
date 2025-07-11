
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Fresh Organic Bananas",
      price: 2.49,
      originalPrice: 4.99,
      quantity: 2,
      store: "GreenMart",
      image: "/placeholder.svg",
      expiresIn: "2 hours"
    },
    {
      id: 2,
      title: "Artisan Bread Loaf",
      price: 3.49,
      originalPrice: 6.99,
      quantity: 1,
      store: "Baker's Corner",
      image: "/placeholder.svg",
      expiresIn: "4 hours"
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const originalTotal = cartItems.reduce((sum, item) => sum + (item.originalPrice * item.quantity), 0);
  const savings = originalTotal - total;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-poppins font-bold text-primary mb-4">
            Your Cart
          </h1>
          <p className="text-lg text-muted-foreground font-inter">
            {cartItems.length} items in your cart
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBag className="w-24 h-24 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-poppins font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">Discover amazing deals on near-expiry items</p>
            <Button className="brass-gradient hover:shadow-lg">
              Browse Deals
            </Button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-dm-sans font-semibold text-lg">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.store}</p>
                        <p className="text-sm text-red-500">Expires in {item.expiresIn}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="text-lg font-bold text-gold">${item.price}</span>
                          <span className="text-sm text-muted-foreground line-through">${item.originalPrice}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      <Button 
                        size="sm" 
                        variant="ghost"
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="font-dm-sans">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Original Total:</span>
                    <span className="line-through text-muted-foreground">${originalTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Your Total:</span>
                    <span className="font-bold text-gold">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>You Save:</span>
                    <span className="font-bold">${savings.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-4">
                    <Button className="w-full brass-gradient hover:shadow-lg">
                      Proceed to Checkout
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
