import { useState } from "react"
// import { useSignup } from "../Hooks/useSignup";

import coffeeOutside from '../assets/images/coffeeOutside.jpg';
import { Link } from "react-router-dom";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [ethereumAddress, setEthereumAddress] = useState('');
    const [roleType, setRoleType] = useState('Farmer');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [keepSignedIn, setKeepSignedIn] = useState(false);

    // const { signup, error, isLoading } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault()

        // await signup(email, password);
    }

    return (
        <div className="main-content row">
            <h1 className="heading-1-size mt-3">Create Account</h1>
            <form className="col-12 col-md-6" onSubmit={handleSubmit}>

                <label>Email</label>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="form-control"
                    placeholder="e.g garrysmith@gmail.com"
                />

                <label>Ethereum Address</label>
                <input
                    type="text"
                    onChange={(e) => setEthereumAddress(e.target.value)}
                    value={ethereumAddress}
                    className="form-control"
                    placeholder="e.g 0x1234567890abcdef...."
                />

                <label>Supply Chain Role</label>
                <select value={roleType} onChange={(e) => setRoleType(e.target.value)} className="form-control">
                    <option value="Manager">Manager</option>
                    <option value="Farmer">Farmer</option>
                    <option value="Harvestor">Harvestor</option>
                    <option value="Processor">Processor</option>
                    <option value="Drying Specialist<">Drying Specialist</option>
                    <option value="Exporter">Exporter</option>
                    <option value="Roaster">Roaster</option>
                    <option value="Packaging Specialist">Packaging Specialist</option>
                    <option value="Distributor">Distributor</option>
                </select>

                <label>Password</label>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className="form-control"
                    placeholder="e.g **********"
                />

                <label>Confirm Password</label>
                <input
                    type="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    className="form-control"
                    placeholder="e.g **********"
                />

                <label>keep me signed in?</label>
                <input
                    type="checkbox"
                    checked={keepSignedIn}
                    className=""
                    onChange={(e) => setKeepSignedIn(e.target.checked)}
                />

                <button className="button border primary-bg text-white rounded text-center py-3 w-100">Sign Up</button>

                {/* <button disabled={isLoading} className="btn btn-primary mt-2 mb-3">Sign Up</button> */}
                {/* {error && <div className="error">{error}</div>} */}

                <hr />
                <span className="d-flex justify-content-center">Already have an account? <Link to="/signIn" className="text-decoration-none text-black ms-2"><strong>Sign In</strong></Link></span>
            </form>
            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <img src={coffeeOutside} alt="" className=" w-100 image-fluid rounded" />
            </div>
        </div >
    )
}

export default SignUp;