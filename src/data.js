// export const datasets = [
//     {
//       name: "IRIS Dataset",
//       image: "https://storage.googleapis.com/kaggle-datasets-images/19/19/default-backgrounds/dataset-cover.jpg",
//       category: "Classification",
//     },
//     {
//       name: "Housing Dataset",
//       image: "https://storage.googleapis.com/kaggle-datasets-images/1379/2485/a52db2794593657403a4235bfc4147aa/dataset-cover.jpg",
//       category: "Regression",
//     },
//     {
//       name: "Heart Dataset",
//       image: "https://storage.googleapis.com/kaggle-datasets-images/216167/469115/23af5a37ef4e938b2c9a1b97662c3efc/dataset-cover.jpg",
//       category: "Classification",
//     },
//     {
//       name: "Titanic Dataset",
//       image: "https://storage.googleapis.com/kaggle-datasets-images/1355/2445/36b12c4c2cb8097c57a543ffe0a614c6/dataset-cover.jpg",
//       category: "Classification",
//     },
//     {
//       name: "Dental OPG Xray Dataset",
//       image: "https://storage.googleapis.com/kaggle-datasets-images/6335126/10243814/471cd86ed8c65bd58cae54515203e209/dataset-cover.jpg?t=2024-12-19-08-39-37",
//       category:"Classification",
//     },
//     {
//       name: "Flower Image Datasets",
//       image: "https://storage.googleapis.com/kaggle-datasets-images/3778695/6536128/ca75c23f752b3079496b2d199ad18ba3/dataset-cover.jpg?t=2023-11-30-04-51-44",
//       category:"Image",
//     },
//     {
//       name: "Satellite Image Classification",
//       image: "https://storage.googleapis.com/kaggle-datasets-images/1544742/2546969/587dbc48162374bca68d9f8c10299a90/dataset-cover.jpg?t=2021-08-21-19-05-27",
//       category:"Image",
//     },
//     {
//       name: "E-Commerce Data",
//       image: "https://storage.googleapis.com/kaggle-datasets-images/1985/3404/86a442881be475eef09214be8458269f/dataset-cover.jpg",
//       category: "Clustering",
//     },
//     {
//       name: "Sales Data",
//       image: "https://storage.googleapis.com/kaggle-datasets-images/new-version-temp-images/default-backgrounds-71.png-12271350/dataset-cover.png",
//       category: "Clustering",
//     }
//   ];
  






// const img  = new URL('./assets/wine.jpg',import.meta.url).href;
// const img1 = new URL('./assets/titanic.jpg', import.meta.url).href;
// const img2 = new URL('./assets/mnist.png', import.meta.url).href;
// const img3 = new URL('./assets/fer.jpg', import.meta.url).href;
// const img4 = new URL('./assets/yoga.jpg', import.meta.url).href;


// export const datasets = [
//   {
//     name: "Iris Dataset",
//     image: "https://storage.googleapis.com/kaggle-datasets-images/19/19/default-backgrounds/dataset-cover.jpg",
//     category: "Classification",
//     uploadedFiles: ["https://example.com/files/iris.csv"], // Sample uploaded file
//   },
//   {
//     name: "Housing Dataset",
//     image: "https://storage.googleapis.com/kaggle-datasets-images/1379/2485/a52db2794593657403a4235bfc4147aa/dataset-cover.jpg",
//     category: "Regression",
//     uploadedFiles: ["https://example.com/files/housing.csv"], // Sample uploaded file
//   },
//   {
//     name: "Heart Dataset",
//     image: "https://storage.googleapis.com/kaggle-datasets-images/216167/469115/23af5a37ef4e938b2c9a1b97662c3efc/dataset-cover.jpg",
//     category: "Classification",
//     uploadedFiles: [], // No files uploaded yet
//   },
//   {
//     name: "Titanic Dataset",
//     image: img1,
//     category: "Classification",
//     uploadedFiles: [], // No files uploaded yet
//   },
//   {
//     name: "Wine Dataset",
//     image: img,
//     category: "Classification",
//     uploadedFiles: [], // No files uploaded yet
//   },
//   {
//     name: "FER Dataset",
//     image: img3,
//     category: "Image",
//     uploadedFiles: [], // No files uploaded yet
//   },
//   {
//     name: "Yoga Pose Dataset",
//     image: img4,
//     category: "Image",
//     uploadedFiles: [], // No files uploaded yet
//   },
//   {
//     name: "Mnist Dataset",
//     image: img2,
//     category: "Image",
//     uploadedFiles: [], // No files uploaded yet
//   },
  
// ];


















const img  = new URL('./assets/wine.jpg', import.meta.url).href;
const img1 = new URL('./assets/titanic.jpg', import.meta.url).href;
const img2 = new URL('./assets/mnist.png', import.meta.url).href;
const img3 = new URL('./assets/fer.jpg', import.meta.url).href;
const img4 = new URL('./assets/yoga.jpg', import.meta.url).href;

export const datasets = [
  {
    name: "Iris Dataset",
    image: "https://storage.googleapis.com/kaggle-datasets-images/19/19/default-backgrounds/dataset-cover.jpg",
    category: "Classification",
    uploadedFiles: ["https://example.com/files/iris.csv"], // Sample uploaded file
  },
  {
    name: "Housing Dataset",
    image: "https://storage.googleapis.com/kaggle-datasets-images/1379/2485/a52db2794593657403a4235bfc4147aa/dataset-cover.jpg",
    category: "Regression",
    uploadedFiles: ["https://example.com/files/housing.csv"], // Sample uploaded file
  },
  {
    name: "Heart Dataset",
    image: "https://storage.googleapis.com/kaggle-datasets-images/216167/469115/23af5a37ef4e938b2c9a1b97662c3efc/dataset-cover.jpg",
    category: "Classification",
    uploadedFiles: [], // No files uploaded yet
  },
  {
    name: "Titanic Dataset",
    image: img1,
    category: "Classification",
    uploadedFiles: [], // No files uploaded yet
  },
  {
    name: "Wine Dataset",
    image: img,
    category: "Classification",
    uploadedFiles: [], // No files uploaded yet
  },
  {
    name: "FER Dataset",
    image: img3,
    category: "Image",
    uploadedFiles: [], // No files uploaded yet
  },
  {
    name: "Yoga Pose Dataset",
    image: img4,
    category: "Image",
    uploadedFiles: [], // No files uploaded yet
  },
  {
    name: "Mnist Dataset",
    image: img2,
    category: "Image",
    uploadedFiles: [], // No files uploaded yet
  },
];

// ✅ Auto-generate unique IDs based on dataset names
datasets.forEach((dataset) => {
  dataset.id = dataset.name.toLowerCase().replace(/\s+/g, "-"); // e.g., "Iris Dataset" -> "iris-dataset"
});
