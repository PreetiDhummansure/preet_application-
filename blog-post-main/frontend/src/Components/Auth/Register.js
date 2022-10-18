import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AxiosAPI from "../../Helpers/AxiosAPI";

const Register = () => {
	const navigate = useNavigate();

	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const validatePassword = (password) => {
		if (password.length < 6) return true;
		return false;
	};

	const validateEmail = (email) => {
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) return false;
		return true;
	};

	const matchPassword = (pass, confPass) => {
		if (pass === confPass) return false;
		else return true;
	};

	const handleSubmit = () => {
		if (validateEmail(email)) {
			alert("Please enter correct email address!");
			return false;
		}

		if (validatePassword(password)) {
			alert("Password should contains at least 6 characters!");
			return false;
		}

		if (validatePassword(confirmPassword)) {
			alert("Confirm Password should contains at least 6 characters!");
			return false;
		}

		if (matchPassword(password, confirmPassword)) {
			alert("Password & Confirm Password not matched!");
			return false;
		}

		AxiosAPI
			.post("/auth/register", { name: fullName, email, password })
			.then((res) => {
				localStorage.setItem("user", JSON.stringify(res.data));
				// manageStore({ ...store, user: res.data });
				navigate("/");
			})
			.catch((err) => {
				console.log(err.message);
			});

		// console.log("Register", fullName, email, password);
	};;

	return (
		<>
			<div className="row my-5">
				<div className="col-lg-5 col-md-6 col-sm-8 mx-auto">
					<div className="card shadow">
						<h4 className="text-center mt-3">Register</h4>
						<div className="card-body">
							<div className="form-row">
								<div className="col">
									<label className="form-label">Full Name</label>
									<input type="text" className="form-control" onChange={(e) => setFullName(e.target.value)} />
								</div>
								<div className="col">
									<label className="form-label">Email</label>
									<input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
								</div>
								<div className="col mt-3">
									<label className="form-label">Password</label>
									<input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
								</div>
								<div className="col mt-3">
									<label className="form-label">Confirm Password</label>
									<input type="password" className="form-control" onChange={(e) => setConfirmPassword(e.target.value)} />
								</div>
								<div className="col mt-4">
									<button className="btn btn-outline-success w-100 text-uppercase" onClick={handleSubmit}>
										Register Now
									</button>
								</div>
								<div className="col pt-3 text-center">
									If you have an account?{" "}
									<Link className="nav-link d-inline" to="/login">
										Back to Login
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
