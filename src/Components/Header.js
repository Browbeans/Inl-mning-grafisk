import "../style/layout.css"
import logo from "../assets/logo.jpg"
import { Link } from "react-router-dom"

function Header() {
    return (
        <div className="header">
            <div className="navigation">
                <div className="left-section">
                    <img src={logo} alt=""></img>
                </div>
                <div className="right-section">
                    <Link to="/" style={{textDecoration: "none", color: "black"}}>
                        <span>SHOP</span>
                    </Link>
                    <Link to="/contact" style={{textDecoration: "none", color: "black"}}>
                        <span>CONTACT</span>
                    </Link>
                </div>

                <div className="burger">
                    <i class="fas fa-bars"></i>
                </div>
            </div>
        </div>
    )
}

export default Header
