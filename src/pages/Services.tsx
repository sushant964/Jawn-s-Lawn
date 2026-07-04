import { motion } from 'motion/react';
import { 
  Scissors, 
  Trees, 
  Leaf, 
  Sun
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function Services() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const services = [
    {
      title: 'Lawn Mowing',
      icon: Scissors,
      desc: 'Professional mowing, precise edging along driveways and sidewalks, and thorough cleanup. We keep your grass at the optimal height for health and appearance.',
      image: 'https://i.ibb.co/67bKTNq0/6e4adf2dd9f374304747a709ba0511ce.jpg'
    },
    {
      title: 'Landscaping',
      icon: Trees,
      desc: 'Complete landscape design and installation. From planting new garden beds to designing beautiful outdoor living spaces tailored to your property.',
      image: 'https://i.ibb.co/3ys6m69S/1ba9fb6ca68a66450850348de0bf5c05.jpg'
    },
    {
      title: 'Yard Cleanups',
      icon: Leaf,
      desc: 'Comprehensive property cleanups to remove overgrown vegetation, fallen branches, and general debris. Perfect for neglected yards.',
      image: 'https://i.ibb.co/Y4FyNYf3/baaf59f4d9480cd7fb3ed96cfd446833.jpg'
    },
    {
      title: 'Seasonal Maintenance',
      icon: Sun,
      desc: 'Customized seasonal plans covering spring prep, summer maintenance, fall cleanups, and winterization for year-round perfection.',
      image: 'https://i.ibb.co/9HjYttHH/e069648b0ee9c0ec33719e065f55c561.jpg'
    }
  ];

  return (
    <div className="w-full pt-24 pb-16 bg-white">
      {/* Hero Header */}
      <div className="bg-soft-white py-16 md:py-24 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(var(--color-forest) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <span className="text-earth font-bold tracking-widest uppercase text-xs mb-4 block">What We Do</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-deep-gray mb-6 tracking-tight">
              Our <span className="text-forest italic">Services</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Professional, reliable, and comprehensive lawn care solutions tailored to your property's specific needs.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (idx % 4) * 0.1, duration: 0.5 }}
              className="glass-card rounded-3xl overflow-hidden shadow-sm hover:border-forest transition-colors group flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-gray/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-forest shadow-sm">
                  <service.icon size={24} />
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-deep-gray mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{service.desc}</p>
                <Link to="/contact" className="text-forest font-bold hover:opacity-80 transition-opacity text-xs uppercase tracking-wider">
                  Request Service &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-forest py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 italic">Need a Custom Solution?</h2>
          <p className="text-lg text-white/80 mb-10">
            Every lawn is unique. If you don't see exactly what you're looking for, reach out to us. We offer customized plans tailored specifically to your property's needs.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center bg-white text-forest px-8 py-4 rounded-xl font-bold transition-transform shadow-lg hover:-translate-y-1">
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
}
