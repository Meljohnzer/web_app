import React from 'react'
import { Drawer,Typography,Box,Button,IconButton } from '@mui/material'
import { useState, useRef } from 'react'
//icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import img from '../../Images/profile.png'
import UserContext from '../../api/context/context';
const Profile = (props) => {


  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  const handleAvatarClick =() =>{
    inputRef.current.click();
  }
  
  const handleImageChange =(event)=>{
    const file = event.target.file[0];
    console.log(file);
    setImage(event.target.file[0]);
  }
  const {user} = React.useContext(UserContext);
    const [IsDrawerOpen, setIsDrawerOpen] = useState(false)
    // if(!props.profile){
    //   return null
    // }

  return (
    <>
    <Button 
    size='medium'
    edge='start'
    color='inherit'
    onClick={()=> setIsDrawerOpen(true)}
    
    >
        Profile</Button>
    <Drawer 
    anchor='left'
    open={IsDrawerOpen}
    onClose={()=> setIsDrawerOpen(false)} 
    >
        <Box p={2} width='500px' textAlign='center' role='presentation'  >
                 
            <div className='bg-slate-200 rounded-3xl p-4 flex flex-col items-center '  >
                
                  <div   onClick={handleAvatarClick} >
              {user.usertype === "Employer" && <img src={props.profile[0].profile ? props.profile[0].profile:img} alt='avatar' className="rounded-full h-32 " /> }
                 {user.usertype === "Student"  && <img src={props.profile[0].userdetails[0].profile ? props.profile[0].userdetails[0].profile:'./img/profile.png'} alt='avatar' className="rounded-full h-32 " />}
                    <input type='file' onChange={handleImageChange} ref={inputRef} className='hidden' />
                  </div>
                  {/* {console.log(user)} */}
               {user.usertype === "Employer" && <div id='title' className='font-bold tracking-tight text-2xl pb-2'>{props.profile[0].last_name} {props.profile[0].first_name}</div>}
                {user.usertype === "Student"  && <div id='title' className='font-bold tracking-tight text-2xl pb-2'>{props.profile[0].userdetails[0].last_name} {props.profile[0].userdetails[0].first_name}</div>}
                <div className='grid gap-5 grid-cols-2 pt-7'>
                  <button className=' p-1 rounded-md shadow-md bg-indigo-500 hover:bg-indigo-600 text-white font-semibold'>
                    Message </button>
                  <button className='p-1 rounded-md shadow-md bg-yellow-400 hover:bg-yellow-500 text-white font-semibold'>
                    Resume </button>
                  </div>
                    <div className='bg-white rounded-md mt-3 p-4flex flex-col items-center'>

                      <IconButton color='primary'>
                        <FacebookIcon />
                      </IconButton>
                      <IconButton color='primary'>
                        <TwitterIcon />
                      </IconButton>
                      <IconButton color='secondary'>
                        <InstagramIcon />
                      </IconButton>
                    </div>
             

                
                
            </div>
        </Box>
    </Drawer>
    </>
    
  )
}

export default Profile