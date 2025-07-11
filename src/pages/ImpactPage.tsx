
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImpactDashboard from '@/components/ImpactDashboard';

const ImpactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4 mb-8">
          <h1 className="text-4xl font-poppins font-bold text-primary mb-4">
            Your Impact Dashboard
          </h1>
          <p className="text-lg text-muted-foreground font-inter">
            Track your contribution to reducing food waste and environmental impact
          </p>
        </div>
        <ImpactDashboard />
      </main>
      <Footer />
    </div>
  );
};

export default ImpactPage;
