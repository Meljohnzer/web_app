import React, { useState } from "react";
import { TextField } from '@mui/material/';
import { useNavigate} from 'react-router-dom';
import 'animate.css'
import { PropagateLoader} from "react-spinners";
import { useForm } from 'react-hook-form'
import MenuItem from '@mui/material/MenuItem';
import UserContext from "../../api/context/context";
import { axiosRequest } from "../../api/api/axios";


export default function Education () {
  const { register, handleSubmit, setValue, clearErrors, formState: { errors },} = useForm();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [isRedirect, setIsRedirect] = useState(false);
  const { user } = React.useContext(UserContext);
  
  
  const handleSelectChange = (event) => {
    
    setValue('year_level', event.target.value);
    clearErrors('year_level'); 
  };

  const onSubmit = async (data, event) => {
    event.preventDefault(); 
    var Data ={
      sch_name:data.sch_name,
      sch_address:data.address,
      course:data.course,
      year_level:data.year_level,
      user: user.id
     };

     var headers = {
       headers: {
         'Content-Type': 'application/json',
         'Authorization': `JWT ${ user.access}`,
       }
     };
    console.log(data);
    setIsLoading(true); // Set isLoading to true when form is submitted
    try {
      // Perform form submission logic here
      console.log(data);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 3000));
      setIsRedirect(true);
       // Set redirect state to true after form submission is successful
       navigate('/Sguardian');

       axiosRequest.post('auth/education/', JSON.stringify(Data), headers)  
       .then((response) => {
         console.log(response.data);
          navigate('/home')
       }).catch((err)=>{
         alert(err.status)
       })
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
      <h1 className=' text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 sm:absolute relative'>Education information</h1>
      
      <div className=" mt-4 py-5 eesm:pt-2 esm:pt-2 sm:pt-10 pt-20 w-full sm:w-auto md:w-auto sm:flex-col md:grid md:grid-cols-2 gap-5 justify-center items-center">
      
      <div className='pb-5 w-full'>
          <TextField 
            id="sch_name" 
            label="School name" 
            variant="outlined" 
            fullWidth
            name="sch_name"
            {...register('sch_name', {
              required: 'This field is required',
              maxLength: {
                value: 60,
                message: 'School name exceeded the limit!',
              },
              minLength: {
                value: 3,
                message: 'School name should be greater than 3 (Abbreviation or full) ',
              },
              pattern: {
                value: /^[^0-9]*$/,
                message: 'Please provide a valid school name (letters only)', // Custom error message for invalid email format
              },
             
            })}
            error={!!errors.sch_name} // Set error state based on validation result
            helperText={errors.sch_name ? errors.sch_name.message : null} // Display validation error message
          

        /> 
       
        </div>
      
      <div className='pb-5 w-full'>
      <TextField 
            id="course" 
            label="Course" 
            variant="outlined" 
            fullWidth
            name="course"
            {...register('course', {
              required: 'This field is required',
              maxLength: {
                value: 60,
                message: 'Exceeded the limit!',
              },
              minLength: {
                value: 3,
                message: 'Course letters should be greater than 3 (Abbreviation or full) ',
              },
             
            })}
            error={!!errors.course} // Set error state based on validation result
            helperText={errors.course ? errors.course.message : null} // Display validation error message
          

        /> 
       

        </div>
        <div className='pb-5 w-full'>
        <TextField
        id="year_level"
        label="Year & level"
        name="year_level"
        select 
        fullWidth
        {...register('year_level', {
          required: 'This field is required!',
        })}
        error={!!errors.year_level} // Set error state based on validation result
        helperText={errors.year_level && errors.year_level.message} // Display validation error message
        onChange={handleSelectChange}
      >
        <MenuItem value="1ST YEAR COLLEGE">1ST YEAR COLLEGE</MenuItem>
        <MenuItem value="2ND YEAR COLLEGE">2ND YEAR COLLEGE</MenuItem>
        <MenuItem value="3RD YEAR COLLEGE">3RD YEAR COLLEGE</MenuItem>
        <MenuItem value="4TH YEAR COLLEGE">4TH YEAR COLLEGE</MenuItem>
        <MenuItem value="5TH YEAR COLLEGE">5TH YEAR COLLEGE</MenuItem>
      </TextField>
       

        </div>
        <div className='pb-5 w-full'>
        <TextField
        id="address"
        label="Complete Address"
        variant="outlined"
        fullWidth
        name="address"
        {...register('address',{
          required: 'School address is required'
        })}
        error={!!errors.address}
        helperText={errors.address ? errors.address.message : null}
      />
      </div>
      
      </div>
      <div className=" pt-5">
      <div className='gap-y-4 text-center w-1/6 esm:px-0 px-5 absolute bottom-0 esm:right-5 right-0 flex justify-end sm:p-4 p-4'>
  <button className='active:scale-[.98] active:duration-75 translate-all hover:scale-[1.01] ease-in-out bg-blue-600 text-white px-20 py-2 rounded-md w-1/2 flex items-center justify-center' 
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

