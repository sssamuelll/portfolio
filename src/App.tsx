import { Routes, Route, Navigate } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { WritingList } from './pages/WritingList'
import { Post } from './pages/Post'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/writing" element={<WritingList />} />
        <Route path="/writing/:slug" element={<Post />} />
        <Route path="/sound" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
