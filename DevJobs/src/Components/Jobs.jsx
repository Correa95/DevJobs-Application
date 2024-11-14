import data from "/data/data.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Jobs.css";

function Jobs() {
  const navigate = useNavigate();
  const handleCardClick = (id) => {
    navigate(`/job/${id}`);
  };
  const [filters, setFilters] = useState({
    expertise: "",
    location: "",
    jobType: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value.toLowerCase(),
    });
  };

  const filteredJobs = data.filter((job) => {
    // Check if job matches expertise/title/company filter
    const expertiseMatch =
      !filters.expertise ||
      job.position.toLowerCase().includes(filters.expertise) ||
      job.company.toLowerCase().includes(filters.expertise) ||
      (job.expertise &&
        job.expertise.toLowerCase().includes(filters.expertise));

    // Check if job matches location filter
    const locationMatch =
      !filters.location ||
      job.location.toLowerCase().includes(filters.location);

    // Check if job matches job type filter
    const jobTypeMatch =
      !filters.jobType || job.contract.toLowerCase() === filters.jobType;

    return expertiseMatch && locationMatch && jobTypeMatch;
  });

  return (
    <>
      <div className="formContainer">
        <form
          className="filterForm"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label className="label">
            <input
              type="text"
              placeholder="filter by title, company, expertise"
              className="input"
              name="expertise"
              value={filters.expertise}
              onChange={handleInputChange}
            />
          </label>
          <label className="label">
            <input
              type="text"
              placeholder="filter by location"
              className="input"
              name="location"
              value={filters.location}
              onChange={handleInputChange}
            />
          </label>

          <label className="labelSelect">
            Job Type:
            <select
              name="jobType"
              value={filters.jobType}
              onChange={handleInputChange}
            >
              <option value="">All</option>
              <option value="full time">Full Time</option>
              <option value="part time">Part Time</option>
            </select>
          </label>
        </form>
      </div>

      <div className="jobContainer">
        {filteredJobs.slice(0, 8).map((job, index) => (
          <div
            className="jobCard"
            key={index}
            onClick={() => handleCardClick(job.id)}
          >
            <img src={job.logo} alt={`${job.company} logo`} />
            <div className="time">
              <h3>{job.postedAt}</h3>
              <h3>{job.contract}</h3>
            </div>
            <h2 className="jobPosition">{job.position}</h2>
            <h1>{job.company}</h1>
            <address className="jobLocation">{job.location}</address>
          </div>
        ))}
      </div>
    </>
  );
}

export default Jobs;
