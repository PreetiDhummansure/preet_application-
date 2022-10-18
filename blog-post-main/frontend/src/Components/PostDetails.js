import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPostDetails } from "../Redux/Actions/HomeAction";

const PostDetails = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const post = useSelector((state) => state.postReducer);
	console.log("first", id);

	useEffect(() => {
		dispatch(getPostDetails(id));
	}, [dispatch, id]);

	return (
		<>
			<div className="row my-4 px-5">
				<div className="col-8">
					{post && (
						<div className="card shadow mb-4">
							<div className="card-body">
								<h2>
									<Link to={`post/${post.id}`} className="nav-link blog-title">
										{post.title}
									</Link>
								</h2>
								<div className="my-3">
									<span>by </span>
									<span className="author-name">{`${post.user?.fname} ${post.user?.lname}`}</span>
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
					)}
				</div>
			</div>
		</>
	);
};

export default PostDetails;
