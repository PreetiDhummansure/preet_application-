import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
	let { id } = useParams();
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/post");
	};

	return (
		<div>
			EditPost {id}
			<button onClick={handleClick}>Go to contact</button>
		</div>
	);
};

export default EditPost;
