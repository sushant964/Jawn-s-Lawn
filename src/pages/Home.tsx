import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Leaf, 
  ShieldCheck, 
  Star, 
  ArrowRight,
  Scissors,
  Trees
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-20 bg-soft-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(var(--color-forest) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-20 flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex-1 max-w-3xl"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 mb-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-earth">Premium Landscaping Services</span>
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-bold text-forest leading-tight mb-6 italic tracking-tight">
              Greener Lawns. <br className="hidden md:block" />
              <span className="not-italic text-deep-gray">Better First Impressions.</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
              Professional lawn care and landscaping services dedicated to keeping your property healthy, clean, and beautiful all year round.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link 
                to="/contact" 
                className="bg-forest text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-green-900/20 hover:opacity-90 transition-opacity text-center"
              >
                Get a Free Quote
              </Link>
              <a 
                href="tel:+19045241704" 
                className="bg-white border border-gray-200 text-deep-gray px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors text-center flex items-center justify-center gap-2"
              >
                Call Now
              </a>
            </motion.div>
            
            <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-8">
              {[
                { icon: ShieldCheck, text: "Reliable Service" },
                { icon: Star, text: "Quality Workmanship" },
                { icon: Leaf, text: "Affordable Pricing" },
                { icon: CheckCircle2, text: "Customer Satisfaction" }
              ].map((item, idx) => (
                <motion.div key={idx} variants={fadeIn} className="flex items-center gap-3 text-deep-gray">
                  <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-forest" size={12} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-deep-gray mb-6 tracking-tight">
                Why Choose <span className="text-forest italic">Jawn's Lawns?</span>
              </motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-gray-600 mb-10 leading-relaxed">
                We don't just cut grass; we cultivate beautiful outdoor spaces. Our dedication to perfection means your lawn will always be the envy of the neighborhood.
              </motion.p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
                {[
                  "Professional Lawn Care",
                  "Honest & Reliable Service",
                  "Attention to Detail",
                  "Affordable Pricing",
                  "Fast Response",
                  "Customer Satisfaction"
                ].map((feature, idx) => (
                  <motion.div key={idx} variants={fadeIn} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={12} className="text-forest" strokeWidth={3} />
                    </div>
                    <span className="text-deep-gray font-medium text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div variants={fadeIn} className="mt-12">
                <Link to="/about" className="inline-flex items-center gap-2 text-forest font-bold hover:opacity-80 transition-opacity uppercase tracking-wider text-sm">
                  Learn more about us
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-soft-white border-t border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(var(--color-forest) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-deep-gray mb-6 tracking-tight">
              Our <span className="text-forest italic">Services</span>
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive lawn care solutions tailored to keep your property looking its absolute best throughout every season.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Lawn Mowing",
                icon: Scissors,
                desc: "Precision mowing, edging, and trimming for a perfectly manicured look.",
                link: "/services"
              },
              {
                title: "Landscaping",
                icon: Trees,
                desc: "Custom landscape design and installation to transform your outdoor space.",
                link: "/services"
              },
              {
                title: "Yard Cleanups",
                icon: Leaf,
                desc: "Seasonal cleanups, leaf removal, and debris clearing to maintain a pristine yard.",
                link: "/services"
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeIn}
                className="glass-card rounded-3xl p-8 hover:border-forest transition-colors group flex flex-col items-start"
              >
                <div className="w-12 h-12 bg-green-50 text-forest rounded-xl flex items-center justify-center mb-6">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-deep-gray mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow text-sm">{service.desc}</p>
                <Link to={service.link} className="inline-flex items-center gap-2 text-forest font-bold text-xs uppercase tracking-wider group-hover:underline">
                  View Service <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 bg-white border border-gray-200 text-deep-gray rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-sm">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-forest text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <Leaf size={400} className="text-white/10 translate-x-1/3 -translate-y-1/3" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight italic">Our Process</h2>
            <p className="text-white/80 text-lg">Simple, transparent, and focused on delivering exceptional results for your lawn.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-white/20 z-0"></div>
            
            {[
              { step: "01", title: "Free Estimate", desc: "Contact us and we'll assess your property's specific needs at no cost." },
              { step: "02", title: "Schedule", desc: "Pick a convenient time for our team to arrive and work their magic." },
              { step: "03", title: "Professional Care", desc: "Our experts deliver top-tier lawn care using quality equipment." },
              { step: "04", title: "Enjoy", desc: "Sit back, relax, and enjoy your beautifully maintained outdoor space." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative z-10 text-center"
              >
                <div className="w-24 h-24 mx-auto bg-forest border border-white/20 rounded-full flex items-center justify-center mb-6 relative">
                  <span className="text-2xl font-bold text-white italic">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-deep-gray mb-6 tracking-tight">Frequently Asked <span className="text-forest italic">Questions</span></h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "Do you offer free estimates?", a: "Yes, we provide free, no-obligation estimates for all our services. We'll visit your property to understand your needs and provide an accurate quote." },
              { q: "Are you licensed and insured?", a: "Absolutely. We carry comprehensive liability insurance to protect you and your property while we work." },
              { q: "How often should my lawn be mowed?", a: "We typically recommend weekly mowing during the peak growing season (Spring and early Summer) to keep grass healthy and looking its best." }
            ].map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-forest transition-colors"
              >
                <h3 className="text-lg font-bold text-deep-gray mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative bg-forest overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="glass-card bg-white/10 border-white/20 p-10 md:p-16 rounded-3xl max-w-4xl mx-auto text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight italic">Ready For A Lawn You'll Be Proud Of?</h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Join dozens of happy homeowners who trust Jawn's Lawns for their landscaping needs. Let's make your yard the best on the block.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-white text-forest px-10 py-5 rounded-xl font-bold text-lg transition-transform hover:-translate-y-1 shadow-lg"
            >
              Request Your Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
