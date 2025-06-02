
// import { Link } from 'react-router-dom';

// function linkStyle(hex
//   : string) {
//   return {
//     padding: '1rem 2rem',
//     borderRadius: '14px',
//     backgroundColor: `#${hex}`,
//     color: '#fff',
//     fontWeight: 600,
//     textDecoration: 'none',
//     boxShadow: `0 6px 16px #${hex}99`,
//     transition: 'all 0.3s ease',
//   };
// }

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

export default Home;