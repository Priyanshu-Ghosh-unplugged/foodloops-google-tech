
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Store, TrendingUp, Users, Clock, Shield, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Sellers = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Recover Revenue",
      description: "Turn near-expiry inventory into profit instead of loss"
    },
    {
      icon: TrendingUp,
      title: "Boost Sales",
      description: "Reach new customers actively looking for deals"
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Help reduce food waste in your community"
    },
    {
      icon: Clock,
      title: "Quick Setup",
      description: "List products in minutes with our easy interface"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Fast, secure transactions with instant payouts"
    },
    {
      icon: Store,
      title: "Brand Visibility",
      description: "Showcase your store to eco-conscious shoppers"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-poppins font-bold text-primary mb-6">
            Partner with FoodLoops
          </h1>
          <p className="text-xl text-muted-foreground font-inter mb-8 max-w-3xl mx-auto">
            Transform your near-expiry inventory into profit while making a positive environmental impact. 
            Join thousands of retailers reducing food waste and increasing revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="brass-gradient hover:shadow-lg px-8">
              Start Selling Today
            </Button>
            <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10">
              Learn More
            </Button>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-poppins font-bold text-center mb-8">
            Why Choose FoodLoops?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 brass-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="font-dm-sans">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-inter">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gold/10 to-gold-dark/10 rounded-lg p-8 text-center">
          <h3 className="text-3xl font-poppins font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Join our platform and start converting waste into profit today
          </p>
          <Button size="lg" className="brass-gradient hover:shadow-lg px-8">
            Register as Seller
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sellers;
