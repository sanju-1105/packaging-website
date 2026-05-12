export default function Contact() {
  return (
    <div className="p-20 text-center">

      <h1 className="text-5xl font-bold">
        Contact Us
      </h1>

      <div className="mt-10 space-y-5 text-xl">

        <p>📞 9266089003</p>

        <p>✉️ tagandship26@gmail.com</p>

        <p>📍 India</p>

      </div>

      <a
        href="https://wa.me/919266089003"
        target="_blank"
        className="inline-block mt-10 bg-green-500 text-white px-8 py-4 rounded-2xl text-xl font-bold"
      >
        Chat on WhatsApp
      </a>

    </div>
  );
}