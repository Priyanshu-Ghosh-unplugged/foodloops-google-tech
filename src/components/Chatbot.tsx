import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, X, Send, Bot, User, Loader2, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  ChatMessage, 
  sendMessage, 
  getQuickResponse 
} from '@/lib/gemini';
import { useChatbot } from '@/contexts/ChatbotContext';

interface ChatbotProps {
  className?: string;
}

export const Chatbot: React.FC<ChatbotProps> = ({ className }) => {
  const { 
    state, 
    openChat, 
    closeChat, 
    addMessage, 
    setTyping, 
    setLoading, 
    setError, 
    resetChat, 
    incrementMessageCount 
  } = useChatbot();
  
  const [inputMessage, setInputMessage] = useState('');
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [state.chatSession.history]);

  // Focus input when chat opens
  useEffect(() => {
    if (state.isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [state.isOpen]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || state.isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: inputMessage.trim(),
      timestamp: new Date()
    };

    // Add user message to chat
    addMessage(userMessage);
    setTyping(true);
    incrementMessageCount();

    setInputMessage('');
    setLoading(true);

    try {
      // Check for quick response first
      const quickResponse = getQuickResponse(userMessage.content);
      
      if (quickResponse) {
        // Add quick response
        const assistantMessage: ChatMessage = {
          role: 'assistant',
          content: quickResponse,
          timestamp: new Date()
        };
        
        addMessage(assistantMessage);
        setTyping(false);
      } else {
        // Send to Gemini API
        const response = await sendMessage(userMessage.content, state.chatSession.history);
        
        const assistantMessage: ChatMessage = {
          role: 'assistant',
          content: response,
          timestamp: new Date()
        };
        
        addMessage(assistantMessage);
        setTyping(false);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setError('Failed to send message. Please try again.');
      
      const errorMessage: ChatMessage = {
        role: 'assistant',
        content: "I'm sorry, I encountered an error. Please try again.",
        timestamp: new Date()
      };
      
      addMessage(errorMessage);
      setTyping(false);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleEndChat = () => {
    closeChat();
  };

  return (
    <>
      {/* Chat Toggle Button */}
      {!state.isOpen && (
        <div className={cn("fixed bottom-6 right-6 z-50", className)}>
          <Button
            onClick={openChat}
            size="lg"
            className="h-14 w-14 rounded-full brass-gradient hover:shadow-lg shadow-lg glow-hover"
          >
            <MessageCircle className="h-6 w-6 text-white" />
          </Button>
        </div>
      )}

      {/* Chat Window */}
      {state.isOpen && (
        <div className={cn("fixed inset-0 z-50 flex items-start justify-end p-4", className)}>
          <div className="absolute inset-0 bg-black/20" onClick={closeChat} />
                    <Card className="relative w-full max-w-md h-[600px] shadow-2xl border-0 bg-white/95 backdrop-blur-sm border border-gold/20">
            <CardHeader className="pb-3 brass-gradient text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                <CardTitle className="text-lg">FoodLoops AI</CardTitle>
                <Badge variant="secondary" className="text-xs bg-white/20">
                  Beta
                </Badge>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleEndChat}
                  className="text-white hover:bg-white/20 h-8 w-8 p-0"
                  title="End chat"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0 h-full flex flex-col">
            {/* Messages Area */}
            <ScrollArea 
              ref={scrollAreaRef}
              className="flex-1 p-4 space-y-4"
            >
              {state.chatSession.history.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex gap-3",
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  {message.role === 'assistant' && (
                    <div className="flex-shrink-0 w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                      <Bot className="h-4 w-4 text-gold" />
                    </div>
                  )}
                  
                  <div
                    className={cn(
                      "max-w-[80%] rounded-lg px-3 py-2 text-sm",
                      message.role === 'user'
                        ? 'brass-gradient text-white'
                        : 'bg-gray-100 text-gray-900'
                    )}
                  >
                    <div className="whitespace-pre-wrap">{message.content}</div>
                    <div className={cn(
                      "text-xs mt-1",
                      message.role === 'user' ? 'text-gold/80' : 'text-gray-500'
                    )}>
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                  </div>

                  {message.role === 'user' && (
                    <div className="flex-shrink-0 w-8 h-8 brass-gradient rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {state.chatSession.isTyping && (
                <div className="flex gap-3 justify-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                    <Bot className="h-4 w-4 text-gold" />
                  </div>
                  <div className="bg-gray-100 rounded-lg px-3 py-2">
                    <div className="flex items-center gap-1">
                      <Loader2 className="h-4 w-4 animate-spin text-gold" />
                      <span className="text-sm text-gray-600">AI is typing...</span>
                    </div>
                  </div>
                </div>
              )}
            </ScrollArea>

            {/* Input Area */}
            <div className="p-4 border-t bg-gray-50">
              <div className="flex gap-2">
                <Input
                  ref={inputRef}
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about food deals, recipes, or sustainability..."
                  className="flex-1"
                  disabled={state.isLoading}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || state.isLoading}
                  size="icon"
                  className="brass-gradient hover:shadow-lg"
                >
                  {state.isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>
      )}
    </>
  );
}; 