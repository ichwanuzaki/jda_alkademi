import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <section className="py-12">
        <h1 className="text-4xl font-bold mb-6">Welcome to My Next.js App</h1>
        <p className="text-lg mb-8">This is a demo application showcasing Next.js features.</p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Feature One</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Feature Two</h2>
            <p>Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.</p>
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Professional Team</li>
              <li>24/7 Support</li>
              <li>Competitive Pricing</li>
              <li>Quality Assurance</li>
            </ul>
          </section>
        </div>
      </section>
    </Layout>
  )
}