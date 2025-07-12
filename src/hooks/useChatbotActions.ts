import { useChatbot } from '@/contexts/ChatbotContext';
import { ChatMessage } from '@/lib/gemini';

export const useChatbotActions = () => {
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

  // Helper function to send a message programmatically
  const sendMessage = (content: string) => {
    const message: ChatMessage = {
      role: 'user',
      content,
      timestamp: new Date()
    };
    
    addMessage(message);
    incrementMessageCount();
  };

  // Helper function to open chat with a specific message
  const openChatWithMessage = (message: string) => {
    openChat();
    // Small delay to ensure chat is open before sending message
    setTimeout(() => {
      sendMessage(message);
    }, 100);
  };

  // Helper function to suggest common queries
  const suggestQuery = (query: string) => {
    openChatWithMessage(query);
  };

  return {
    // State
    isOpen: state.isOpen,
    isLoading: state.isLoading,
    error: state.error,
    messageCount: state.messageCount,
    
    // Actions
    openChat,
    closeChat,
    sendMessage,
    openChatWithMessage,
    suggestQuery,
    resetChat,
    
    // Direct actions
    addMessage,
    setTyping,
    setLoading,
    setError,
    incrementMessageCount
  };
}; 