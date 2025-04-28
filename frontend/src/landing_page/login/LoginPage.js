import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate  } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginPage = () => {

    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name] : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!formData.email || !formData.password){
            setError("All fields are required");
            return;
        }
        try{
            setLoading(true);
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/auth/login`,
                formData,
                {
                    headers: {"Content-Type": "application/json"},
                    withCredentials: true 
                }
            );
            if (response.data.success){
                localStorage.setItem("token", response.data.token);
                toast.success("Login successful! Redirecting...", {
                    autoClose: 1000,
                    pauseOnHover: false,
                });
                setTimeout(() => {
                    window.location.href = process.env.REACT_APP_DASHBOARD_URL;
                }, 1500);
            }else{
                setError(response.data.message);
                setLoading(false);
            }
        }catch(error) {
            console.error("Login error:", error);
            setError("An error occurred during login. Please try again.");
            setLoading(false);
        }
    };

    return(
        <div className='container mt-5 mb-5'>
            <ToastContainer position="top-center" />
            <div className="row justify-content-center" >
                <div className="col-6 ">    
                    <div className="card shadow">
                        <div className="card-body" style={{padding:"4rem"}}>
                            <h2 className="card-title text-center mb-4">Login</h2>
                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            )}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
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
                                <button type="submit" className="btn btn-primary w-100">
                                    Login
                                </button>
                            </form>
                            <p className="text-center mt-3">
                                Don't have an account? <a href="/signup">Sign up here</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;