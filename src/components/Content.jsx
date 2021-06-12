import React from "react";

export default function Content(props) {
	const theme = props.theme;
	console.log(theme);
	return (
		<>
			<div className="container">
				<div className="row">
					{theme.theme === "light" ? (
						<>
							<div className="col-md-6">
								<div className="card mt-5">
									<div className="card-body">
										<div className="card-title text-start">
											<span>Build Facebook With MERN STACK</span>
											<p className="text-mute">
												im build facebook with mern stack and deploy in vercel.
											</p>
											<div className="flex">
												<div
													className="badge btn-sm"
													style={{ backgroundColor: "darkcyan" }}
												>
													<span>Typescript</span>
												</div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 w-5"
													style={{ marginLeft: "15px" }}
													fill="none"
													width={18}
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
													/>
												</svg>
												<small className="mx-1">277</small>
												<small className="text-muted mx-2">
													Updated 12 June 2021
												</small>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="card mt-5">
									<div className="card-body">
										<div className="card-title text-start">
											<span>riyaraa.dev</span>
											<p className="text-mute">
												hi, this is my personal website, you can check it here
												😄
											</p>
											<div className="flex">
												<div
													className="badge btn-sm"
													style={{ backgroundColor: "darkorange" }}
												>
													<span>Javascript</span>
												</div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 w-5"
													style={{ marginLeft: "15px" }}
													fill="none"
													width={18}
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
													/>
												</svg>
												<small className="mx-1">150</small>
												<small className="text-muted mx-2">
													Updated 12 June 2021
												</small>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="card mt-5">
									<div className="card-body">
										<div className="card-title text-start">
											<span>news-blog</span>
											<p className="text-mute">
												hi there, I created this website with MERN and axios 😁
											</p>
											<div className="flex">
												<div
													className="badge btn-sm"
													style={{ backgroundColor: "darkorange" }}
												>
													<span>Javascript</span>
												</div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 w-5"
													style={{ marginLeft: "15px" }}
													fill="none"
													width={18}
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
													/>
												</svg>
												<small className="mx-1">46</small>
												<small className="text-muted mx-2">
													Updated 12 June 2021
												</small>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="card mt-5">
									<div className="card-body">
										<div className="card-title text-start">
											<span>Netlfix Clone</span>
											<p className="text-mute">
												Im Build netlflix clone with React, Golang, Postgresql,
												Docker
											</p>
											<div className="flex">
												<div
													className="badge btn-sm"
													style={{ backgroundColor: "darkcyan" }}
												>
													<span>Typescript</span>
												</div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 w-5"
													style={{ marginLeft: "15px" }}
													fill="none"
													width={18}
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
													/>
												</svg>
												<small className="mx-1">65</small>
												<small className="text-muted mx-2">
													Updated 12 June 2021
												</small>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="card mt-5">
									<div className="card-body">
										<div className="card-title text-start">
											<span>Gramedia Lite</span>
											<p className="text-mute">
												Gramedia is book store website e-commerce
											</p>
											<div className="flex">
												<div
													className="badge btn-sm"
													style={{ backgroundColor: "purple" }}
												>
													<span>Php</span>
												</div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 w-5"
													style={{ marginLeft: "15px" }}
													fill="none"
													width={18}
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
													/>
												</svg>
												<small className="mx-1">20</small>
												<small className="text-muted mx-2">
													Updated 11 June 2021
												</small>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="card mt-5">
									<div className="card-body">
										<div className="card-title text-start">
											<span>sobat-quran</span>
											<p className="text-mute">
												this website is a reading alquran.
											</p>
											<div className="flex">
												<div
													className="badge btn-sm"
													style={{ backgroundColor: "darkorange" }}
												>
													<span>Javascript</span>
												</div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 w-5"
													style={{ marginLeft: "15px" }}
													fill="none"
													width={18}
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
													/>
												</svg>
												<small className="mx-1">200</small>
												<small className="text-muted mx-2">
													Updated 12 June 2021
												</small>
											</div>
										</div>
									</div>
								</div>
							</div>
						</>
					) : (
						<>
							<div className="col-md-6">
								<div
									className="card mt-5  border border-light"
									style={{ backgroundColor: "rgb(13,17,23)" }}
								>
									<div className="card-body">
										<div className="card-title text-start">
											<span className="text-light">
												Build Facebook With MERN STACK
											</span>
											<p className="text-muted">
												im build facebook with mern stack and deploy in vercel.
											</p>
											<div className="flex">
												<div
													className="badge btn-sm"
													style={{ backgroundColor: "darkcyan" }}
												>
													<span>Typescript</span>
												</div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 w-5"
													style={{ marginLeft: "15px" }}
													fill="none"
													width={18}
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={1}
														d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
													/>
												</svg>
												<small className="mx-1 text-light">277</small>
												<small className="mx-2 text-muted">
													Updated 12 June 2021
												</small>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div
									className="card mt-5  border border-light"
									style={{ backgroundColor: "rgb(13,17,23)" }}
								>
									<div className="card-body">
										<div className="card-title text-start">
											<span className="text-light">riyaraa.dev</span>
											<p className="text-muted">
												hi, this is my personal website, you can check it here
												😄
											</p>
											<div className="flex">
												<div
													className="badge btn-sm"
													style={{ backgroundColor: "darkorange" }}
												>
													<span>Javascript</span>
												</div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 w-5"
													style={{ marginLeft: "15px" }}
													fill="none"
													width={18}
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
													/>
												</svg>
												<small className="mx-1 text-light">150</small>
												<small className="text-muted mx-2">
													Updated 12 June 2021
												</small>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div
									className="card mt-5  border border-light"
									style={{ backgroundColor: "rgb(13,17,23)" }}
								>
									<div className="card-body">
										<div className="card-title text-start">
											<span className="text-light">news-blog</span>
											<p className="text-muted">
												hi there, I created this website with MERN and axios 😁
											</p>
											<div className="flex">
												<div
													className="badge btn-sm"
													style={{ backgroundColor: "darkorange" }}
												>
													<span>Javascript</span>
												</div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 w-5"
													style={{ marginLeft: "15px" }}
													fill="none"
													width={18}
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
													/>
												</svg>
												<small className="text-white mx-1">46</small>
												<small className="text-muted mx-2">
													Updated 12 June 2021
												</small>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div
									className="card mt-5  border border-light"
									style={{ backgroundColor: "rgb(13,17,23)" }}
								>
									<div className="card-body">
										<div className="card-title text-start">
											<span className="text-light">Netlfix Clone</span>
											<p className="text-muted">
												Im Build netlflix clone with React, Golang, Postgresql,
												Docker
											</p>
											<div className="flex">
												<div
													className="badge btn-sm"
													style={{ backgroundColor: "darkcyan" }}
												>
													<span>Typescript</span>
												</div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 w-5"
													style={{ marginLeft: "15px" }}
													fill="none"
													width={18}
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
													/>
												</svg>
												<small className="text-white mx-1">65</small>
												<small className="text-muted mx-2">
													Updated 12 June 2021
												</small>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div
									className="card mt-5  border border-light"
									style={{ backgroundColor: "rgb(13,17,23)" }}
								>
									<div className="card-body">
										<div className="card-title text-start">
											<span className="text-light">Gramedia Lite</span>
											<p className="text-muted">
												Gramedia is book store website e-commerce
											</p>
											<div className="flex">
												<div
													className="badge btn-sm"
													style={{ backgroundColor: "purple" }}
												>
													<span>Php</span>
												</div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 w-5"
													style={{ marginLeft: "15px" }}
													fill="none"
													width={18}
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
													/>
												</svg>
												<small className="text-white mx-1">20</small>
												<small className="text-muted mx-2">
													Updated 11 June 2021
												</small>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div
									className="card mt-5  border border-light"
									style={{ backgroundColor: "rgb(13,17,23)" }}
								>
									<div className="card-body">
										<div className="card-title text-start">
											<span className="text-white">sobat-quran</span>
											<p className="text-muted">
												this website is a reading alquran.
											</p>
											<div className="flex">
												<div
													className="badge btn-sm"
													style={{ backgroundColor: "darkorange" }}
												>
													<span>Javascript</span>
												</div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-6 w-5"
													style={{ marginLeft: "15px" }}
													fill="none"
													width={18}
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
													/>
												</svg>
												<small className="text-white mx-1">200</small>
												<small className="text-muted mx-2">
													Updated 12 June 2021
												</small>
											</div>
										</div>
									</div>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
}
