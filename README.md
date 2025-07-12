# 🍔 FoodLoops - Reduce Waste, Share Abundance

FoodLoops is a dynamic web application designed to combat food waste by connecting sellers of surplus food with conscientious buyers. Leveraging a dynamic pricing model, prices for items decrease as their expiration dates approach, ensuring that food gets sold rather than discarded.

## 🌐 Live Demo

**Visit the live application:** [https://foodloops-google-tech.vercel.app/](https://foodloops-google-tech.vercel.app/)

Experience the full FoodLoops platform with all features including the AI-powered chatbot, dynamic pricing, and community features.

## ✨ Key Features

- **Dynamic Pricing**: An intelligent algorithm automatically reduces item prices as they near their expiration date, maximizing the chance of a sale.
- **Dual User Roles**: Caters to both Buyers looking for great deals and Sellers (restaurants, bakeries, etc.) wanting to reduce surplus inventory.
- **Eco-Dashboard**: A personalized dashboard for users to track their positive environmental impact, including money saved, CO₂ emissions reduced, and water conserved.
- **Community Hub**: A social space for users to connect, share recipes, and exchange food-saving tips.
- **Web3 Integration**: Secure, decentralized authentication using Civic Pass and blockchain integration for future rewards and transactions.
- **Comprehensive Backend**: A robust Node.js/Express server to manage users, products, and orders.
- **AI-Powered Chatbot**: Google Gemini-powered chatbot to help users with food deals, recipes, and sustainability tips.

## 🛠️ Tech Stack

### Frontend
- **React** with **Vite** and **TypeScript**
- **Tailwind CSS** with **Shadcn/UI** components
- **TanStack Query** for state management
- **Google Gemini AI** for intelligent chatbot

### Backend
- **Node.js** with **Express** framework
- **MongoDB** with **Mongoose** ODM
- **Firebase** for authentication and real-time features


## 🚀 Getting Started

Follow these instructions to get the FoodLoops application running on your local machine.

### Prerequisites

- Node.js (v18 or later)
- npm
- MongoDB installed and running
- Google Gemini API key

### 1. Clone the Repository

```bash
git clone https://github.com/Priyanshu-Ghosh-unplugged/foodloops-google-tech
cd foodloops-google-tech
```

### 2. Set Up Environment Variables

The project uses environment variables for configuration. Create a `.env` file in the root of the project and add the following:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY="your_firebase_api_key"
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id

# Google Gemini AI API Key
VITE_GEMINI_API_KEY=your_gemini_api_key_here

```

The server also requires environment variables. Create a `.env` file in the `server/` directory:

```env
# Your MongoDB connection string
MONGODB_URI=mongodb://localhost:27017/foodloops

# A secret for signing JWTs (optional for local dev)
JWT_SECRET=your-jwt-secret
```

### 3. Install Dependencies

This project is a monorepo-style setup with separate dependencies for the root (frontend) and the server (backend).

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

### 4. Run the Application

To run both the frontend and backend servers concurrently, use the dev:full script from the root directory.

```bash
npm run dev:full
```

This will:
- Start the Vite frontend development server on `http://localhost:5173` (or the next available port).
- Start the Express backend server on `http://localhost:3001`.


## Troubleshooting

### Common Issues

- **Gemini AI**: Verify API key and check console for errors


## 📜 Available Scripts

### Root (package.json)

- `dev`: Starts the Vite frontend server.
- `build`: Builds the frontend for production.
- `build:dev`: Builds the frontend in development mode.
- `lint`: Lints the codebase.
- `server`: Starts the backend server directly.
- `dev:full`: Starts both frontend and backend servers concurrently.

### Server (server/package.json)

- `dev`: Starts the backend server with nodemon for auto-reloading.
- `start`: Starts the backend server.
- `seed`: Seeds the database with initial data.
- `update-prices`: Runs the script to update product prices based on the dynamic pricing model.

## 🤖 AI Chatbot Features

The integrated Google Gemini-powered chatbot provides:

- **Smart Food Recommendations**: Get personalized food deals and suggestions
- **Recipe Assistance**: Find recipes based on available ingredients
- **Sustainability Tips**: Learn about reducing food waste and eco-friendly practices
- **Quick Responses**: Instant answers to common queries
- **Contextual Conversations**: Maintains conversation history for better interactions

### Chatbot Setup

1. Get your Google Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Add the API key to your `.env` file
3. The chatbot will appear as a floating button on all pages
4. Click to start chatting with the AI assistant

## 🌟 Contributing

We welcome contributions! Please see our contributing guidelines for more details.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Google Gemini AI for intelligent chatbot capabilities
- The open-source community for amazing tools and libraries
