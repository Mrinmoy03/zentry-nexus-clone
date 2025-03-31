import { useState } from 'react'
import { Link } from 'react-router-dom'
import AudioPlayer from '../components/AudioPlayer'

const LandingPage = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false)
  const [isButtonPressed, setIsButtonPressed] = useState(false)

  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-black text-white">
      {/* Background Image */}
      <img
        alt="nexus-background"
        className="absolute inset-0 h-full w-full object-cover transition-all duration-1000"
        src="https://cdn.guildfi.com/image/upload/f_auto,c_auto,w_3840,q_auto/v1724920598/nexus_ss1_bg_27aa7f0d74.png?updated_at=2024-08-29T08:36:39.621Z"
      />

      <div className="h-full w-full" style={{ opacity: 1 }}>
        <div className="relative z-10 grid h-full w-full place-content-center">
          {/* Logo Section */}
          <div className="absolute w-full space-y-8 pt-[15%] text-center sm:pt-[12%] md:pt-[5%]" style={{ opacity: 1 }}>
            <div className="space-y-0.5">
              <div className="text-center font-fk-screamer text-[42px] font-bold uppercase leading-[100%] sm:text-[60px] lg:text-6xl">
                <p>n<span className="ink-trap">E</span>xus</p>
              </div>
              <p className="text-xs font-medium text-white/70">A social layer by Zentry.</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="mx-auto mt-28 w-fit space-y-7 px-6" style={{ opacity: 1 }}>
            <p className="text-center text-xl font-semibold">Transforming your daily X activity into rewards</p>
            <div className="mx-auto w-fit" style={{ opacity: 1 }}>
              <Link to="/community">
                <button
                  className="group relative flex items-center justify-center rounded-xl px-8 py-3 h-10 text-sm font-semibold text-white bg-dark-80 border border-white/30 backdrop-blur-2xl transition-all hover:opacity-85"
                  style={{
                    boxShadow: '0px 10px 10px 0px rgba(0, 0, 0, 0.1), 0px 4px 4px 0px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05)'
                  }}
                  onMouseEnter={() => setIsButtonHovered(true)}
                  onMouseLeave={() => {
                    setIsButtonHovered(false)
                    setIsButtonPressed(false)
                  }}
                  onMouseDown={() => setIsButtonPressed(true)}
                  onMouseUp={() => setIsButtonPressed(false)}
                >
                  Enter Nexus

                  {/* Glow effect on button press */}
                  <img
                    src="https://ext.same-assets.com/234786876/1697381214.png"
                    alt=""
                    className={`pointer-events-none absolute -top-1/2 left-0 !m-0 scale-125 select-none transition-all duration-300 ${isButtonPressed ? 'opacity-100' : 'opacity-0'}`}
                    width="183"
                    height="71"
                    style={{ width: '183.926px', height: '71.5234px' }}
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="absolute bottom-7 right-8 z-10 text-[11px] text-white/50">
          © Zentry 2025. All rights reserved.
        </p>

        {/* Audio Player */}
        <AudioPlayer />
      </div>
    </div>
  )
}

export default LandingPage
