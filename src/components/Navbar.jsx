import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={styles.nav}>
            <h2 style={styles.logo}>=Gym Manager=</h2>

            <div style={styles.links}>
                <Link to="/">Home</Link>
                <Link to="/members">Members</Link>
                <Link to="/add">Add Member</Link>
            </div>
        </nav>
    );
}

const styles = {
    nav: {
        display: "flex",
        justifyContent: "space-between",
        padding: "15px",
        backgroundColor: "#111",
        color: "white",
        alignItems: "center"
    },
    logo: {
        margin: 0
    },
    links: {
        display: "flex",
        gap: "15px"
    }
};

export default Navbar;