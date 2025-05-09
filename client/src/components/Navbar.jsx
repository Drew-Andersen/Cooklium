import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import cookliumLogo from "/images/Cooklium-logo.png";
import sunIcon from '/images/sun-icon.png';
import moonIcon from '/images/moon-icon.png';

export default function Navbar() {
  const currentPage = useLocation().pathname;
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <>
      <nav className='w-100 d-flex justify-content-between align-items-center px-3'>
            <div className='d-flex align-items-center'>
                <img className='logo' src={cookliumLogo} alt="Cooklium Logo" />
                <h1 className="pt-2 ms-2">Cooklium</h1>
            </div>

            <div className='d-flex align-items-center'>
                <ul className='d-flex p-2 m-0 bg-navbar'>
                    <li className='px-3 py-1 mx-1 nav-item'>
                        <Link to='/' className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
                    </li>
                    <li className="px-2 py-1 mx-1 nav-item">
                        <Link to='/login' className={currentPage === '/login' ? 'nav-link active' : 'nav-link'}>Login</Link>
                    </li>
                    <li className="px-2 py-1 mx-1 nav-item">
                        <Link to='/register' className={currentPage === '/register' ? 'nav-link active' : 'nav-link'}>Register</Link>
                    </li>
                </ul>

                <div className="theme-toggle" onClick={toggleDarkMode}>
                    <img src={sunIcon} alt="Light" className="icon" />
                    <div className={`toggle-slider ${darkMode ? 'dark' : ''}`} />
                    <img src={moonIcon} alt="Dark" className="icon" />
                </div>
            </div>
        </nav>
    </>
  );
}
