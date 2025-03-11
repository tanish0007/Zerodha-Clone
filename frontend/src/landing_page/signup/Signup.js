import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        username: "",
    });

    const [error, setError] = useState("");

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password || !formData.username) {
            setError("All fields are required");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:3003/auth/signup",
                formData,
                { withCredentials: true }
            );

            if (response.data.success) {    
                navigate("/dashboard");
            } else {
                setError(response.data.message);
            }
        } catch (err) {
            console.error("Signup error:", err);
            setError("An error occurred during signup. Please try again.");
        }
    };

    return ( 
        <div className='container border-bottom mt-5'>
            <div className='text-center p-3'>  
                <h1 style={{fontWeight: "500", fontSize:"2.5rem", color: "#424242"}}>Open a free demat and trading account online</h1>
                <h3 className='text-muted mt-3 fs-5'>Start investing brokerage free and join a community of 1.5+ crore investors and traders</h3>
                <div className="row mt-5 mb-5">
                    <div className="col-6 p-5 mt-3">
                        <img src="media/account_open.svg" alt="product" style={{width:"120%"}}/>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-5  mt-3">
                        <div className="card shadow">
                            <div className="card-body">
                                <h2 className="card-title text-center mb-4">Sign Up</h2>
                                {error && (
                                    <div className="alert alert-danger" role="alert">
                                        {error}
                                    </div>
                                )}
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label"> Email </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">
                                            Username
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="username"
                                            name="username"
                                            value={formData.username}
                                            onChange={handleInputChange}
                                            placeholder="Enter your username"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            placeholder="Enter your password"
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">Sign Up
                                    </button>
                                </form>
                                <p className="text-center mt-3">
                                    Already have an account? <a href="/login">Log in here</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
}
export default Signup;