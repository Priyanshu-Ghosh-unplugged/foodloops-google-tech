
import React from 'react';
import { ArrowRight, Leaf, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleStartShopping = () => {
    navigate('/deals');
  };

  const handleForRetailers = () => {
    navigate('/sellers');
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZGFkNGI0IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gold/10 px-4 py-2 rounded-full">
                <Leaf className="w-5 h-5 text-gold" />
                <span className="text-gold font-dm-sans font-semibold">Fighting Food Waste Together</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-poppins font-bold text-primary leading-tight">
                Save Money,
                <span className="text-gold block">Save Planet</span>
              </h1>
              
              <p className="text-xl text-muted-foreground font-inter leading-relaxed max-w-lg">
                Discover incredible deals on near-expiry foods from local stores. 
                Every purchase helps reduce waste and makes a positive environmental impact.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-poppins font-bold text-gold">70%</div>
                <div className="text-sm text-muted-foreground font-inter">Average Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-poppins font-bold text-gold">2.5M</div>
                <div className="text-sm text-muted-foreground font-inter">Pounds Rescued</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-poppins font-bold text-gold">156</div>
                <div className="text-sm text-muted-foreground font-inter">Cities Served</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="brass-gradient hover:shadow-lg group px-8 py-4"
                onClick={handleStartShopping}
              >
                Start Shopping
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gold text-gold hover:bg-gold/10 px-8 py-4"
                onClick={handleForRetailers}
              >
                For Retailers
              </Button>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="relative">
            <div className="grid grid-cols-1 gap-6">
              {/* Feature Card 1 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gold/20 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 brass-gradient rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-dm-sans font-semibold text-lg">Real-Time Deals</h3>
                    <p className="text-muted-foreground font-inter">Live updates on expiring items</p>
                  </div>
                </div>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gold/20 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 brass-gradient rounded-full flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-dm-sans font-semibold text-lg">Smart Pricing</h3>
                    <p className="text-muted-foreground font-inter">AI-powered discount algorithms</p>
                  </div>
                </div>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gold/20 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 brass-gradient rounded-full flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-dm-sans font-semibold text-lg">Eco Impact</h3>
                    <p className="text-muted-foreground font-inter">Track your environmental contribution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
