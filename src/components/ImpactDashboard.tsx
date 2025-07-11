
import React from 'react';
import { Leaf, TrendingUp, Award, Users, Calendar, DollarSign } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const ImpactDashboard = () => {
  const impactStats = [
    {
      icon: Leaf,
      title: "Food Saved",
      value: "247 lbs",
      change: "+23%",
      color: "text-green",
      bgColor: "bg-green/10"
    },
    {
      icon: DollarSign,
      title: "Money Saved",
      value: "$1,847",
      change: "+18%",
      color: "text-gold",
      bgColor: "bg-gold/10"
    },
    {
      icon: TrendingUp,
      title: "CO2 Prevented",
      value: "456 kg",
      change: "+31%",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Users,
      title: "Community Rank",
      value: "#127",
      change: "↑15",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    }
  ];

  const monthlyGoals = [
    { label: "Food Rescue Goal", current: 85, target: 100, unit: "lbs" },
    { label: "Savings Target", current: 67, target: 100, unit: "$" },
    { label: "Eco Impact", current: 92, target: 100, unit: "points" }
  ];

  const achievements = [
    { title: "Food Warrior", description: "Saved 100+ lbs of food", icon: "🏆", earned: true },
    { title: "Eco Champion", description: "Prevented 200kg+ CO2", icon: "🌱", earned: true },
    { title: "Community Leader", description: "Top 10% in your area", icon: "⭐", earned: false },
    { title: "Savings Master", description: "Saved $1000+ this year", icon: "💰", earned: true }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-green-light/30 to-gold/10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-poppins font-bold text-primary mb-4">
            Your Impact Dashboard
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Track your positive environmental impact and see how you're making a difference in the fight against food waste.
          </p>
        </div>

        {/* Impact Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {impactStats.map((stat, index) => (
            <Card key={index} className="p-6 bg-white/90 backdrop-blur-sm border-gold/20 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className={`text-sm font-medium ${stat.color} bg-current/10 px-2 py-1 rounded-full`}>
                  {stat.change}
                </div>
              </div>
              <div className="text-3xl font-poppins font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-inter">
                {stat.title}
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Monthly Goals */}
          <Card className="p-6 bg-white/90 backdrop-blur-sm border-gold/20">
            <div className="flex items-center space-x-2 mb-6">
              <Calendar className="w-5 h-5 text-gold" />
              <h3 className="text-xl font-dm-sans font-semibold text-primary">Monthly Goals</h3>
            </div>
            
            <div className="space-y-6">
              {monthlyGoals.map((goal, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-inter font-medium text-primary">{goal.label}</span>
                    <span className="text-sm text-muted-foreground">
                      {goal.current}/{goal.target} {goal.unit}
                    </span>
                  </div>
                  <Progress 
                    value={goal.current} 
                    className="h-3"
                  />
                </div>
              ))}
            </div>
          </Card>

          {/* Achievements */}
          <Card className="p-6 bg-white/90 backdrop-blur-sm border-gold/20">
            <div className="flex items-center space-x-2 mb-6">
              <Award className="w-5 h-5 text-gold" />
              <h3 className="text-xl font-dm-sans font-semibold text-primary">Achievements</h3>
            </div>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className={`flex items-center space-x-4 p-3 rounded-lg transition-colors ${
                    achievement.earned 
                      ? 'bg-gold/10 border border-gold/20' 
                      : 'bg-gray-50 opacity-60'
                  }`}
                >
                  <div className="text-2xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <div className={`font-dm-sans font-medium ${achievement.earned ? 'text-primary' : 'text-muted-foreground'}`}>
                      {achievement.title}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {achievement.description}
                    </div>
                  </div>
                  {achievement.earned && (
                    <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Global Impact */}
        <Card className="mt-8 p-8 bg-gradient-to-r from-green/10 to-gold/10 border-gold/20">
          <div className="text-center">
            <h3 className="text-2xl font-poppins font-bold text-primary mb-4">
              Together We've Achieved
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-poppins font-bold text-green mb-2">2.5M lbs</div>
                <div className="text-muted-foreground font-inter">Food Rescued Globally</div>
              </div>
              <div>
                <div className="text-4xl font-poppins font-bold text-gold mb-2">$18M</div>
                <div className="text-muted-foreground font-inter">Community Savings</div>
              </div>
              <div>
                <div className="text-4xl font-poppins font-bold text-blue-500 mb-2">4.8M kg</div>
                <div className="text-muted-foreground font-inter">CO2 Emissions Prevented</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ImpactDashboard;
