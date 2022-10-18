import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import AddPost from "./Components/Admin/Post/AddPost";
import EditPost from "./Components/Admin/Post/EditPost";
import PostList from "./Components/Admin/Post/PostList";
import Login from "./Components/Auth/Login";

import "./app.css";
import PostDetails from "./Components/PostDetails";
import Register from "./Components/Auth/Register";
import { useEffect } from "react";
import { getUserDetails } from "./Redux/Actions/UserAction";

const App = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.userReducer);
	const token = localStorage.getItem("token");
	// user = user ? JSON.parse(user) : null;
	// const isAdmin = user.isAdmin;
	console.log("App", user, token);

	useEffect(() => {
		console.log("Token", token);
		if (token) dispatch(getUserDetails());
	}, [token]);

	return (
		<>
			<Navbar />
			<div className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contact />} />
					<Route path="post">
						<Route path=":id" element={<PostDetails />} />
					</Route>
					{user && user.isAdmin && (
						<>
							<Route path="admin">
								<Route path="dashboard" element={<PostList />} />
								<Route path="post">
									<Route index element={<PostList />} />
									<Route path="create" element={<AddPost />} />
									<Route path=":id" element={<EditPost />} />
								</Route>
							</Route>
						</>
					)}
					{user && Object.keys(user).length && (
						<>
							<Route path="profile" element={<Contact />} />
						</>
					)}
					<Route path="login" element={<Login />} />
					<Route path="signup" element={<Register />} />
				</Routes>
			</div>

			<div>
				<ToastContainer autoClose={3500} />
			</div>
		</>
	);
};

export default App;
