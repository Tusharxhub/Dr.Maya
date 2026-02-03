import { motion } from 'framer-motion';
import { Leaf, MapPin } from 'lucide-react';
import { FadeIn } from '../icons/FadeIn';

export const AboutSection = () => {
  return (
    <section id="about" className="w-full section-pad bg-bg-primary">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 lg:gap-24 items-center">
          <FadeIn>
            <div className="relative w-full max-w-lg mx-auto lg:mx-0 min-h-[600px]">
              {/* Use float-panel for images */}
              <motion.div
                className="absolute top-0 right-0 w-3/4 h-[500px] radius-card overflow-hidden floating-card z-10 animate-float-slow animate-breathe shadow-halo"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.8 }}
              >
                <img src="/office1.jpeg" className="w-full h-full object-cover opacity-90" alt="Therapy office interior" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/50 to-transparent" />
              </motion.div>

              <motion.div
                className="absolute bottom-0 left-0 w-2/3 h-[400px] radius-card overflow-hidden floating-card z-20 animate-float-slow animate-breathe shadow-halo"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <img src="/office2.jpeg" className="w-full h-full object-cover opacity-90" alt="Therapy office detail" />
              </motion.div>             
            </div>
          </FadeIn>

          <div className="lg:pl-12">
            <FadeIn delay={0.2}>
              <h2 className="font-serif text-5xl md:text-7xl text-text-primary mb-12">Dr. Maya Reynolds</h2>
              <div className="space-y-8 text-text-secondary text-xl leading-relaxed font-light">
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

              <div className="mt-16 flex flex-wrap gap-4">
                <div className="flex items-center gap-3 px-6 py-3 bg-bg-surface rounded-full text-sm text-text-secondary border border-white/5 hover:border-accent/20 transition-colors">
                  <Leaf size={14} className="text-accent" /> Santa Monica Based
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-bg-surface rounded-full text-sm text-text-secondary border border-white/5 hover:border-accent/20 transition-colors">
                  <MapPin size={14} className="text-accent" /> In-person & Telehealth
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};