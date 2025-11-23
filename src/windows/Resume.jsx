import WindowControls from "#components/WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";

// استدعاء ملفات الـ CSS الخاصة بالـ react-pdf
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// تحديد الـ worker من public مباشرة
pdfjs.GlobalWorkerOptions.workerSrc = "/node_modules/pdfjs-dist/build/pdf.worker.min.mjs";

const Resume = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="resume" />
                <h2>Resume.pdf</h2>
                <a href="/files/cv.pdf" download title="Download resume">
                    <Download className="icon cursor-pointer" />
                </a>
            </div>

            {/* استخدم URL مباشر للملف بدل استيراد ES module */}
            <Document file="/files/cv.pdf">
                <Page pageNumber={1} renderTextLayer renderAnnotationLayer />
            </Document>
        </>
    );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
