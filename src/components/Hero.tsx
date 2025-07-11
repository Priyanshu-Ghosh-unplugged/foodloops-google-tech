
import React from 'react';
import { ArrowRight, Leaf, Clock, TrendingDown, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Hero = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 mandala-bg opacity-30"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-green-light px-4 py-2 rounded-full">
                <Leaf className="w-4 h-4 text-green" />
                <span className="text-green font-dm-sans font-medium">Fight Food Waste Together</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-poppins font-bold text-primary leading-tight">
                Save Money,
                <span className="text-gold block">Save Planet</span>
              </h1>
              
              <p className="text-xl text-muted-foreground font-inter leading-relaxed">
                Discover amazing deals on near-expiry foods from local stores. 
                Smart pricing, real-time updates, and personalized recommendations 
                help you save up to 70% while reducing food waste.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="brass-gradient text-white font-dm-sans font-semibold rounded-full px-8 py-4 glow-hover transition-all duration-300"
              >
                Start Shopping
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-gold text-gold hover:bg-gold hover:text-white font-dm-sans font-semibold rounded-full px-8 py-4 transition-all duration-300"
              >
                For Retailers
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-poppins font-bold text-gold">2.5M+</div>
                <div className="text-sm text-muted-foreground font-inter">Items Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-poppins font-bold text-gold">85%</div>
                <div className="text-sm text-muted-foreground font-inter">Avg. Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-poppins font-bold text-gold">50K+</div>
                <div className="text-sm text-muted-foreground font-inter">Happy Users</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-6">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-gold/20 hover:shadow-lg transition-all duration-300 float-animation">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-dm-sans font-semibold text-primary mb-2">Real-Time Updates</h3>
                  <p className="text-muted-foreground font-inter text-sm">
                    Live inventory updates ensure you never miss a deal. Get notified instantly when new items are added.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-gold/20 hover:shadow-lg transition-all duration-300 float-animation" style={{animationDelay: '1s'}}>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green/10 rounded-lg flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-green" />
                </div>
                <div>
                  <h3 className="font-dm-sans font-semibold text-primary mb-2">Smart Pricing Algorithm</h3>
                  <p className="text-muted-foreground font-inter text-sm">
                    Advanced algorithms calculate optimal discounts based on expiry dates, demand, and inventory levels.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-gold/20 hover:shadow-lg transition-all duration-300 float-animation" style={{animationDelay: '2s'}}>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-dm-sans font-semibold text-primary mb-2">Community Driven</h3>
                  <p className="text-muted-foreground font-inter text-sm">
                    Share recipes, tips, and connect with like-minded people committed to reducing food waste.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
