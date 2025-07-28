import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const LogIn = () => {
    const [form, setForm] = useState({

        email: "",
        password: "",

    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");


        try {
            const res = await axios({
                url: 'https://api.escuelajs.co/api/v1/auth/login',
                data: form,
                headers: {
                    "Content-Type": "application/json"
                },
                method: "post"
            });


            if (res.status === 201) {
                navigate('/dashboard');
            }
        } catch (error) {
            console.log(error);
            setError("Enter valid email and password");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gray-400 grid place-items-center h-screen">
            <form
                onSubmit={handleSubmit}
                className="space-y-4 text-white bg-red-500 p-6 rounded-lg shadow-md w-[300px] sm:w-[400px]"
            >
                <h1 className="text-xl font-bold">Login</h1>



                <div className="flex flex-col">
                    <label htmlFor='email' className="mb-1 font-medium">Email</label>
                    <input
                        type='email'
                        placeholder='Email'
                        id='email'
                        name='email'
                        value={form.email}
                        onChange={handleChange}
                        className="p-2 rounded border border-gray-400 text-black"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor='password' className="mb-1 font-medium">Password</label>
                    <input
                        type='password'
                        placeholder='Password'
                        id='password'
                        name='password'
                        value={form.password}
                        onChange={handleChange}
                        className="p-2 rounded border border-gray-400 text-black"
                    />
                </div>

                {error && <p className="text-yellow-200">{error}</p>}
                {loading && <p className="text-sm text-white">Registering...</p>}

                <div className="flex justify-center">
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition disabled:opacity-50"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LogIn;
