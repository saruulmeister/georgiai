import { Button } from './ui/button';
import { motion } from 'motion/react';
import { Menu } from 'lucide-react';

export function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* BRAND — old format, new gradient */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent select-none cursor-pointer"
          >
            Georgi AI
          </motion.div>
          
          {/* NAVIGATION LINKS */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#product" className="text-slate-600 hover:text-slate-900 transition-colors relative group">
              Product
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>

            <a href="#comparison" className="text-slate-600 hover:text-slate-900 transition-colors relative group">
              Why Georgi
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>

            <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* CTA + MOBILE MENU */}
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-lg">
                Get Started
              </Button>
            </motion.div>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
