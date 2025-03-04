import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";


const NavBar = () => {
    const { user } = useAuthContext();
    const { logout } = useLogout();

    const handleLogoutClick = () => {
        logout();
    }

    return (
        <header>
            <nav className="py-2">
                <div className="d-flex justify-content-between align-items-center main-content">
                    {
                        !user ?
                            <Link to="/consumerHome" className="text-decoration-none">
                                <div className="nav-button">
                                    <img src={logo} alt="Coffee Bean Supply Chain Logo" className="" />
                                    <span className="mx-2 d-none d-sm-inline">Coffee Bean Supply Chain</span>
                                </div>
                            </Link>
                            : user.role === "Manager" ?
                                <Link to="/managerDashboard" className="text-decoration-none">
                                    <div className="nav-button">
                                        <img src={logo} alt="Coffee Bean Supply Chain Logo" className="" />
                                        <span className="mx-2 d-none d-sm-inline">Manager Dashboard</span>
                                    </div>
                                </Link>
                                :
                                <Link to="/participantDashboard" className="text-decoration-none">
                                    <div className="nav-button">
                                        <img src={logo} alt="Coffee Bean Supply Chain Logo" className="" />
                                        <span className="mx-2 d-none d-sm-inline">Participant Dashboard</span>
                                    </div>
                                </Link>
                    }
                    {
                        !user ?
                            <Link to="/participantHome" className="text-decoration-none ">
                                <div className="nav-button">
                                    <span className="mx-3">Supply Chain Participant</span>
                                </div>
                            </Link>
                            :
                            <button onClick={handleLogoutClick} className="nav-button border-0">
                                <span className="mx-3">Log Out</span>
                            </button>
                    }
                </div>
            </nav>
        </header>
    )
}

export default NavBar;