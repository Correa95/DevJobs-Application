import "./ApplicationForm.css";
function ApplicationForm() {
  return (
    <div className="applicationFormContainer">
      <form>
        <div className="name">
          <label>
            Full Name: <input type="text" placeholder="Enter Your Full Name" />
          </label>
          <label>
            Email Address:
            <input type="email" placeholder="Enter Your Email Address" />
          </label>
        </div>
        <div className="documents">
          <label>
            Upload Resume:
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx"
            />
          </label>

          <label>
            Upload CoverLetter:
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx"
            />
          </label>
        </div>
        <label>Cover Letter:</label>
        <textarea id="coverLetter" name="coverLetter" rows="4"></textarea>
      </form>
    </div>
  );
}

export default ApplicationForm;
