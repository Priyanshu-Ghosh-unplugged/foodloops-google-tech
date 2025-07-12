# Firebase Backend Setup Guide

This guide will help you set up Google Firebase as the backend for your React application.

## 🚨 Quick Start for Cloned Projects

If you've just cloned this repository and want to get started quickly:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Create your `.env.local` file** (see Step 3 below for detailed instructions):
   ```bash
   # Windows (PowerShell)
   New-Item -Path ".env.local" -ItemType File
   
   # macOS/Linux
   touch .env.local
   ```

3. **Add your Firebase configuration** to `.env.local`:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key_here
   VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

4. **Follow Steps 1-2** below to create a Firebase project and get your configuration values.

5. **Skip to Step 6** to test your setup.

## Prerequisites

- A Google account
- Node.js and npm installed
- Your React application ready

## Step 1: Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter a project name (e.g., "foodloops-app")
4. Choose whether to enable Google Analytics (recommended)
5. Click "Create project"

## Step 2: Register Your Web App

1. In your Firebase project console, click the web icon (</>) to add a web app
2. Enter an app nickname (e.g., "foodloops-web")
3. Choose whether to set up Firebase Hosting (optional for now)
4. Click "Register app"
5. Copy the Firebase configuration object that appears

## Step 3: Configure Environment Variables

### For New Projects (Setting up Firebase for the first time):

1. Copy the `env.example` file to `.env.local`:
   ```bash
   cp env.example .env.local
   ```

2. Replace the placeholder values in `.env.local` with your actual Firebase configuration:
   ```env
   VITE_FIREBASE_API_KEY=your_actual_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

### For Cloned Projects (If you're cloning this repository):

**⚠️ IMPORTANT**: The `.env.local` file is not included in the repository for security reasons. You must create it manually.

1. **Create the `.env.local` file** in the project root directory:
   ```bash
   # On Windows (PowerShell)
   New-Item -Path ".env.local" -ItemType File
   
   # On macOS/Linux
   touch .env.local
   ```

2. **Add your Firebase configuration** to the `.env.local` file:
   ```env
   VITE_FIREBASE_API_KEY=your_actual_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

3. **Get your Firebase configuration values**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Select your project (or create a new one following Step 1)
   - Click the gear icon ⚙️ next to "Project Overview" → "Project settings"
   - Scroll down to "Your apps" section
   - If you don't have a web app, click the web icon (</>) to add one
   - Copy the configuration values from the provided config object

4. **Example of a complete `.env.local` file**:
   ```env
   VITE_FIREBASE_API_KEY=AIzaSyC_1234567890abcdefghijklmnopqrstuvwxyz
   VITE_FIREBASE_AUTH_DOMAIN=my-foodloops-app.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=my-foodloops-app
   VITE_FIREBASE_STORAGE_BUCKET=my-foodloops-app.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=123456789012
   VITE_FIREBASE_APP_ID=1:123456789012:web:abcdef1234567890
   VITE_FIREBASE_MEASUREMENT_ID=G-ABCDEF1234
   ```

**Note**: Never commit your `.env.local` file to version control. It's already included in `.gitignore` to prevent accidental commits.

## Step 4: Enable Firebase Services

### Authentication
1. In Firebase Console, go to "Authentication" → "Sign-in method"
2. Enable "Email/Password" authentication
3. Enable "Google" authentication
4. For Google auth, add your domain to authorized domains

### Firestore Database
1. Go to "Firestore Database" → "Create database"
2. Choose "Start in test mode" (for development)
3. Select a location for your database
4. Click "Done"

### Storage
1. Go to "Storage" → "Get started"
2. Choose "Start in test mode" (for development)
3. Select a location for your storage
4. Click "Done"

## Step 5: Set Up Security Rules

### Firestore Security Rules
Go to Firestore Database → Rules and update with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read/write their own profile
    match /userProfiles/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Anyone can read products
    match /products/{productId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Users can read/write their own orders
    match /orders/{orderId} {
      allow read, write: if request.auth != null && 
        request.auth.uid == resource.data.userId;
    }
  }
}
```

### Storage Security Rules
Go to Storage → Rules and update with:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Users can upload their own avatars
    match /avatars/{userId}/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Anyone can read product images
    match /products/{productId}/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## Step 6: Test Your Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to your app and try to:
   - Sign up with email/password
   - Sign in with Google
   - Create a user profile
   - Upload an image

## Available Features

### Authentication
- Email/password sign up and sign in
- Google OAuth sign in
- Password reset
- User session management

### Database Operations
- Create, read, update, delete documents
- Query documents with filters
- Real-time data synchronization (can be added)

### File Storage
- Upload product images
- Upload user avatars
- File management (delete, list)

### Data Models
- **Products**: name, description, price, image, category, seller
- **Orders**: user, products, total, status, shipping address
- **User Profiles**: email, name, phone, address

## Usage Examples

### Authentication
```typescript
import { useAuth } from '@/contexts/AuthContext';

const { currentUser, signIn, signUp, signOutUser } = useAuth();

// Sign in
await signIn('user@example.com', 'password');

// Sign up
await signUp('user@example.com', 'password');

// Sign out
await signOutUser();
```

### Database Operations
```typescript
import { getProducts, createOrder, getUserProfile } from '@/lib/firestore';

// Get all products
const products = await getProducts();

// Create an order
const orderId = await createOrder({
  userId: 'user123',
  products: [{ productId: 'prod1', quantity: 2, price: 10.99 }],
  totalAmount: 21.98,
  status: 'pending',
  shippingAddress: { /* address details */ }
});

// Get user profile
const profile = await getUserProfile('user123');
```

### File Upload
```typescript
import { uploadProductImage, uploadUserAvatar } from '@/lib/storage';

// Upload product image
const imageUrl = await uploadProductImage(file, 'product123');

// Upload user avatar
const avatarUrl = await uploadUserAvatar(file, 'user123');
```

## Next Steps

1. **Add Real-time Listeners**: Use `onSnapshot` for real-time updates
2. **Implement Offline Support**: Enable Firestore offline persistence
3. **Add Push Notifications**: Integrate Firebase Cloud Messaging
4. **Set Up Analytics**: Track user behavior with Firebase Analytics
5. **Deploy to Firebase Hosting**: Host your app on Firebase

## Troubleshooting

### Common Issues

1. **"Firebase App named '[DEFAULT]' already exists"**
   - Make sure you're only initializing Firebase once
   - Check that `firebase.ts` is only imported once

2. **"Permission denied" errors**
   - Check your Firestore and Storage security rules
   - Ensure users are authenticated when required

3. **Environment variables not loading**
   - Make sure `.env.local` is in your project root
   - Restart your development server after adding environment variables
   - Check that all environment variable names start with `VITE_`
   - Verify there are no spaces around the `=` sign in your `.env.local` file

4. **"Firebase configuration not found" or "API key not defined"**
   - Ensure your `.env.local` file exists in the project root
   - Verify all Firebase configuration values are correctly copied from Firebase Console
   - Check that the file is named exactly `.env.local` (not `.env` or `.env.local.txt`)
   - Restart your development server after creating/modifying the `.env.local` file

5. **Google Sign-in not working**
   - Add your domain to authorized domains in Firebase Console
   - Check that Google authentication is enabled

6. **"Cannot find module 'firebase'" error**
   - Run `npm install` to install Firebase dependencies
   - Check that `firebase` is listed in your `package.json` dependencies

### Getting Help

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase Console](https://console.firebase.google.com/)
- [Firebase Community](https://firebase.google.com/community)

## Security Best Practices

1. **Never expose API keys in client-side code** (use environment variables)
2. **Set up proper security rules** for Firestore and Storage
3. **Validate data on both client and server**
4. **Use Firebase Auth for user management**
5. **Regularly review and update security rules**
6. **Monitor Firebase usage and costs** 