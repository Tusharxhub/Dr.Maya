import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { FadeIn } from '../icons/FadeIn';



export const MayaHero = () => {
  return (
    <section className="min-h-screen w-full px-6 md:px-12    lg:px-24 flex flex-col justify-center pt-32 md:pt-0  bg-[#f9f7f3]">
      <div className="max-w-[1800px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-5 z-10 order-2 lg:order-1">
          <FadeIn>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#1a1714]" />
              <span className="text-sm uppercase tracking-widest text-[#1a1714]/60">
                Licensed Clinical Psychologist
              </span>
            </div>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.9] text-[#1a1714] mb-8">
              Healing <br/>
              <span className="italic font-light">Through</span> <br/>
              Presence.
            </h1>
            <p className="text-lg md:text-xl text-[#1a1714]/70 max-w-md leading-relaxed mb-10 font-light">
              A collaborative space for adults navigating anxiety, trauma, and burnout in Santa Monica, CA.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pb-2.5">
              <button className="px-8 py-2 bg-[#1a1714] text-[#f9f7f3] rounded-full hover:bg-[#463f3a] transition-colors flex items-center justify-center gap-2 group">
                Schedule Consultation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-2 border border-[#1a1714]/20 rounded-full hover:bg-[#1a1714]/5 transition-colors text-[#1a1714]">
                Learn More
              </button>
            </div>
          </FadeIn>
        </div>

        <div className="lg:col-span-7 h-[60vh] lg:h-[85vh] relative order-1 lg:order-2">
          <motion.div 
            className="w-full h-full rounded-[3rem] overflow-hidden relative shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <img 
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=2031" 
              alt="Calm natural setting" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
            
            <motion.div 
              className="absolute bottom-12 left-12 bg-[#f9f7f3] p-6 rounded-2xl shadow-xl max-w-xs hidden md:block"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Star size={16} className="text-amber-500 fill-amber-500" />
                <span className="font-bold text-[#1a1714]">Evidence-Based</span>
              </div>
              <p className="text-sm text-[#1a1714]/70">Integrating CBT, EMDR, and Mindfulness-Based practices.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};