import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ProjectCard from '../components/ProjectCard'
import CharacterDialog from '../components/CharacterDialog'

const CommunityPage = () => {
  const [showDialog, setShowDialog] = useState(true)
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "INJECTIVE",
      logo: "https://ext.same-assets.com/4145884065/3846558632.png",
      tags: ["RWA", "Layer 1", "DeFi", "AI"],
      description: "The future of finance starts here. Unlock limitless on-chain real world assets, markets & freedom on the only chain built for finance.",
    },
    {
      id: 2,
      name: "OX.FUN",
      logo: "https://ext.same-assets.com/4145884065/1752359744.png",
      tags: ["Crypto", "Trading", "Memecoins"],
      description: "A futures exchange supporting futures trading up to 100x leverage on over 350 markets and accepting 800+ coins as collateral.",
    },
    {
      id: 3,
      name: "DOODIPALS",
      logo: "https://ext.same-assets.com/4145884065/3519429358.png",
      tags: ["Crypto", "Memecoins", "Community"],
      description: "Welcome to DoodiPals! Powered by Apeiron, join the mission to spread joy, playfulness & positivity — Doodifying the world one smile at a time!",
    },
    {
      id: 4,
      name: "CUTEASIANGIRL",
      logo: "https://ext.same-assets.com/4145884065/2217558232.png",
      tags: ["Crypto", "Memecoins", "Community"],
      description: "Cute Asian Girl is a community-driven crypto project focused on fun, creativity, and memes, rewarding participation and spreading joy!",
    },
  ])

  const closeDialog = () => {
    setShowDialog(false)
  }

  return (
    <div className="min-h-screen bg-grey-900">
      {/* Navigation */}
      <Navbar />

      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-8 ml-[240px]">
          <h1 className="text-2xl font-semibold mb-6">Community Projects</h1>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Innovation section */}
          <div className="mt-12">
            <h2 className="text-xl font-medium mb-4">Explore innovations</h2>
            <div className="flex gap-2">
              {/* User profile icons would go here */}
              <div className="w-8 h-8 rounded-full bg-project-500"></div>
              <div className="w-8 h-8 rounded-full bg-blue-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Character Dialog */}
      {showDialog && <CharacterDialog onClose={closeDialog} />}
    </div>
  )
}

export default CommunityPage
