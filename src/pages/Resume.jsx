export default function Resume() {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Resume</h2>

            <iframe
                src="/CV_Charul%20Thacker_%20developer%20web%20fullstack-Alternance.pdf"
                className="w-full h-[600px] border rounded shadow"
                title="My Resume"
            ></iframe>

            <a
                href="/CV_Charul%20Thacker_%20developer%20web%20fullstack-Alternance.pdfpdf"
                download
                className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Download Resume
            </a>
        </div>
    );
}
