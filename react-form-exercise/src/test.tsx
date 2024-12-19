import React, { useState } from "react";

type FormData = {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
};

const ControlledForm = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      ["username"]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      email: "",
    });
  };

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div>
      <h2>Controlled</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          <input
            type={isPasswordVisible ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="firstname">
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            placeholder="Enter firstname"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="lastname">
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            placeholder="Enter lastname"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter email"
            onChange={handleChange}
          />
        </label>
        <button type="button" onClick={handlePasswordVisibility}>
          Toggle password
        </button>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default ControlledForm;
