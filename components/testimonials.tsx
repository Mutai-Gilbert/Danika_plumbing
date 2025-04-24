import { Star } from 'lucide-react';
import BackgroundWrapper from './background-wrapper';

const testimonials = [
  {
    name: "KEVIN CHAN",
    date: "30 December 2024",
    rating: 4,
    text: "Due to the timing near Christmas plus flu season, we encountered some scheduling delays and hiccups. But the team is very responsive to give us scheduling notifications as soon as they can.",
    image: "/avatar-1.jpg"
  },
  {
    name: "LUCAS CHRISTIAN",
    date: "30 December 2024",
    rating: 5,
    text: "Riley was awesome, he helped with a cartridge issue. Very polite and knowledgeable.",
    image: "/avatar-2.jpg"
  },
  {
    name: "AMANDA PARKER",
    date: "29 December 2024",
    rating: 5,
    text: "Excellent service! The plumber arrived on time and fixed our water heater issue quickly. Very professional and courteous.",
    image: "/avatar-3.jpg"
  }
];

const Testimonials = () => {
  return (
    <BackgroundWrapper>
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light tracking-wide text-white mb-6">
              TESTIMONIALS
            </h2>
            <div className="w-16 h-px bg-white/30 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-black/30 backdrop-blur-sm border border-white/10 p-8 group hover:bg-white/5 transition-all duration-500 text-center"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="relative w-12 h-12 mr-4 overflow-hidden rounded-full">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="absolute inset-0 w-full h-full object-cover grayscale"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm tracking-wide text-white font-light">{testimonial.name}</h3>
                    <p className="text-xs text-white/50 tracking-wide">{testimonial.date}</p>
                  </div>
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating ? 'text-white' : 'text-white/20'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-white/70 text-sm tracking-wide leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="mt-6 flex justify-center">
                  <img src="/google-icon.png" alt="Google Review" className="w-5 h-5 opacity-50" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </BackgroundWrapper>
  );
};

export default Testimonials;
