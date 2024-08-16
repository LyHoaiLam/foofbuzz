"use client";
import { Button } from '@chakra-ui/react';
import '../../app/globals.css';

import React, { useState } from "react";

const Login: React.FC = () => {
    const [showPass, setShowPass] = useState(false)

    const handleShowPass = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setShowPass(!showPass)
    }
    return (
        <>
    <div className="flex flex-col justify-center items-center h-screen kk">

        <div className="flex justify-center items-center">
            <h1 className="text-6xl bg-gradient-to-r from-red-600 via-blue-500 to-green-400 text-transparent bg-clip-text">
                GrabBuzz
            </h1>
        </div>

        <div className='flex justify-center content-center items-center mt-5'>

            <div className='w-full max-w-xs ${styles.customClassName}'>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                            <button className='ml-5' onClick={handleShowPass}>ShowPass</button>


                         
                        </label>
                        <input
                            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type={showPass ? "text" : "password"}
                            
                            placeholder="******************"
                        />
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Sign In
                        </button>
                        <a
                            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                            href="#"
                        >
                            Forgot Password?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>

        </>
    );
}

export default Login;
