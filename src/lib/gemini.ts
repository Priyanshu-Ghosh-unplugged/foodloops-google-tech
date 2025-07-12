import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Google Generative AI with API key
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// Get the Gemini Pro model
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatSession {
  history: ChatMessage[];
  isTyping: boolean;
}

// Initialize chat session
export const initializeChat = (): ChatSession => ({
  history: [
    {
      role: 'assistant',
      content: "Hello! I'm your AI assistant for FoodLoops. I can help you with:\n\n• Finding local food deals and discounts\n• Learning about sustainable food practices\n• Discovering new recipes and meal ideas\n• Understanding food waste reduction\n• Connecting with local food communities\n\nHow can I help you today?",
      timestamp: new Date()
    }
  ],
  isTyping: false
});

// Send message to Gemini and get response
export const sendMessage = async (
  message: string,
  chatHistory: ChatMessage[]
): Promise<string> => {
  try {
    // Create chat session with history
    const chat = model.startChat({
      history: chatHistory.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.content }]
      }))
    });

    // Send the message
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return text;
  } catch (error) {
    console.error('Error sending message to Gemini:', error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again later.";
  }
};

// Generate a quick response for common queries
export const getQuickResponse = (query: string): string | null => {
  const lowerQuery = query.toLowerCase();
  
  if (lowerQuery.includes('hello') || lowerQuery.includes('hi')) {
    return "Hello! How can I help you with food deals and sustainable eating today?";
  }
  
  if (lowerQuery.includes('deals') || lowerQuery.includes('discount')) {
    return "I can help you find great food deals! Check out our Deals page for current offers, or tell me what type of food you're looking for.";
  }
  
  if (lowerQuery.includes('recipe') || lowerQuery.includes('cook')) {
    return "I'd love to help you with recipes! What ingredients do you have on hand, or what type of dish are you looking to make?";
  }
  
  if (lowerQuery.includes('sustainable') || lowerQuery.includes('eco')) {
    return "Great question! Sustainable eating includes buying local, reducing food waste, and choosing seasonal produce. Would you like tips on any of these topics?";
  }
  
  return null;
}; 