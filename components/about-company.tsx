import Link from "next/link"
import { Phone } from "lucide-react"

export default function AboutCompany() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-4xl font-bold text-red-800">Your Preferred Choice of Plumbers in Everett WA</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-700">
            Danika Plumbing LLC has been serving Snohomish County and beyond since 2009. We pride ourselves in providing
            the best Everett plumbing services right through to the Seattle area and as far south as Tacoma.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-700">
            We cover a wide range of plumbing repair services including water lines, sewer repair, and water heater
            replacement, repair, and installation.
          </p>
        </div>

        <div className="mt-8 text-center">
          <h3 className="mb-4 text-xl font-medium text-gray-800">Need Help Now? Call Us!</h3>
          <Link
            href="tel:(425)374-1557"
            className="inline-flex items-center rounded-md bg-red-700 px-6 py-3 text-lg font-medium text-white shadow-md transition-colors hover:bg-red-800"
          >
            <Phone className="mr-2 h-5 w-5" />
            (425) 374-1557
          </Link>
        </div>
      </div>
    </section>
  )
}
