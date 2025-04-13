










import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DatasetGrid from "./components/DatasetGrid";
import CategoryButtons from "./components/CategoryButtons";
import { datasets } from "./data";
import Signin from "./components/Signin";
import Register from "./components/Register";
import DatasetDetails from "./components/DatasetDetails";
import DatasetFiles from "./components/DatasetFiles";
import DatasetSearch from "./components/DatasetSearch";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDatasets, setFilteredDatasets] = useState(datasets);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setFilteredDatasets(
      datasets.filter((dataset) =>
        dataset.name.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  const filterByCategory = (category) => {
    setFilteredDatasets(
      category === "All" ? datasets : datasets.filter((d) => d.category === category)
    );
    setSearchTerm(""); // clear search when filtering by category
  };

  return (
    <Router>
      <div className="app-container">
        {/* Header with search */}
        <Header onSearch={handleSearch} datasets={datasets} className="header" />

        <div className="content-container">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <CategoryButtons onFilter={filterByCategory} />
                  {searchTerm ? (
                    <DatasetSearch searchTerm={searchTerm} />
                  ) : (
                    <DatasetGrid datasets={filteredDatasets} />
                  )}
                </div>
              }
            />

            <Route path="/signin" element={<Signin />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dataset/:id" element={<DatasetDetails />} />
            <Route path="/datasets/:id/files" element={<DatasetFiles />} />
          </Routes>
        </div>

        {/* Optional footer */}
        {/* <Footer className="footer" /> */}
      </div>
    </Router>
  );
}

export default App;
