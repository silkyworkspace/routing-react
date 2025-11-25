import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <header style={{
            backgroundColor: "hotpink",
            padding: 16
        }}>
            <h1 style={{
                textAlign: "center",
            }}>FOOTER</h1>
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
                </ul>
            </nav>
        </header>
    )
}
