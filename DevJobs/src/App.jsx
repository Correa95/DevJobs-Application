import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Jobs from "./Components/Jobs";
import Job from "./Components/Job";
import RegisterForm from "./Components/Register";
import SignInForm from "./Components/SignInForm";
import ApplicationForm from "./Components/ApplicationForm";
// import Form from "./Components/Form";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      {/* <Form /> */}
      <Routes>
        <Route path="/" element={<Jobs />} />
        <Route path="/job/:id" element={<Job />} />
        <Route path="/registerForm" element={<RegisterForm />} />
        <Route path="/signInForm" element={<SignInForm />} />
        <Route path="/applicationForm" element={<ApplicationForm />} />
      </Routes>
    </>
  );
}

export default App;

{
  /* <div className="form-group">
          <label>Upload Resume:</label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf,.doc,.docx"
          />
        </div>

        <div className="form-group">
          <label for="coverLetter">Cover Letter:</label>
          <textarea id="coverLetter" name="coverLetter" rows="4"></textarea>
        </div>

        <button type="submit">Submit Application</button> */
}
