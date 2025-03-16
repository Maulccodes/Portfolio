export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "Python", "Java", "C", "PHP", "SQL"]
    },
    {
      title: "Web Technologies",
      skills: ["HTML5", "CSS3", "ASP.NET", "Web 2.0"]
    },
    {
      title: "Development Tools",
      skills: ["Microsoft Visual Studio", "Git"]
    },
    {
      title: "Operating Systems",
      skills: ["Windows", "macOS", "MVS"]
    }
  ]

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div key={skill} className="bg-blue-50 text-blue-700 px-3 py-1 rounded">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}