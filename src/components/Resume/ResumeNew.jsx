import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/resumenew.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
//import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import Type3 from "../Home/type3";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            gap: "10px",
          }}
        >
          <Col md="auto" className="d-flex align-items-center">
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "200px", marginRight: "10px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
            <Type3 />
          </Col>
        </Row>

        <Row className="resume d-flex justify-content-center">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            gap: "10px",
          }}
        >
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px", marginRight: "10px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
