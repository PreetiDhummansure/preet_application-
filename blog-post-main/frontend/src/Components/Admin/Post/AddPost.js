import React, { useState } from "react";

const AddPost = () => {
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [category, setCategory] = useState("");
	const [description, setDescription] = useState("");
	// const [PostData, setPostData] = useState({});

	const handleSave = () => {
		console.log({ name, price, description, category });
	};

	return (
		<>
			<div className="conatainer">
				<div className="row mt-5">
					<div className="col-9 mx-auto">
						<div className="card shadow">
							<div className="card-body">
								<div className="row">
									<div className="mb-3 col-6">
										<label className="form-label">Name</label>
										<input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
									</div>
									<div className="mb-3 col-6">
										<label className="form-label">Price</label>
										<input type="text" className="form-control" onChange={(e) => setPrice(e.target.value)} />
									</div>
									<div className="mb-3 col-6">
										<label className="form-label">Category</label>
										<select defaultValue={0} className="form-select" onChange={(e) => setCategory(e.target.value)}>
											<option>Please Seelect</option>
											<option value="1">One</option>
											<option value="2">Two</option>
											<option value="3">Three</option>
										</select>
									</div>
									<div className="mb-3 col-6">
										<label className="form-label">Description</label>
										<textarea className="form-control" rows={3} defaultValue={""} onChange={(e) => setDescription(e.target.value)} />
									</div>
									<div className="col-12 text-end">
										<button className="btn btn-outline-success px-5" onClick={handleSave}>
											Save
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddPost;
