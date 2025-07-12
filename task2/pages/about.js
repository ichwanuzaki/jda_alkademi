import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <section className="py-12">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4">
            Founded in 2023, our company has been dedicated to providing excellent services to our customers.
            We started as a small team with big dreams and have grown into a thriving business.
          </p>
          <p>
            Our mission is to deliver high-quality products and services that exceed customer expectations.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((member) => (
              <div key={member} className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-24 h-24 bg-gray-300 rounded-full mb-4 mx-auto"></div>
                <h3 className="text-xl font-semibold text-center">Team Member {member}</h3>
                <p className="text-gray-600 text-center">Position {member}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Integrity</h3>
              <p>We believe in doing business with honesty and transparency.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Innovation</h3>
              <p>We constantly seek new ways to improve our products and services.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Customer Focus</h3>
              <p>Our customers are at the heart of everything we do.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}