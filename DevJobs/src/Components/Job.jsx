import { useParams, useNavigate } from "react-router-dom";
import data from "/data/data.json";
import "./Job.css";
function Job() {
  const navigate = useNavigate();
  // const { jobId } = useParams();
  const { id } = useParams();
  const job = data.find((_, index) => index === parseInt(id, 10));

  if (!job) {
    return <h2>Job not found</h2>;
  }
  return (
    <div className="jobDetailContainer">
      <div className="jobDetail">
        <div className="top">
          <img src={job.logo} alt={`${job.company} logo`} className="img" />
          <div className="company">
            <h1>{job.company}</h1>
            <small>{job.company.com}</small>
          </div>
          <button className="website">
            <a href={job.website}>Company Website</a>
          </button>
        </div>
        <div className="description">
          <div className="timeDetail">
            <h3>{job.postedAt}</h3>
            <h3>{job.contract}</h3>
          </div>
          <button
            className="apply"
            onClick={() => navigate("/applicationForm")}
          >
            Apply Now
          </button>
          <h2 className="position">{job.position}</h2>
          <address className="location">{job.location}</address>
          <section className="requirement">
            <h2>Requirements</h2>
            <p className="content">{job.requirements.content}</p>
            <ul>
              {job.requirements.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="role">
            <h2>Role</h2>
            <p className="content">{job.role.content}</p>
            <ol>
              {job.role.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Job;
