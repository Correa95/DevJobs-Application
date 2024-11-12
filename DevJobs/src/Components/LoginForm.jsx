import "./LoginForm.css";

function LoginForm() {
  return (
    <div className="loginFormContainer">
      <form className="form">
        <p className="formTitle">Sign in to your account</p>
        <div className="inputContainer">
          <input type="email" placeholder="Enter email" />
          <span></span>
        </div>
        <div className="inputContainer">
          <input type="password" placeholder="Enter password" />
        </div>
        <button type="submit" className="submit">
          Sign in
        </button>

        <p className="signUp">
          No account?
          <a href="">Sign up</a>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
