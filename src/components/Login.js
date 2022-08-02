import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import noteContext from "../context/notes/noteContext";

export default function Login() {
  const navigate = useHistory();
  const context = useContext(noteContext);
  const { userLogin, isconnect } = context;
  const [loginValue, setsLoginValue] = useState({ lemail: "", lpassword: "" });
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if(loginValue.lemail==="", loginValue.lpassword===""){
      alert('input field can not be empty')
    }else{
      userLogin(loginValue.lemail, loginValue.lpassword);
      console.log(isconnect);
      setsLoginValue({ lemail: "", lpassword: "" });
      navigate.push("/");
    }
  };
  const handleLogindtl = (e) => {
    setsLoginValue({ ...loginValue, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="mt-4">
        <h1>Login</h1>
        <form onSubmit={handleLoginSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="lemail"
              onChange={handleLogindtl}
              value={loginValue.lemail}
              required
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="lpassword"
              onChange={handleLogindtl}
              value={loginValue.lpassword}
              required
            />
          </div>
          <div className="mt-2 mb-2">
            <Link to="/signup">Signup</Link>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        {isconnect ? "asvgsgwr" : "343"}
      </div>
    </>
  );
}
