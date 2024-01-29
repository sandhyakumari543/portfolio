import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeSection from './components/HomeSection';
import Sidebar from './components/Sidebar';
import StyleSwitcher from './components/StyleSwitcher';
import ThemeContextProvider from './components/ThemeContext';
import TicTac from './ProjectFile/TicTac';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
    return (
        <ThemeContextProvider>
            <Router>
                <div className="app-container">
                    <Sidebar>
                    <Route path='/portfolio' element={<Portfolio/>}/>
                    </Sidebar>
                    <Routes>
                       
                        <Route path="/TicTac.js" element={<TicTac />} />
                    </Routes>
                </div>
            </Router>
        </ThemeContextProvider>
    );
}

export default App;
