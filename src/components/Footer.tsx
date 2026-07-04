import { Link } from 'react-router-dom';
import { Leaf, MapPin, Phone, Mail, Facebook, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-8 px-4 md:px-12 text-[11px] font-medium text-gray-400 uppercase tracking-widest flex flex-col md:flex-row items-center justify-between gap-6">
      <div>&copy; {new Date().getFullYear()} Jawn's Lawns. All Rights Reserved.</div>
      <div className="flex gap-8">
        <Link to="/" className="hover:text-forest transition-colors">Home</Link>
        <Link to="/about" className="hover:text-forest transition-colors">About</Link>
        <Link to="/services" className="hover:text-forest transition-colors">Services</Link>
        <Link to="/contact" className="hover:text-forest transition-colors">Contact</Link>
      </div>
      <div className="flex gap-8">
        <a href="https://www.facebook.com/profile.php?id=61569889993381" target="_blank" rel="noopener noreferrer" className="hover:text-forest transition-colors">Facebook</a>
      </div>
      <div>Jacksonville, Florida</div>
    </footer>
  );
}
