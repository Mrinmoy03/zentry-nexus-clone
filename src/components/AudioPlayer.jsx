import { useState, useRef, useEffect } from 'react'

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Create an audio element if we had the actual sound file
  useEffect(() => {
    audioRef.current = new Audio()
    // Would put actual audio URL here if available
    // audioRef.current.src = "audio-url-here"
    audioRef.current.loop = true

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [])

  return (
    <button
      className="flex h-fit w-fit cursor-pointer items-center gap-2 absolute bottom-6 left-8 z-10"
      onClick={togglePlay}
    >
      <div className="flex h-8 w-8 items-center gap-1 pb-[0.25rem]">
        <div className={`playing__bar playing__bar2 ${isPlaying ? 'animate-playing' : ''}`}
             style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}></div>
        <div className={`playing__bar playing__bar4 ${isPlaying ? 'animate-playing' : ''}`}
             style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}></div>
      </div>
      <div className="w-fit text-xs opacity-60 sm:text-sm">
        <b>NEXUS</b> <span className="text-[8px]">OST</span>
      </div>
    </button>
  )
}

export default AudioPlayer
