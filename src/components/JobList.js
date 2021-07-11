import React from 'react';
import './JobList.css';

const JobList = ({jobs, setJobs, setEditJob}) => {
	const handleEdit = ({id}) => {
		const findJob = jobs.find((job) => job.id === id);
		setEditJob(findJob);
	};

	const handleDelete = ({id}) => {
		setJobs(jobs.filter((job) => job.id !==id));
	};

	return (
		<div>
			{jobs.map((job) => (
				<li className="list-item" key={job.id}>
					<div className="buttons">
				    	<button className="button-edit task-button" onClick={() => handleEdit(job)}>
				        	<i className="fa fa-edit"></i>
				    	</button>
				    	<button className="button-delete task-button" onClick={() => handleDelete(job)}>
				        	<i className="fa fa-trash"></i>
				    	</button>	
					</div>
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