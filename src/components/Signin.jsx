



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Signin.css";
// import Logo from "../assets/F_Logo.png";
// import Img from "../assets/signin.jpg";

// const Signin = () => {
//   const [formData, setFormData] = useState({ name: "", password: "" });
//   const [message, setMessage] = useState("");
//   const [isError, setIsError] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.name.trim() === "" || formData.password.trim() === "") {
//       setMessage("❌ All fields are required.");
//       setIsError(true);
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5000/signin", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setMessage("✅ Sign-in successful! Redirecting...");
//         setIsError(false);
//         setTimeout(() => {
//           window.location.href = "/";
//         }, 2000);
//       } else {
//         setMessage(`❌ ${data.message}`);
//         setIsError(true); 
//       }
//     } catch (err) {
//       setMessage("❌ Error connecting to the server.");
//       setIsError(true);
//     }
//   };

//   return (
//     <div className="signin-wrapper">
//       <div className="signin-box image-box">
//         <img src={Img} alt="Sign In" className="signin-image" />
//       </div>
//       <div className="signin-box form-box">
//         <img src={Logo} alt="Logo" className="logo" />
//         <h1>Welcome!</h1>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter your password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit">Submit</button>
//         </form>
//         <p className={isError ? "error-message" : "success-message"}>{message}</p>
//         <p>
//           Don't have an account? <Link to="/register">Register here</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signin;




















import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signin.css";
import Logo from "../assets/F_Logo.png";
import Img from "../assets/signin.jpg";

const Signin = () => {
  const [formData, setFormData] = useState({ name: "", password: "" });
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name.trim() === "" || formData.password.trim() === "") {
      setMessage("❌ All fields are required.");
      setIsError(true);
      return;
    }

    try {
      const response = await fetch("https://recler1-backend.onrender.com/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        setMessage("✅ Sign-in successful! Redirecting...");
        setIsError(false);
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        setMessage(`❌ ${data.message}`); // ✅ Fixed this line
        setIsError(true);
      }
    } catch (err) {
      setMessage("❌ Error connecting to the server."); // ✅ Fixed this line
      setIsError(true);
    }
  };

  return (
    <div className="signin-wrapper">
      <div className="signin-box image-box">
        <img src={Img} alt="Sign In" className="signin-image" />
      </div>
      <div className="signin-box form-box">
        <img src={Logo} alt="Logo" className="logo" />
        <h1>Welcome!</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
        <p className={isError ? "error-message" : "success-message"}>{message}</p>
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
