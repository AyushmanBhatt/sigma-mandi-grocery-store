/*import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./loginpage.css";

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:4000/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/homepage";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};*/
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react"
import { useLogin } from '../hooks/useLogin'
import "./loginpage.css";

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { login, error, isLoading } = useLogin()


	const handleSubmit = async (e) => {
		e.preventDefault()

		await login(email, password)
	}

	return (
		<div className="login_container">
			<div className="login_form_container">
				<div className="left">
					<form className="form_container" onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<label for='email'>E-mail</label>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							required
							className="input"
						/>
						<label for='password'>Password</label>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							required
							className="input"
						/>
						{error && <div className="error_msg">{error}</div>}
						<button disabled={isLoading} style={{ backgroundColor: "lightgreen" }} type="submit" className="green_btn">
							Sign In
						</button>
					</form>
				</div>
				<div className="right">
					<h1>New Here ?</h1>
					<Link to="/signin">
						<button style={{ backgroundColor: "lightgreen" }} type="button" className="white_btn">
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
