import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <header>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="text-decoration-none">
                        <h1 className="display-6 mb-2">Coffee Bean Supply Chain</h1>
                    </Link>

                </div>

            </nav>
        </header>
    )
}

export default NavBar;