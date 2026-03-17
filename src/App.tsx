import { Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { WritingList } from './pages/WritingList'
import { Post } from './pages/Post'
import { NotesList } from './pages/NotesList'
import { NoteDetail } from './pages/NoteDetail'
import { Sound } from './pages/Sound'
import { Colophon } from './pages/Colophon'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/writing" element={<WritingList />} />
        <Route path="/writing/:slug" element={<Post />} />
        <Route path="/notes" element={<NotesList />} />
        <Route path="/notes/:slug" element={<NoteDetail />} />
        <Route path="/sound" element={<Sound />} />
        <Route path="/colophon" element={<Colophon />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
