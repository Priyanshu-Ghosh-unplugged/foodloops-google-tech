import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit,
  serverTimestamp,
  DocumentData,
  QueryDocumentSnapshot
} from 'firebase/firestore';
import { db } from './firebase';

// Types for your data models
export interface Product {
  id?: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  sellerId: string;
  inStock: boolean;
  createdAt?: any;
  updatedAt?: any;
}

export interface Order {
  id?: string;
  userId: string;
  products: Array<{
    productId: string;
    quantity: number;
    price: number;
  }>;
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  createdAt?: any;
  updatedAt?: any;
}

export interface UserProfile {
  id?: string;
  uid: string;
  email: string;
  displayName: string;
  phoneNumber?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  createdAt?: any;
  updatedAt?: any;
}

// Generic CRUD operations
export const createDocument = async <T extends DocumentData>(
  collectionName: string, 
  data: T
): Promise<string> => {
  const docRef = await addDoc(collection(db, collectionName), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
  return docRef.id;
};

export const getDocument = async <T>(
  collectionName: string, 
  docId: string
): Promise<T | null> => {
  const docRef = doc(db, collectionName, docId);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as T;
  }
  return null;
};

export const updateDocument = async <T extends DocumentData>(
  collectionName: string, 
  docId: string, 
  data: Partial<T>
): Promise<void> => {
  const docRef = doc(db, collectionName, docId);
  await updateDoc(docRef, {
    ...data,
    updatedAt: serverTimestamp()
  });
};

export const deleteDocument = async (
  collectionName: string, 
  docId: string
): Promise<void> => {
  const docRef = doc(db, collectionName, docId);
  await deleteDoc(docRef);
};

export const getDocuments = async <T>(
  collectionName: string,
  constraints?: Array<{ field: string; operator: any; value: any }>,
  orderByField?: string,
  orderDirection: 'asc' | 'desc' = 'asc',
  limitCount?: number
): Promise<T[]> => {
  let q: any = collection(db, collectionName);
  
  if (constraints) {
    constraints.forEach(({ field, operator, value }) => {
      q = query(q, where(field, operator, value));
    });
  }
  
  if (orderByField) {
    q = query(q, orderBy(orderByField, orderDirection));
  }
  
  if (limitCount) {
    q = query(q, limit(limitCount));
  }
  
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as any) } as T));
};

// Product-specific operations
export const getProducts = async (): Promise<Product[]> => {
  return getDocuments<Product>('products');
};

export const getProductsByCategory = async (category: string): Promise<Product[]> => {
  return getDocuments<Product>('products', [
    { field: 'category', operator: '==', value: category }
  ]);
};

export const getProductsBySeller = async (sellerId: string): Promise<Product[]> => {
  return getDocuments<Product>('products', [
    { field: 'sellerId', operator: '==', value: sellerId }
  ]);
};

// Order-specific operations
export const createOrder = async (orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> => {
  return createDocument<Order>('orders', orderData);
};

export const getUserOrders = async (userId: string): Promise<Order[]> => {
  return getDocuments<Order>('orders', [
    { field: 'userId', operator: '==', value: userId }
  ], 'createdAt', 'desc');
};

export const updateOrderStatus = async (orderId: string, status: Order['status']): Promise<void> => {
  await updateDocument('orders', orderId, { status });
};

// User profile operations
export const createUserProfile = async (profileData: Omit<UserProfile, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> => {
  return createDocument<UserProfile>('userProfiles', profileData);
};

export const getUserProfile = async (uid: string): Promise<UserProfile | null> => {
  const profiles = await getDocuments<UserProfile>('userProfiles', [
    { field: 'uid', operator: '==', value: uid }
  ]);
  return profiles.length > 0 ? profiles[0] : null;
};

export const updateUserProfile = async (uid: string, profileData: Partial<UserProfile>): Promise<void> => {
  const profile = await getUserProfile(uid);
  if (profile?.id) {
    await updateDocument('userProfiles', profile.id, profileData);
  }
}; 