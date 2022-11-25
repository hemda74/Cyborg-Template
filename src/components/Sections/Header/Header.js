import './Header.css'
import logo from '../../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import {FaSearch}from 'react-icons/fa'
// import NavItem,{NavItemDrpoDown} from '../NavItem/NavItem'
const Header = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-dark  cyborg-navbar">
      <div className="container">
      <a className="navbar-brand" href="/">
      <img src={logo} alt='logo' />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <div className="search-input">
                      <form id="search" action="#">
                        <input type="text" placeholder="Type Something" id='searchText' name="searchKeyword"  />
                        <FaSearch className='icon'/>
                      </form>
                    </div>
      <ul className="navbar-nav   ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/"> Home </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/browse">Browse</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/streem">Streems</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  </div>
</div>
    
  )
}

export default Header