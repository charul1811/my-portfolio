import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-white shadow p-4 flex justify-between">
            <h1 className="text-xl font-bold text-blue-600">My Portfolio</h1>
            <div className="space-x-4">
                <Link to="/" className="text-gray-700 hover:text-blue-600">About</Link>
                <Link to="/projects" className="text-gray-700 hover:text-blue-600">Projects</Link>
                <Link to="/resume" className="text-gray-700 hover:text-blue-600">Resume</Link>
            </div>
        </nav>
    );
}
