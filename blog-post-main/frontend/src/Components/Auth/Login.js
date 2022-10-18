import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { errorAlertBox } from "../../Helpers/Common";
import { loginNow } from "../../Redux/Actions/UserAction";

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.userReducer);
	// console.log("first", data);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const validatePassword = (password) => {
		if (password.length < 6) return true;
		return false;
	};

	useEffect(() => {
		if (user && user.isAdmin) {
			navigate("/admin/dashboard");
		} else if (user && user.isAdmin === false) {
			navigate("/");
		}
	}, [user]);

	// if (store && store.user.isAdmin) {
	// 	navigate("/admin/dashboard");
	// } else if (store && store.user.isAdmin === false) {
	// 	navigate("/");
	// }

	const validateEmail = (email) => {
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) return false;
		return true;
	};

	const handleSubmit = () => {
		if (validateEmail(email)) {
			errorAlertBox({ statusCode: 400, msg: "Please enter correct email address!" });
			return false;
		}

		if (validatePassword(password)) {
			errorAlertBox({ statusCode: 400, msg: "Password should contains at least 6 characters!" });
			return false;
		}

		dispatch(loginNow({ email, password }));

		// AxiosAPI.post("/auth/login", { email, password })
		// 	.then((res) => {
		// 		localStorage.setItem("user", JSON.stringify(res.data));
		// 		// manageStore({ ...store, user: res.data });

		// 		if (res.data.isAdmin) {
		// 			navigate("/admin/dashboard");
		// 		} else {
		// 			navigate("/");
		// 		}
		// 	})
		// 	.catch((err) => {
		// 		console.log(err.message);
		// 	});
	};

	return (
		<>
			<div className="row my-5">
				<div className="col-lg-5 col-md-6 col-sm-8 mx-auto">
					<div className="card shadow">
						<h4 className="text-center mt-3">Login</h4>
						<div className="card-body">
							<div className="form-row">
								<div className="col">
									<label className="form-label">Email</label>
									<input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
								</div>
								<div className="col mt-3">
									<label className="form-label">Password</label>
									<input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
								</div>
								<div className="col mt-4">
									<button className="btn btn-outline-success w-100 text-uppercase" onClick={handleSubmit}>
										Login Now
									</button>
								</div>
								<div className="col pt-3 text-center">
									If you don't have an account?{" "}
									<Link className="nav-link d-inline" to="/signup">
										Click Here
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

export default Login;
