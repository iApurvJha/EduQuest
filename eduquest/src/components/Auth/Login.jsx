import React from 'react'
import { useState } from 'react'
import {Container, FormLabel, Heading, VStack, Input, Box, Button} from "@chakra-ui/react"
import { NavLink } from 'react-router-dom'

function Login() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
  return (
    <Container h={"95vh"}>
        <VStack h={"full"} justifyContent={'center'} spacing={'16'}>
            <Heading children={"Welcome to EduQuest"} />
            <form style={{"width":"100%"}}>
                <Box my={"4"}>
                    <FormLabel htmlFor='email' children="Email address" />
                    <Input 
                        id='email'
                        required
                        placeholder='abc@gmail.com'
                        value={email}
                        type='email'
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                        focusBorderColor='yellow.500'
                    ></Input>
                </Box>
                <Box my={"4"}>
                    <FormLabel htmlFor='password' children="Password" />
                    <Input 
                        id='password'
                        required
                        placeholder='Enter your password'
                        value={password}
                        type='password'
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                        focusBorderColor='yellow.500'
                    ></Input>
                </Box>
                <Box my={'4'}>
                    <NavLink to="/forgotPassord">
                        <Button fontSize={"sm"} colorScheme='yellow' variant='link'>forgot Password</Button>
                    </NavLink>

                </Box>

                <Button colorScheme='yellow' type='submit'>Login</Button>
                
                <Box my={'4'}>
                    <NavLink to="/register">
                        New User?
                        {' '}
                        <Button colorScheme='yellow' variant='link'>Register</Button>
                        {' '}
                        Here

                    </NavLink>

                </Box>
            </form>

        </VStack>
    </Container>
  )
}

export default Login
