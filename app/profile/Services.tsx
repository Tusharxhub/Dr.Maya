import { motion } from 'framer-motion';
import { FadeIn } from '../icons/FadeIn';



const specialties = [
  {
    title: "Anxiety & Panic",
    desc: "Addressing constant worry, tension, and physiological overwhelm using somatic and cognitive techniques.",
    image: "https://images.unsplash.com/photo-1595178156906-2396ef837b0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Trauma & EMDR",
    desc: "Carefully paced trauma work focusing on safety, stabilization, and processing difficult memories.",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Burnout & Stress",
    desc: "Support for high-achievers feeling disconnected. Reclaiming balance in fast-paced environments.",
    image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=800"
  }
];

export const Services = () => {
  return (
    <section id="services" className="w-full px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-[#0f0f0f] text-[#f9f7f3] rounded-t-[3rem]">
      <div className="max-w-[1600px] mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="font-serif text-4xl md:text-6xl max-w-xl">
              Areas of <span className="italic text-[#f9f7f3]/60">Focus</span>
            </h2>
            <p className="max-w-sm text-[#f9f7f3]/60">
              I work with adults who are functional on the outside but quietly struggling on the inside.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.2}>
              <div className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6 relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10" />
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <h3 className="font-serif text-2xl mb-2">{item.title}</h3>
                <p className="text-[#f9f7f3]/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};