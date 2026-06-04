import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{ display: "flex", gap: "10px" }}>
            <Link to="/">Home</Link>
            <Link to="/members">Members</Link>
            <Link to="/add">Add Member</Link>
        </nav>
    );
}

export default Navbar;