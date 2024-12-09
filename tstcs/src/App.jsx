import "./App.css";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import Login from "./Components/Login.jsx";
import Hoster from "./Components/Hoster.jsx";
import Hostel from "./Components/Hostel.jsx";
import Hos from "./Components/Hos.jsx";

function App() {
  const LayoutWithSidebar = ({ children }) => {
    const location = useLocation();
    const routesWithoutSidebar = ["/", "/side", "/login"];
    const showSidebar = !routesWithoutSidebar.includes(location.pathname);

    return (
      <div style={{ display: "flex" }}>
        {showSidebar && <Sidebar />}
        <div style={{ flex: 1 }}>{children}</div>
      </div>
    );
  };

  return (
    <Router>
      <LayoutWithSidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/side" element={<Sidebar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hoster" element={<Hoster />} />
          <Route path="/hostel" element={<Hostel />} />
          <Route path="/hos" element={<Hos />} />
        </Routes>
      </LayoutWithSidebar>
    </Router>
  );
}

export default App;
