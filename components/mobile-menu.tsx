"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[350px]">
        <div className="flex flex-col">
          <div className="flex items-center justify-between pb-4">
            <div className="text-lg font-bold">Menu</div>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>

          <div className="mb-4 flex flex-col space-y-2">
            <div className="text-sm font-medium text-gray-600">Need Help Now? Call Us!</div>
            <Link href="tel:(425)374-1557" className="text-lg font-bold text-red-700">
              (425) 374-1557
            </Link>
          </div>

          <Button asChild className="mb-6 bg-red-700 hover:bg-red-800">
            <Link href="/schedule">Schedule Online</Link>
          </Button>

          <nav className="flex flex-col space-y-1">
            <Link
              href="/"
              className="rounded-md px-3 py-2 text-gray-800 hover:bg-red-50 hover:text-red-700"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="rounded-md px-3 py-2 text-gray-800 hover:bg-red-50 hover:text-red-700"
              onClick={() => setOpen(false)}
            >
              About Us
            </Link>

            <Collapsible open={servicesOpen} onOpenChange={setServicesOpen} className="w-full">
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-gray-800 hover:bg-red-50 hover:text-red-700">
                Services
                {servicesOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </CollapsibleTrigger>
              <CollapsibleContent className="ml-4 mt-1 space-y-1">
                <Link
                  href="/services/drain-cleaning"
                  className="block rounded-md px-3 py-2 text-gray-800 hover:bg-red-50 hover:text-red-700"
                  onClick={() => setOpen(false)}
                >
                  Drain Cleaning
                </Link>
                <Link
                  href="/services/water-heaters"
                  className="block rounded-md px-3 py-2 text-gray-800 hover:bg-red-50 hover:text-red-700"
                  onClick={() => setOpen(false)}
                >
                  Water Heaters
                </Link>
                <Link
                  href="/services/water-lines"
                  className="block rounded-md px-3 py-2 text-gray-800 hover:bg-red-50 hover:text-red-700"
                  onClick={() => setOpen(false)}
                >
                  Water Lines
                </Link>
                <Link
                  href="/services/sewer-repair"
                  className="block rounded-md px-3 py-2 text-gray-800 hover:bg-red-50 hover:text-red-700"
                  onClick={() => setOpen(false)}
                >
                  Sewer Repair
                </Link>
              </CollapsibleContent>
            </Collapsible>

            <Link
              href="/blog"
              className="rounded-md px-3 py-2 text-gray-800 hover:bg-red-50 hover:text-red-700"
              onClick={() => setOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="rounded-md px-3 py-2 text-gray-800 hover:bg-red-50 hover:text-red-700"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}
