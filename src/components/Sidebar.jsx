import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 w-[240px] h-screen bg-dark pt-20 border-r border-white/10">
      <div className="flex flex-col h-full">
        {/* Main navigation */}
        <nav className="px-4 py-6 space-y-6">
          <Link to="/" className="flex items-center space-x-3 text-white/80 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span>Home</span>
          </Link>

          <Link to="/community" className="flex items-center space-x-3 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            <span>Community</span>
          </Link>

          <a href="#" className="flex items-center space-x-3 text-white/80 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17A3.001 3.001 0 015 5zm2.45 8.335A3.998 3.998 0 016 17.25c-1.4 0-2.646-.698-3.393-1.765a1 1 0 01.572-1.485h.008a9.25 9.25 0 015.21 0h.008a1 1 0 01.572 1.485A3.998 3.998 0 019.25 17.25c-.854 0-1.638-.333-2.22-.877a1 1 0 01-.173-.038zM14 9a1 1 0 00-1 1v.673a1 1 0 01-.427.827L11 12l1.573.5a1 1 0 01.427.827V14a1 1 0 102 0v-.673a1 1 0 01.427-.827L17 12l-1.573-.5a1 1 0 01-.427-.827V10a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>Rewards</span>
          </a>

          <a href="#" className="flex items-center space-x-3 text-white/80 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            <span>Settings</span>
          </a>
        </nav>

        {/* Footer area */}
        <div className="mt-auto p-4 border-t border-white/10">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-project-600"></div>
            <span className="text-sm text-white/80">Guest User</span>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
