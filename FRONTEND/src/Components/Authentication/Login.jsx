import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
    const [val, setVal] = useState({ enrollment: "", password: "" });
    const onchange = (e) => {
        setVal({ ...val, [e.target.name]: e.target.value })

    }

    const submit = async (e) => {
        e.preventDefault();
        const enrollment = val.enrollment;
        const password = val.password
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({ enrollment, password })

        });
        const json = await response.json()


        if (json.success) {
            //save the auth token and rdirect
            localStorage.setItem('token', json.auth_Token);
            alert("Login Successfull")

            navigate("/home")

        }
        else {
            alert("Invalid Credientials")
        }




    }

    return (
        <section className="bg-gradient-to-r from-cyan-100 to-blue-500">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-white dark:text-white">
                    <img className="w-14 h-13 mr-2 rounded-full" src="/src/assets/CampusLogo.png" alt="logo" />
                    CampusConnect
                </a>
                <div className="w-full bg-blue-400 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Login To Your Account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="Enrollment" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enrollment No.</label>
                                <input type="text" value={val.enrollment} name="enrollment" id="enrollment" onChange={onchange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Enrollment" required="true" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" value={val.password} name="password" id="password" placeholder="••••••••" onChange={onchange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="true" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" required="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                    </div>
                                    <div className="ml-3 text-sm pb-2">
                                        <label htmlFor="remember" className="text-black dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                {/* <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a> */}
                            </div>

                            <button type="submit" onClick={submit} className="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>

                            {/* <Link to="/register">
                            <p className="text-sm italic font-dark text-black dark:text-gray-400">
                                Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                            </p>
                            </Link> */}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login