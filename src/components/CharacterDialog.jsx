import React from 'react'
import { Link } from 'react-router-dom'

const CharacterDialog = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 grid h-full place-items-center overflow-visible bg-black/50 backdrop-blur-sm">
      <div className="relative block h-fit max-h-[70dvh] w-fit overflow-visible rounded-xl border-[1.5px] bg-black/50 backdrop-blur-md"
           style={{ border: '1px solid rgb(0, 194, 255)' }}>

        {/* Dialog Content */}
        <section className="flex h-full flex-col items-start gap-3 overflow-auto p-6 sm:flex-row">
          <p className="text-base leading-[32px] text-[rgba(223,223,242,0.6)]">AZUL:</p>

          <article className="flex flex-col gap-0 space-y-6 text-sm font-medium text-typo-primary">
            <div>
              <p>A Guest User !?</p>
              <p>Azul don't like talking to strangers.</p>
              <p>Just one quick info.</p>
            </div>

            <div className="font-bold text-indigo-300">
              <p>Nexus will transform your</p>
              <p>daily X activity into rewards.</p>
            </div>

            <div>
              <p>Azul hopes you Connect X</p>
              <p>with Nexus soon!👀</p>
            </div>
          </article>
        </section>

        {/* Button Footer */}
        <footer className="absolute left-1/2 flex gap-3" style={{ transform: 'translateX(-50%) translateY(55%)' }}>
          <button
            className="inline-flex h-10 w-fit items-center justify-center rounded-xl bg-project-600 px-3 py-2.5 text-sm font-medium text-white transition-all hover:bg-project-500"
            onClick={onClose}
          >
            Explore Nexus
          </button>
        </footer>

        {/* Character Animation */}
        <div className="absolute -bottom-12 -left-32 z-10 -translate-x-1/2 md:-bottom-28 md:-left-60">
          <img
            src="https://cdn.guildfi.com/image/upload/v1723527152/radiant/spectre/Azul_Idle.webp"
            alt="Azul Character"
            className="h-52 w-52 object-cover md:h-[360px] md:w-[360px]"
            style={{ transform: 'scaleX(-1)' }}
          />
        </div>
      </div>
    </div>
  )
}

export default CharacterDialog
