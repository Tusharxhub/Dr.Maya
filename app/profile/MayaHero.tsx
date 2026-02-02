import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { FadeIn } from '../icons/FadeIn';

export const MayaHero = () => {
  return (
    <section className="min-h-screen w-full px-6 md:px-12 lg:px-24 flex flex-col justify-center pt-32 pb-20 md:pt-0 bg-bg-primary relative overflow-hidden">

      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10 opacity-50" />

      <div className="max-w-[1800px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">

        {/* Text Cluster - Floating Panel */}
        <div className="lg:col-span-5 z-10 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm uppercase tracking-[0.2em] text-accent/80 font-medium">
                  Licensed Clinical Psychologist
                </span>
              </div>

              <div className="relative mb-12 animate-float">
                <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-text-primary">
                  Healing <br />
                  <span className="italic font-light text-text-secondary">Through</span> <br />
                  Presence.
                </h1>
              </div>

              <div className="float-panel p-8 rounded-2xl max-w-lg mb-12 backdrop-blur-sm bg-bg-surface/80 animate-float-delayed">
                <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-light">
                  A collaborative space for adults navigating anxiety, trauma, and burnout in Santa Monica, CA.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <button className="px-8 py-4 bg-accent text-bg-primary rounded-full hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 group shadow-[0_0_20px_rgba(102,252,241,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1">
                  <span className="tracking-wide text-sm font-bold">Schedule Consultation</span>
                  <ArrowRight size={16} className="text-bg-primary group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border border-text-secondary/30 rounded-full hover:bg-text-primary/10 hover:border-text-primary/50 transition-all duration-300 text-text-secondary hover:text-text-primary text-sm tracking-wide">
                  Learn More
                </button>
              </div>
            </FadeIn>
          </motion.div>
        </div>

        {/* Visual Cluster - Floating Image */}
        <div className="lg:col-span-7 h-[60vh] lg:h-[80vh] relative order-1 lg:order-2 perspective-1000">
          <motion.div
            className="w-full h-full overflow-hidden relative"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent z-10 opacity-20" />

            <img
              src="/maya.png"
              alt="Dr. Maya"
              className="w-full h-full object-contain rounded-[25%]"
            />

            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <motion.div
                className="p-8 rounded-2xl backdrop-blur-md bg-bg-surface/90 max-w-xs shadow-2xl"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Star size={18} className="text-accent fill-accent" />
                  <span className="text-sm font-bold tracking-wider text-text-primary uppercase">Clinical Excellence</span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Providing evidence-based care and a safe space for your therapeutic journey.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
