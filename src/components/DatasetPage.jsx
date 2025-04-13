// import React, { useState, useEffect } from "react";
// import { datasets } from "../data/datasets"; // ✅ Ensure correct import path
// import CategoryButtons from "./CategoryButtons";
// import DatasetGrid from "./DatasetGrid";

// const DatasetPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredDatasets, setFilteredDatasets] = useState(datasets); // ✅ Default to all datasets

//   // ✅ Filter datasets when category/search changes
//   useEffect(() => {
//     const filtered = datasets.filter((dataset) => {
//       // ✅ Matches category (category is always a string)
//       const matchesCategory =
//         selectedCategory === "All" || dataset.category.includes(selectedCategory);

//       // ✅ Matches search term
//       const matchesSearch = dataset.name.toLowerCase().includes(searchTerm.toLowerCase());

//       return matchesCategory && matchesSearch;
//     });

//     setFilteredDatasets(filtered);
//   }, [selectedCategory, searchTerm]); // ✅ Re-run filtering when these change

//   return (
//     <div style={{ textAlign: "center", marginTop: "20px" }}>
//       <h2>Dataset Explorer</h2>

//       {/* ✅ Search Input */}
//       <input
//         type="text"
//         placeholder="Search datasets..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         style={{ marginBottom: "10px", padding: "5px", width: "80%" }}
//       />

//       {/* ✅ Category Buttons */}
//       <CategoryButtons onFilter={setSelectedCategory} />

//       {/* ✅ Show filtered datasets */}
//       {filteredDatasets.length > 0 ? (
//         <DatasetGrid datasets={filteredDatasets} />
//       ) : (
//         <p>No datasets found.</p> // ✅ Show "No datasets found" only when necessary
//       )}

//       {/* DatasetExplorer Logic Added Below */}
//       <h1>Dataset Explorer</h1>
//       <CategoryButtons onFilter={setSelectedCategory} /> {/* Category Buttons */}

//       <div className="dataset-container">
//         {/* Filtering the datasets based on selected category */}
//         {filteredDatasets.map((dataset) => (
//           <div key={dataset.id} className="dataset-card">
//             <img src={dataset.image} alt={dataset.name} width="150" />
//             <h3>{dataset.name}</h3>
//             <p>{dataset.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DatasetPage;













import React, { useState, useEffect } from "react";
import { datasets } from "../data/datasets"; // ✅ Ensure correct import path
import CategoryButtons from "./CategoryButtons";
import DatasetGrid from "./DatasetGrid";

const DatasetPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDatasets, setFilteredDatasets] = useState(datasets);

  useEffect(() => {
    const filtered = datasets.filter((dataset) => {
      const matchesCategory =
        selectedCategory === "All" || dataset.category.includes(selectedCategory);
      const matchesSearch = dataset.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    setFilteredDatasets(filtered);
  }, [selectedCategory, searchTerm]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Dataset Explorer</h2>

      {/* ✅ Search Input */}
      <input
        type="text"
        placeholder="Search datasets..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px", width: "80%" }}
      />

      {/* ✅ Category Buttons */}
      <CategoryButtons onFilter={setSelectedCategory} />

      {/* ✅ Show filtered datasets */}
      {filteredDatasets.length > 0 ? (
        <div className="dataset-container">
          {filteredDatasets.map((dataset) => (
            <div key={dataset.id} className="dataset-card">
              <img src={dataset.image} alt={dataset.name} width="150" /> {/* ✅ Showing dataset name */}
              <p>{dataset.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No datasets found.</p>
      )}
    </div>
  );
};

export default DatasetPage;
