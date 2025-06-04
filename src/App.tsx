
import { Routes, Route } from 'react-router-dom';
// import Sidebar from './components/Sidebar';

import Profile from './pages/Profile';
import Journal from './pages/Journal';
// import Discussion from './pages/Discussion';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/journal" element={<Journal />} />
    </Routes>
  );
};

const Home = () => {
  return (
    <div
      style={{
        marginTop: '56px',
        padding: '4rem 2rem',
        background: 'radial-gradient(circle at top left, #f3e7fe, #e3f1ff)',
        fontFamily: 'Segoe UI, sans-serif',
        minHeight: 'calc(100vh - 56px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '3.5rem', fontWeight: 800, color: '#5e1ccc' }}>
        ✨ Hello, I'm Junghyun!
      </h1>
      <p style={{ fontSize: '1.25rem', color: '#4b3869', maxWidth: '600px' }}>
        Welcome to my personal Git Blog where I share my ideas, reflections,
        and thoughts. Feel free to explore and leave a message on the Guestbook!
      </p>
      {/* <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        <Link to="/profile" style={linkStyle('a083f9')}>👤 Profile</Link>
        <Link to="/journal" style={linkStyle('7db7ff')}>📘 Journal</Link>
        <Link to="/discussion" style={linkStyle('ffa3c7')}>💬 Guestbook</Link>
      </div> */}
    </div>
  );
};


export default App;