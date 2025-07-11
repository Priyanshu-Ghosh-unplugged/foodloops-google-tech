
import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Star, Heart, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { calculateDynamicPrice, Product } from '@/utils/pricingAlgorithm';

const ProductGrid = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const { addToCart } = useCart();

  const initialProducts: Product[] = [
    {
      id: 1,
      name: "Organic Apples",
      originalPrice: 950,
      baseDiscount: 45,
      expiryHours: 18,
      store: "Green Market",
      distance: "0.5 km",
      rating: 4.8,
      image: "🍎",
      category: "Fruits",
      ecoScore: 85
    },
    {
      id: 2,
      name: "Fresh Salmon Fillet",
      originalPrice: 1899,
      baseDiscount: 40,
      expiryHours: 12,
      store: "Ocean Fresh",
      distance: "0.8 km",
      rating: 4.9,
      image: "🐟",
      category: "Seafood",
      ecoScore: 92
    },
    {
      id: 3,
      name: "Artisan Bread Loaf",
      originalPrice: 699,
      baseDiscount: 35,
      expiryHours: 8,
      store: "Baker's Corner",
      distance: "1.2 km",
      rating: 4.7,
      image: "🍞",
      category: "Bakery",
      ecoScore: 78
    },
    {
      id: 4,
      name: "Greek Yogurt Pack",
      originalPrice: 1299,
      baseDiscount: 30,
      expiryHours: 36,
      store: "Dairy Delights",
      distance: "0.3 km",
      rating: 4.6,
      image: "🥛",
      category: "Dairy",
      ecoScore: 88
    },
    {
      id: 5,
      name: "Premium Cheese Selection",
      originalPrice: 2599,
      baseDiscount: 25,
      expiryHours: 48,
      store: "Cheese Masters",
      distance: "1.5 km",
      rating: 4.9,
      image: "🧀",
      category: "Dairy",
      ecoScore: 91
    },
    {
      id: 6,
      name: "Fresh Vegetable Mix",
      originalPrice: 1449,
      baseDiscount: 35,
      expiryHours: 24,
      store: "Farm Fresh",
      distance: "0.7 km", 
      rating: 4.5,
      image: "🥬",
      category: "Vegetables",
      ecoScore: 83
    }
  ];

  const [products, setProducts] = useState(initialProducts);

  // Update prices every 30 seconds to simulate real-time pricing
  useEffect(() => {
    const interval = setInterval(() => {
      setProducts(prevProducts => 
        prevProducts.map(product => ({
          ...product,
          expiryHours: Math.max(0, product.expiryHours - 0.1) // Reduce by 6 minutes
        }))
      );
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  const getUrgencyLevel = (hours: number) => {
    if (hours <= 12) return { level: 'high', color: 'bg-red-500', text: 'Very Urgent' };
    if (hours <= 24) return { level: 'medium', color: 'bg-orange-500', text: 'Urgent' };
    return { level: 'low', color: 'bg-yellow-500', text: 'Soon' };
  };

  const handleAddToCart = (product: Product) => {
    const { currentPrice, discount } = calculateDynamicPrice(product);
    addToCart({
      id: product.id,
      title: product.name,
      price: currentPrice,
      originalPrice: product.originalPrice,
      store: product.store,
      image: product.image,
      expiresIn: `${Math.floor(product.expiryHours)}h`,
      expiryHours: product.expiryHours
    });
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-poppins font-bold text-primary mb-4">
            Today's Best Deals
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Smart algorithm-based pricing on quality foods nearing expiry. 
            Updated every hour for maximum freshness and savings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const { currentPrice, discount } = calculateDynamicPrice(product);
            const urgency = getUrgencyLevel(product.expiryHours);
            const isFavorite = favorites.includes(product.id);
            
            return (
              <Card key={product.id} className="group bg-white/90 backdrop-blur-sm border-gold/20 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative p-6 bg-gradient-to-br from-gold/5 to-green/5">
                  <div className="text-6xl text-center mb-4">{product.image}</div>
                  
                  <Badge className="absolute top-4 left-4 brass-gradient text-white font-bold">
                    -{discount}%
                  </Badge>
                  
                  <Badge className={`absolute top-4 right-4 ${urgency.color} text-white`}>
                    <Clock className="w-3 h-3 mr-1" />
                    {urgency.text}
                  </Badge>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-16 right-4 p-2"
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <Heart 
                      className={`w-5 h-5 transition-colors ${isFavorite ? 'fill-red-500 text-red-500' : 'text-muted-foreground hover:text-red-500'}`} 
                    />
                  </Button>
                </div>

                <div className="p-6 pt-0">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs border-gold/30 text-gold">
                      {product.category}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Zap className="w-3 h-3 text-green" />
                      <span className="text-xs text-green font-medium">Eco: {product.ecoScore}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-dm-sans font-semibold text-primary mb-2 group-hover:text-gold transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-2xl font-poppins font-bold text-gold">
                      ₹{currentPrice.toFixed(2)}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ₹{product.originalPrice.toFixed(2)}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span>{product.store} • {product.distance}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-gold text-gold" />
                      <span>{product.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-medium text-primary">
                      <Clock className="w-4 h-4 inline mr-1" />
                      {Math.floor(product.expiryHours)}h left
                    </div>
                    <div className="text-xs text-green">
                      Save ₹{(product.originalPrice - currentPrice).toFixed(2)}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full brass-gradient text-white font-dm-sans font-semibold rounded-lg glow-hover transition-all duration-300"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-gold text-gold hover:bg-gold hover:text-white font-dm-sans font-semibold rounded-full px-8 py-4 transition-all duration-300"
          >
            View All Deals
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
