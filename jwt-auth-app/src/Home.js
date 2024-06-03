import React from 'react';

const Home = ({ onLogout }) => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: 'orange',
        marginTop: '70px', 
        marginBottom: '50px', 
    };

    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px 20px',
        zIndex: 1000,
    };

    const footerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px 20px',
        zIndex: 1000,
    };

    const navBarStyle = {
        display: 'flex',
        gap: '20px',
    };

    const buttonStyle = {
        color: 'brown',
        backgroundColor: 'red',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    const searchBarStyle = {
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        width: '300px',
    };

    return (
        <div style={containerStyle}>
            <header style={headerStyle}>
                <input type="text" placeholder="Search for tasks...." style={searchBarStyle} />
                <div style={navBarStyle}>
                    <a href="https://khyath.com/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
                    <a href="https://khyath.com/about/" style={{ color: 'white', textDecoration: 'none' }}>About Us</a>
                    <a href="https://khyath.com/contact/" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
                    <a href="https://khyath.com/services/" style={{ color: 'white', textDecoration: 'none' }}>Services</a>
                    <a href="https://khyath.com/industries//" style={{ color: 'white', textDecoration: 'none' }}>Industries</a>
                    <a href="https://khyath.com/case-studies/" style={{ color: 'white', textDecoration: 'none' }}>Case Studies</a>
                    <a href="https://khyath.com/resources/" style={{ color: 'white', textDecoration: 'none' }}>Resources</a>
                </div>
                <button onClick={onLogout} style={buttonStyle}>Logout</button>
            </header>
            <main style={{ flex: 1, textAlign: 'center', padding: '20px' }}>
                <h1 style={{ color: 'green' }}>Good Afternoon Hunter!</h1>
                <h2 style={{ color: 'blue' }}> We are glad to Welcome You to the Home Page! </h2>
                <h1 style={{ color: 'grey' }}>Thank You!</h1>
            </main>
            <footer style={footerStyle}>
                <p>2024 &copy;Khyath Tech Media Private Limited</p>
            </footer>
        </div>
    );
};

export default Home;
