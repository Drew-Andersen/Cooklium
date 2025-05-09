import { Link, useLocation } from 'react-router-dom';

import cookliumLogo from '/images/Cooklium-logo.png';

export default function Navbar() {
    const currentPage = useLocation().pathname;
    
    return (
        <>
            <nav className='w-100 d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <img className='logo' src={cookliumLogo} alt="Cooklium Logo" />
                    <h1 className="pt-2">Cooklium</h1>
                </div>
                <ul className='d-flex justify-content-end p-2 bg-navbar'>
                    <li className='px-3 py-1 mx-1'>
                        <Link to='/' className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}