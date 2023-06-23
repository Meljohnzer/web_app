import React, { useState } from "react";
import { TextField } from '@mui/material/';
import { Link, useNavigate} from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import 'animate.css'
import { PropagateLoader} from "react-spinners";
import { useForm } from 'react-hook-form'
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { axiosRequest } from "../api/api/axios";

export default function Register () {
  const { register, handleSubmit, setValue, clearErrors, formState: { errors }, watch} = useForm();
  const navigate = useNavigate();


  const [isLoading, setIsLoading] = useState(false);
  const [isRedirect, setIsRedirect] = useState(false);
  
  

 
 
  const handleSelectChange = (event) => {
    
    setValue('usertype', event.target.value);
    clearErrors('usertype'); 
  };
  const onSubmit = async (data, event) => {
    event.preventDefault(); 
    // console.log(data.usertype);

    var Data = {
      usertype : data.usertype,
      email : data.email,
      password : data.password
    }

    setIsLoading(true); // Set isLoading to true when form is submitted
    try {
      // Perform form submission logic here
      // console.log(Data);
     await axiosRequest.post('auth/api/users/',JSON.stringify(Data),{ headers: {
        'Content-Type': 'application/json'
      }}).then((response)=>{
        // console.log(response.status);
         // Simulate API call
       new Promise(resolve => setTimeout(resolve, 5000));
      setIsRedirect(true);
       // Set redirect state to true after form submission is successful
       navigate('/confirmemail');
        // setAlert(current => !current)
       }).catch((err)=>{
        alert("Something Went Wrong Account May Already Exist!")
        // setError(current =>!current)
  
       })
     
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false); // Set isLoading back to false after form submission is completed
    }
  };
  
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const password = React.useRef({});
  password.current = watch('password', '');

  const validatePassword = (value) => { 
   
    if (!value) {
      return 'Password is required';
    }
    if (value.length < 8) {
      return 'Password must be at least 8 characters long';
    }
    if (!/[a-z]/.test(value)) {
      return 'Password must contain at least one lowercase letter';
    }
    if (!/[A-Z]/.test(value)) {
      return 'Password must contain at least one uppercase letter';
    }
    if (!/[0-9]/.test(value)) {
      return 'Password must contain at least one digit';
    }
    if (!/[!@#$%^&*]/.test(value)) {
      return 'Password must contain at least one special character (!@#$%^&*)';
    }
    return true;
  };
  
  
  return(

    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="flex w-full h-screen esm:pt-10" >
    <div className="w-full flex items-center justify-center lg:w-1/2 bg-white-100 esm:px-0 px-2">
    <div className=' 
    lg:border-2 lg:px-10 lg:pt-10 lg:pb-10 lg:rounded-3xl lg:text-center 
    md:border-2 md:px-10 md:pt-10 md:pb-10 md:rounded-3xl md:text-center
    sm:border-2 sm:px-5 sm:pt-10 sm:pb-10 sm:rounded-xl sm:text-center
    esm:border-2 esm:px-5 esm:pt-10 esm:pb-10 esm:rounded-xl eesm:text-center
    eesm:border-2 eesm:px-1 eesm:pt-4 eesm:pb-10 eesm:rounded-xl
    animate__animated animate__bounceInLeft  bg-white
    '>
      <h1 className=' text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Welcome! back</h1>
      <p><span className=' font-bold'>Register</span> an account to explore the HAN<span className=' text-blue-700'>APP</span></p>
      <div className=' w-full esm:px-0 px-5 '>
      <div className='pt-5'>
      <TextField
        id="usertype"
        label="User type"
        name="usertype"
        select 
        fullWidth
        {...register('usertype', {
          required: 'This field is required!',
        })}
        error={!!errors.usertype} // Set error state based on validation result
        helperText={errors.usertype && errors.usertype.message} // Display validation error message
        onChange={handleSelectChange}
      >
        <MenuItem value="Student">Student</MenuItem>
        <MenuItem value="Employer">Employer</MenuItem>
        
      </TextField>
        </div>
      <div className='py-5'>
          <TextField 
            id="email" 
            label="Email" 
            variant="outlined" 
            fullWidth
            name="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address', // Custom error message for invalid email format
              },
            })}
            error={!!errors.email} // Set error state based on validation result
            helperText={errors.email ? errors.email.message : null} // Display validation error message
           

        /> 
       
        </div>
        <TextField
        id="password" 
        label="Password" 
        variant="outlined" 
        style={{width: '100%'}}
        type={showPassword ? 'text' : 'password'}
        {...register('password', {
          validate: validatePassword, // Custom password validation
        })}
        error={!!errors.password} // Set error state based on validation result
        helperText={errors.password?.message} // Display validation error message
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
        <div className='py-5'>
        <TextField
        id="confirmPassword"
        label="Confirm Password"
        variant="outlined" 
        style={{width: '100%'}}
        type={showPassword ? 'text' : 'password'}
        {...register('confirmPassword', {
          validate: (value) =>
            value === password.current || 'Passwords do not match', // Custom confirm password validation
        })}
        error={!!errors.confirmPassword} // Set error state based on validation result
        helperText={errors.confirmPassword?.message} // Display validation error message
        
      />
        </div>
      </div>
      
              
      <div className='mt-3 gap-y-4 justify-center text-center  w-full esm:px-0 px-5'>
        <button className=' active:scale-[.98] active:duration-75 translate-all hover:scale-[1.01] ease-in-out bg-blue-600 text-white px-20 py-2 rounded-md 
        'style={{width: '100%'}} 
        type="submit"
        disabled={isLoading}>{isLoading ? 'Registering...' : 'Register'}</button>
       </div>

       {isLoading && (
      <div className=" rounded-2xl absolute top-0 left-0 right-5 bottom-0 flex items-center justify-center bg-white opacity-75 z-10">
      <PropagateLoader color="black" loading={true} size={15}/> 
    </div>
      )}
      
          <div className='border-t-2 mt-4'/>
          <div className="text-sm pt-3 text-center">
                <span>Already have an account? </span>
                <button className="font-medium text-indigo-600 hover:text-indigo-500">
                <Link to="/web_app"> Login</Link>
                </button>
              </div>
              
    </div>
    </div>
    </div>
    </form>
    )
  }

