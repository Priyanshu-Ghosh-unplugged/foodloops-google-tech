import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { ChatMessage, ChatSession, initializeChat } from '@/lib/gemini';

interface ChatbotState {
  isOpen: boolean;
  chatSession: ChatSession;
  isLoading: boolean;
  error: string | null;
  messageCount: number;
}

type ChatbotAction =
  | { type: 'OPEN_CHAT' }
  | { type: 'CLOSE_CHAT' }
  | { type: 'ADD_MESSAGE'; message: ChatMessage }
  | { type: 'SET_TYPING'; isTyping: boolean }
  | { type: 'SET_LOADING'; isLoading: boolean }
  | { type: 'SET_ERROR'; error: string | null }
  | { type: 'RESET_CHAT' }
  | { type: 'INCREMENT_MESSAGE_COUNT' };

const initialState: ChatbotState = {
  isOpen: false,
  chatSession: initializeChat(),
  isLoading: false,
  error: null,
  messageCount: 0,
};

function chatbotReducer(state: ChatbotState, action: ChatbotAction): ChatbotState {
  switch (action.type) {
    case 'OPEN_CHAT':
      return { ...state, isOpen: true };
    case 'CLOSE_CHAT':
      return { ...state, isOpen: false };
    case 'ADD_MESSAGE':
      return {
        ...state,
        chatSession: {
          ...state.chatSession,
          history: [...state.chatSession.history, action.message],
        },
      };
    case 'SET_TYPING':
      return {
        ...state,
        chatSession: {
          ...state.chatSession,
          isTyping: action.isTyping,
        },
      };
    case 'SET_LOADING':
      return { ...state, isLoading: action.isLoading };
    case 'SET_ERROR':
      return { ...state, error: action.error };
    case 'RESET_CHAT':
      return {
        ...state,
        chatSession: initializeChat(),
        error: null,
      };
    case 'INCREMENT_MESSAGE_COUNT':
      return { ...state, messageCount: state.messageCount + 1 };
    default:
      return state;
  }
}

interface ChatbotContextType {
  state: ChatbotState;
  openChat: () => void;
  closeChat: () => void;
  addMessage: (message: ChatMessage) => void;
  setTyping: (isTyping: boolean) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  resetChat: () => void;
  incrementMessageCount: () => void;
}

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined);

export const ChatbotProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(chatbotReducer, initialState);

  // Load chat history from localStorage on mount
  useEffect(() => {
    const savedChat = localStorage.getItem('foodloops-chat-history');
    if (savedChat) {
      try {
        const parsedChat = JSON.parse(savedChat);
        // Only restore if it's from today
        const today = new Date().toDateString();
        const chatDate = new Date(parsedChat.date).toDateString();
        
        if (chatDate === today && parsedChat.history) {
          dispatch({
            type: 'ADD_MESSAGE',
            message: {
              role: 'assistant',
              content: "Welcome back! I remember our conversation from earlier today.",
              timestamp: new Date()
            }
          });
        }
      } catch (error) {
        console.error('Error loading chat history:', error);
      }
    }
  }, []);

  // Save chat history to localStorage when it changes
  useEffect(() => {
    if (state.chatSession.history.length > 1) {
      localStorage.setItem('foodloops-chat-history', JSON.stringify({
        history: state.chatSession.history,
        date: new Date().toISOString(),
      }));
    }
  }, [state.chatSession.history]);

  const openChat = () => dispatch({ type: 'OPEN_CHAT' });
  const closeChat = () => dispatch({ type: 'CLOSE_CHAT' });
  const addMessage = (message: ChatMessage) => dispatch({ type: 'ADD_MESSAGE', message });
  const setTyping = (isTyping: boolean) => dispatch({ type: 'SET_TYPING', isTyping });
  const setLoading = (isLoading: boolean) => dispatch({ type: 'SET_LOADING', isLoading });
  const setError = (error: string | null) => dispatch({ type: 'SET_ERROR', error });
  const resetChat = () => dispatch({ type: 'RESET_CHAT' });
  const incrementMessageCount = () => dispatch({ type: 'INCREMENT_MESSAGE_COUNT' });

  const value: ChatbotContextType = {
    state,
    openChat,
    closeChat,
    addMessage,
    setTyping,
    setLoading,
    setError,
    resetChat,
    incrementMessageCount,
  };

  return (
    <ChatbotContext.Provider value={value}>
      {children}
    </ChatbotContext.Provider>
  );
};

export const useChatbot = () => {
  const context = useContext(ChatbotContext);
  if (context === undefined) {
    throw new Error('useChatbot must be used within a ChatbotProvider');
  }
  return context;
}; 