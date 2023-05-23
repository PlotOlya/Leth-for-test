import React, { memo, useState } from "react";
import { Document, pdfjs, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function MenuList(): JSX.Element {
    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
  
    const onDocumentLoadSuccess = (): void => {
      setNumPages(numPages);
    };

  return (
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
  );
}

export default memo(MenuList);
