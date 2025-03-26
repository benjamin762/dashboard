import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { useSelector } from 'react-redux'

function App() {
  const loggedIn = useSelector((state) => state.data.loggedIn)

  return (
    <>
      <Header/>
      { loggedIn ? 
      <Outlet/>
      : <p className='text-center p-48 text-2xl'>Logga in för att se dashboarden.</p>
      }
      <Footer/>
    </>
  )
}

export default App
