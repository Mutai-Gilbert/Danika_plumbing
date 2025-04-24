import Link from 'next/link';
import BackgroundWrapper from './background-wrapper';

const services = [
  {
    title: 'WATER HEATERS',
    description: 'Installation and maintenance for consistent performance.',
    image: '/modern-water-heater.jpg',
    link: '/services/water-heaters'
  },
  {
    title: 'DRAIN CLEANING',
    description: 'Professional solutions for optimal flow.',
    image: '/modern-drain.jpg',
    link: '/services/drain-cleaning'
  },
  {
    title: 'WATER LINES',
    description: 'Expert installation and repair services.',
    image: '/modern-pipes.jpg',
    link: '/services/water-lines'
  },
  {
    title: 'SEWER REPAIR',
    description: 'Comprehensive maintenance and solutions.',
    image: '/modern-sewer.jpg',
    link: '/services/sewer-repair'
  }
];

const Services = () => {
  return (
    <BackgroundWrapper>
      <section id="services" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light tracking-wide text-white mb-6">
              SERVICES
            </h2>
            <div className="w-16 h-px bg-white/30 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Link 
                href={service.link} 
                key={index}
                className="group block bg-black/30 backdrop-blur-sm border border-white/10 overflow-hidden"
              >
                <div className="aspect-[4/3] relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-8 text-center">
                    <h3 className="text-lg text-white tracking-wide mb-2 font-light">
                      {service.title}
                    </h3>
                    <p className="text-white/70 text-sm tracking-wide leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link 
              href="/services"
              className="inline-block border border-white/30 text-white px-12 py-4 text-sm tracking-wide hover:bg-white hover:text-black transition-all duration-300"
            >
              VIEW ALL SERVICES
            </Link>
          </div>
        </div>
      </section>
    </BackgroundWrapper>
  );
};

export default Services;
