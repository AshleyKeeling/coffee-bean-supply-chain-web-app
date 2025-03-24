import { useState } from "react"
import { Link } from "react-router-dom";
import { useSignin } from "../hooks/useSignin";
import coffeeSupplyChain from '../assets/images/coffeeSupplyChain.png';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [keepSignedIn, setKeepSignedIn] = useState(false);
    const { signin, error, isLoading } = useSignin();

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signin(email, password);
    }

    return (
        <div className="main-content row">
            <h1 className="heading-1-size mt-5">Welcome Back</h1>
            <form className="col-12 col-md-6" id="sign-up-in-form" onSubmit={handleSubmit}>

                <div>
                    <label className="heading-4-size">Email</label>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="form-control"
                        placeholder="e.g garrysmith@gmail.com"
                    />
                </div>

                <div>
                    <label className="heading-4-size">Password</label>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className="form-control"
                        placeholder="e.g **********"
                    />
                </div>

                <div className="d-flex justify-content-between align-items-center">
                    <fieldset>
                        <input
                            type="checkbox"
                            checked={keepSignedIn}
                            className="form-check-input"
                            onChange={(e) => setKeepSignedIn(e.target.checked)}
                        />
                        <label className="body-size">Keep me signed in?</label>
                    </fieldset>

                    <p className="body-size mb-0"><strong>Forgot Your Password?</strong></p>
                </div>

                <button disabled={isLoading} className="button border primary-bg text-white rounded text-center py-3 w-100">Sign In</button>
                {error && <div className="error">{error}</div>}

                <hr />
                <span className="d-flex justify-content-center mb-3">Don't have an account? <Link to="/signUp" className="text-decoration-none text-black ms-2"><strong>Sign Up</strong></Link></span>
            </form>
            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <img src={coffeeSupplyChain} alt="" className=" w-100 image-fluid rounded" />
            </div>
        </div >
    )
}

export default SignIn;