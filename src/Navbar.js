import { Link } from "react-router-dom/cjs/react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Fanatic Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create-post">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;