import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          MyApp
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/profile" className="hover:underline">
            Profile
          </Link>
          <Link href="/products/1" className="hover:underline">
            Products
          </Link>
        </div>
      </div>
    </nav>
  )
}