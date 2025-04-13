import wineImg from "../assets/wine.jpg";
import titanicImg from "../assets/titanic.jpg";
import mnistImg from "../assets/mnist.png";
import ferImg from "../assets/fer.jpg";
import yogaImg from "../assets/yoga.jpg";

export const datasets = [
  {
    id: "0",
    name: "Iris Dataset",
    image: "https://storage.googleapis.com/kaggle-datasets-images/19/19/default-backgrounds/dataset-cover.jpg",
    category: ["Classification"],
    uploadedFiles: [],
    description: "The Iris dataset is a classification dataset with 150 samples and 3 classes (Setosa, Versicolor, Virginica), each having 50 samples. It contains 4 numerical features: sepal length, sepal width, petal length, and petal width (all in cm). The dataset is best suited for Machine Learning (ML) algorithms like KNN, SVM, Decision Trees, and Random Forest, but Deep Learning (DL) can also be used, though it's unnecessary due to the small size. It is also useful for clustering tasks like K-Means.",
  },
  {
    id: "1",
    name: "Housing Dataset",
    image: "https://storage.googleapis.com/kaggle-datasets-images/1379/2485/a52db2794593657403a4235bfc4147aa/dataset-cover.jpg",
    category: ["Regression"],
    uploadedFiles: [],
    description: "The Housing dataset is a regression dataset with 506 samples and 1 continuous target variable (median house price in $1000s). It contains 13 numerical features such as crime rate, average number of rooms, distance to employment centers, and tax rate. The dataset is best suited for Machine Learning (ML) algorithms like Linear Regression, Decision Trees, Random Forest, and XGBoost, but Deep Learning (DL) can also be applied for complex models. It is widely used for predicting house prices based on different factors.",
  },
  {
    id: "2",
    name: "Heart Dataset",
    image: "https://storage.googleapis.com/kaggle-datasets-images/216167/469115/23af5a37ef4e938b2c9a1b97662c3efc/dataset-cover.jpg",
    category: ["Classification"],
    uploadedFiles: [],
    description: "The Heart dataset is a classification dataset with 303 samples and 2 classes (presence or absence of heart disease). It contains 13 numerical and categorical features such as age, sex, blood pressure, cholesterol level, and maximum heart rate. The dataset is best suited for Machine Learning (ML) algorithms like Logistic Regression, Decision Trees, Random Forest, and SVM, but Deep Learning (DL) can also be used for better performance on larger datasets. It is widely used for predicting heart disease risk based on medical attributes.",
  },
  {
    id: "3",
    name: "Titanic Dataset",
    image: titanicImg,  // ✅ Fixed Import
    category: ["Classification"],
    uploadedFiles: [],
    description: "The Titanic dataset is a classification dataset with 891 samples in the training set and 418 samples in the test set. It contains categorical and numerical features such as age, sex, passenger class, fare, and number of siblings/spouses aboard. The dataset is best suited for Machine Learning (ML) algorithms like Logistic Regression, Decision Trees, Random Forest, and SVM, but Deep Learning (DL) can also be used for complex models. It is also useful for clustering and survival analysis.",
  },
  {
    id: "4",
    name: "Wine Dataset",
    image: wineImg,  // ✅ Fixed Import
    category: ["Classification"],
    uploadedFiles: [],
    description: "The Wine dataset is a classification dataset with 178 samples and 3 classes, representing different types of wine (Class 0, Class 1, Class 2). It contains 13 numerical features such as alcohol, malic acid, ash, alkalinity, and flavonoids. The dataset is best suited for Machine Learning (ML) algorithms like KNN, SVM, Decision Trees, and Random Forest, but Deep Learning (DL) can also be applied if needed. It is also useful for clustering tasks like K-Means.",
  },
  {
    id: "5",
    name: "FER Dataset",
    image: ferImg,  // ✅ Fixed Import
    category: ["Image"],
    uploadedFiles: [],
    description: "The FER (Facial Expression Recognition) dataset is an image classification dataset with 35,887 samples and 7 classes (Angry, Disgust, Fear, Happy, Neutral, Sad, Surprise). It contains 48x48 grayscale images of facial expressions, making it ideal for deep learning (DL) models like CNNs (Convolutional Neural Networks). The dataset is widely used for emotion recognition in computer vision tasks and can also be applied to machine learning (ML) models like SVM and Random Forest with feature extraction techniques.",
  },
  {
    id: "6",
    name: "Yoga Pose Dataset",
    image: yogaImg,  // ✅ Fixed Import
    category: ["Image"],
    uploadedFiles: [],
    description: "The YogaPose dataset is an image classification and pose estimation dataset with varied samples (depending on the specific version) and multiple classes representing different yoga poses. It contains RGB images of individuals performing various yoga postures, often with keypoint annotations for body joints. The dataset is best suited for Deep Learning (DL) models like CNNs for classification and Pose Estimation models (e.g., OpenPose, MediaPipe, HRNet). It is widely used for yoga pose recognition, fitness applications, and human posture analysis.",
  },
  {
    id: "7",
    name: "Mnist Dataset",
    image: mnistImg,  // ✅ Fixed Import
    category: ["Image"],
    uploadedFiles: [],
    description: "The MNIST dataset is a classification dataset with 70,000 samples (60,000 for training and 10,000 for testing) and 10 classes (digits 0-9). It contains 28x28 grayscale images of handwritten digits, making it suitable for image-based machine learning. The dataset is best suited for Deep Learning (DL) models like Convolutional Neural Networks (CNNs) but can also be used with Machine Learning (ML) algorithms like SVM, KNN, and Random Forest. It is widely used for handwritten digit recognition and benchmarking ML models.",
  },
];


































// import wineImg from "../assets/wine.jpg";
// import titanicImg from "../assets/titanic.jpg";
// import mnistImg from "../assets/mnist.png";
// import ferImg from "../assets/fer.jpg";
// import yogaImg from "../assets/yoga.jpg";

// export const datasets = [
//   {
//     name: "IRIS Dataset",
//     image: "https://storage.googleapis.com/kaggle-datasets-images/19/19/default-backgrounds/dataset-cover.jpg",
//     category: "Classification",
//     uploadedFiles: [
//       {
//         url: "https://example.com/files/iris.csv",
//         description: "A dataset used for flower classification based on sepal and petal dimensions.",
//       },
//     ],
//   },
//   {
//     name: "Housing Dataset",
//     image: "https://storage.googleapis.com/kaggle-datasets-images/1379/2485/a52db2794593657403a4235bfc4147aa/dataset-cover.jpg",
//     category: "Regression",
//     uploadedFiles: [
//       {
//         url: "https://example.com/files/housing.csv",
//         description: "A dataset for predicting house prices based on various features.",
//       },
//     ],
//   },
//   {
//     name: "Heart Dataset",
//     image: "https://storage.googleapis.com/kaggle-datasets-images/216167/469115/23af5a37ef4e938b2c9a1b97662c3efc/dataset-cover.jpg",
//     category: "Classification",
//     uploadedFiles: [],
//     description: "A dataset used to predict heart disease based on various health parameters.",
//   },
//   {
//     name: "Titanic Dataset",
//     image: titanicImg,  // ✅ FIXED: Now using direct import
//     category: "Classification",
//     uploadedFiles: [],
//     description: "A dataset containing information about Titanic passengers and their survival status.",
//   },
//   {
//     name: "Wine Dataset",
//     image: wineImg,  // ✅ FIXED
//     category: "Classification",
//     uploadedFiles: [],
//     description: "A dataset used for classifying different types of wines based on chemical properties.",
//   },
//   {
//     name: "FER Dataset",
//     image: ferImg,  // ✅ FIXED
//     category: "Image",
//     uploadedFiles: [],
//     description: "A dataset for Facial Emotion Recognition (FER), used for emotion classification.",
//   },
//   {
//     name: "Yoga Pose Dataset",
//     image: yogaImg,  // ✅ FIXED
//     category: "Image",
//     uploadedFiles: [],
//     description: "A dataset containing images of different yoga poses for classification.",
//   },
//   {
//     name: "Mnist Dataset",
//     image: mnistImg,  // ✅ FIXED
//     category: "Image",
//     uploadedFiles: [],
//     description: "A dataset of handwritten digits used for image classification tasks.",
//   },
//   {
//     name: "Iris Dataset",
//     image: "https://storage.googleapis.com/kaggle-datasets-images/19/19/default-backgrounds/dataset-cover.jpg",
//     category: "Clustering",
//     uploadedFiles: [],
//     description: "A classic dataset for clustering different species of Iris flowers.",
//   },
// ];
