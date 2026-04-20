// ============================================
// EFITO — Global Type Definitions
// ============================================
// This file defines TypeScript interfaces for
// every major data structure in the app.
// Think of these as blueprints — every product,
// user, order follows these exact shapes.
// ============================================

// --- PRODUCT TYPES ---

export interface Product {
  id: string;
  name: string;
  slug: string;          // URL-friendly name e.g. "mens-black-shorts"
  description: string;
  price: number;         // in paise (₹1 = 100 paise) — never store money as decimals
  comparePrice?: number; // original price for showing discounts
  images: string[];      // array of Cloudinary URLs
  category: Category;
  sizes: Size[];
  colors: Color[];
  stock: number;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image?: string;
}

export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';

export interface Color {
  name: string;
  hex: string;           // e.g. "#000000"
}

// --- CART TYPES ---

export interface CartItem {
  product: Product;
  size: Size;
  color: Color;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;         // calculated in paise
}

// --- USER TYPES ---

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  addresses: Address[];
  createdAt: Date;
}

export interface Address {
  id: string;
  name: string;          // recipient name
  phone: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  pincode: string;
  isDefault: boolean;
}

// --- ORDER TYPES ---

export type OrderStatus =
  | 'pending'            // payment not done
  | 'paid'               // payment confirmed
  | 'processing'         // being packed
  | 'shipped'            // picked up by courier
  | 'delivered'          // delivered to customer
  | 'cancelled'          // cancelled
  | 'refunded';          // refund processed

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  address: Address;
  status: OrderStatus;
  total: number;
  paymentId?: string;    // Razorpay payment ID
  shipmentId?: string;   // Shiprocket shipment ID
  createdAt: Date;
  updatedAt: Date;
}