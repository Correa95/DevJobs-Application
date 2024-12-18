import "./Form.css";

function Form() {
  return (
    <div className="formContainer">
      <form className="filterForm">
        <label className="label">
          <input
            type="text"
            placeholder="filter by title, company, expertise"
            className="input"
          />
        </label>
        <label className="label">
          <input
            type="text"
            placeholder="filter by location"
            className="input"
          />
        </label>

        <label className="labelSelect">
          Job Type:
          <select>
            <option>Full Time</option>
            <option>Part Time</option>
          </select>
          <button className="search">Search</button>
        </label>
      </form>
    </div>
  );
}

export default Form;
