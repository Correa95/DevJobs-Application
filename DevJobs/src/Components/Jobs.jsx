import data from "/data/data.json";
import "./Jobs.css";
import { useNavigate } from "react-router-dom";

function Jobs() {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/job/${id}`);
  };
  return (
    <div className="jobContainer">
      {data.slice(0, 8).map((job, index) => (
        <>
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
        </>
      ))}
    </div>
  );
}

export default Jobs;
