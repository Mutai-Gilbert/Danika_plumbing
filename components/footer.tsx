import Link from "next/link"
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const serviceAreas = [
    "Arlington", "Bothell", "Bellevue", "Des Moines", "Duvall", "Edmonds", "Fife", "Issaquah",
    "Kenmore", "Kent", "Kirkland", "Lake City Lake Stevens", "Lynnwood", "Maple Valley",
    "Marysville", "Mill Creek", "Monroe", "Mountlake Terrace", "Mukilteo", "Puyallup",
    "Sammamish", "Shoreline", "Snohomish", "Seattle", "Renton", "Redmond", "Tacoma", "West Seattle", "Woodinville"
  ];

  return (
    <footer className="relative bg-[#8B2E1A]">
      {/* CTA Section */}
      <div className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0" 
          style={{ 
            backgroundImage: 'url(/footer.jpg)', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-5xl font-light text-white mb-4">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Let's start your journey to the perfect property. Our expert team is here to guide you every step of the way.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full text-sm font-medium tracking-wide hover:bg-white/90 transition-all duration-300"
          >
            Get Started →
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Head Office */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-medium ml-4">Head Office</h3>
            </div>
            <Link 
              href="https://maps.google.com/?q=11015+Airport+Rd,+Everett,+WA+98204"
              target="_blank"
              className="text-white/60 hover:text-white block mb-2"
            >
              11015 Airport Road
              <br />
              Everett, WA 98204
            </Link>
            <Link
              href="https://maps.google.com/?q=11015+Airport+Rd,+Everett,+WA+98204"
              target="_blank"
              className="text-white/60 hover:text-white text-sm"
            >
              View larger map →
            </Link>
          </div>

          {/* Get in Touch */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-medium ml-4">Get in Touch</h3>
            </div>
            <Link 
              href="tel:(425) 374-1557"
              className="text-white/60 hover:text-white block mb-2"
            >
              (425) 374-1557
            </Link>
            <Link 
              href="mailto:office@danikaplumbing.com"
              className="text-white/60 hover:text-white"
            >
              office@danikaplumbing.com
            </Link>
          </div>

          {/* Service Areas */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-medium ml-4">Service Areas</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area, index) => (
                <span key={index} className="text-white/60">
                  {area}{index < serviceAreas.length - 1 ? "," : ""}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-20 h-[400px] relative rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.7638882736766!2d-122.28024242326755!3d47.91852697120619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549006745c079f9f%3A0x4b981b7c0c04dc94!2s11015%20Airport%20Rd%2C%20Everett%2C%20WA%2098204%2C%20USA!5e0!3m2!1sen!2s!4v1709732221657!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Bottom Section */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo and Tagline */}
            <div className="text-center md:text-left">
              <Image
                src="/logo-white.png"
                alt="Danika Plumbing LLC"
                width={200}
                height={80}
                className="mb-4"
              />
              <p className="text-white/60 text-sm">
                Quick Service, Quality Materials, Realistic Price
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <Link href="https://facebook.com" className="text-white/60 hover:text-white">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="https://twitter.com" className="text-white/60 hover:text-white">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="https://instagram.com" className="text-white/60 hover:text-white">
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Copyright and Links */}
          <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>
              © Copyright 2024 Danika Plumbing, LLC. | LICENSE# DANIKPL839PF
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <span>~</span>
              <Link href="/terms" className="hover:text-white">
                Terms & Conditions
              </Link>
            </div>
            <div>
              Powered by{" "}
              <Link href="https://austinbryantconsulting.com" className="hover:text-white">
                Austin Bryant Consulting
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Help Button */}
      <Link
        href="/contact"
        className="fixed right-0 top-1/2 -translate-y-1/2 bg-[#8B2E1A] text-white px-4 py-8 -mr-4 hover:mr-0 transition-all duration-300 rounded-l-lg writing-vertical"
        style={{ writingMode: 'vertical-rl' }}
      >
        GET HELP NOW
      </Link>
    </footer>
  )
}
