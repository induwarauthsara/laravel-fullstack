import { Link } from "react-router-dom";
// import axiosClient from "../axios-client.js";
// import { createRef } from "react";
// import { useStateContext } from "../context/ContextProvider.jsx";
// import { useState } from "react";

export default function Login() {
    const onSubmit = (en) => {
        en.preventDefault();
    };
    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Log in to your account</h1>
                    <input type="email" placeholder="Email" />
                    <input
                        type="password"
                        name=""
                        id=""
                        placeholder="Password"
                    />
                    <button className="btn btn-block"> Login</button>

                    <p className="message">
                        Not registered?{" "}
                        <Link to="/signup">Create an account</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
