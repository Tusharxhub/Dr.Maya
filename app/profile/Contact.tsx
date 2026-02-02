import { MapPin, Mail, Phone } from 'lucide-react';
import { FadeIn } from '../icons/FadeIn';

export const Contact = () => {
  return (
    <section id="contact" className="w-full px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-[#1a1714] text-[#f9f7f3] rounded-t-[3rem]">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <FadeIn>
            <h2 className="font-serif text-5xl md:text-7xl leading-none mb-8">
              Begin Your <br/><span className="italic text-[#f9f7f3]/50">Journey</span>
            </h2>
            <p className="text-xl text-[#f9f7f3]/60 max-w-md mb-12">
              Taking the first step can feel daunting. I invite you to reach out for a brief consultation to see if we are a good fit.
            </p>
            
            <div className="space-y-6">
              <ContactItem icon={<MapPin />} label="Location" text="123th Street 45 W, Santa Monica, CA 90401" />
              <ContactItem icon={<Mail />} label="Email" text="connect@mayareynoldspsyd.com" />
              <ContactItem icon={<Phone />} label="Phone" text="(310) 555-0198" />
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="bg-[#f9f7f3] text-[#1a1714] p-8 md:p-12 rounded-[2rem]">
              <h3 className="font-serif text-3xl mb-6">Request a Consultation</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField label="First Name" placeholder="Jane" />
                  <InputField label="Last Name" placeholder="Doe" />
                </div>
                <InputField label="Email" type="email" placeholder="jane@example.com" />
                <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-wider">Message</label>
                   <textarea 
                    rows={4} 
                    className="w-full bg-[#efece8] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#1a1714] outline-none transition-all" 
                    placeholder="Tell me a little about what brings you here..." 
                   />
                </div>
                <button className="w-full bg-[#1a1714] text-[#f9f7f3] py-4 rounded-xl hover:bg-[#463f3a] transition-colors font-medium">
                  Send Message
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
        
        <div className="mt-24 pt-8 border-t border-[#f9f7f3]/10 flex flex-col md:flex-row justify-between items-center text-[#f9f7f3]/40 text-sm">
          <p>© 2024 Dr. Maya Reynolds, PsyD. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#f9f7f3] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#f9f7f3] transition-colors">Psychology Today</a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sub-components for Contact
const ContactItem = ({ icon, label, text }: { icon: React.ReactNode, label: string, text: string }) => (
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-full bg-[#f9f7f3]/10 flex items-center justify-center">
       {icon}
    </div>
    <div>
      <div className="text-sm text-[#f9f7f3]/40 uppercase tracking-wider">{label}</div>
      <div className="text-lg">{text}</div>
    </div>
  </div>
);

const InputField = ({ label, type = "text", placeholder }: { label: string, type?: string, placeholder: string }) => (
  <div className="space-y-2">
    <label className="text-xs font-bold uppercase tracking-wider">{label}</label>
    <input 
      type={type} 
      className="w-full bg-[#efece8] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#1a1714] outline-none transition-all" 
      placeholder={placeholder} 
    />
  </div>
);