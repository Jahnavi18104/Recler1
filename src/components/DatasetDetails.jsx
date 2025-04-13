

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import UploadForm from "./UploadForm";
import DatasetFiles from "./DatasetFiles";

const API_URL = "https://recler-backend-3.onrender.com"; // Backend URL

const DatasetDetails = () => {
  const { id } = useParams();
  const [datasetExists, setDatasetExists] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

 
  const fetchDataset = async () => {
    try {
      const res = await axios.get(`${API_URL}/datasets/${id}`);
      setDatasetExists(res.data.exists);
      setUploadedFiles(res.data.files);
    } catch (error) {
      console.error("Error fetching dataset:", error);
      setDatasetExists(false);
    }
  };

  useEffect(() => {
    fetchDataset();
  }, [id]); // Runs when 'id' changes

  
  const handleUploadSuccess = () => {
    fetchDataset(); // Refresh file list after upload
  };

  return (
    <div className="dataset-details">
      {datasetExists ? (
        <DatasetFiles files={uploadedFiles} />
      ) : (
        <UploadForm datasetId={id} onUploadSuccess={handleUploadSuccess} />
      )}
    </div>
  );
};

export default DatasetDetails;
