import { useEffect, useState } from 'react'
import './App.css'
import { AppBar, DroneMap, FullScreenLoader } from './components'
import { LocationContext, CurrentLocationContextType } from './common'

function App() {
  const [location, setLocation] = useState<CurrentLocationContextType | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getUserLocation = () => {
      const options: PositionOptions = {
        timeout: 300000,
        enableHighAccuracy: isMobileDevice(),
        maximumAge: Infinity
      }

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.debug('Fetching position')
            const { longitude, latitude } = position.coords
            setLocation({ longitude, latitude, country: '' })
            setLoading(false)
          },
          (error) => {
            console.error('Error getting user location:', error)
            setLoading(false)
          },
          options
        )
      } else {
        console.error('Geolocation is not supported by your browser')
        setLoading(false)
      }
    }

    getUserLocation()
  }, [])

  const isMobileDevice = () => {
    const isTrue = /Mobi|Android/i.test(navigator.userAgent)
    console.debug(`isMobileDevice: ${isTrue}`)
    return isTrue
  }

  if (loading) {
    return (
      <FullScreenLoader />
    )
  }

  if (!location) {
    return <div>Unable to retrieve location.</div>
  }

  return (
    <div className="App">
      <LocationContext.Provider value={location}>
        <AppBar />
        <DroneMap />
      </LocationContext.Provider>
    </div>
  )
}

export default App