"use client";

import React, { useState } from "react";
import { FormControl, FormLabel, Input, FormHelperText, InputGroup, InputRightElement, Button } from "@chakra-ui/react";

export default function Login() {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    return (
        <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type='email' />
            <FormHelperText>We will ever share your email.</FormHelperText>

            <InputGroup size='md'>
                <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Enter password'
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>
    );
}
