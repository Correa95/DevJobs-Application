import { Link } from "react-router-dom";
// import { useState } from "react";
import "./NavBar.css";
function NavBar({ isLogin, setIsLogin }) {
  // const [token, setToken] = useState(false);
  // const navigate=useNavigate()

  return (
    <nav className="navBar">
      <div className="logo">
        <Link to="/">DevJobs</Link>
      </div>
      {isLogin && (
        <div className="credentials">
          <button className="btn" onClick={() => setIsLogin(!true)}>
            Sign Out
          </button>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
