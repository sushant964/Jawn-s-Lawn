import { motion } from 'motion/react';
import { Shield, Star, Award, Heart, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const values = [
    { icon: Star, title: 'Quality', desc: 'We deliver exceptional results that exceed expectations.' },
    { icon: Shield, title: 'Reliability', desc: 'We show up on time, every time, ready to work.' },
    { icon: Award, title: 'Professionalism', desc: 'Respectful, uniformed crews with top-tier equipment.' },
    { icon: CheckCircle, title: 'Integrity', desc: 'Honest pricing with no hidden fees or surprise charges.' },
    { icon: Heart, title: 'Customer Satisfaction', desc: 'Your happiness is our ultimate goal and priority.' }
  ];

  return (
    <div className="w-full pt-24 pb-16 bg-white">
      {/* Hero Header */}
      <div className="bg-soft-white py-16 md:py-24 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(var(--color-forest) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <span className="text-earth font-bold tracking-widest uppercase text-xs mb-4 block">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-deep-gray mb-6 tracking-tight">
              Local Lawn Care <span className="text-forest italic">Professionals</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Dedicated to transforming and maintaining beautiful outdoor spaces for our community.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-sm border border-gray-100">
              <img 
                src="https://i.ibb.co/xtD3C85V/64b8c5d53860b23fa3f6036a6f7f55bc.jpg" 
                alt="Landscaping Professional at work" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-forest/10 mix-blend-multiply"></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 space-y-6 text-lg text-gray-600 leading-relaxed"
          >
            <p>
              At <strong className="text-deep-gray">Jawn's Lawns</strong>, we believe every property deserves a healthy, beautiful outdoor space. A great lawn doesn't just happen—it requires consistent care, the right knowledge, and a passion for the outdoors.
            </p>
            <p>
              We provide dependable lawn care and landscaping services with a focus on quality workmanship, honest pricing, and customer satisfaction. We treat every yard as if it were our own.
            </p>
            <p>
              Whether it's routine maintenance to keep your grass perfectly manicured, or a complete yard transformation, we're committed to delivering results you'll love.
            </p>
            
            <div className="pt-6">
              <Link to="/contact" className="inline-flex items-center justify-center bg-forest text-white px-8 py-4 rounded-xl font-bold transition-transform shadow-lg hover:-translate-y-1">
                Work With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-forest py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight italic">Our Core Values</h2>
            <p className="text-white/80 text-lg">The principles that guide our work and our relationships with every client.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {values.map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="glass-card bg-white/10 border-white/20 p-8 rounded-3xl transition-transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-white text-forest rounded-xl flex items-center justify-center mb-6">
                  <value.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-white/70 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
