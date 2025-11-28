import React from "react";

const PageContent = ({ pageTitle, children }) => (
    <main style={{ marginTop: '20px' }}>
        <hr style={{ height: '1px', backgroundColor: '#8FB964', border: 'none', opacity: 0.5 }} />
        <h1 style={{ fontSize: '32px', color: '#8FB964' }}>{pageTitle}</h1>
        <p className="text" style={{ fontSize: '18px', color: '#757575', textShadow: 'none' }}>
            {children}
        </p>
    </main>
);

export default PageContent;