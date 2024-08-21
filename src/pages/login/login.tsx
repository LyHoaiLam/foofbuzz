"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import { Button } from '@chakra-ui/react';
import '../../app/globals.css';

const Login: React.FC = () => {
  const [showPass, setShowPass] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter(); // Khởi tạo router

  const handleShowPass = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowPass(!showPass);
  };

  const handleLogin = async () => {
    if (!username || !password) {
      setErrorMessage("Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu.");
      return;
    }

    try {
      const response = await fetch(
        "https://swagger.mini-cae-toeic.site/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("access_token", data.access_token);
        console.log("Đăng nhập thành công");

        // Chuyển hướng về trang chủ sau khi đăng nhập thành công
        router.push("/");
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Tài khoản hoặc mật khẩu không đúng.");
      }
    } catch (error) {
      console.error("Đã xảy ra lỗi:", error);
      setErrorMessage("Đã xảy ra lỗi trong quá trình đăng nhập.");
    }
  };

  return (
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
                <button className='ml-5 border-2 bg-slate-400' onClick={handleShowPass}>ShowPass</button>
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="******************"
              />
              <p className="text-red-500 text-xs italic">{errorMessage}</p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
