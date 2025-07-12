# FoodLoops - React + Firebase E-commerce App

A modern e-commerce application built with React, TypeScript, and Firebase backend.

## 🚀 Quick Start

### Prerequisites
- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- A Google account (for Firebase setup)

### Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Priyanshu-Ghosh-unplugged/foodloops-google-tech/edit/main/README.md
   cd foodloops-google-tech
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Firebase backend** (required):
   - Follow the detailed setup guide in [`FIREBASE_SETUP.md`](./FIREBASE_SETUP.md)
   - Create a Firebase project and get your configuration
   - Create `.env.local` file with your Firebase credentials

4. **Start the development server**:
   ```bash
   npm run dev
   ```

## 🔧 Environment Setup

**⚠️ IMPORTANT**: You must set up Firebase before running the app.

1. **Create `.env.local` file** in the project root:
   ```bash
   # Windows (PowerShell)
   New-Item -Path ".env.local" -ItemType File
   
   # macOS/Linux
   touch .env.local
   ```

2. **Add your Firebase configuration**:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key_here
   VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

3. **Get Firebase configuration values**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select existing one
   - Add a web app to your project
   - Copy the configuration values

For detailed Firebase setup instructions, see [`FIREBASE_SETUP.md`](./FIREBASE_SETUP.md).

## Project info

**URL**: https://lovable.dev/projects/1fb6561c-a802-477c-b339-3e1f5c8d5c1f

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/1fb6561c-a802-477c-b339-3e1f5c8d5c1f) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
