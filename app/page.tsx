"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProductCard from "../components/shop/ProductCard";
import { Product } from "@/types";

// Placeholder products - will come from database later
const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Performance Tank",
    slug: "performance-tank",
    description: "Breathable mesh fabric",
    price: 149900,
    comparePrice: 199900,
    images: [],
    category: { id: "1", name: "Tops", slug: "tops" },
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Black", hex: "#000000" }],
    stock: 50,
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "Training Shorts",
    slug: "training-shorts",
    description: "4-way stretch fabric",
    price: 179900,
    images: [],
    category: { id: "2", name: "Bottoms", slug: "bottoms" },
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Navy", hex: "#1e293b" }],
    stock: 30,
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    name: "Compression Tee",
    slug: "compression-tee",
    description: "Moisture-wicking tech",
    price: 169900,
    comparePrice: 219900,
    images: [],
    category: { id: "1", name: "Tops", slug: "tops" },
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "White", hex: "#ffffff" }],
    stock: 45,
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    name: "Track Joggers",
    slug: "track-joggers",
    description: "Tapered fit",
    price: 229900,
    images: [],
    category: { id: "2", name: "Bottoms", slug: "bottoms" },
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Grey", hex: "#6b7280" }],
    stock: 25,
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-zinc-50 via-white to-zinc-100">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-7xl md:text-8xl font-bold tracking-tight mb-6"
          >
            Train Hard.
            <br />
            <span className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 bg-clip-text text-transparent">
              Look Sharp.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-600 mb-12 max-w-2xl mx-auto"
          >
            Premium gym apparel designed for athletes who refuse to compromise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <Link
              href="/products"
              className="group relative px-8 py-4 bg-zinc-900 text-white rounded-full font-medium overflow-hidden transition-all hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Shop Now
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 to-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link
              href="/collections"
              className="px-8 py-4 border-2 border-zinc-900 text-zinc-900 rounded-full font-medium hover:bg-zinc-900 hover:text-white transition-all"
            >
              View Collections
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-zinc-400 flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-zinc-400 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Featured Collection
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-600"
            >
              Engineered for performance. Built to last.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-zinc-900 text-zinc-900 rounded-full font-medium hover:bg-zinc-900 hover:text-white transition-all"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}