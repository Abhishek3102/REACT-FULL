import logo from "./assets/logo.png";
function Header(){
    return (
        <header>
            <nav>
                <div className="logo">
                    <img src={logo} alt="logo" className="logo" />
                </div>
                
                <ul> 
                <li><a href="#">
                    Home
                </a></li>
                <li><a href="#">
                    About
                </a></li>
                <li><a href="#">
                    Services
                </a></li>
                <li><a href="#">
                    Contact
                </a></li>
                </ul>
                </nav>

        </header>
    );
}

export default Header