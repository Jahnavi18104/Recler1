// import React from "react";

// const DatasetGrid = ({ datasets }) => {
//   return (
//     <section className="dataset-grid" style={{width:"100%"}}>
//       {datasets.length > 0 ? (
//         datasets.map((dataset, index) => (
//           <div className="dataset-card" key={index} >
//             <img src={dataset.image} alt={dataset.name} />
//             <h3>{dataset.name}</h3>
//           </div>
//         ))
//       ) : (
//         <p>No datasets found.</p>
//       )}
//     </section>
//   );
// };

// export default DatasetGrid;


import React from "react";
import { Link } from "react-router-dom";

const DatasetGrid = ({ datasets }) => {
  return (
    <section className="dataset-grid" style={{ width: "100%" }}>
      {datasets.length > 0 ? (
        datasets.map((dataset, index) => (
          <div className="dataset-card" key={index}>
            <img src={dataset.image} alt={dataset.name} />
            <h3>
              {/* Clicking dataset name navigates to upload page */}
              <Link to={`/dataset/${index}`}>{dataset.name}</Link>
            </h3>
          </div>
        ))
      ) : (
        <p>No datasets found.</p>
      )}
    </section>
  );
};

export default DatasetGrid;
