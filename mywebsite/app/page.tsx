import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#f8f5f2] text-black">

      {/* Top Bar */}
      <div className="bg-black text-white px-6 py-2 flex justify-between text-sm">
        <div className="flex gap-6">
          <p>📞 9266089003</p>
          <p>✉️ tagandship26@gmail.com</p>
        </div>

        <div>
          <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Tag & Ship"
              width={80}
              height={80}
            />

            <div>
              <h1 className="text-2xl font-bold text-[#8b5e3c]">
                TAG & SHIP
              </h1>

              <p className="text-sm tracking-[4px] text-[#d48a1d]">
                SINCE 2026
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 font-medium">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Why Us</a>
            <a href="#">Contact</a>
          </nav>

          <button className="bg-[#c57a1f] text-white px-5 py-3 rounded-xl font-semibold hover:scale-105 transition">
            Call Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <div>
            <span className="bg-[#8b5e3c] px-4 py-2 rounded-full text-sm">
              Packaging & Logistics Solutions
            </span>

            <h2 className="text-6xl font-bold mt-6 leading-tight">
              Smart Packaging.
              <br />
              Reliable Logistics.
            </h2>

            <p className="text-gray-300 mt-6 text-lg leading-8">
              Helping D2C brands improve packaging quality,
              reduce return rates, manage inventory, and ensure
              smooth dispatch operations.
            </p>

            <div className="flex gap-5 mt-8">
              <button className="bg-[#c57a1f] px-6 py-4 rounded-2xl font-semibold hover:scale-105 transition">
                Our Services
              </button>

              <button className="border border-white px-6 py-4 rounded-2xl font-semibold hover:bg-white hover:text-black transition">
                Contact Us
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200&auto=format&fit=crop"
              className="rounded-3xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="-mt-12 px-6">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl p-10 grid md:grid-cols-4 gap-8">

          {[
            "On-Time Delivery",
            "Secure Packaging",
            "Inventory Management",
            "24/7 Support",
          ].map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="font-bold text-xl text-[#8b5e3c]">
                {item}
              </h3>

              <p className="text-gray-600 mt-2">
                Professional logistics and packaging support.
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              End-to-End Solutions
            </h2>

            <p className="text-gray-600 mt-4 text-lg">
              Smart services for packaging, logistics, and operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Packaging Optimization",
              "Inventory Management",
              "Dispatch Support",
              "Return Reduction",
              "Warehouse Coordination",
              "Customer Experience",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition"
              >
                <h3 className="text-2xl font-bold text-[#8b5e3c]">
                  {service}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  Improve operational efficiency and deliver
                  better customer satisfaction.
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-3xl font-bold text-[#d48a1d]">
              TAG & SHIP
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              Delivering trust through smart packaging and reliable logistics solutions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <p>📞 9266089003</p>
            <p className="mt-2">✉️ tagandship26@gmail.com</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Location
            </h3>

            <p>India</p>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          © 2026 Tag & Ship. All Rights Reserved.
        </div>
      </footer>

    </div>
  );
}