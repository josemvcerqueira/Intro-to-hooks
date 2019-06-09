import React, { useState } from "react";

const INITIAL_FORM_STATE = {
	username: "",
	email: "",
	password: ""
};

const Register = props => {
	const [form, setForm] = useState(INITIAL_FORM_STATE);

	const [user, setUser] = useState(null);

	const handleChange = event => {
		setForm({
			...form,
			[event.target.name]: event.target.value
		});
	};

	const handleSubmit = event => {
		event.preventDefault();
		setUser(form);
		setForm(INITIAL_FORM_STATE);
	};

	return (
		<div style={{ textAlign: "center" }}>
			<h2>Register</h2>
			<form
				style={{
					display: "grid",
					alignItems: "center",
					justifyItems: "center"
				}}
				onSubmit={handleSubmit}
			>
				<input
					value={form.username}
					type="text"
					placeholder="Username"
					name="username"
					onChange={handleChange}
				/>
				<input
					value={form.email}
					type="email"
					placeholder="Email Address"
					name="email"
					onChange={handleChange}
				/>
				<input
					value={form.password}
					type="password"
					placeholder="Password"
					name="password"
					onChange={handleChange}
				/>
				<button type="submit">Submit</button>
			</form>
			{user && JSON.stringify(user, null, 2)}
		</div>
	);
};

export default Register;
