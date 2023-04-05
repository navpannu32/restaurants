import React, { useState } from "react";
import { redirect } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (password === confirmPassword) {
      const response = await fetch(
        "http://localhost/restaurants/api/users/create.php",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
            role: "user",
          }),
        }
      );

      console.log("response: ", response);
    }

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    redirect("/login");
  };

  return (
    <form className="register" onSubmit={onSubmit}>
      <div className="input-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          onChange={handleNameChange}
          value={name}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleEmailChange}
          value={email}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={handlePasswordChange}
          value={password}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          onChange={handleConfirmPasswordChange}
          value={confirmPassword}
          required
        />
      </div>
      <input type="submit" />
    </form>
  );
};

export default Register;
