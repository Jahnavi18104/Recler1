



















import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { datasets } from "../data/datasets";
import "./DatasetFiles.css";

const API_URL = "https://recler-backend-3.onrender.com";

const DatasetFiles = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [dataset, setDataset] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getToken = () => localStorage.getItem("token");

  useEffect(() => {
    if (!id) {
      setError("Invalid dataset ID.");
      setLoading(false);
      return;
    }

    const foundDataset = datasets.find((d) => d.id === id);
    if (!foundDataset) {
      setError("Dataset not found.");
      setLoading(false);
      return;
    }
    setDataset(foundDataset);

    axios
      .get(`${API_URL}/datasets/${id}`)
      .then((res) => {
        setUploadedFiles(res.data.files || []);
      })
      .catch((error) => {
        console.error("Error fetching files:", error);
        setError("Failed to fetch dataset files.");
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleDownload = async (filePath) => {
    const token = getToken();

    if (!token) {
      const confirmRedirect = window.confirm(
        "🔒 You need to be signed in to download this file.\n\nClick OK to go to the sign-in page."
      );
      if (confirmRedirect) {
        navigate("/signin");
      }
      return;
    }

    const filename = filePath.split("/").pop();

    try {
      const response = await axios.get(`${API_URL}/download/${filename}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download error:", error);
      if (error.response?.status === 401 || error.response?.status === 403) {
        alert("Session expired or unauthorized. Please sign in again.");
        navigate("/signin");
      } else {
        alert("Something went wrong while downloading.");
      }
    }
  };

  return (
    <div className="dataset-container">
      <div className="dataset-box">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : dataset ? (
          <>
            <div className="dataset-image-box">
              <img src={dataset.image} alt={dataset.name} />
            </div>

            <div className="dataset-details-box">
              <h2>{dataset.name} Files</h2>
              <p><strong>Description:</strong> {dataset.description}</p>

              {uploadedFiles.length > 0 ? (
                <ul>
                  {uploadedFiles.map((file, index) => (
                    <li key={index}>
                      <p>
  <strong>File Name:</strong>{" "}
  {dataset.name.split(" ")[0].charAt(0).toUpperCase() +
    dataset.name.split(" ")[0].slice(1).toLowerCase() + " Dataset" }
</p>

                      <button onClick={() => handleDownload(file.filePath)}>
                        Download
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No files available.</p>
              )}
            </div>
          </>
        ) : (
          <p style={{ color: "red" }}>Dataset Not Found. Please check the URL.</p>
        )}
      </div>
    </div>
  );
};

export default DatasetFiles;
