import { Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { WritingList } from './pages/WritingList'
import { Post } from './pages/Post'
import { Sound } from './pages/Sound'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/writing" element={<WritingList />} />
        <Route path="/writing/:slug" element={<Post />} />
        <Route path="/sound" element={<Sound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
