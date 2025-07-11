
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Bell, Clock, Tag, MapPin, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: 'deal',
      title: 'New Deal Alert!',
      message: 'Fresh organic bananas at 50% off near you',
      time: '2 minutes ago',
      read: false,
      icon: Tag
    },
    {
      id: 2,
      type: 'expiry',
      title: 'Expiring Soon',
      message: 'Your saved items expire in 2 hours',
      time: '1 hour ago',
      read: false,
      icon: Clock
    },
    {
      id: 3,
      type: 'location',
      title: 'New Store Nearby',
      message: 'GreenMart just joined FoodLoops in your area',
      time: '3 hours ago',
      read: true,
      icon: MapPin
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-poppins font-bold text-primary mb-4">
            Notifications
          </h1>
          <p className="text-lg text-muted-foreground font-inter">
            Stay updated with the latest deals and important alerts
          </p>
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <Card key={notification.id} className={`${!notification.read ? 'border-gold/50 bg-gold/5' : ''}`}>
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                  !notification.read ? 'bg-gold text-white' : 'bg-muted'
                }`}>
                  <notification.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <CardTitle className="font-dm-sans text-lg">{notification.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{notification.time}</p>
                </div>
                {!notification.read && (
                  <Button size="sm" variant="ghost" className="text-gold hover:text-gold/80">
                    <Check className="w-4 h-4" />
                  </Button>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-inter">{notification.message}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Notifications;
