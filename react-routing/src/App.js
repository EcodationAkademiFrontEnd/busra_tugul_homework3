import './index.css'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <div className="mt-5 container border">
      <header className='mt-3'>
        <Navbar />
      </header>
      <Outlet />
      <footer className="bg-dark text-light text-center">2024</footer>
    </div>
  )
}

export default App
