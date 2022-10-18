import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./home.css";

import { getHomeData } from "../Redux/Actions/HomeAction";

const Home = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.postReducer);

	useEffect(() => {
		dispatch(getHomeData());
	}, [dispatch]);

	return (
		<>
			<div className="row my-4 px-5">
				<div className="col-8">
					{data.posts &&
						data.posts.map((post, i) => (
							<div className="card shadow mb-4" key={i}>
								<div className="card-body">
									<h2>
										<Link to={`post/${post.id}`} className="nav-link blog-title">
											{post.title}
										</Link>
									</h2>
									<div className="my-3">
										<span>by </span>
										<span className="author-name">{`${post.user.fname} ${post.user.lname}`}</span>
										<span> {post.createdAt}</span>
									</div>
									<div className="row">
										<div className="col-4">
											<img src={post.coverImage} style={{ height: "150px" }} className="rounded w-100" alt="asdghuf sadsf" />
										</div>
										<div className="col-8">{post.body}</div>
									</div>
								</div>
							</div>
						))}
				</div>
				<div className="col-4">
					<div className="card shadow">
						<div className="card-body">
							<h4 className="">Popular Posts</h4>
							{data.popularPosts &&
								data.popularPosts.map((post, i) => (
									<div className="row my-3" key={i}>
										<div className="col-4">
											<img src={post.coverImage} className="rounded w-100" alt={post.title} style={{ height: "100px" }} />
										</div>
										<div className="col-8">
											<div className="fw-bold">
												<Link to="/" className="nav-link on-hover">
													{post.title}
												</Link>
											</div>
											<div className="my-2">
												<span style={{ fontSize: "12px" }}>{post.createdAt}</span>
											</div>
										</div>
									</div>
								))}
						</div>
					</div>
					<div className="card shadow my-4">
						<div className="card-body">
							<h4 className="">Categories</h4>
							<ol className="list-group">
								{data.categoryList &&
									data.categoryList.map((category, i) => (
										<li className="list-group-item d-flex justify-content-between align-items-start border-0 px-0 py-1" key={i}>
											<div className="ms-2 me-auto">
												<Link to="/" className="nav-link on-hover">
													{category.name}
												</Link>
											</div>
											<span className="badge bg-primary rounded-pill">14</span>
										</li>
									))}
							</ol>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
