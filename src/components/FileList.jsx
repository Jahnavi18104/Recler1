import { useEffect, useState } from "react";

const FileList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch("https://recler-backend-3.onrender.com/files/dataset123") // Replace with actual datasetId
      .then((response) => response.json())
      .then((data) => setFiles(data))
      .catch((error) => console.error("Error fetching files:", error));
  }, []);

  return (
    <div>
      <h2>Uploaded Files</h2>
      <ul>
        {files.map((file) => (
          <li key={file._id}>
            {/* ✅ Open in a new tab for preview */}
            <a href={file.filePath} target="_blank" rel="noopener noreferrer">
              {file.fileName}
            </a>
            &nbsp;|&nbsp;
            {/* ✅ Separate download link */}
            <a href={file.filePath} download>
              Download
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
