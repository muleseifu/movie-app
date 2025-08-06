import './App.css'
import Favorites from './pages/Favorites.jsx';
import Home from './pages/Home.jsx'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </main>


)
    
}

export default App
