import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import PostJob from './components/PostJob';
import ViewJob from './components/ViewJob';
import './App.css';

export default function Urls() {
	return(
		<Router>
			<Switch>
				<Route path="/:id" children={<Child/>} />
					<div className="container">
						<div className="app-wrapper change-height">
							<h1>Job Posting Website</h1>
							<br/>
							<ul>
								
									<li>
										<h1><Link to="/post-a-job">
										<button className="button-add list-item colored" >
								<span>Post a Job</span>
								</button></Link></h1>
									</li>
									
								
									<li>
										<h1><Link to="/view-jobs"><button className="button-add list-item colored">
								<span>View Jobs</span>
								</button></Link></h1>
									</li>	
									
							</ul>
						</div>
					</div>
			</Switch>
		</Router>
		)
}

function Child() {
	let {id} = useParams();
	if(id==="post-a-job"){
		return <PostJob/>
	}else{
		return <ViewJob/>
	}
}