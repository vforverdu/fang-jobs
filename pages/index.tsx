import axios from "axios";
import React from "react";
import Container from "../components/container";
import JobList from "../components/job-list";
import Landing from "../components/landing";
import { Job } from "../models/job";

interface JobsPageProps {
	jobs: Job[];
}

export default function JobsPage({ jobs }: JobsPageProps) {
	return (
		<>
			<Landing />
			<Container>
				<JobList jobs={jobs} />
			</Container>
		</>
	);
}

export async function getServerSideProps() {
	const url = "https://fang-jobs-scraper.ew.r.appspot.com/jobs/software";
	const response = await axios.get<Job[]>(url);
	const jobs = response.data;
	return { props: { jobs } };
}