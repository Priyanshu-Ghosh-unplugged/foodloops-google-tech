
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Community from '@/components/Community';

const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4 mb-8">
          <h1 className="text-4xl font-poppins font-bold text-primary mb-4">
            FoodLoops Community
          </h1>
          <p className="text-lg text-muted-foreground font-inter">
            Connect with fellow food savers, share recipes, and make a difference together
          </p>
        </div>
        <Community />
      </main>
      <Footer />
    </div>
  );
};

export default CommunityPage;
