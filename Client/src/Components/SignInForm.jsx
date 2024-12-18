import { useState } from "react";
import NavBar from "./NavBar";
import "./SignInForm.css";
function SignInForm({ setIsLogin }) {
  const [userName, setUserName] = useState("lookingForAJob");
  const [userPassword, setUserPassword] = useState("lookingForAJobPassword");
  return (
    <>
      <NavBar />
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
          <button
            type="submit"
            className="submit"
            onClick={() => setIsLogin(true)}
          >
            Sign in
          </button>

          <p className="signUp">No account? Sign up</p>
        </form>
      </div>
    </>
  );
}

export default SignInForm;
