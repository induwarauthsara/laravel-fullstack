import { Link } from "react-router-dom";

export default function Signup() {
    const onSubmit = (en) => {
        en.preventDefault();
    };

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Create an New Account</h1>
                    <input type="Full Name" placeholder="Full Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Comfirm Password" />
                    <button className="btn btn-block"> Signup</button>

                    <p className="message">
                        Already Registered?{" "}
                        <Link to="/login">Sign in to your account</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
