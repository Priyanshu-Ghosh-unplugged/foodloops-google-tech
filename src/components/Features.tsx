
import React from 'react';
import { Brain, Leaf, Users, BarChart3, Globe, Store, Zap, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Recommendations",
      description: "Machine learning algorithms analyze your preferences and shopping patterns to suggest the perfect deals tailored just for you.",
      color: "bg-purple-500"
    },
    {
      icon: Zap,
      title: "Dynamic Pricing Algorithm",
      description: "Real-time price adjustments based on expiry dates, demand patterns, and inventory levels ensure optimal savings for everyone.",
      color: "bg-gold"
    },
    {
      icon: Leaf,
      title: "Eco-Score Tracking",
      description: "Monitor your environmental impact with detailed metrics showing how much food waste you've prevented and CO2 emissions saved.",
      color: "bg-green"
    },
    {
      icon: BarChart3,
      title: "Impact Dashboard",
      description: "Comprehensive analytics showing your savings, environmental contribution, and community impact over time.",
      color: "bg-blue-500"
    },
    {
      icon: Users,
      title: "Community Hub",
      description: "Connect with fellow eco-warriors, share recipes for rescued ingredients, and exchange sustainability tips.",
      color: "bg-orange-500"
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Available in multiple languages to make sustainable shopping accessible to diverse communities worldwide.",
      color: "bg-indigo-500"
    },
    {
      icon: Store,
      title: "Retailer Dashboard",
      description: "Easy-to-use interface for stores to list products, manage inventory, and track their waste reduction metrics.",
      color: "bg-pink-500"
    },
    {
      icon: Target,
      title: "Personalized Deals",
      description: "Smart notifications and curated deal collections based on your location, preferences, and shopping history.",
      color: "bg-teal-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-green-light/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-primary mb-6">
            Why Choose FoodLoops?
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
            Our comprehensive platform combines cutting-edge technology with community-driven sustainability 
            to create the ultimate food rescue marketplace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group p-6 bg-white/90 backdrop-blur-sm border-gold/20 hover:shadow-xl hover:shadow-gold/10 transition-all duration-500 transform hover:scale-105"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="font-dm-sans font-semibold text-primary mb-3 group-hover:text-gold transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-poppins font-bold text-primary mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-lg text-muted-foreground font-inter mb-6">
              Join thousands of users who are already saving money and saving the planet with FoodLoops.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="brass-gradient text-white font-dm-sans font-semibold px-8 py-4 rounded-full glow-hover transition-all duration-300">
                Start Shopping Now
              </button>
              <button className="border-2 border-gold text-gold hover:bg-gold hover:text-white font-dm-sans font-semibold px-8 py-4 rounded-full transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
