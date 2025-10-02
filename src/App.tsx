import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CaseStudyPage from './pages/CaseStudyPage';
import './styles/App.css';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/case/:slug" element={<CaseStudyPage />} />
            </Routes>
        </Router>
        <Footer />
        </>
    );
}

export default App;