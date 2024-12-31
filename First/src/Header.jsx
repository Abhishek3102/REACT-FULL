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

import logo from "./assets/logo.png";
import PropTypes from 'prop-types';


function Header({ children }) {  // Accept children as a prop
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" className="logo" />
        </div>

        <ul> 
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      {/* Render children here, so the text from App.jsx will be displayed */}
      {children && <div className="header-text">{children}</div>} 
    </header>
  );
}

Header.propTypes = {
    children: PropTypes.node,
  };

export default Header;
