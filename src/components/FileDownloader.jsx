// import React from "react";

// const FileDownloader = ({ filename }) => {
//   const handleDownload = () => {
//     const downloadUrl = `http://localhost:5000/download/${filename}`;

//     const anchor = document.createElement("a");
//     anchor.href = downloadUrl;
//     anchor.setAttribute("download", filename);
//     document.body.appendChild(anchor);
//     anchor.click();
//     document.body.removeChild(anchor);
//   };

//   return (
//     <div>
//       <h2>Download Your File</h2>
//       <button onClick={handleDownload}>Download File</button>
//     </div>
//   );
// };

// export default FileDownloader;
