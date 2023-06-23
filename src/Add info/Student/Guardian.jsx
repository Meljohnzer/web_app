import React, { useState } from "react";
import { TextField } from '@mui/material/';
import { useNavigate} from 'react-router-dom';
import 'animate.css'
import { PropagateLoader} from "react-spinners";
import { useForm } from 'react-hook-form'
import UserContext from "../../api/context/context";
import { axiosRequest } from "../../api/api/axios";



export default function Guardian () {
  const { register, handleSubmit, clearErrors, setError, formState: { errors },} = useForm();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [gage, setAge] = useState('');

  
  const { user } = React.useContext(UserContext);
  // const handleDateChange = (event) => {
  //   const dateValue = event.target.value;
  //   if (dateValue) {
  //   const gdate = new Date(event.target.value);
    

    
  //     setSelectedDate(gdate ? new Date(gdate) : null);
  //   const today = new Date();
  //   const birthDate = new Date(gdate);
  //   const yearsDifference = today.getFullYear() - birthDate.getFullYear();
  //   const isBeforeBirthday =
  //     today.getMonth() < birthDate.getMonth() ||
  //     (today.getMonth() === birthDate.getMonth() &&
  //       today.getDate() < birthDate.getDate());
  //   const gage = isBeforeBirthday ? yearsDifference - 1 : yearsDifference;
  //   setAge(gage);
  //   clearErrors('gdate');
  // } else {
  //   setSelectedDate(null);
  //   setAge('');
  // }
  // };

  const [isLoading, setIsLoading] = useState(false);
  const [isRedirect, setIsRedirect] = useState(false);
  
  
  const onSubmit = async (data, event) => {
    event.preventDefault(); 
    // if (gage <= 18) {
    //   // If age is not greater than 18, display an error message
    //   setError('gdate', {
    //     type: 'manual',
    //     message: 'Guardian should be 18+ years old!',
    //   });
    //   return;
    // }

    var Data ={
      g_name:data.g_name,
      g_contact_no:data.g_contact_no,
      g_address:data.g_address,
      user:user.id
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
       navigate('/web_app');

       await axiosRequest.post('auth/guardian/', JSON.stringify(Data), headers)  
       .then((response) => {
        console.log(response.data);
        // Simulate API call
         new Promise(resolve => setTimeout(resolve, 3000));
        setIsRedirect(true);
         // Set redirect state to true after form submission is successful
         navigate('/web_app');
  
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
      <h1 className=' text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 sm:absolute relative'>Guardian information</h1>
      
      <div className=" mt-4 py-5 eesm:pt-2 esm:pt-2 sm:pt-10 pt-20 w-full sm:w-auto md:w-auto sm:flex-col md:grid md:grid-cols-2 gap-5 justify-center items-center">
      
      <div className='pb-5 w-full'>
          <TextField 
            id="g_name" 
            label="Full name" 
            variant="outlined" 
            fullWidth
            name="g_name"
            {...register('g_name', {
              required: 'This field is required',
              maxLength: {
                value: 30,
                message: 'Name exceeded the limit!',
              },
              minLength: {
                value: 2,
                message: 'Name should be greater than one ',
              },
              pattern: {
                value: /^[^0-9]*$/,
                message: 'Please provide a valid name (letters only)', // Custom error message for invalid email format
              },
             
            })}
            error={!!errors.g_name} // Set error state based on validation result
            helperText={errors.g_name ? errors.g_name.message : null} // Display validation error message
          

        /> 
       
        </div>
       {/* <div className="pb-5 w-full">
       <TextField
        label="Date of Birth"
        type="date"
        fullWidth
        name="gdate"
        value={selectedDate ? selectedDate.toISOString().slice(0, 10) : ''}
        
        InputLabelProps={{
          shrink: true,
        }}
        {...register('gdate', {
          required: 'This field is required',
         
        })}
        error={!!errors.gdate} // Set error state based on validation result
        helperText={errors.gdate ? errors.gdate.message : null} // Display validation error message
        onChange={handleDateChange}
       
      />
      
       </div>
       <div className='pb-5 w-full'>
       <TextField
        label="Age"
        value={gage}
        disabled
        fullWidth
        InputProps={{
          inputProps: {
            min: 0,
            max: 150,
          },
        }}
        error={gage < 18}
        helperText={gage < 18 ? "Guardian should be at least 18 years old" : ''}
      />
      </div> */}
      <div className='pb-5 w-full'>
        <TextField
      id="g_contact_no"
      label="Phone Number"
      variant="outlined"
      fullWidth
      type="tel"
      name="g_contact_no"
      {...register('g_contact_no', {
        required: 'This field is required',
        pattern: {
          value: /^(\+)?\d{10,14}$/,
          message: 'Please provide a valid phone number', // Custom error message for invalid g_contact_no number format
        },
      })}
      error={!!errors.g_contact_no} // Set error state based on validation result
      helperText={errors.g_contact_no ? errors.g_contact_no.message : null} // Display validation error message
    />
       

        </div>
        <div className='pb-5 w-full'>
        <TextField
        id="g_address"
        label="Complete Address"
        variant="outlined"
        fullWidth
        name="g_address"
        {...register('g_address',{
          required: 'This field is required',
          // maxLength: {
          //   value: 20,
          //   message: 'Exceeded the limit!',
          // },
          // pattern: {
          //   value: /^[^0-9]*$/,
          //   message: 'Please provide a valid g_address (letters only)', // Custom error message for invalid email format
          // },
        })}
        error={!!errors.g_address}
        helperText={errors.g_address ? errors.g_address.message : null}
      />
      </div>
      {/* <div className='pb-5 w-full'>
      <TextField
        id="city"
        label="City"
        variant="outlined"
        fullWidth
        name="city"
        {...register('city',{
          required: 'This field is required',
          maxLength: {
            value: 30,
            message: 'Exceeded the limit!',
          },
          pattern: {
            value: /^[^0-9]*$/,
            message: 'Please provide a valid city (letters only)', // Custom error message for invalid email format
          },
        })}
        error={!!errors.city}
        helperText={errors.city ? errors.city.message : null}
      />
      </div>
      <div className='pb-5 w-full'>
      <TextField
        id="province"
        label="Province"
        variant="outlined"
        fullWidth
        name="province"
        {...register('province',{
          required: 'This field is required',
          maxLength: {
            value: 30,
            message: 'Exceeded the limit!',
          },
          pattern: {
            value: /^[^0-9]*$/,
            message: 'Please provide a valid province (letters only)', // Custom error message for invalid email format
          },
        })}
        error={!!errors.province}
        helperText={errors.province ? errors.province.message : null}
      />
      </div>
      <div className='pb-5 w-full'>
      <TextField
        id="zipcode"
        label="Zipcode"
        variant="outlined"
        fullWidth
        name="zipcode"
        {...register('zipcode',{
          required: 'This field is required',
          pattern: {
            value: /^[0-9]{4}$/,
            message: 'Please provide a valid zipcode (digits only)',
          },
        })}
        error={!!errors.zipcode}
        helperText={errors.zipcode ? errors.zipcode.message : null}
      />
       
       
        </div> */}
      
      </div>
      <div className=" pt-5">
      <div className='gap-y-4 text-center w-1/6 esm:px-0 px-5 absolute bottom-0 esm:right-5 right-0 flex justify-end sm:p-4 p-4'>
  <button className='active:scale-[.98] active:duration-75 translate-all hover:scale-[1.01] ease-in-out bg-blue-600 text-white px-20 py-2 rounded-md w-1/2 flex items-center justify-center' 
    type="submit"
    disabled={isLoading}
    style={{ width: '100%' }}>
    {isLoading ? 'Loading...' : 'Next'}
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

