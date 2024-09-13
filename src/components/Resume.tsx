import React from 'react';

function PDFViewer() {
 return (
    <div className="container">
        <h1 className="my-4">Resume</h1>
        <div>
            <iframe src="CV2024 - IT.pdf" width="100%" height="1000px" />
        </div>
    </div>
 );
};
export default PDFViewer;