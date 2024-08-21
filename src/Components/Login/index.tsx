"use client";

import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";

export default function Login() {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  console.log("Hoài Lâm")

  const handleClick = () => setShow(!show);

  const handleLogin = async () => {

    console.log("Button Login")
    if (!username || !password) {
      setErrorMessage("Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu.");
      return;
    }

    try {
      // Gọi API để đăng nhập
      const response = await fetch(
        "https://swagger.mini-cae-toeic.site/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }), // Dữ liệu gửi lên API
        }
      );

      if (response.ok) {
        const data = await response.json();
        // Lưu token vào localStorage
        localStorage.setItem("access_token", data.access_token);
        console.log("Đăng nhập thành công");

        // Có thể thêm code để chuyển hướng người dùng sau khi đăng nhập thành công
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
    <FormControl>
      <FormLabel>Username</FormLabel>
      <Input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <FormHelperText>We will never share your email.</FormHelperText>

      <FormLabel>Password</FormLabel>
      {/* <InputGroup size="md"> */}
        <input
        //   pr="4.5rem"
          type={show ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      {/* </InputGroup> */}

      <Button mt={4} colorScheme="teal" onClick={handleLogin}>
        Đăng nhập
      </Button>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </FormControl>
  );
}
