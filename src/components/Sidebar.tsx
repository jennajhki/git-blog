


import { FaHome, FaUser, FaBook, FaComments } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <header className="topnav">
      <nav>
        <ul>
          <li className={pathname === '/' ? 'active' : ''}>
            <Link to="/"><FaHome /> Home</Link>
          </li>
          <li className={pathname === '/profile' ? 'active' : ''}>
            <Link to="/profile"><FaUser /> Profile</Link>
          </li>
          <li className={pathname === '/journal' ? 'active' : ''}>
            <Link to="/journal"><FaBook /> Journal</Link>
          </li>
          <li className={pathname === '/discussion' ? 'active' : ''}>
            <Link to="/discussion"><FaComments /> Discussion</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Sidebar;