import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';

export function Contact() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="w-full pt-24 pb-16 bg-white">
      {/* Hero Header */}
      <div className="bg-soft-white py-16 md:py-24 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(var(--color-forest) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <span className="text-earth font-bold tracking-widest uppercase text-xs mb-4 block">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-deep-gray mb-6 tracking-tight">
              Let's Make Your Lawn <span className="text-forest italic">Stand Out</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Contact Jawn's Lawns today for a free estimate. We're ready to help you achieve the yard of your dreams.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-deep-gray mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                Reach out to us directly or fill out the form, and we'll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <a href="tel:+19045241704" className="flex items-start gap-4 p-4 rounded-3xl bg-soft-white hover:bg-white transition-colors border border-transparent hover:border-gray-200 group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-forest group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Call Us</span>
                  <span className="text-deep-gray font-bold text-lg">+1 904-524-1704</span>
                </div>
              </a>

              <a href="mailto:jawnlawn99@gmail.com" className="flex items-start gap-4 p-4 rounded-3xl bg-soft-white hover:bg-white transition-colors border border-transparent hover:border-gray-200 group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-forest group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Email Us</span>
                  <span className="text-deep-gray font-bold text-lg">jawnlawn99@gmail.com</span>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-3xl bg-soft-white border border-transparent">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-forest">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Service Area</span>
                  <span className="text-deep-gray font-bold text-lg">Local Community</span>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
               <h4 className="font-bold text-deep-gray mb-4">Follow Us</h4>
               <a 
                 href="https://www.facebook.com/profile.php?id=61569889993381"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-white border border-gray-200 text-deep-gray px-6 py-3 rounded-xl font-bold transition-colors shadow-sm hover:bg-gray-50"
               >
                 Visit our Facebook Page
               </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3"
          >
            <div className="glass-card rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-5 pointer-events-none translate-x-1/3 -translate-y-1/3 text-forest">
                <MessageSquare size={300} />
              </div>
              
              <h3 className="text-3xl font-bold text-deep-gray mb-8 relative z-10 italic">Request a Free Quote</h3>
              
              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-gray-700">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-xl bg-soft-white border border-gray-200 focus:outline-none focus:border-forest focus:bg-white transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-gray-700">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 rounded-xl bg-soft-white border border-gray-200 focus:outline-none focus:border-forest focus:bg-white transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-gray-700">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-xl bg-soft-white border border-gray-200 focus:outline-none focus:border-forest focus:bg-white transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="block text-xs font-bold uppercase tracking-widest text-gray-700">Service Needed</label>
                    <select 
                      id="service" 
                      className="w-full px-4 py-3 rounded-xl bg-soft-white border border-gray-200 focus:outline-none focus:border-forest focus:bg-white transition-all text-gray-700"
                    >
                      <option value="">Select a service...</option>
                      <option value="mowing">Lawn Mowing</option>
                      <option value="landscaping">Landscaping</option>
                      <option value="cleanup">Yard Cleanup</option>
                      <option value="trimming">Bush Trimming</option>
                      <option value="other">Other / Multiple</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-gray-700">Message / Details</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-soft-white border border-gray-200 focus:outline-none focus:border-forest focus:bg-white transition-all resize-none"
                    placeholder="Tell us about your property and what you need help with..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-forest text-white py-4 rounded-xl font-bold text-lg transition-transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-lg shadow-green-900/20"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
