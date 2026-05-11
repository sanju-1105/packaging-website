export default function PackagingLogisticsWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Smart Packaging & Logistics Solutions
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Helping D2C brands improve packaging quality, reduce return rates,
              manage inventory, and ensure smooth dispatch operations.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
                Get Started
              </button>
              <button className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-black transition">
                Contact Us
              </button>
            </div>
          </div>

          <div className="bg-gray-900 rounded-3xl p-8 shadow-2xl">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-2xl p-6">
                <h3 className="text-3xl font-bold">98%</h3>
                <p className="text-gray-400 mt-2">On-Time Dispatch</p>
              </div>
              <div className="bg-gray-800 rounded-2xl p-6">
                <h3 className="text-3xl font-bold">40%</h3>
                <p className="text-gray-400 mt-2">Reduced Returns</p>
              </div>
              <div className="bg-gray-800 rounded-2xl p-6">
                <h3 className="text-3xl font-bold">24/7</h3>
                <p className="text-gray-400 mt-2">Operations Support</p>
              </div>
              <div className="bg-gray-800 rounded-2xl p-6">
                <h3 className="text-3xl font-bold">100+</h3>
                <p className="text-gray-400 mt-2">Businesses Supported</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end support for packaging, logistics, inventory, and order management.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Packaging Optimization',
                desc: 'Improve customer experience with secure and premium packaging solutions.',
              },
              {
                title: 'Inventory Management',
                desc: 'Track inventory accurately and reduce stock mismatches efficiently.',
              },
              {
                title: 'Dispatch Support',
                desc: 'Ensure timely order dispatch and reduce operational delays.',
              },
              {
                title: 'Return Reduction',
                desc: 'Minimize returns caused by damaged or incorrect packaging.',
              },
              {
                title: 'Order Accuracy',
                desc: 'Reduce wrong order issues and improve customer satisfaction.',
              },
              {
                title: 'Warehouse Coordination',
                desc: 'Smooth coordination between operations, logistics, and fulfillment teams.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li>✔ Fast and efficient operational support</li>
              <li>✔ Focus on reducing return losses</li>
              <li>✔ Better customer packaging experience</li>
              <li>✔ Data-driven inventory tracking</li>
              <li>✔ Reliable dispatch and coordination</li>
            </ul>
          </div>

          <div className="bg-gray-100 rounded-3xl p-10 shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Grow Your Operations</h3>
            <p className="text-gray-600 mb-6">
              We help brands streamline packaging and logistics operations to improve customer satisfaction and operational efficiency.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
              Book a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Let’s Work Together</h2>
          <p className="text-gray-300 mb-10">
            If you are looking to improve packaging quality, reduce return rates, or streamline logistics operations, contact us today.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-gray-900 rounded-2xl p-6">
              <h4 className="font-semibold text-xl mb-2">Phone</h4>
              <p className="text-gray-400">+91 XXXXX XXXXX</p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-6">
              <h4 className="font-semibold text-xl mb-2">Email</h4>
              <p className="text-gray-400">yourmail@email.com</p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-6">
              <h4 className="font-semibold text-xl mb-2">Location</h4>
              <p className="text-gray-400">Delhi, India</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
