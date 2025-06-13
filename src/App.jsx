import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

export default function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-100 text-gray-800">
                <Navbar />
                <div className="p-4">
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/resume" element={<Resume />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}
