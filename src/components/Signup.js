import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const navigate = useHistory();
  const context = useContext(noteContext);
  const { addUser } = context;
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    if (user.password === "") {
      alert("password can not be empty");
    } else if (user.password !== user.cpassword) {
      alert("password not same");
    } else if (user.name === "" && user.email === "") {
      alert("input fildes cannot be empty");
    } else {
      addUser(user.name, user.email, user.password);
      setUser({ name: "", email: "", password: "", cpassword: "" });
      navigate.push("/Login");
    }
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={user.name}
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={user.email}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={user.password}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Conform Password
          </label>
          <input
            type="text"
            className="form-control"
            id="cpassword"
            name="cpassword"
            value={user.cpassword}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
