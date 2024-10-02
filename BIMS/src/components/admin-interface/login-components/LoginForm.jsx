import React, { useState } from 'react';
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";



export function loginpage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleSignUp = (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({ email: '', password: '' });

    let isValid = true;

    // Basic email validation
    if (!email) {
      setErrors(prev => ({ ...prev, email: 'Email is required' }));
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors(prev => ({ ...prev, email: 'Email is invalid' }));
      isValid = false;
    }

    // Basic password validation
    if (!password) {
      setErrors(prev => ({ ...prev, password: 'Password is required' }));
      isValid = false;
    } else if (password.length < 6) {
      setErrors(prev => ({ ...prev, password: 'Password must be at least 6 characters' }));
      isValid = false;
    }

    if (isValid) {
      
      alert('Sign up successful!');
    }
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign In
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSignUp}>
        <div className="mb-1 flex flex-col gap-6">
          <div className="flex flex-col">
            <Typography variant="h6" color="blue-gray">
            </Typography>
            <Input 
              label="Email"
              placeholder="Type your Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email}
              icon={<i className="fas fa-heart" />} 
            />
            {errors.email && (
              <Typography color="red" className="text-sm mt-1">
                {errors.email}
              </Typography>
            )}
          </div>

          <div className="flex flex-col">
            <Typography variant="h6" color="blue-gray">
            </Typography>
            <Input 
              label="Password" 
              placeholder="Type your Password" 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              icon={<i className="fas fa-heart" />} 
            />
            {errors.password && (
              <Typography color="red" className="text-sm mt-1">
                {errors.password}
              </Typography>
            )}
          </div>
        </div>
       
        <Typography color="gray" className="mt-4 text-right font-normal text-xs">
          <a href="#" className="font-normal text-cyan-700">
            Forgot Password?
          </a>
        </Typography>
        <Button type="submit" className="mt-6 bg-[#3E5C76]" fullWidth>
          Sign up
        </Button>
      </form>
    </Card>
  );
}

export default loginpage;
