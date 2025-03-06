export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-6">
            I am a passionate Software Engineer based in Charlotte, with extensive experience
            in software development and system maintenance. My journey in technology has equipped
            me with a diverse skill set spanning multiple programming languages and platforms.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Currently pursuing my education in Software Engineering at Central Piedmont
            Community College while working as a Helpdesk Analyst at Duke Energy, I bring
            a unique blend of academic knowledge and practical experience to my work.
          </p>
          <div className="text-center mt-8">
            <a 
              href="#experience" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}