import "./ApplicationForm.css";
function ApplicationForm() {
  return (
    <div className="applicationFormContainer">
      <form className="jobApplicationForm">
        <h2>Application Form</h2>

        <div className="formGroup">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" required />
        </div>

        <div className="formGroup">
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" required />
        </div>

        <div className="formGroup">
          <label>Phone Number</label>
          <input type="tel" placeholder="Enter your phone number" required />
        </div>

        <div className="formGroup">
          <label>Position Applied For</label>
          <input type="text" placeholder="Enter the position" required />
        </div>

        <div className="formGroup">
          <label>Years of Experience</label>
          <input
            type="number"
            placeholder="Enter your experience"
            min="0"
            required
          />
        </div>

        <div className="formGroup">
          <label>Upload Resume</label>
          <input type="file" accept=".pdf,.doc,.docx" required />
        </div>
        <div className="formGroup">
          <label>Upload Cover Letter</label>
          <input type="file" accept=".pdf,.doc,.docx" required />
        </div>

        <div className="formGroup">
          <label>Cover Letter</label>
          <textarea
            rows="4"
            placeholder="Write a brief cover letter"
          ></textarea>
        </div>

        <div className="formGroup">
          <button type="submit">Submit Application</button>
        </div>
      </form>
    </div>
  );
}

export default ApplicationForm;
