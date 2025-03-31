import React from 'react'

const ProjectCard = ({ project }) => {
  return (
    <div className="relative block rounded-xl border-[1px] border-white/20 bg-dark-80 backdrop-blur-md overflow-hidden">
      <div className="p-6">
        {/* Header with logo and info button */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <img
              src={project.logo}
              alt={`${project.name} logo`}
              className="w-8 h-8 rounded-full object-cover"
            />
            <h3 className="font-fk-screamer text-xl font-bold">{project.name}</h3>
          </div>

          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-800/50 hover:bg-gray-800/80 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium rounded-lg bg-gray-800/50 text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-white/80 line-clamp-3">
          {project.description}
        </p>
      </div>
    </div>
  )
}

export default ProjectCard
