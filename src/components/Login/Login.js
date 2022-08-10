import { Link } from "react-router-dom";

function Login() {
    return (
        <div>
            <h1>Login Component</h1>
            <Link to="/register">Register for an account</Link>
        </div>
    );
}

export default Login;