import { Phone } from 'lucide-react';
import { motion } from 'motion/react';

export function FloatingContact() {
  return (
    <motion.a
      href="tel:+19045241704"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
      className="fixed bottom-12 right-12 z-50 flex flex-col items-center gap-2 group"
      aria-label="Call Now"
    >
      <div className="w-14 h-14 bg-forest rounded-full shadow-xl flex items-center justify-center text-white cursor-pointer hover:-translate-y-1 transition-transform">
        <Phone size={24} />
      </div>
      <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest group-hover:text-forest transition-colors">Call</span>
    </motion.a>
  );
}
