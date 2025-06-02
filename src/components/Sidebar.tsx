import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <Link to="/">🏠</Link>
      <Link to="/profile">👤</Link>
      <Link to="/journal">📘</Link>
      <Link to="/discussion">💬</Link>
    </nav>
  );
};

export default Sidebar;