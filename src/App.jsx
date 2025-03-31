import { useState, useEffect } from 'react'
import LandingPage from './pages/LandingPage'
import CommunityPage from './pages/CommunityPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time to match the original site's behavior
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-grey-900">
        <div className="animate-pulse text-4xl font-fk-screamer text-white">
          NEXUS
        </div>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-grey-900 text-white">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/community" element={<CommunityPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
