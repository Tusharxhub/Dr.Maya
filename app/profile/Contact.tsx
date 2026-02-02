import { MapPin, Mail, Phone } from 'lucide-react';
import { FadeIn } from '../icons/FadeIn';

export const Contact = () => {
  return (
    <section id="contact" className="w-full px-6 md:px-12 lg:px-24 py-32 md:py-48 bg-bg-primary text-text-primary">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 lg:gap-32">
          <FadeIn>
            <div className="sticky top-48">
              <h2 className="font-serif text-5xl md:text-7xl leading-[0.9] mb-12">
                Begin Your <br /><span className="italic text-text-secondary/50">Journey</span>
              </h2>
              <p className="text-xl text-text-secondary max-w-md mb-16 font-light leading-relaxed">
                Taking the first step can feel daunting. I invite you to reach out for a brief consultation to see if we are a good fit.
              </p>

              <div className="space-y-8">
                <ContactItem icon={<MapPin size={20} />} label="Location" text="123th Street 45 W, Santa Monica, CA 90401" />
                <ContactItem icon={<Mail size={20} />} label="Email" text="connect@mayareynoldspsyd.com" />
                <ContactItem icon={<Phone size={20} />} label="Phone" text="(310) 555-0198" />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="float-panel p-10 md:p-16 rounded-[3rem] backdrop-blur-md bg-bg-surface">
              <h3 className="font-serif text-3xl mb-10 text-text-primary">Request a Consultation</h3>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <InputField label="First Name" placeholder="Jane" />
                  <InputField label="Last Name" placeholder="Doe" />
                </div>
                <InputField label="Email" type="email" placeholder="jane@example.com" />
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-text-secondary/70">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-bg-primary/50 text-text-primary border-none rounded-xl p-6 focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-text-secondary/30 resize-none hover:bg-bg-primary/70"
                    placeholder="Tell me a little about what brings you here..."
                  />
                </div>
                <button className="w-full bg-accent text-bg-primary py-5 rounded-xl hover:bg-white transition-all duration-300 font-bold tracking-wide shadow-[0_0_20px_rgba(102,252,241,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-1 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </FadeIn>
        </div>

        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-text-secondary/40 text-sm tracking-widest uppercase">
          <p>© 2024 Dr. Maya Reynolds, PsyD. All rights reserved.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-text-primary transition-colors">Psychology Today</a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sub-components for Contact
const ContactItem = ({ icon, label, text }: { icon: React.ReactNode, label: string, text: string }) => (
  <div className="flex items-center gap-6 group">
    <div className="w-14 h-14 rounded-full bg-bg-surface border border-white/5 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-black/20">
      {icon}
    </div>
    <div>
      <div className="text-xs text-text-secondary/50 uppercase tracking-widest mb-1">{label}</div>
      <div className="text-lg text-text-primary font-light">{text}</div>
    </div>
  </div>
);

const InputField = ({ label, type = "text", placeholder }: { label: string, type?: string, placeholder: string }) => (
  <div className="space-y-3">
    <label className="text-xs font-bold uppercase tracking-wider text-text-secondary/70">{label}</label>
    <input
      type={type}
      className="w-full bg-bg-primary/50 text-text-primary border-none rounded-xl p-6 focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-text-secondary/30 hover:bg-bg-primary/70"
      placeholder={placeholder}
    />
  </div>
);