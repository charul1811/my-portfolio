import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex justify-center space-x-6 my-6">
            <Link to="/" className="text-blue-600 hover:text-blue-800 text-lg font-medium">
                About
            </Link>
            <Link to="/projects" className="text-blue-600 hover:text-blue-800 text-lg font-medium">
                Projects
            </Link>
            <Link to="/resume" className="text-blue-600 hover:text-blue-800 text-lg font-medium">
                Resume
            </Link>
            <div className="text-red-500 text-3xl">Is Tailwind working?</div>
        </nav>
    );
}
