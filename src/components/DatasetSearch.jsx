import { Link } from "react-router-dom";
import { datasets } from "../data/datasets";


const DatasetSearch = ({ searchTerm }) => {
  const filtered = datasets.filter((dataset) =>
    dataset.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log("Search Term:", searchTerm);
  console.log("Filtered Datasets:", filtered);

  return (
    <div className="dataset-grid">
      {filtered.length > 0 ? (
        filtered.map((dataset) => (
          <div key={dataset.id} className="dataset-card">
            <img src={dataset.image} alt={dataset.name} className="dataset-image" />
            <h3>{dataset.name}</h3>
            <p>ID: {dataset.id}</p> {/* 👈 Add this temporarily to verify correct ID */}
            <Link to={`/datasets/${dataset.id}/files`} className="view-button">
              View Files
            </Link>
          </div>
        ))
      ) : (
        <p>No matching datasets found.</p>
      )}
    </div>
  );
};

export default DatasetSearch;
