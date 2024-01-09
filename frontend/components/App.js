import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './Header'
import MainContent from './MainContent'
import APODDetails from './APODDetails'
import Footer from './Footer'

function App() {
  const [apodData, setApodData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(response => {
        console.log(response.data)
        setApodData(response.data)
        setIsLoading(false)
      })
      .catch(err => {
        console.error(err)
        setError(err)
        setIsLoading(false)
      })
      
  }, [])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className="App">
      <Header />
      <MainContent apodData={apodData} />
      <APODDetails apodData={apodData} />
      <Footer />
    </div>
  )
}

export default App
