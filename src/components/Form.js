import React, {useEffect} from 'react';
import {v4 as uuidv4} from "uuid";
import './Form.css';

const Form = ({input, setInput, company, setCompany, location, setLocation, experience, setExperience, salary, setSalary, description, setDescription, jobs, setJobs, editJob, setEditJob}) => {
	const updateJob = (id, title, comp, loc, exp, sal, jd) => {
		const newJob = jobs.map((job) => 
			job.id === id ? {id, title, comp, loc, exp, sal, jd} : job
		);
		setJobs(newJob);
		setEditJob("");
	};
	useEffect(() => {
		if(editJob){
			setInput(editJob.title);
			setCompany(editJob.comp);
			setLocation(editJob.loc);
			setExperience(editJob.exp);
			setSalary(editJob.sal);
			setDescription(editJob.jd);
		}else{
			setInput("");
			setCompany("");
			setLocation("");
			setExperience("");
			setSalary("");
			setDescription("");
		}
	}, [setInput, setCompany, setLocation, setExperience, setSalary, setDescription, editJob]);

	const onInputChange = (event) =>{
		setInput(event.target.value);
	};

	const onCompanyChange = (event) =>{
		setCompany(event.target.value);
	};

	const onLocationChange = (event) =>{
		setLocation(event.target.value);
	};

	const onExperienceChange = (event) =>{
		setExperience(event.target.value);
	};

	const onSalaryChange = (event) =>{
		setSalary(event.target.value);
	};
	
	const onDescriptionChange = (event) => {
		setDescription(event.target.value);
	};

	const onFormSubmit = (event) =>{
		event.preventDefault();
		if(!editJob){
			setJobs([...jobs, {id: uuidv4(), title: input, comp: company, loc: location, exp: experience, sal:salary, jd: description}]);
			setInput("");
			setCompany("");
			setLocation("");
			setExperience("");
			setSalary("");
			setDescription("");
		} else {
			updateJob(editJob.id, input, company, location, experience, salary, description);
		}
	};
	return(
		<form onSubmit={onFormSubmit}>
		<textarea
			    type="text" 
			    placeholder="Write a Job Description" 
			    className="task-description" 
			    value={description} 
			    multiline={true}
			    onChange={onDescriptionChange}
			/>
			<input 
			    type="text" 
			    placeholder="Write a Job Title" 
			    className="task-input" 
			    value={input} 
			    required 
			    onChange={onInputChange}
			/>
			<input 
			    type="text" 
			    placeholder="Write a Company Name" 
			    className="task-input" 
			    value={company} 
			    required 
			    onChange={onCompanyChange}
			/>
			<input 
			    type="text" 
			    placeholder="Write a Job Location" 
			    className="task-input" 
			    value={location} 
			    required 
			    onChange={onLocationChange}
			/>
			<input 
			    type="text" 
			    placeholder="Write a Experience Required" 
			    className="task-input" 
			    value={experience} 
			    required 
			    onChange={onExperienceChange}
			/>
			<input 
			    type="text" 
			    placeholder="Write a Job Salary" 
			    className="task-input inblock" 
			    value={salary} 
			    required 
			    onChange={onSalaryChange}
			/>
			
			<button className="button-add" type="submit">
				<span>
					{editJob ? "OK" : "Add"}
				</span>
			</button>
		</form>
		);
};

export default Form;