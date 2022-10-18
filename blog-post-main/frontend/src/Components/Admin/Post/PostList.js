import React from "react";
import { Link } from "react-router-dom";

const PostList = () => {
	return (
		<div>
			PostList
			<Link to="create">Add Post</Link>
			<Link to="561">Edit Post</Link>
		</div>
	);
};

export default PostList;
