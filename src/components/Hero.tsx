export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Jamal Clair</h1>
        <h2 className="text-2xl text-gray-600 mb-8">Software Engineer</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          Experienced Software Developer adept in bringing forth expertise in design, 
          installation, testing and maintenance of software systems. Proficient in 
          various platforms, languages, and embedded systems.
        </p>
        <div className="mt-8 space-x-4">
          <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Contact Me
          </a>
          <a href="#experience" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
            View Experience
          </a>
        </div>
      </div>
    </section>
  )
}