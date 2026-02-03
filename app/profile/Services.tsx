import { motion } from 'framer-motion';
import { FadeIn } from '../icons/FadeIn';

const specialties = [
  {
    title: "Anxiety & Panic",
    desc: "Addressing constant worry, tension, and physiological overwhelm using somatic and cognitive techniques.",
    image: "https://plus.unsplash.com/premium_photo-1723780909020-d1b7c49a3c9f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Trauma & EMDR",
    desc: "Carefully paced trauma work focusing on safety, stabilization, and processing difficult memories.",
    image: "https://plus.unsplash.com/premium_photo-1664643217182-dbcf9c719aa1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Burnout & Stress",
    desc: "Support for high-achievers feeling disconnected. Reclaiming balance in fast-paced environments.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000"
  }
];

export const Services = () => {
  return (
    <section id="services" className="w-full px-6 md:px-12 lg:px-24 py-32 md:py-48 bg-bg-primary text-text-primary">
      <div className="max-w-[1500px] mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <h2 className="font-serif text-5xl md:text-7xl max-w-xl leading-[0.9]">
              Areas of <span className="italic text-text-secondary/60">Focus</span>
            </h2>
            <div className="float-panel px-8 py-6 rounded-2xl max-w-md backdrop-blur-md bg-bg-surface/50">
              <p className="text-text-secondary font-light">
                I work with adults who are functional on the outside but quietly struggling on the inside.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pl-4">
          {specialties.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.2}>
              <div
                className={`group cursor-pointer relative ${idx === 1 ? 'md:-mt-16' : ''} ${idx === 2 ? 'md:mt-16' : ''}`}
              >
                <div className="float-panel p-4 pb-8 rounded-3xl bg-bg-surface hover:-translate-y-4 transition-all duration-700 ease-out h-full">
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-8 relative">
                    <div className="absolute inset-0 bg-bg-primary/20 group-hover:bg-transparent transition-all duration-500 z-10" />
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700"
                    />
                  </div>
                  <div className="px-4">
                    <h3 className="font-serif text-3xl mb-4 text-text-primary">{item.title}</h3>
                    <p className="text-text-secondary text-base leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};