export default function Hero () {
    return (

<section className="bg-gray-100 py-20 px-4 text-center">
  <div className="max-w-4xl mx-auto">
    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
      Welcome to Our Website
    </h1>
    <p className="text-lg md:text-xl text-gray-600 mb-8">
      We provide high quality services to help you grow your business.
    </p>
    <div className="flex justify-center gap-4">
      <a
        href="/About"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Learn More
      </a>
      <a
        href="/Contact-Us"
        className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
      >
        Contact Us
      </a>
    </div>
  </div>

</section>

)
}

