import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">EFITO</h3>
            <p className="text-zinc-400 text-sm">
              Premium gym apparel for athletes who refuse to compromise.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><Link href="/products" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="/collections" className="hover:text-white transition-colors">Collections</Link></li>
              <li><Link href="/new" className="hover:text-white transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/returns" className="hover:text-white transition-colors">Returns</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><a href="https://instagram.com" target="_blank" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="mailto:hello@efito.in" className="hover:text-white transition-colors">hello@efito.in</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 text-center text-sm text-zinc-400">
          © {new Date().getFullYear()} Efito. All rights reserved.
        </div>
      </div>
    </footer>
  );
}