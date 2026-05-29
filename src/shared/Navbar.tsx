
import { NavLink } from 'react-router-dom'
import { FlatButton } from './FlatButton'



export const Navbar = () => {
 

  return (
    <nav className="navbar  navbar-expand-lg" data-bs-theme='dark'>
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
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <NavLink to={`/`} className="nav-link active">
                   Home
              </NavLink>
            </li>
            <li className="nav-item">
              <a href={`/#services`} className="nav-link active">
                    Services
              </a>
            </li>
            <li className="nav-item">
              <a href={`/#portfolio`} className="nav-link active">
                    Projects
              </a>
            </li>
            <li className='nav-item'>
                <NavLink to={'/blog'} className="nav-link active">
                  Blog
                </NavLink>
            </li>
            
            <li className="nav-item">
           
                <FlatButton title='Get In Touch' className='btn btnPrimary  'onClick={()=>console.log('Hi, I’d like to get a free consultation for a construction project. I’d appreciate some guidance on the best options.')}/>
             
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}