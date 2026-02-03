import { FadeIn } from "../icons/FadeIn";

export const Philosophy = () => {
  return (
    <section id="philosophy" className="w-full px-6 md:px-12 lg:px-24 py-32 md:py-48 bg-bg-primary relative">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-bg-surface/50 opacity-50" />

      <div className="max-w-[1500px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">
          <div className="md:col-span-4">
            <FadeIn>
              <div className="sticky top-32">
                <span className="text-xs uppercase tracking-[0.2em] text-accent/60 block mb-8 font-medium">My Approach</span>
                <div className="relative">
                  <h2 className="font-serif text-5xl md:text-6xl leading-[0.95] text-text-primary">
                    Warm, <br />Collaborative, <br />Grounded.
                  </h2>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="md:col-span-8 space-y-16">
            <FadeIn delay={0.2}>
              <div className="floating-card p-10 md:p-14 bg-bg-surface/70 backdrop-blur-sm -rotate-1 hover:rotate-0 transition-transform duration-700 ease-out animate-float-slow">
                <p className="text-xl md:text-3xl font-light leading-relaxed text-text-primary/90">
                  &ldquo;I believe therapy works best when clients feel respected, understood, and actively involved in the process.&rdquo;
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="floating-card p-8 bg-bg-surface/85 hover:-translate-y-2 transition-transform duration-500 animate-float-slow">
                  <h4 className="font-serif text-2xl text-text-primary mb-4">Practical Tools</h4>
                  <p className="text-text-secondary leading-relaxed font-light">
                    Sessions are structured enough to feel supportive, leaving space for reflection. I use CBT to address thought patterns and body-oriented techniques to address physiology.
                  </p>
                </div>
                <div className="floating-card p-8 bg-bg-surface/85 hover:-translate-y-2 transition-transform duration-500 delay-100 animate-float-slow">
                  <h4 className="font-serif text-2xl text-text-primary mb-4">Depth & Insight</h4>
                  <p className="text-text-secondary leading-relaxed font-light">
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