import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PlumbingRepair() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-6 text-4xl font-bold text-red-800">Plumbing Repair Services you can trust</h2>
            <p className="mb-6 text-gray-700">
              There are so many things that can go wrong with your plumbing. That's why we cover a wide range of
              services to ensure your plumbing system functions the way it should. There's nothing we can't fix when it
              comes to plumbing repairs. We've got every aspect of repair down to a science.
            </p>
            <Button asChild className="bg-red-700 hover:bg-red-800">
              <Link href="/services">Learn More</Link>
            </Button>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Plumbing repair tools"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
