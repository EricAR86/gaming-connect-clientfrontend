import React, { useState } from "react";
import { signup } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  // Link,
} from '@chakra-ui/react';

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function Signup({ authenticate }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
    country: "",
    platform: ""
  });
  const { username, password, email, country, platform } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;
    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      username,
      password,
      email,
      country,
      platform,
    };
    console.log(credentials)

    signup(credentials).then((res) => {
      if (!res.status) {
        // unsuccessful signup
        console.error("Signup was unsuccessful: ", res);
        return setError({
          message: "Signup was unsuccessful! Please check the console.",
        });
      }
      // successful signup
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.HOMEPAGE);
    });
  }

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <form onSubmit={handleFormSubmission} className="auth__form">
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('gray.50', 'gray.800')}>
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'} textAlign={'center'}>
                Sign up
              </Heading>
              <Text fontSize={'lg'} color={'gray.600'}>
                Please enter your information
              </Text>
            </Stack>
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={8}>
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>Username</FormLabel>
                      <Input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={username}
                        onChange={handleInputChange}
                      />
                    </FormControl>
                  </Box>

                </HStack>
                <FormControl isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    id="input-email"
                    name="email"
                    placeholder="example@email.com"
                    value={email}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      id="input-password"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={handleInputChange}
                      minLength="8"
                    />
                    <InputRightElement h={'full'}>
                      <Button
                        variant={'ghost'}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>



                <FormControl isRequired>
                  <FormLabel>Country</FormLabel>
                  <Input
                    id="input-country"
                    type="text"
                    name="country"
                    placeholder="Insert your Country"
                    value={country}
                    onChange={handleInputChange}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Preferred Platform</FormLabel>
                  <Input
                    id="input-platform"
                    type="text"
                    name="platform"
                    placeholder="Xbox, PlayStation, Nintendo, PC"
                    value={platform}
                    onChange={handleInputChange}
                  />
                </FormControl>



                <Stack spacing={10} pt={2}>
                  <Button

                    loadingText="Submitting"
                    type="submit"
                    size="lg"
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}>
                    Sign up
                  </Button>
                </Stack>
                <Stack pt={6}>

                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>

        {error && (
          <div className="error-block">
            <p>There was an error submiting the form:</p>
            <p>{error.message}</p>
          </div>
        )}

      </form>
    </div>
  );
}
