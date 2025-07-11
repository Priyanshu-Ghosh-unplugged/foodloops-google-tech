
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Home, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="p-8">
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                <CheckCircle className="w-24 h-24 text-green-500" />
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl font-poppins font-bold text-primary">
                  Payment Successful!
                </h1>
                <p className="text-xl text-muted-foreground font-inter">
                  Thank you for your order. Your payment has been processed successfully.
                </p>
              </div>

              <div className="bg-green/5 border border-green/20 rounded-lg p-6 space-y-2">
                <h3 className="font-dm-sans font-semibold text-green">Order Confirmation</h3>
                <p className="text-sm text-muted-foreground">
                  Order ID: #FL{Math.random().toString(36).substr(2, 9).toUpperCase()}
                </p>
                <p className="text-sm text-muted-foreground">
                  You will receive an email confirmation shortly.
                </p>
                <p className="text-sm text-muted-foreground">
                  Estimated delivery: Within 2-4 hours
                </p>
              </div>

              <div className="bg-gold/5 border border-gold/20 rounded-lg p-6">
                <h3 className="font-dm-sans font-semibold text-gold mb-2">
                  🌱 Environmental Impact
                </h3>
                <p className="text-sm text-muted-foreground">
                  By purchasing near-expiry items, you've helped reduce food waste and contributed to a more sustainable future!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => navigate('/')}
                  className="brass-gradient hover:shadow-lg"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
                <Button 
                  onClick={() => navigate('/deals')}
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-white"
                >
                  <Package className="w-4 h-4 mr-2" />
                  Continue Shopping
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentSuccess;
