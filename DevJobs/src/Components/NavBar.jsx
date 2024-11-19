import { Link } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";
function NavBar() {
  const [token, setToken] = useState(false);
  // const navigate=useNavigate()

  return (
    <nav className="navBar">
      <div className="logo">
        <Link to="/">DevJobs</Link>
      </div>
      <div className="credentials">
        {token ? (
          <button className="btn" onClick={() => setToken(false)}>
            <Link to="signInForm">Sign In</Link>
          </button>
        ) : (
          <button className="btn" onClick={() => setToken(true)}>
            <Link to="signInForm">Sign Out</Link>
          </button>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
