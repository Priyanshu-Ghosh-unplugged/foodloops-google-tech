
import React, { useState } from 'react';
import { MessageSquare, Users, ChefHat, Heart, Share2, BookOpen } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Community = () => {
  const [activeTab, setActiveTab] = useState('recipes');

  const recipes = [
    {
      id: 1,
      title: "Banana Bread from Overripe Bananas",
      author: "Sarah M.",
      likes: 127,
      comments: 23,
      image: "🍌",
      tags: ["Quick", "Sweet", "Beginner"],
      time: "45 min"
    },
    {
      id: 2,
      title: "Vegetable Soup Medley",
      author: "Chef Carlos",
      likes: 89,
      comments: 15,
      image: "🥕",
      tags: ["Healthy", "One-pot", "Versatile"],
      time: "30 min"
    },
    {
      id: 3,
      title: "Salmon & Herb Pasta",
      author: "Maria K.",
      likes: 156,
      comments: 31,
      image: "🐟",
      tags: ["Quick", "Protein", "Herbs"],
      time: "25 min"
    }
  ];

  const tips = [
    {
      id: 1,
      author: "EcoWarrior23",
      content: "Store herbs in water like flowers to extend their life by up to a week! 🌿",
      likes: 45,
      category: "Storage"
    },
    {
      id: 2,
      author: "ZeroWasteZoe",
      content: "Freeze overripe fruits in ice cube trays for smoothies later. No waste, all taste! 🧊",
      likes: 67,
      category: "Tips"
    },
    {
      id: 3,
      author: "SaverSam",
      content: "Check the FoodLoops app every morning for flash deals in your area - saved $50 this week!",
      likes: 23,
      category: "App Tips"
    }
  ];

  const discussions = [
    {
      id: 1,
      title: "Best ways to use leftover bread?",
      author: "BreadLover99",
      replies: 18,
      lastActive: "2h ago",
      category: "Help"
    },
    {
      id: 2,
      title: "My family reduced food waste by 80% this month!",
      author: "ProudMom",
      replies: 24,
      lastActive: "4h ago",
      category: "Success"
    },
    {
      id: 3,
      title: "Local store partnership ideas",
      author: "CommunityLeader",
      replies: 12,
      lastActive: "1d ago",
      category: "Ideas"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-green-light/10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-poppins font-bold text-primary mb-4">
            Community Hub
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Connect with fellow eco-warriors, share rescue recipes, and exchange sustainability tips 
            to maximize your food-saving impact.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-full p-1 border border-gold/20">
            <div className="flex space-x-1">
              {[
                { id: 'recipes', label: 'Rescue Recipes', icon: ChefHat },
                { id: 'tips', label: 'Tips & Tricks', icon: BookOpen },
                { id: 'discussions', label: 'Discussions', icon: MessageSquare }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-dm-sans font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'brass-gradient text-white shadow-lg'
                      : 'text-muted-foreground hover:text-gold'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Recipes Tab */}
        {activeTab === 'recipes' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map(recipe => (
              <Card key={recipe.id} className="group bg-white/90 backdrop-blur-sm border-gold/20 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="text-4xl text-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {recipe.image}
                  </div>
                  
                  <h3 className="font-dm-sans font-semibold text-primary mb-2 group-hover:text-gold transition-colors">
                    {recipe.title}
                  </h3>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <Avatar className="w-6 h-6">
                      <AvatarFallback className="text-xs bg-gold/20 text-gold">
                        {recipe.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-muted-foreground">{recipe.author}</span>
                    <span className="text-sm text-muted-foreground">• {recipe.time}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {recipe.tags.map(tag => (
                      <span key={tag} className="text-xs bg-gold/10 text-gold px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{recipe.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageSquare className="w-4 h-4" />
                        <span>{recipe.comments}</span>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" className="text-gold hover:text-gold hover:bg-gold/10">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Tips Tab */}
        {activeTab === 'tips' && (
          <div className="max-w-2xl mx-auto space-y-4">
            {tips.map(tip => (
              <Card key={tip.id} className="p-6 bg-white/90 backdrop-blur-sm border-gold/20 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-gold/20 text-gold">
                      {tip.author[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-dm-sans font-medium text-primary">{tip.author}</span>
                      <span className="text-xs bg-green/10 text-green px-2 py-1 rounded-full">
                        {tip.category}
                      </span>
                    </div>
                    <p className="text-muted-foreground font-inter mb-3">{tip.content}</p>
                    <div className="flex items-center space-x-4">
                      <Button size="sm" variant="ghost" className="text-gold hover:text-gold hover:bg-gold/10">
                        <Heart className="w-4 h-4 mr-1" />
                        {tip.likes}
                      </Button>
                      <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-gold">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Discussions Tab */}
        {activeTab === 'discussions' && (
          <div className="max-w-3xl mx-auto space-y-4">
            {discussions.map(discussion => (
              <Card key={discussion.id} className="p-6 bg-white/90 backdrop-blur-sm border-gold/20 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xs bg-gold/10 text-gold px-2 py-1 rounded-full">
                        {discussion.category}
                      </span>
                      <span className="text-sm text-muted-foreground">{discussion.lastActive}</span>
                    </div>
                    <h3 className="font-dm-sans font-semibold text-primary mb-1 hover:text-gold cursor-pointer transition-colors">
                      {discussion.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>by {discussion.author}</span>
                      <div className="flex items-center space-x-1">
                        <MessageSquare className="w-4 h-4" />
                        <span>{discussion.replies} replies</span>
                      </div>
                    </div>
                  </div>
                  <Users className="w-5 h-5 text-gold" />
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Community Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <Card className="p-6 text-center bg-white/80 backdrop-blur-sm border-gold/20">
            <div className="text-3xl font-poppins font-bold text-gold mb-2">12.5K</div>
            <div className="text-sm text-muted-foreground">Active Members</div>
          </Card>
          <Card className="p-6 text-center bg-white/80 backdrop-blur-sm border-gold/20">
            <div className="text-3xl font-poppins font-bold text-green mb-2">847</div>
            <div className="text-sm text-muted-foreground">Recipes Shared</div>
          </Card>
          <Card className="p-6 text-center bg-white/80 backdrop-blur-sm border-gold/20">
            <div className="text-3xl font-poppins font-bold text-blue-500 mb-2">2.1K</div>
            <div className="text-sm text-muted-foreground">Tips Exchanged</div>
          </Card>
          <Card className="p-6 text-center bg-white/80 backdrop-blur-sm border-gold/20">
            <div className="text-3xl font-poppins font-bold text-purple-500 mb-2">156</div>
            <div className="text-sm text-muted-foreground">Cities Connected</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Community;
