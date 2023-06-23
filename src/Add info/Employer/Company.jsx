import React, { useState } from "react";
import { TextField } from '@mui/material/';
import { Link, useNavigate} from 'react-router-dom';
import 'animate.css'
import { PropagateLoader} from "react-spinners";
import { useForm } from 'react-hook-form'



export default function Company () {
  const { register, handleSubmit, clearErrors, setError, formState: { errors },} = useForm();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [age, setAge] = useState('');

  
  const handleDateChange = (event) => {
    const dateValue = event.target.value;
    if (dateValue) {
    const date = new Date(event.target.value);
    

    
      setSelectedDate(date ? new Date(date) : null);
    const today = new Date();
    const birthDate = new Date(date);
    const yearsDifference = today.getFullYear() - birthDate.getFullYear();
    const isBeforeBirthday =
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() < birthDate.getDate());
    const age = isBeforeBirthday ? yearsDifference - 1 : yearsDifference;
    setAge(age);
    clearErrors('date');
  } else {
    setSelectedDate(null);
    setAge('');
  }
  };

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
      await new Promise(resolve => setTimeout(resolve, 3000));
      setIsRedirect(true);
       // Set redirect state to true after form submission is successful
       navigate('/home');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false); // Set isLoading back to false after form submission is completed
    }
  };
  
 
  
  
  return(

    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="flex w-full eesm:pt-10 sm:pt-20" >
    <div className="w-full flex items-center justify-center bg-white-100 esm:px-0 px-5">
    <div className=' 
    lg:border-2 lg:px-10 lg:pt-10 lg:pb-10 lg:rounded-3xl lg:text-center 
    md:border-2 md:px-10 md:pt-10 md:pb-10 md:rounded-3xl md:text-center
    sm:border-2 sm:px-5 sm:pt-10 sm:pb-10 sm:rounded-xl sm:text-center
    esm:border-2 esm:px-5 esm:pt-10 esm:pb-10 esm:rounded-xl eesm:text-center
    eesm:border-2 eesm:px-2 eesm:pt-4 eesm:pb-10 eesm:rounded-xl
    animate__animated animate__bounceInLeft esm:w-5/6 w-full bg-white
    '>
      <h1 className=' text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 sm:absolute relative'>Company information</h1>
      
      <div className=" mt-4 py-5 eesm:pt-2 esm:pt-2 sm:pt-10 pt-20 w-full sm:w-auto md:w-auto sm:flex-col md:grid md:grid-cols-2 gap-5 justify-center items-center">
      
      <div className='pb-5 w-full'>
          <TextField 
            id="cname" 
            label="Company name" 
            variant="outlined" 
            fullWidth
            name="cname"
            {...register('cname', {
              required: 'This field is required',
              maxLength: {
                value: 20,
                message: 'Company name exceeded the limit!',
              },
              minLength: {
                value: 5,
                message: 'Company name should be greater than 5 ',
              },
             
             
            })}
            error={!!errors.cname} // Set error state based on validation result
            helperText={errors.cname ? errors.cname.message : null} // Display validation error message
          

        /> 
       
        </div>
       <div className="pb-5 w-full">
       <TextField
        label="Establish date"
        type="date"
        fullWidth
        name="date"
        value={selectedDate ? selectedDate.toISOString().slice(0, 10) : ''}
        
        InputLabelProps={{
          shrink: true,
        }}
        {...register('date', {
          required: 'This field is required',
         
        })}
        error={!!errors.date} // Set error state based on validation result
        helperText={errors.date ? errors.date.message : null} // Display validation error message
        onChange={handleDateChange}
       
      />
      
       </div>
       <div className='pb-5 w-full'>
       <TextField
        label="Year"
        value={age}
        disabled
        fullWidth
        InputProps={{
          inputProps: {
            min: 0,
            max: 150,
          },
        }}
        
      />
      </div>
      
    
        <div className='pb-5 w-full'>
        <TextField
        id="wurl"
        label="Website URL"
        variant="outlined"
        fullWidth
        name="wurl"
        {...register('wurl',{
        
          pattern: {
            value: /^https?:\/\/(?:www\.)?[a-zA-Z0-9\-]+\.[a-zA-Z]{2,}(?:\/[\w\-]+)*\/?$/, 
            message: 'Please provide a valid website URL'},
        })}
        error={!!errors.wurl}
        helperText={errors.wurl ? errors.wurl.message : null}
      />
      </div>
      <div className='pb-5 w-full'>
      <TextField
      multiline
      rows={4} // Specify the number of rows you want to display
      variant="outlined"
      label="Company description"
      fullWidth
      InputProps={{
        // Do not specify 'overflowY' here to prevent double scroll bars
        style: {
          maxHeight: '100px', // Specify the maximum height for the input element
        },
      }}
    />
      </div>
      
      </div>
      <div className=" pt-5">
      <div className='gap-y-4 text-center w-1/6 esm:px-0 px-5 absolute bottom-0 esm:right-5 right-0 flex justify-end sm:p-4 p-4 esm:w-auto md:w-auto md:grid md:grid-cols-2 gap-5 items-center '>
      
    <button className='px-10 py-2 rounded-md w-1/2 text-blue-600 flex items-center justify-center' 
    style={{ width: 50}}>
    <Link to="/home"> Skip</Link>
    </button>
    <button className='active:scale-[.98] active:duration-75 translate-all hover:scale-[1.01] ease-in-out bg-blue-600 text-white px-10 py-2 rounded-md w-1/2 flex items-center justify-center' 
    type="submit"
    disabled={isLoading}
    style={{ width: '100%' }}>
    {isLoading ? 'Loading...' : 'Done'}
  </button>
  
</div>
</div>
       {isLoading && (
      <div className=" rounded-2xl absolute top-0 left-0 right-5 bottom-0 flex items-center justify-center bg-white opacity-75 z-10">
      <PropagateLoader color="black" loading={true} size={15}/> 
    </div>
      )}
      
        
    </div>
    </div>
    </div>
    </form>
    )
  }

