import { Link } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";
function NavBar() {
  const [token, setToken] = useState(false);

  return (
    <nav className="navBar">
      <div className="logo">
        <Link to="/">DevJobs</Link>
      </div>
      <div className="credentials">
        {token ? (
          <button className="btn" onClick={() => setToken(false)}>
            <Link to="signIn">Sign In</Link>
          </button>
        ) : (
          <button className="btn" onClick={() => setToken(true)}>
            <Link to="register">Sign Out</Link>
          </button>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
