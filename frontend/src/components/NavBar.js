import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';


const NavBar = () => {

    return (
        <header>
            <nav className="py-2">
                <div className="d-flex justify-content-between align-items-center main-content">
                    <Link to="/consumerHomePage" className="text-decoration-none">
                        <div className="nav-button">
                            <img src={logo} alt="Coffee Bean Supply Chain Logo" className="" />
                            <span className="mx-2 d-none d-sm-inline">Coffee Bean Supply Chain</span>
                        </div>
                    </Link>

                    <Link to="/participantHomePage" className="text-decoration-none ">
                        <div className="nav-button">
                            <span className="mx-3">Supply Chain Participant</span>
                        </div>
                    </Link>

                </div>

            </nav>
        </header>
    )
}

export default NavBar;