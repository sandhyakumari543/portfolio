import './App.css';
import Sidebar from './components/Sidebar';
import ThemeContextProvider from './components/ThemeContext';


function App() {
    return (
        <ThemeContextProvider>
            <div className="app-container">
            <Sidebar/>  
            </div>
        </ThemeContextProvider>
    );
}

export default App;
