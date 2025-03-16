export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold dark:text-white">Jamal Clair</h1>
          <div className="flex items-center space-x-6">
            <a href="#about" className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">About</a>
            <a href="#experience" className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Experience</a>
            <a href="#skills" className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Skills</a>
            <a href="#contact" className="hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}