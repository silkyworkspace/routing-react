import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header style={{
            backgroundColor: "hotpink",
            padding: 16
        }}>
            <h1 style={{
                textAlign: "center",
            }}>HEADER</h1>
            <nav>
                <ul style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "2rem",
                    listStyleType: "none",
                }}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/users/1">user01</Link></li>
                    <li><Link to="/users/2">user02</Link></li>
                </ul>
            </nav>
        </header>
    )
}
