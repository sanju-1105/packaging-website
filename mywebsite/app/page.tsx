import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#f8f5f2] text-black min-h-screen">

      <div className="bg-black text-white px-6 py-3 flex justify-between items-center text-sm">
        <div className="flex gap-6">
          <a href="tel:9266089003">📞 9266089003</a>

          <a href="mailto:tagandship26@gmail.com">
            ✉️ tagandship26@gmail.com
          </a>
        </div>

        <div>
          <p>Mon - Sat: 9 AM - 7 PM</p>
        </div>
      </div>

      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Tag & Ship"
              width={70}
              height={70}
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
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/why-us">Why Us</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <a
            href="https://wa.me/919266089003"
            target="_blank"
            className="bg-[#c57a1f] text-white px-5 py-3 rounded-xl font-semibold"
          >
            WhatsApp Us
          </a>
        </div>
      </header>

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
              reduce return rates, manage inventory,
              and ensure smooth dispatch operations.
            </p>

            <div className="flex gap-5 mt-8">
              <Link
                href="/services"
                className="bg-[#c57a1f] px-6 py-4 rounded-2xl font-semibold"
              >
                Our Services
              </Link>

              <Link
                href="/contact"
                className="border border-white px-6 py-4 rounded-2xl font-semibold"
              >
                Contact Us
              </Link>
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

      <footer className="bg-black text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-3xl font-bold text-[#d48a1d]">
              TAG & SHIP
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              Delivering trust through smart packaging and logistics.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p>📞 9266089003</p>
            <p className="mt-2">✉️ tagandship26@gmail.com</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

            <div className="flex flex-col gap-2">
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

        </div>
      </footer>

      <a
        href="https://wa.me/919266089003"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-4 rounded-full shadow-2xl text-lg font-bold"
      >
        WhatsApp
      </a>

    </div>
  );
}