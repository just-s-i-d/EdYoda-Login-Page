import "./navbar.styles.scss"
import {ReactComponent as CarretDown} from "../../assets/carretdown.svg"
import LOGO from "../../assets/LOGO.png"
const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="left-navbar-items">
                <img src={LOGO} alt="LOGO"/>
                <span className="nav-item">Courses</span><span className="carret-down"><CarretDown/></span>
                <span className="nav-item">Programs</span><span className="carret-down"><CarretDown/></span>
            </div>
            <div className="right-navbar-items">
                <span className="search-icon"><i class="fas fa-search"/></span>
                <span>Log in</span>
                <button className="join-btn">JOIN NOW</button>
            </div>
        </div>
    )
}
export default NavBar