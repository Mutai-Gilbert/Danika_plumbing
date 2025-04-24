import Link from "next/link"
import BackgroundWrapper from "./background-wrapper"

const Hero = () => {
  return (
    <BackgroundWrapper>
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-light text-white mb-6 tracking-wide">
              DANIKA PLUMBING
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 tracking-wide font-light">
              Where luxury meets excellence. We transform the plumbing experience 
              from ordinary to extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="#services" 
                className="border border-white/30 bg-transparent text-white px-8 py-4 text-sm tracking-wide hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center justify-center"
              >
                DISCOVER MORE
              </Link>
              <Link 
                href="/contact" 
                className="border border-white/30 bg-white text-black px-8 py-4 text-sm tracking-wide hover:bg-transparent hover:text-white transition-all duration-300 inline-flex items-center justify-center"
              >
                GET HELP NOW
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-white/70 text-sm tracking-widest mb-4">SCROLL</span>
          <div className="w-px h-16 bg-white/30" />
        </div>
      </div>
    </BackgroundWrapper>
  )
}

export default Hero
