// import logo from "./assets/logo.png";
// function Header(){
//     return (
//         <header>
//             <nav>
//                 <div className="logo">
//                     <img src={logo} alt="logo" className="logo" />
//                 </div>
                
//                 <ul> 
//                 <li><a href="#">
//                     Home
//                 </a></li>
//                 <li><a href="#">
//                     About
//                 </a></li>
//                 <li><a href="#">
//                     Services
//                 </a></li>
//                 <li><a href="#">
//                     Contact
//                 </a></li>
//                 </ul>
//                 </nav>
//                 {children && <div className="header-text">{children}</div>}
//         </header>
//     );
// }

// export default Header

import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import PropTypes from "prop-types";
import "../src/index.css";

function Header({ children }) {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" className="logo" />
        </div>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {children && <div className="header-text">{children}</div>}
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
