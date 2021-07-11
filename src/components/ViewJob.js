import React, {useState} from 'react';
import Jobs from './Jobs';
import './ViewJob.css';

const ViewJob = () => {
	const initialState = JSON.parse(localStorage.getItem("jobs")) || [];
    const [jobs, setJobs] = useState(initialState);
	return (
		<div className="container">
			<div className="app-wrapper display-list">
			    <div className="header">
	    			<h1>Posted Jobs</h1>
	    		</div>
				<Jobs jobs={jobs} setJobs={setJobs}/>
			</div>
		</div>
		)
};

export default ViewJob;