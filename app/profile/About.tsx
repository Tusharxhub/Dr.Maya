import { motion } from 'framer-motion';
import { Leaf, MapPin } from 'lucide-react';
import { FadeIn } from '../icons/FadeIn';


export const AboutSection = () => {
  return (
    <section id="about" className="w-full px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-[#f9f7f3]">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative aspect-[4/5] w-full max-w-lg mx-auto lg:mx-0">
              <motion.div 
                className="absolute top-0 right-0 w-2/3 h-4/5 rounded-[2rem] overflow-hidden shadow-xl z-10"
                whileHover={{ y: -10 }}
              >
                <img src="/maya.png" className="w-full h-full object-cover" alt="Therapy session" />
              </motion.div>
              <motion.div 
                className="absolute bottom-0 left-0 w-1/2 h-2/3 rounded-[2rem] overflow-hidden shadow-xl border-4 border-[#f9f7f3]"
                whileHover={{ y: -10 }}
              >
                <img src="https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Office" />
              </motion.div>
              <div className="absolute top-[60%] left-[40%] bg-[#1a1714] text-[#f9f7f3] px-6 py-4 rounded-xl z-20 shadow-lg rotate-[-6deg]">
                <span className="font-serif">PsyD</span>
              </div>
            </div>
          </FadeIn>

          <div>
            <FadeIn delay={0.2}>
              <h2 className="font-serif text-4xl md:text-6xl text-neutral-800 mb-8">Dr. Maya Reynolds</h2>
              <div className="space-y-6 text-[#1a1714]/80 text-lg leading-relaxed">
                <p>
                  I’m a licensed clinical psychologist based in Santa Monica, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.
                </p>
                <p>
                  Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
                </p>
                <p>
                  Whether you are navigating the impact of earlier life experiences or dealing with professional burnout, therapy can become a space to slow down and reconnect.
                </p>
              </div>
              
              <div className="mt-12 flex flex-wrap gap-4">
                 <div className="flex items-center gap-2 px-4 py-2 bg-[#efece8] rounded-full text-sm text-[#1a1714]">
                    <Leaf size={14} /> Santa Monica Based
                 </div>
                 <div className="flex items-center gap-2 px-4 py-2 bg-[#efece8] rounded-full text-sm text-[#1a1714]">
                    <MapPin size={14} /> In-person & Telehealth
                 </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};