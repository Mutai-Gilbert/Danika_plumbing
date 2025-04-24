import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ContactCTA() {
  return (
    <section className="bg-red-700 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="Plumber icon"
              width={100}
              height={100}
              className="mr-6 hidden md:block"
            />
            <div>
              <h2 className="text-3xl font-bold">24/7 Emergency Services</h2>
              <p className="text-xl">Quick Service. Quality Materials. Realistic Prices.</p>
            </div>
          </div>
          <Button asChild size="lg" className="bg-white text-red-700 hover:bg-gray-100">
            <Link href="#contact-form">Get in touch</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
