import { FadeIn } from "../icons/FadeIn";



export const Philosophy = () => {
  return (
    <section id="philosophy" className="w-full px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-[#efece8]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <FadeIn>
              <div className="sticky top-32">
                <span className="text-sm uppercase tracking-widest text-[#1a1714]/40 block mb-4">My Approach</span>
                <h2 className="font-serif text-4xl md:text-5xl leading-none">
                  Warm, <br/>Collaborative, <br/>Grounded.
                </h2>
              </div>
            </FadeIn>
          </div>
          
          <div className="md:col-span-8 space-y-12">
            <FadeIn delay={0.2}>
              <div className="bg-[#f9f7f3] p-8 md:p-12 rounded-[2rem]">
                 <p className="text-xl md:text-2xl font-light leading-relaxed text-[#1a1714]">
                  "I believe therapy works best when clients feel respected, understood, and actively involved in the process."
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-[#1a1714] mb-2">Practical Tools</h4>
                  <p className="text-[#1a1714]/60 leading-relaxed">
                    Sessions are structured enough to feel supportive, leaving space for reflection. I use CBT to address thought patterns and body-oriented techniques to address physiology.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#1a1714] mb-2">Depth & Insight</h4>
                  <p className="text-[#1a1714]/60 leading-relaxed">
                    Beyond symptom relief, my goal is to help you develop resilience and a stronger relationship with yourself over time.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};