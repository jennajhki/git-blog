
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Journal from './pages/Journal';
import Discussion from './pages/Discussion';
import './App.css';

const App = () => {
  return (
    <div className="layout">
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/discussion" element={<Discussion />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;