import { Clock, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import BackgroundWrapper from './background-wrapper';

const EmergencyServices = () => {
  return (
    <BackgroundWrapper>
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light tracking-wide text-white mb-6">
              24/7 EMERGENCY SERVICES
            </h2>
            <div className="w-16 h-px bg-white/30 mx-auto mb-8" />
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-16 tracking-wide font-light">
              When emergencies strike, you need reliable service immediately. 
              Our team is ready to respond within the hour, any time of day or night.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-black/80 backdrop-blur-md rounded-2xl shadow-lg p-12 group transition-all duration-500 text-center text-white">
              <Clock className="w-12 h-12 text-white/80 mb-6 mx-auto" />
              <h3 className="text-lg tracking-wide mb-3 font-light">24/7 SERVICE</h3>
              <p className="text-white/80 text-sm tracking-wide leading-relaxed">
                Available any time, day or night, we're here when you need us most.
              </p>
            </div>

            <div className="bg-black/80 backdrop-blur-md rounded-2xl shadow-lg p-12 group transition-all duration-500 text-center text-white">
              <Phone className="w-12 h-12 text-white/80 mb-6 mx-auto" />
              <h3 className="text-lg tracking-wide mb-3 font-light">QUICK RESPONSE</h3>
              <p className="text-white/80 text-sm tracking-wide leading-relaxed">
                Fast arrival to your location within the hour.
              </p>
            </div>

            <div className="bg-black/80 backdrop-blur-md rounded-2xl shadow-lg p-12 group transition-all duration-500 text-center text-white">
              <ShieldCheck className="w-12 h-12 text-white/80 mb-6 mx-auto" />
              <h3 className="text-lg tracking-wide mb-3 font-light">LICENSED & INSURED</h3>
              <p className="text-white/80 text-sm tracking-wide leading-relaxed">
                Professional, trusted service you can rely on.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link 
              href="/contact"
              className="inline-block border border-white/30 text-white px-12 py-4 text-sm tracking-wide hover:bg-white hover:text-black transition-all duration-300"
            >
              GET HELP NOW
            </Link>
          </div>
        </div>
      </section>
    </BackgroundWrapper>
  );
};

export default EmergencyServices;
