import { 
  ref, 
  uploadBytes, 
  getDownloadURL, 
  deleteObject,
  listAll,
  StorageReference
} from 'firebase/storage';
import { storage } from './firebase';

// Upload a file and return the download URL
export const uploadFile = async (
  file: File, 
  path: string
): Promise<string> => {
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
};

// Upload a product image
export const uploadProductImage = async (
  file: File, 
  productId: string
): Promise<string> => {
  const path = `products/${productId}/${file.name}`;
  return uploadFile(file, path);
};

// Upload a user avatar
export const uploadUserAvatar = async (
  file: File, 
  userId: string
): Promise<string> => {
  const path = `avatars/${userId}/${file.name}`;
  return uploadFile(file, path);
};

// Delete a file from storage
export const deleteFile = async (path: string): Promise<void> => {
  const storageRef = ref(storage, path);
  await deleteObject(storageRef);
};

// Get download URL for a file
export const getFileURL = async (path: string): Promise<string> => {
  const storageRef = ref(storage, path);
  return getDownloadURL(storageRef);
};

// List all files in a directory
export const listFiles = async (path: string): Promise<string[]> => {
  const storageRef = ref(storage, path);
  const result = await listAll(storageRef);
  return result.items.map(item => item.fullPath);
};

// Delete all files in a directory (useful for cleaning up product images)
export const deleteDirectory = async (path: string): Promise<void> => {
  const storageRef = ref(storage, path);
  const result = await listAll(storageRef);
  
  const deletePromises = result.items.map(item => deleteObject(item));
  await Promise.all(deletePromises);
}; 