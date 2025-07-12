import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { useChatbotActions } from '@/hooks/useChatbotActions';
import { cn } from '@/lib/utils';

interface ChatbotTriggerProps {
  message?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  children?: React.ReactNode;
  icon?: boolean;
}

export const ChatbotTrigger: React.FC<ChatbotTriggerProps> = ({
  message,
  variant = 'default',
  size = 'default',
  className,
  children,
  icon = false
}) => {
  const { openChatWithMessage, openChat } = useChatbotActions();

  const handleClick = () => {
    if (message) {
      openChatWithMessage(message);
    } else {
      openChat();
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleClick}
      className={cn("bg-green-600 hover:bg-green-700", className)}
    >
      {icon && <MessageCircle className="h-4 w-4 mr-2" />}
      {children || (message ? 'Ask AI' : 'Chat with AI')}
    </Button>
  );
};

// Pre-configured triggers for common use cases
export const ChatbotTriggers = {
  Deals: () => (
    <ChatbotTrigger message="Show me the best food deals today">
      Find Deals
    </ChatbotTrigger>
  ),
  
  Recipes: () => (
    <ChatbotTrigger message="I need recipe ideas for dinner">
      Get Recipes
    </ChatbotTrigger>
  ),
  
  Sustainability: () => (
    <ChatbotTrigger message="How can I eat more sustainably?">
      Sustainability Tips
    </ChatbotTrigger>
  ),
  
  Help: () => (
    <ChatbotTrigger message="I need help with FoodLoops">
      Get Help
    </ChatbotTrigger>
  ),
  
  QuickChat: () => (
    <ChatbotTrigger icon>
      Chat with AI
    </ChatbotTrigger>
  )
}; 