import React, {useState, useEffect} from 'react';
import Header from './Header';
import Form from './Form';
import JobList from './JobList';

const App = () => {
	const initialState = JSON.parse(localStorage.getItem("jobs")) || [];
	const [input, setInput] = useState("");
	const [company, setCompany] = useState("");
	const [location, setLocation] = useState("");
	const [experience, setExperience] = useState("");
	const [salary, setSalary] = useState("");
	const [description, setDescription] = useState("");
	const [jobs, setJobs] = useState(initialState);
	const [editJob, setEditJob] = useState(null);

	useEffect(() => {
		localStorage.setItem("jobs",JSON.stringify(jobs));
	}, [jobs]);

	return (
		<div className="container">
			<div className="app-wrapper">
				<div>
					<Header/>
				</div>
				<div>
				    <Form
					input= {input}
				    setInput= {setInput}
				    company= {company}
				    setCompany= {setCompany}
				    location= {location}
				    setLocation= {setLocation}
				    experience= {experience}
					setExperience= {setExperience}
				    salary= {salary}
				    setSalary= {setSalary}
				    description= {description}
				    setDescription= {setDescription}
				    jobs={jobs}
				    setJobs={setJobs}
				    editJob={editJob}
				    setEditJob={setEditJob}
				    />
			    </div>
			    <div>
			    	<div className="header">
						<br/>
						<hr/>
						<br/><br/>
		   				<h1>Posted Jobs</h1>
		   			</div>
					<JobList jobs={jobs} setJobs={setJobs} setEditJob={setEditJob}/>
			    </div>
			</div>
		</div>
		);
};

export default App;