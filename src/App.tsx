import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './styles/App.css';
import CVPage from './pages/CVPage/CVPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cv" element={<CVPage />} />
            </Routes>
        </Router>
    );
}

export default App;
