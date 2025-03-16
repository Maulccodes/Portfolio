export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-xl font-semibold">Helpdesk Analyst</h3>
            <p className="text-gray-600">Duke Energy | Oct 2017 - Present</p>
            <ul className="mt-4 list-disc list-inside text-gray-700">
              <li>Diagnose, Troubleshoot, and Repair computer functions</li>
              <li>Grant access to Databases within company structure w/ Active Directory</li>
              <li>Create Knowledge Base Articles to provide fix for system issues</li>
              <li>Create Incidents tickets using Remedy system software</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-xl font-semibold">Binary Tech Assistant</h3>
            <p className="text-gray-600">Shutterfly (via Adecco Staffing) | Oct 2017 - Dec 2017</p>
            <ul className="mt-4 list-disc list-inside text-gray-700">
              <li>Diagnose, Troubleshoot, and Repair printing press machines</li>
              <li>Accurately respond to Incident Tickets</li>
              <li>Create a log of documented work completion</li>
              <li>Install software pertaining to specific machines</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-xl font-semibold">Computer Programmer</h3>
            <p className="text-gray-600">Self-Employed | Jun 2009 - Present</p>
            <ul className="mt-4 list-disc list-inside text-gray-700">
              <li>Create plan and design for websites</li>
              <li>Develop websites coding in HTML, CSS, JavaScript</li>
              <li>Implemented transition for services from QA to PROD</li>
              <li>Tested and checked websites functionality and performance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}