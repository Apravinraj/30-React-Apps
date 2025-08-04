import './App.css'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'
function App() {
  

  return (
    <div className='flex min-h-svh flex-col items-center justify-center'>
      <Home></Home>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  )
}

export default App
