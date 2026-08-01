import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "../Particle";
import Type3 from "../Home/type3";

// Worker setup matching react-pdf v10 (pdfjs-dist v5.3.93)
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

// PDF from public folder
const pdf = "./ResumeNaitik961.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scale = width > 1200 ? 1.7 : width > 786 ? 1.4 : width > 500 ? 0.9 : 0.6;

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Top download button + typing animation */}
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <Col md="auto" className="d-flex align-items-center flex-wrap justify-content-center">
            <Button
              variant="primary"
              href={pdf}
              download="Naitik_Agrawal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ maxWidth: "250px", marginRight: "10px" }}
            >
              <AiOutlineDownload style={{ marginRight: "5px" }} />
              Download CV
            </Button>
            <Type3 />
          </Col>
        </Row>

        {/* PDF viewer with clean rendering */}
        <Row className="resume d-flex justify-content-center">
          <Document
            file={pdf}
            onLoadError={(error) => console.error("Load error:", error)}
            onSourceError={(error) => console.error("Source error:", error)}
            className="d-flex justify-content-center flex-column align-items-center"
          >
            <Page
              pageNumber={1}
              scale={scale}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </Row>

        {/* Bottom download button */}
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <Button
            variant="primary"
            href={pdf}
            download="Naitik_Agrawal_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload style={{ marginRight: "5px" }} />
            Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
