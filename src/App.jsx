import React, { useState } from 'react';
import Home from './pages/Home';
import ToDo from './pages/ToDo';
import History from './pages/History';
import Archive from './pages/Archive';
import Contact from './pages/Contact';
import Header from './components/Header';
import Navigation from './components/Navigations';
import './styles/App.css';

export const App = () => {
    // State to manage the current view (default to 'home')
    const [currentPage, setCurrentPage] = useState('home');

    // Function to render the correct component based on state
    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <Home />;
            case 'todo':
                return <ToDo />;
            case 'history':
                return <History />;
            case 'archive':
                return <Archive />;
            case 'contact':
                return <Contact />;
            default:
                return <Home />;
        }
    };

    return (
        <>            
            <div id="wrapper">
                <div className="top">
                    {/* Pass the state setter function to Header and Navigation */}
                    <Header setPage={setCurrentPage} />
                    <Navigation currentPage={currentPage} setPage={setCurrentPage} />
                </div>

                {/* Render the current page content */}
                {renderPage()}

                {/* Footer Component (using the original structure) */}
                <footer>
                    <div id="contact">
                        <p><br/>Copyright &copy; 2025 Acheivify</p>
                        <a className="email-link" href="mailto:h.h.vicheka@gmail.com">acheivify@gmail.com</a>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default App;
