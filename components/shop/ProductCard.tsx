// ============================================
// EFITO — Product Card Component
// ============================================
// Reusable card for displaying products
// Used in homepage grid and product listing pages
// ============================================

"use client";

import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/products/${product.slug}`}>
        <div className="relative aspect-square bg-zinc-100 rounded-2xl overflow-hidden mb-4">
          {/* Placeholder - will be product image */}
          <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-sm font-medium">
            Product Image
          </div>
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          
          {/* Quick add button */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ scale: 1.05 }}
            className="absolute bottom-4 right-4 bg-white rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <ShoppingCart className="w-4 h-4" />
          </motion.button>
        </div>

        <div>
          <h3 className="font-medium text-zinc-900 mb-1">{product.name}</h3>
          <p className="text-sm text-zinc-500 mb-2">{product.category.name}</p>
          <div className="flex items-center gap-2">
            <span className="font-bold text-zinc-900">
              ₹{(product.price / 100).toLocaleString('en-IN')}
            </span>
            {product.comparePrice && (
              <span className="text-sm text-zinc-400 line-through">
                ₹{(product.comparePrice / 100).toLocaleString('en-IN')}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
} 