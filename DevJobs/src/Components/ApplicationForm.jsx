import "./ApplicationForm.css";
function ApplicationForm() {
  return (
    <div className="applicationFormContainer">
      <form className="applyForm">
        <div className="name">
          <label>
            <input
              type="text"
              placeholder="First Name"
              className="inputFields"
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Last Name"
              className="inputFields"
            />
          </label>
        </div>
        <div className="contact">
          <label>
            <input
              type="email"
              placeholder=" Email Address"
              className="inputFields"
            />
          </label>
          <label>
            <input
              type="number"
              placeholder=" Phone Number"
              className="inputFields"
            />
          </label>
        </div>
        <div className="address">
          <label className="country">
            <select className="addressLocation">
              <option value="">America</option>
              <option value="">Russian</option>
              <option value="">United Kingdom</option>
              <option value="">Japan</option>
              <option value="">Germany</option>
            </select>
          </label>
          <label className="country">
            <input
              type="text"
              placeholder="Street"
              className="addressLocation"
            />
          </label>
          <label className="country">
            <input type="text" placeholder="City" className="addressLocation" />
          </label>
          <label className="country">
            <input
              type="text"
              placeholder="State"
              className="addressLocation"
            />
          </label>
          <label className="country">
            <input
              type="text"
              placeholder="ZipCode"
              className="addressLocation"
            />
          </label>
        </div>

        <div className="documents">
          <label className="file">
            Upload Resume:
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx"
              className="file"
            />
          </label>

          <label className="file">
            Upload CoverLetter:
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx"
              className="file"
            />
          </label>
        </div>
        <label className="coverLetter">Cover Letter:</label>
        <textarea id="coverLetter" name="coverLetter" rows="4"></textarea>
        <button type="submit" className="bitSubmit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ApplicationForm;
