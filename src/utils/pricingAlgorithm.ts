
export interface Product {
  id: number;
  name: string;
  originalPrice: number;
  baseDiscount: number;
  expiryHours: number;
  category: string;
  store: string;
  distance: string;
  rating: number;
  image: string;
  ecoScore: number;
}

export const calculateDynamicPrice = (product: Product): { currentPrice: number; discount: number } => {
  const { originalPrice, baseDiscount, expiryHours } = product;
  
  // Base discount from the original discount
  let totalDiscount = baseDiscount;
  
  // Time-based pricing algorithm
  if (expiryHours <= 6) {
    // Very urgent - up to 80% off
    totalDiscount = Math.min(80, baseDiscount + 25);
  } else if (expiryHours <= 12) {
    // Urgent - up to 75% off
    totalDiscount = Math.min(75, baseDiscount + 15);
  } else if (expiryHours <= 24) {
    // Soon - up to 70% off
    totalDiscount = Math.min(70, baseDiscount + 10);
  } else if (expiryHours <= 48) {
    // Moderate - up to 65% off
    totalDiscount = Math.min(65, baseDiscount + 5);
  }
  
  // Category-based adjustments
  const categoryMultipliers: { [key: string]: number } = {
    'Seafood': 1.2, // More aggressive discounting for seafood
    'Dairy': 1.1,
    'Bakery': 1.15,
    'Fruits': 1.05,
    'Vegetables': 1.05
  };
  
  const categoryMultiplier = categoryMultipliers[product.category] || 1;
  totalDiscount = Math.min(85, totalDiscount * categoryMultiplier);
  
  // Calculate final price
  const currentPrice = originalPrice * (1 - totalDiscount / 100);
  
  return {
    currentPrice: Math.round(currentPrice * 100) / 100, // Round to 2 decimal places
    discount: Math.round(totalDiscount)
  };
};

export const getUpdatedProducts = (products: Product[]): Product[] => {
  return products.map(product => {
    const { currentPrice, discount } = calculateDynamicPrice(product);
    return {
      ...product,
      currentPrice,
      discount
    };
  });
};

// Simulate time passing and update expiry hours
export const simulateTimeUpdate = (products: Product[]): Product[] => {
  return products.map(product => ({
    ...product,
    expiryHours: Math.max(0, product.expiryHours - 1) // Reduce by 1 hour
  }));
};
