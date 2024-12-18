import "./Register.css";

function Register() {
  return (
    <div className="RegisterFormContainer">
      <form className="employeeForm">
        <h2>Employee Registration</h2>

        <div className="formInformation">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" required />
        </div>

        <div className="formInformation">
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" required />
        </div>

        <div className="formInformation">
          <label>Phone Number</label>
          <input type="tel" placeholder="Enter your phone number" required />
        </div>

        {/* <div className="formInformation">
          <label>Position</label>
          <input
            type="text"
            id="position"
            name="position"
            placeholder="Position you're applying for"
            required
          />
        </div> */}

        <div className="formInformation">
          <label>User Name</label>
          <input type="text" required placeholder="create your userName" />
          <label>Cover Letter</label>
          <input type="password" placeholder="create your password" required />
        </div>

        <div className="formInformation">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
