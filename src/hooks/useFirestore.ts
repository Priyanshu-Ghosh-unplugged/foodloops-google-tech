import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  getProducts, 
  getProductsByCategory, 
  getProductsBySeller,
  createOrder,
  getUserOrders,
  updateOrderStatus,
  createUserProfile,
  getUserProfile,
  updateUserProfile,
  type Product,
  type Order,
  type UserProfile
} from '@/lib/firestore';

// Product hooks
export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });
};

export const useProductsByCategory = (category: string) => {
  return useQuery({
    queryKey: ['products', 'category', category],
    queryFn: () => getProductsByCategory(category),
    enabled: !!category,
  });
};

export const useProductsBySeller = (sellerId: string) => {
  return useQuery({
    queryKey: ['products', 'seller', sellerId],
    queryFn: () => getProductsBySeller(sellerId),
    enabled: !!sellerId,
  });
};

// Order hooks
export const useCreateOrder = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: createOrder,
    onSuccess: (orderId, variables) => {
      // Invalidate and refetch user orders
      queryClient.invalidateQueries({ queryKey: ['orders', variables.userId] });
      
      // Optionally add the new order to the cache
      queryClient.setQueryData(['orders', variables.userId], (old: Order[] = []) => {
        const newOrder: Order = {
          id: orderId,
          ...variables,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        return [newOrder, ...old];
      });
    },
  });
};

export const useUserOrders = (userId: string) => {
  return useQuery({
    queryKey: ['orders', userId],
    queryFn: () => getUserOrders(userId),
    enabled: !!userId,
  });
};

export const useUpdateOrderStatus = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ orderId, status }: { orderId: string; status: Order['status'] }) =>
      updateOrderStatus(orderId, status),
    onSuccess: (_, { orderId }) => {
      // Invalidate all order queries to refetch updated data
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    },
  });
};

// User profile hooks
export const useCreateUserProfile = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: createUserProfile,
    onSuccess: (profileId, variables) => {
      // Invalidate user profile queries
      queryClient.invalidateQueries({ queryKey: ['userProfile', variables.uid] });
      
      // Add the new profile to the cache
      queryClient.setQueryData(['userProfile', variables.uid], {
        id: profileId,
        ...variables,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    },
  });
};

export const useUserProfile = (uid: string) => {
  return useQuery({
    queryKey: ['userProfile', uid],
    queryFn: () => getUserProfile(uid),
    enabled: !!uid,
  });
};

export const useUpdateUserProfile = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ uid, profileData }: { uid: string; profileData: Partial<UserProfile> }) =>
      updateUserProfile(uid, profileData),
    onSuccess: (_, { uid }) => {
      // Invalidate user profile queries
      queryClient.invalidateQueries({ queryKey: ['userProfile', uid] });
    },
  });
};

// Generic document hooks
export const useCreateDocument = <T extends { id?: string }>(
  collectionName: string,
  onSuccess?: (data: T) => void
) => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: Omit<T, 'id'>) => 
      import('@/lib/firestore').then(({ createDocument }) => 
        createDocument(collectionName, data)
      ),
    onSuccess: (docId, variables) => {
      // Invalidate queries for this collection
      queryClient.invalidateQueries({ queryKey: [collectionName] });
      
      if (onSuccess) {
        onSuccess({ id: docId, ...variables } as T);
      }
    },
  });
};

export const useUpdateDocument = <T>(
  collectionName: string,
  onSuccess?: (data: T) => void
) => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ docId, data }: { docId: string; data: Partial<T> }) =>
      import('@/lib/firestore').then(({ updateDocument }) =>
        updateDocument(collectionName, docId, data)
      ),
    onSuccess: (_, { docId }) => {
      // Invalidate queries for this collection
      queryClient.invalidateQueries({ queryKey: [collectionName] });
      queryClient.invalidateQueries({ queryKey: [collectionName, docId] });
      
      if (onSuccess) {
        onSuccess({ id: docId } as T);
      }
    },
  });
};

export const useDeleteDocument = (
  collectionName: string,
  onSuccess?: () => void
) => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (docId: string) =>
      import('@/lib/firestore').then(({ deleteDocument }) =>
        deleteDocument(collectionName, docId)
      ),
    onSuccess: () => {
      // Invalidate queries for this collection
      queryClient.invalidateQueries({ queryKey: [collectionName] });
      
      if (onSuccess) {
        onSuccess();
      }
    },
  });
}; 