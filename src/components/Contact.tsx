export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
            <a 
              href="mailto:maul754@gmail.com"
              className="text-blue-600 hover:text-blue-700 font-semibold block mt-2"
            >
              maul754@gmail.com
            </a>
          </div>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}