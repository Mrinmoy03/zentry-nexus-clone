import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-dark-80 backdrop-blur-md border-b border-white/10 z-50">
      <div className="flex items-center justify-between px-8 py-3">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <Link to="/" className="text-xl font-fk-screamer font-bold">
            NEXUS
          </Link>

          {/* Main navigation links */}
          <div className="hidden md:flex space-x-6 ml-8">
            <a href="#" className="text-white/70 hover:text-white text-sm font-medium">Explore</a>
            <a href="#" className="text-white/70 hover:text-white text-sm font-medium">Rewards</a>
            <a href="#" className="text-white/70 hover:text-white text-sm font-medium">Community</a>
          </div>
        </div>

        {/* Right side elements */}
        <div className="flex items-center space-x-4">
          {/* Connect button placeholder */}
          <button className="bg-project-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-project-500 transition-all">
            Connect X
          </button>

          {/* Profile icon placeholder */}
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
            <span className="text-xs">GU</span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
