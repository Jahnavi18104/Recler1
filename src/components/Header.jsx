
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Logo from "../assets/F_Logo.png"; 
// import './Header.css';

// const Header = ({ onSearch }) => {
//   const [input, setInput] = useState("");

//   const handleSearch = () => {
//     onSearch(input);
//   };

//   return (
//     <header className="header">
//       <div className="logo-container">
//         <img src={Logo} alt="Logo" className="logo" />
//       </div>

//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search for datasets..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           className="search-input"
//         />
//         <button onClick={handleSearch} className="search-button">Search</button>
//       </div>

//       <div className="auth-buttons">
//         <Link to="/signin" className="auth-button">Sign In</Link>
//         <Link to="/register" className="auth-button">Register</Link>
//       </div>
//     </header>
//   );
// };

// export default Header;

// Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/F_Logo.png";
import './Header.css';

const Header = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    const trimmedInput = input.trim();
    if (trimmedInput) {
      onSearch(trimmedInput);
    }
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search for datasets..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>

      <div className="auth-buttons">
        <Link to="/signin" className="auth-button">Sign In</Link>
        <Link to="/register" className="auth-button">Register</Link>
      </div>
    </header>
  );
};

export default Header;
