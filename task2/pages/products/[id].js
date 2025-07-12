import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

const productData = {
  1: {
    name: 'Premium Laptop',
    price: 1299.99,
    description: 'High-performance laptop with the latest processor and 16GB RAM.',
    features: ['15.6" 4K Display', '512GB SSD', '16GB DDR4 RAM', 'Backlit Keyboard'],
    image: '/images/laptop.jpg'
  },
  2: {
    name: 'Wireless Headphones',
    price: 199.99,
    description: 'Noise-cancelling wireless headphones with 30-hour battery life.',
    features: ['Active Noise Cancellation', 'Bluetooth 5.0', 'Built-in Microphone', 'Foldable Design'],
    image: '/images/headphones.jpg'
  },
  3: {
    name: 'Smartphone Pro',
    price: 899.99,
    description: 'Flagship smartphone with advanced camera system.',
    features: ['6.7" AMOLED Display', 'Triple Camera System', '128GB Storage', '5G Connectivity'],
    image: '/images/smartphone.jpg'
  }
}

export default function ProductDetail() {
  const router = useRouter()
  const { id } = router.query
  const product = productData[id]

  if (!product) {
    return (
      <Layout>
        <div className="py-12 text-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
          <p className="mt-4">The product you're looking for doesn't exist.</p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <section className="py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-8 rounded-lg flex items-center justify-center">
              <div className="w-64 h-64 bg-gray-300 rounded-md"></div>
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-2xl text-blue-600 font-semibold mb-4">${product.price.toFixed(2)}</p>
              <p className="mb-6">{product.description}</p>
              
              <h2 className="text-xl font-semibold mb-2">Features</h2>
              <ul className="list-disc pl-6 mb-6 space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
            <div className="space-y-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
                Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.
              </p>
              <p>
                Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
                ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.
              </p>
              <p>
                Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet
                convallis ultricies. Mauris augue massa, ultricies non ligula.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}