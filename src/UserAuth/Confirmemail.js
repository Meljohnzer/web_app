import React, { useState } from "react";
import { TextField } from '@mui/material/';
import { Link, useNavigate} from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import 'animate.css'
import { PropagateLoader} from "react-spinners";
import { useForm } from 'react-hook-form'
export default function Confirmemail  () {
 
  const { register, handleSubmit, formState: { errors }, watch} = useForm();
  const navigate = useNavigate();


  const [isLoading, setIsLoading] = useState(false);
  const [isRedirect, setIsRedirect] = useState(false);
  
  
  const onSubmit = async (data, event) => {
    event.preventDefault(); 
    console.log(data);
    setIsLoading(true); // Set isLoading to true when form is submitted
    try {
      // Perform form submission logic here
      console.log(data);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 5000));
      setIsRedirect(true);
       // Set redirect state to true after form submission is successful
       navigate('/');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false); // Set isLoading back to false after form submission is completed
    }
  };

return(

  <form onSubmit={handleSubmit(onSubmit)}>
    <div className="flex h-screen" >
    <div className=" w-full flex items-center justify-center">
    <div className=' 
    lg:border-2 lg:px-10 lg:pt-10 lg:pb-10 lg:rounded-3xl lg:text-center 
    md:border-2 md:px-10 md:pt-10 md:pb-10 md:rounded-3xl md:text-center
    sm:border-2 sm:px-5 sm:pt-10 sm:pb-10 sm:rounded-xl sm:text-center
    esm:border-2 esm:px-5 esm:pt-10 esm:pb-10 esm:rounded-xl eesm:text-center
    eesm:border-2 eesm:px-1 eesm:pt-4 eesm:pb-10 eesm:rounded-xl
    animate__animated animate__bounceInLeft  bg-white
    '> 
    <h1 className=' text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 '>Almost There!</h1>
    <p >Please Check Your<span className=' font-bold'> Email</span> To Activate Your Account! </p>
    
    <div className=' w-full esm:px-0 px-5 '>
   
    </div>
    
    <div className='mt-4 gap-y-4 justify-center text-center  w-full esm:px-0 px-5'>
    <button className=' active:scale-[.98] active:duration-75 translate-all hover:scale-[1.01] ease-in-out bg-blue-600 text-white px-20 py-2 rounded-md 
    'style={{width: '100%'}} 
    type="submit"
    disabled={isLoading}>{isLoading ? 'Sending verification...' : 'Send verification'}</button>
     {isLoading && (
      <div className=" rounded-2xl absolute top-0 left-0 right-5 bottom-0 flex items-center justify-center bg-white opacity-75 z-10">
      <PropagateLoader color="black" loading={true} size={15}/> 
    </div>
      )} 
      </div>
  
    
    </div>
    </div>
    </div>
    </form>
  );
};

  <div className=" hidden lg: h-full  items-center justify-center bg-white-100 ">
  <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-black rounded-full animate__animated animate__bounceInRight "/>
  </div>
  
