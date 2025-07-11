
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tag, Clock, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Deals = () => {
  const deals = [
    {
      id: 1,
      title: "Fresh Organic Bananas",
      originalPrice: 4.99,
      discountedPrice: 2.49,
      discount: 50,
      expiresIn: "2 hours",
      store: "GreenMart",
      rating: 4.5,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Artisan Bread Loaf",
      originalPrice: 6.99,
      discountedPrice: 3.49,
      discount: 50,
      expiresIn: "4 hours",
      store: "Baker's Corner",
      rating: 4.8,
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Premium Yogurt Pack",
      originalPrice: 8.99,
      discountedPrice: 4.49,
      discount: 50,
      expiresIn: "1 day",
      store: "Dairy Fresh",
      rating: 4.3,
      image: "/placeholder.svg"
    }
  ];

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
          {deals.map((deal) => (
            <Card key={deal.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="relative">
                  <img 
                    src={deal.image} 
                    alt={deal.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                    -{deal.discount}%
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="font-dm-sans text-lg mb-2">{deal.title}</CardTitle>
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
                  <span className="text-sm text-red-500">Expires in {deal.expiresIn}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-gold">${deal.discountedPrice}</span>
                  <span className="text-lg text-muted-foreground line-through">${deal.originalPrice}</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full brass-gradient hover:shadow-lg">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Deals;
