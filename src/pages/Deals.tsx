
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { calculateDynamicPrice, Product } from '@/utils/pricingAlgorithm';

const Deals = () => {
  const { addToCart } = useCart();

  const initialDeals: Product[] = [
    {
      id: 1,
      name: "Fresh Organic Bananas",
      originalPrice: 4.99,
      baseDiscount: 30,
      expiryHours: 2,
      store: "GreenMart",
      distance: "0.5 miles",
      rating: 4.5,
      image: "🍌",
      category: "Fruits",
      ecoScore: 85
    },
    {
      id: 2,
      name: "Artisan Bread Loaf",
      originalPrice: 6.99,
      baseDiscount: 25,
      expiryHours: 4,
      store: "Baker's Corner",
      distance: "0.8 miles",
      rating: 4.8,
      image: "🍞",
      category: "Bakery",
      ecoScore: 78
    },
    {
      id: 3,
      name: "Premium Yogurt Pack",
      originalPrice: 8.99,
      baseDiscount: 20,
      expiryHours: 24,
      store: "Dairy Fresh",
      distance: "1.2 miles",
      rating: 4.3,
      image: "🥛",
      category: "Dairy",
      ecoScore: 88
    }
  ];

  const [deals, setDeals] = useState(initialDeals);

  // Update prices every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDeals(prevDeals => 
        prevDeals.map(deal => ({
          ...deal,
          expiryHours: Math.max(0, deal.expiryHours - 0.1)
        }))
      );
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const handleAddToCart = (deal: Product) => {
    const { currentPrice } = calculateDynamicPrice(deal);
    addToCart({
      id: deal.id,
      title: deal.name,
      price: currentPrice,
      originalPrice: deal.originalPrice,
      store: deal.store,
      image: deal.image,
      expiresIn: `${Math.floor(deal.expiryHours)}h`,
      expiryHours: deal.expiryHours
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-poppins font-bold text-primary mb-4">
            Today's Best Deals
          </h1>
          <p className="text-lg text-muted-foreground font-inter">
            Discover amazing discounts on near-expiry items and help reduce food waste
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal) => {
            const { currentPrice, discount } = calculateDynamicPrice(deal);
            
            return (
              <Card key={deal.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative">
                    <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-gold/5 to-green/5 text-6xl">
                      {deal.image}
                    </div>
                    <Badge className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                      -{discount}%
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="font-dm-sans text-lg mb-2">{deal.name}</CardTitle>
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span className="text-sm text-muted-foreground">{deal.store}</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="w-4 h-4 text-gold fill-current" />
                    <span className="text-sm text-muted-foreground">{deal.rating}</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Clock className="w-4 h-4 text-red-500" />
                    <span className="text-sm text-red-500">Expires in {Math.floor(deal.expiryHours)}h</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gold">${currentPrice.toFixed(2)}</span>
                    <span className="text-lg text-muted-foreground line-through">${deal.originalPrice}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button 
                    className="w-full brass-gradient hover:shadow-lg"
                    onClick={() => handleAddToCart(deal)}
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Deals;
