/*import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./signpage.css";

const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		userType: "customer",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:4000/api/user/signup";
			const { data: res } = await axios.post(url, data);
			navigate("/");
			console.log(res.message);
		} 
		catch (error) 
		{
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) 
			{
				setError(error.response.data.message);
			}
		}
	};*/
import React from 'react';
import { useState } from "react"
import { useSignup } from '../hooks/useSignup';
import { Link } from "react-router-dom";
import "./signpage.css";

const Signup = () => {
	const [firstName, setfName] = useState('')
	const [lastName, setlName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [userType, setUserType] = useState('')
	const { signup, error, isLoading } = useSignup()

	const handleSubmit = async (e) => {
		e.preventDefault()

		await signup(firstName, lastName, email, password, userType)
	}

	return (
		<div className="signup_container">
			<div className="signup_form_container">
				<div className="left">
					<h1>Welcome Back!</h1>
					<Link to="/">
						<button style={{ backgroundColor: "lightgreen" }} type="button" className="white_btn">
							SIGN IN
						</button>
					</Link>
				</div>
				<div className="right">
					<form className="form_container" onSubmit={handleSubmit}>
						<h2>New User?</h2>
						<h1>CREATE ACCOUNT</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={(e) => setfName(e.target.value)}
							value={firstName}
							required
							className="input"
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={(e) => setlName(e.target.value)}
							value={lastName}
							required
							className="input"
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							required
							className="input"
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							required
							className="input"
						/>
						<label>User Type:</label>
						<select
							name="userType"
							onChange={(e) => setUserType(e.target.value)}
							value={userType}
							className="input"
						>
							<option value="">Select your account type</option>
							<option value="customer">Customer</option>
							<option value="vendor">Vendor</option>
						</select>
						{/*{error && <div className="error_msg">{error}</div>}
						<button style={{ backgroundColor: "lightgreen" }} type="submit" className="green_btn">
							SIGN UP
	</button>*/}
						<div>
							<button style={{ backgroundColor: "lightgreen" }} type="submit" className="green_btn" disabled={isLoading}>Sign Up</button>
							{error && <div className="error">{error}</div>}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
