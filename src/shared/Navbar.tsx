import { NavLink, useLocation } from 'react-router-dom'
import { FlatButton } from './FlatButton'

export const Navbar = () => {
  const location = useLocation();

  // Helper function to check if a hash link is active
  const isHashActive = (hash:any) => location.hash === hash;

  return (
    <nav className="navbar navbar-expand-lg" data-bs-theme='light'>
      <div className="container-fluid">
        <h1 className='navbar-brand'>Seun Ogunsanya</h1>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto align-items-center">

            {/* Home Link: Uses NavLink's built-in isActive state */}
            <li className="nav-item">
              <NavLink 
                to="/"
                end /* 'end' ensures it doesn't match every route starting with / */
                className={({ isActive }) => 
                  `nav-link ${isActive && !location.hash ? 'currentActive btn ' : ''}`
                }
              >
                Home
              </NavLink>
            </li>

            {/* Services Link: Manually checking the hash */}
            <li className="nav-item">
              <a 
                href="/#services" 
                className={`nav-link ${isHashActive('#services') ? 'currentActive btn ' : ''}`}
              >
                Services
              </a>
            </li>

            {/* Projects Link: Manually checking the hash */}
            <li className="nav-item">
              <a 
                href="/#portfolio" 
                className={`nav-link ${isHashActive('#portfolio') ? 'currentActive btn ' : ''}`}
              >
                Projects
              </a>
            </li>

            {/* Blog Link: Uses NavLink's built-in isActive state */}
            <li className='nav-item'>
              <NavLink 
                to="/blog" 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'currentActive btn ' : ''}`
                }
              >
                Blog
              </NavLink>
            </li>
            
            <li className="nav-item">
              <FlatButton 
                title='Get In Touch' 
                className='btn btnPrimary'
                onClick={() => console.log('Hi, I’d like to get a free consultation...')}
              />
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}