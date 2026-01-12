// import { Container, Card, Button } from './components/ui'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import SkipLink from './components/SkipLink';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Header from './components/Header';

function App() {

  return (
    <BrowserRouter>
      <SkipLink />
      <Header />

      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  )
}

export default App
