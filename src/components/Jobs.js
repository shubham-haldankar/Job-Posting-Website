import React from 'react';

const JobList = ({jobs, setJobs, setEditJob}) => {
	return (
		<div>
			{jobs.map((job) => (
				<li className="list-item" key={job.id}>
					<h3 className="display-job heading">{job.title}</h3>
					<h3 className="display-job">{job.comp}</h3>
					<p className="display-job"><b>Location:</b> {job.loc}</p>
					<p className="display-job"><b>Experience:</b> {job.exp}</p>
					<p className="display-job"><b>Salary:</b> {job.sal}</p>
					<p><b>Job Description:</b></p>
					<p className="display-job-description">{job.jd}</p>
				</li>
				)
			)}
		</div>);
};

export default JobList;