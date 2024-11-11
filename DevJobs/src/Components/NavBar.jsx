import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <nav className="navBar">
      <div className="logo">
        <Link to="/">DevJobs</Link>
      </div>
      <div className="credentials">
        <button className="btn">
          <Link to="signIn">Sign In</Link>
        </button>
        <button className="btn">
          <Link to="register">Sign Up</Link>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
