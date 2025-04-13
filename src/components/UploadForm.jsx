// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const API_URL = "http://localhost:5000"; // Backend URL

// const UploadForm = ({ datasetId, onUploadSuccess }) => {
//   const [file, setFile] = useState(null);
//   const [description, setDescription] = useState(""); // ✅ New state for description
//   const navigate = useNavigate();

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!file) {
//       alert("❌ Please select a file to upload.");
//       return;
//     }
  
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("description", description); // ✅ Ensure description is sent
  
//     try {
//       const response = await axios.post(`${API_URL}/datasets/${datasetId}/upload`, formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
  
//       if (response.status === 200) {
//         alert("✅ File uploaded successfully!");
//         setFile(null);
//         setDescription(""); // ✅ Reset input
//         onUploadSuccess(); // ✅ Refresh dataset
//       } else {
//         alert("❌ Unexpected error occurred.");
//       }
//     } catch (error) {
//       alert("❌ Error uploading file.");
//     }
//   };
  
//   return (
//     <div style={{marginTop:"250px"}}>
//       <h2>Upload a New Dataset</h2>
//       <input type="file" onChange={handleFileChange} />
      
//       <button
//         onClick={handleUpload}
//         style={{
//           backgroundColor: "black",
//           color: "white",
//           border: "1px solid black",
//           padding: "10px",
//           cursor: "pointer",
//         }}
//       >
//         Upload
//       </button>
//     </div>
//   );
// };

// export default UploadForm;
















import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "https://recler1-backend.onrender.com";

const UploadForm = ({ datasetId }) => {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState(""); // ✅ New state for description
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("❌ Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("description", description); // ✅ Send description to backend

    try {
      const response = await axios.post(`${API_URL}/datasets/${datasetId}/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 200) {
        alert("✅ File uploaded successfully!");
        setFile(null);
        setDescription(""); // ✅ Reset description input
        setTimeout(() => {
          navigate(`/datasets/${datasetId}/files`);
        }, 500);
      } else {
        alert("❌ Unexpected error occurred.");
      }
    } catch (error) {
      alert("❌ Error uploading file.");
    }
  };

  return (
    <div>
      <h2 style={{ marginTop:"200px"}}>Upload a New Dataset</h2>
      <input type="file" onChange={handleFileChange} />
      
      <button onClick={handleUpload} style={{ backgroundColor: "black", color: "white" }}>
        Upload
      </button>
    </div>
  );
};

export default UploadForm;
