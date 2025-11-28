import React from 'react';

// Data structure for navigation to manage both key and display name
const NAV_ITEMS = [
    { key: 'home', name: 'Home' },
    { key: 'todo', name: 'To Do' },
    { key: 'history', name: 'History' },
    { key: 'archive', name: 'Archive' },
    { key: 'contact', name: 'Contact Us' },
];

// Navigation Component now accepts the current page state and a setter function
const Navigation = ({ currentPage, setPage }) => (
    <nav>
        <ul>
            {NAV_ITEMS.map(item => (
                <li key={item.key}>
                    {/* The <a> tag now uses onClick to set the state instead of navigating */}
                    <a
                        href="#" // Use # to prevent page reload, or remove href entirely
                        onClick={(e) => {
                            e.preventDefault(); // Stop default anchor behavior
                            setPage(item.key);
                        }}
                        // Optional: Highlight the active page
                        style={{ color: currentPage === item.key ? '#8FB964' : 'black' }}
                    >
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
);

export default Navigation;