# Google Gemini AI Chatbot Integration

This guide will help you set up the Google Gemini AI-powered chatbot for your FoodLoops web application.

## Prerequisites

1. A Google Cloud account
2. Access to Google AI Studio or Google Cloud Console
3. Node.js and npm installed

## Setup Instructions

### 1. Get Your Google Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key" to generate a new API key
4. Copy the API key (it will look like: `AIzaSyC...`)

### 2. Configure Environment Variables

1. Create a `.env` file in your project root (if it doesn't exist)
2. Add your Gemini API key:

```env
# Google Gemini AI API Key
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

**Important:** Replace `your_actual_api_key_here` with the API key you obtained from Google AI Studio.

### 3. Install Dependencies

The Google AI SDK has already been installed. If you need to reinstall:

```bash
npm install @google/generative-ai
```

### 4. Start the Development Server

```bash
npm run dev
```

## Features

The chatbot includes the following features:

- **Floating Chat Interface**: A chat button in the bottom-right corner of every page
- **Real-time AI Responses**: Powered by Google's Gemini Pro model
- **Chat History**: Messages are persisted in localStorage for the current session
- **Quick Responses**: Pre-defined responses for common queries (hello, deals, recipes, sustainability)
- **Typing Indicators**: Visual feedback when the AI is processing
- **Error Handling**: Graceful error handling for API failures
- **Responsive Design**: Works on desktop and mobile devices

## Usage

1. Click the chat button (message circle icon) in the bottom-right corner
2. Type your message and press Enter or click the send button
3. The AI will respond with helpful information about:
   - Food deals and discounts
   - Recipes and cooking tips
   - Sustainable eating practices
   - Food waste reduction
   - Local food communities

## Customization

### Modifying Quick Responses

Edit the `getQuickResponse` function in `src/lib/gemini.ts` to add or modify quick responses for common queries.

### Changing the AI Personality

Modify the initial greeting message in the `initializeChat` function in `src/lib/gemini.ts`.

### Styling

The chatbot uses Tailwind CSS classes. You can customize the appearance by modifying the classes in `src/components/Chatbot.tsx`.

## API Limits and Costs

- Google Gemini API has rate limits and usage quotas
- Check [Google AI Studio pricing](https://ai.google.dev/pricing) for current rates
- Monitor your usage in the Google Cloud Console

## Troubleshooting

### Common Issues

1. **"API key not found" error**
   - Ensure your `.env` file is in the project root
   - Verify the API key is correctly set
   - Restart the development server after adding the API key

2. **"Network error" or "Failed to send message"**
   - Check your internet connection
   - Verify your API key is valid
   - Check if you've exceeded API quotas

3. **Chat not appearing**
   - Ensure the Chatbot component is properly imported in `App.tsx`
   - Check browser console for any JavaScript errors

### Debug Mode

To enable debug logging, add this to your `.env` file:

```env
VITE_DEBUG=true
```

## Security Notes

- Never commit your API key to version control
- The API key is exposed to the client-side (required for Vite)
- Consider implementing a backend proxy for production use
- Monitor API usage to prevent abuse

## Production Deployment

For production deployment:

1. Set up environment variables in your hosting platform
2. Consider implementing rate limiting
3. Add monitoring for API usage
4. Test thoroughly before going live

## Support

If you encounter issues:

1. Check the browser console for error messages
2. Verify your API key is working in Google AI Studio
3. Check the Google AI documentation for API updates
4. Review the troubleshooting section above 