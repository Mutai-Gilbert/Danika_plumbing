import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Settings, Facebook, Twitter, Instagram } from "lucide-react"

const serviceAreas = [
  "Arlington", "Bothell", "Bellevue", "Des Moines", "Duvall", "Edmonds", "Fife", "Issaquah",
  "Kenmore", "Kent", "Kirkland", "Lake City", "Lake Stevens", "Lynnwood", "Maple Valley",
  "Marysville", "Mill Creek", "Monroe", "Mountlake Terrace", "Mukilteo", "Puyallup",
  "Sammamish", "Shoreline", "Snohomish", "Seattle", "Renton", "Redmond", "Tacoma", "West Seattle", "Woodinville"
];

export default function Footer() {
  return (
    <footer className="relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundImage: 'url(/footer.jpg)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Map Section */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="w-full max-w-5xl h-[320px] md:h-[400px] overflow-hidden rounded-2xl mt-8 mb-12 shadow-lg border border-white/10">
          <iframe
            title="Danika Plumbing Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.7638882736766!2d-122.28024242326755!3d47.91852697120619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549006745c079f9f%3A0x4b981b7c0c04dc94!2s11015%20Airport%20Rd%2C%20Everett%2C%20WA%2098204%2C%20USA!5e0!3m2!1sen!2s!4v1709732221657!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Info Cards Section */}
      <div className="relative z-10 container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Head Office */}
        <div className="bg-black/80 backdrop-blur-md rounded-2xl shadow-lg flex flex-col items-start p-8 min-h-[320px] text-white">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
            <MapPin className="w-10 h-10 text-[#b04a2b] opacity-60" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Head Office</h3>
          <Link href="https://maps.google.com/?q=11015+Airport+Rd,+Everett,+WA+98204" target="_blank" className="underline mb-1 text-white hover:text-white/80">
            11015 Airport Road<br />Everett, WA 98204
          </Link>
          <Link href="https://maps.google.com/?q=11015+Airport+Rd,+Everett,+WA+98204" target="_blank" className="underline text-sm mb-2 text-white hover:text-white/80">
            View larger map →
          </Link>
        </div>
        {/* Get in Touch */}
        <div className="bg-black/80 backdrop-blur-md rounded-2xl shadow-lg flex flex-col items-start p-8 min-h-[320px] text-white">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
            <Phone className="w-10 h-10 text-[#b04a2b] opacity-60" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Get in Touch</h3>
          <a href="tel:(425) 374-1557" className="font-bold text-lg mb-1 text-white hover:text-white/80">(425) 374-1557</a>
          <a href="mailto:office@danikaplumbing.com" className="font-bold underline mb-2 text-white hover:text-white/80">office@danikaplumbing.com</a>
        </div>
        {/* Service Areas */}
        <div className="bg-black/80 backdrop-blur-md rounded-2xl shadow-lg flex flex-col items-start p-8 min-h-[320px] text-white">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
            <Settings className="w-10 h-10 text-[#b04a2b] opacity-60" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Service Areas</h3>
          <div className="flex flex-wrap gap-x-2 gap-y-1 text-white">
            {serviceAreas.map((area, i) => (
              <Link key={area} href={`#${area.toLowerCase().replace(/\s+/g, '-')}`} className="underline hover:text-white/80">
                {area}{i < serviceAreas.length - 1 ? ',' : ''}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* HomeAdvisor Badge, Logo, Tagline, Socials, and Legal */}
      <div className="relative z-10 w-full py-16 px-4 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Contact Us */}
          <div>
            <h4 className="font-semibold mb-4 tracking-wide">CONTACT US</h4>
            <ul className="space-y-2 text-sm">
              <li>Phone: <a href="tel:(425) 374-1557" className="hover:underline">(425) 374-1557</a></li>
              <li><a href="mailto:office@danikaplumbing.com" className="hover:underline">office@danikaplumbing.com</a></li>
              <li><Link href="/contact" className="hover:underline">GET IN TOUCH →</Link></li>
            </ul>
          </div>
          {/* Company/Tagline & Socials */}
          <div className="flex flex-col h-full justify-between">
            <div>
              <h4 className="font-semibold mb-4 tracking-wide">DANIKA PLUMBING</h4>
              <p className="text-sm mb-6">Quick Service, Quality Materials, Realistic Price</p>
              <p className="text-xs mb-6">© 2024 Danika Plumbing, LLC. | LICENSE# <Link href="https://lni.wa.gov/licensing-permits/contractors/hiring-a-contractor/" className="underline">DANIKPL839PF</Link></p>
              <p className="text-xs">Powered by <Link href="https://austinbryantconsulting.com" className="underline">Austin Bryant Consulting</Link></p>
            </div>
            <div className="flex space-x-6 mt-8">
              <Link href="https://facebook.com" className="text-white/80 hover:text-white"><Facebook className="w-6 h-6" /></Link>
              <Link href="https://twitter.com" className="text-white/80 hover:text-white"><Twitter className="w-6 h-6" /></Link>
              <Link href="https://instagram.com" className="text-white/80 hover:text-white"><Instagram className="w-6 h-6" /></Link>
              <Link href="https://wordpress.com" className="text-white/80 hover:text-white"><span className="text-2xl font-bold">W</span></Link>
            </div>
          </div>
        </div>
      </div>

      {/* Help Button */}
      <Link
        href="/contact"
        className="fixed right-0 top-1/2 -translate-y-1/2 bg-[#b04a2b] text-white px-4 py-8 -mr-4 hover:mr-0 transition-all duration-300 rounded-l-lg writing-vertical"
        style={{ writingMode: 'vertical-rl' }}
      >
        GET HELP NOW
      </Link>
    </footer>
  )
}