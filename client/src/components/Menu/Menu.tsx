// import { Page } from "@react-pdf/renderer";
import React, { memo, useState } from "react";
import { Document, pdfjs, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// import ReactPDF from "@react-pdf/renderer";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Menu(): JSX.Element {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = (): void => {
    setNumPages(numPages);
  };
  return (
    <div id="menu">
      <button type="button">Открыть меню</button>
      <div className="menu-container">
        <div>
          <Document file="/menu.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </div>
      </div>
    </div>
  );
}

export default memo(Menu);
