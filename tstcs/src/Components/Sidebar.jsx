import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Sidebar = () => {
  const navigate = useNavigate();
  const [showHost, setShowHost] = useState(false);
  const [showDatabase, setShowDatabase] = useState(false);
  const [showExadata, setShowExadata] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleHostClick = () => {
    setShowHost(!showHost);
  };

  const handleHost1Click = () => {
    navigate("/hostel");
  };

  const handleHost2Click = () => {
    navigate("/hos");
  };

  const handleDatabaseClick = () => {
    setShowDatabase(!showDatabase);
  };

  const handleExadataClick = () => {
    setShowExadata(!showExadata);
  };

  const handleHost3Click = () => {
    navigate("/hoster");
  };

  const handleLogout = () => {
    navigate("/login");
  };

  const handleSearch = () => {
    alert(`Searching for: ${searchQuery}`);
  };


  return (
    <div style={{ display: "flex" }}>
      <div className="sidebar">
        <ul>
          <li onClick={handleHostClick}>
            <ul onClick={handleHost3Click}>Host</ul>
            {showHost && (<ul className="submenu">
              <li onClick={handleHost1Click}>Host1</li>
              <li onClick={handleHost2Click}>Host2</li>
            </ul>
            )}
          </li>
          <li onClick={handleDatabaseClick}>
            Database {showDatabase && (<ul className="submenu">
              <li>Database1</li> <li>Database2</li> </ul>)} </li>
          <li onClick={handleExadataClick}> Exadata {showExadata && (<ul className="submenu">
            <li>Exadata1</li> <li>Exadata2</li> </ul>)} </li>
          <li>Settings</li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </div>

      <div style={{ flex: 1, padding: '90px', textAlign: 'center', marginTop: '90px' }}>
        <div style={{ position: 'absolute', top: '10px', right: '20px', display: 'flex', alignItems: 'center' }}>
          <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '5px', marginRight: '10px' }} />
          <button onClick={handleSearch}
            style={{ padding: '5px 10px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Search
          </button>
        </div>
        <h1 style={{ color: 'red' }}>User</h1>
        <p style={{ color: 'black' }}>Welcome to the page</p>
      </div>
    </div>

  );
};
export default Sidebar