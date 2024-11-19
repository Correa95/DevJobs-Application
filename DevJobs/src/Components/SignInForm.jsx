import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./SignInForm.css";
function SignInForm() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("lookingForAJob");
  const [userPassword, setUserPassword] = useState("lookingForAJobPassword");
  return (
    <div className="loginFormContainer">
      <form className="form">
        <p className="formTitle">Sign in to your account</p>
        <div className="inputContainer">
          <input type="text" placeholder="Enter UserName" value={userName} />
          <span></span>
        </div>
        <div className="inputContainer">
          <input
            type="password"
            placeholder="Enter password"
            value={userPassword}
          />
        </div>
        <button type="submit" className="submit" onClick={() => navigate("/")}>
          Sign in
        </button>

        <p className="signUp" onClick={() => navigate("/register")}>
          No account? Sign up
        </p>
      </form>
    </div>
  );
}

export default SignInForm;
