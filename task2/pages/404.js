import Link from 'next/link'
import Layout from '../components/Layout'

export default function NotFound() {
  return (
    <Layout>
      <section className="py-12 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-6xl font-bold text-gray-800 mb-6">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-lg mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
              Go Home
            </Link>
            <Link href="/contact" className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50 transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}