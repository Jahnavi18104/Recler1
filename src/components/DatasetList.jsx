// import React from "react";
// import { datasets } from "../data/datasets"; // Ensure correct import path

// console.log("Datasets in DatasetList:", datasets); // ✅ Debugging log

// const DatasetList = () => {
//   return (
//     <div>
//       <h1>Datasets</h1>
//       {datasets.length === 0 ? (
//         <p>No datasets available</p> // ✅ Show message if no data
//       ) : (
//         datasets.map((dataset) => (
//           <div key={dataset.id} >
//             <h2>{dataset.name}</h2>
//             <p>Category: {dataset.category.join(", ")}</p>
//             <img src={dataset.image} alt={dataset.name} width="200" />
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default DatasetList;






import React from "react";
import { datasets } from "../data/datasets"; // Ensure the correct import path

const DatasetList = () => {
  return (
    <div>
      {/* <h1>Datasets</h1>
      {datasets.map((dataset) => (
        <div key={dataset.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
          <h2>{dataset.name}</h2>
          <p>Category: {dataset.category.join(", ")}</p>
          <img src={dataset.image} alt={dataset.name} width="200" />
        </div>
      ))} */}
    </div>
  );
};

export default DatasetList;


