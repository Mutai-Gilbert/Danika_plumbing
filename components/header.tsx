import Link from "next/link"
import { Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react"
import MobileMenu from "./mobile-menu"
import BackgroundWrapper from "./background-wrapper"

const Header = () => {
  return (
    <BackgroundWrapper>
      <header className="fixed w-full z-50 transition-all duration-300">
        <nav className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-light tracking-wider text-white">
              DANIKA PLUMBING
            </Link>
            
            <div className="hidden md:flex items-center justify-center space-x-12">
              <Link href="/" className="text-white/90 hover:text-white transition-colors text-sm tracking-wide">
                Home
              </Link>
              <Link href="/about" className="text-white/90 hover:text-white transition-colors text-sm tracking-wide">
                About
              </Link>
              <Link href="/services" className="text-white/90 hover:text-white transition-colors text-sm tracking-wide">
                Services
              </Link>
              <Link href="/contact" className="text-white/90 hover:text-white transition-colors text-sm tracking-wide">
                Contact
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <a href="tel:(425) 374-1557" className="text-white/90 hover:text-white transition-colors text-sm">
                (425) 374-1557
              </a>
              <Link 
                href="/schedule"
                className="border border-white/30 text-white px-6 py-2 text-sm tracking-wide hover:bg-white hover:text-black transition-all duration-300"
              >
                Schedule
              </Link>
            </div>

            <MobileMenu />
          </div>
        </nav>
      </header>
    </BackgroundWrapper>
  )
}

export default Header
