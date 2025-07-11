
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import Features from '@/components/Features';
import ImpactDashboard from '@/components/ImpactDashboard';
import Community from '@/components/Community';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProductGrid />
      <Features />
      <ImpactDashboard />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
