import { useState } from "react"

export default function Home() {
	return (
		<>
			<header>
				<nav className="navbar navbar-expand-lg bg-body-tertiary">
					<div className="container-fluid">
						<a className="navbar-brand" href="#">
							Resume Fixer
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon" />
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent"
						>
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<a className="nav-link active" aria-current="page" href="#">
										Home
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
			<main className="container">
				<div className="row">
					<h3>How to use</h3>
					<p>
						1. Enter the current job description for a position on your current
						resume.
					</p>
					<p>
						2. Copy and paste the job description of the desired position you
						want from whichever job board you found the position.
					</p>
					<p>
						3. Click <strong>Generate</strong>
					</p>
					<p>
						ChatGPT will review the details of the current position you provided
						and will modify it so that it is tailored towards the job
						description that was provided.
					</p>
				</div>
				<form className="row">
					<div className="col-lg-6 col-sm-12 px-4 py-4">
						<h4>1. Work History</h4>
						<div className="form-group">
							<textarea
								name="work-history"
								id="work-history"
								className="form-control"
							></textarea>
						</div>
					</div>
					<div className="col-lg-6 col-sm-12 px-4 py-4">
						<h4>2. Job Description (of desired job)</h4>
						<div className="form-group">
							<textarea
								name="job-descr"
								id="job-descr"
								className="form-control"
							></textarea>
						</div>
					</div>
					<div className="row">
						<div className="d-flex flex-row justify-content-center">
							<button className="btn btn-primary">Generate</button>
						</div>
					</div>
				</form>
				<section className="row results mt-5">
					<h4 className="text-center">Results</h4>
				</section>
			</main>
		</>
	)
}
