import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../Redux/Actions/UserAction";

const Navbar = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const user = useSelector((state) => state.userReducer);

	const handleLogout = () => {
		localStorage.setItem("token", "");
		dispatch(logout());
		setTimeout(() => {
			navigate("/");
		}, 100);
	};

	return (
		<>
			<nav className="navbar navbar-expand-lg bg-light">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						My App
					</Link>
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
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							{user && !user.isAdmin ? (
								<>
									<li className="nav-item">
										<Link className="nav-link active" aria-current="page" to="/">
											Home
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="about">
											About
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="contact">
											Contact
										</Link>
									</li>
								</>
							) : (
								<>
									<li className="nav-item dropdown">
										<Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
											Post
										</Link>
										<ul className="dropdown-menu">
											<li>
												<Link className="dropdown-item" to="post">
													List
												</Link>
											</li>
											<li>
												<Link className="dropdown-item" to="post/create">
													Add
												</Link>
											</li>
										</ul>
									</li>
								</>
							)}
						</ul>
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							{user && Object.keys(user).length ? (
								<li className="nav-item dropdown">
									<Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
										{user.fname}
									</Link>
									<ul className="dropdown-menu dropdown-menu-end">
										<li>
											<Link className="dropdown-item" to="/">
												Profile
											</Link>
										</li>
										<li>
											<div className="dropdown-item cursor" onClick={handleLogout}>
												Logout
											</div>
										</li>
									</ul>
								</li>
							) : (
								<>
									<li className="nav-item">
										<Link className="nav-link" to="/login">
											Login
										</Link>
									</li>
								</>
							)}
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
