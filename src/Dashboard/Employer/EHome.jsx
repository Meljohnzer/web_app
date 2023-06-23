import React, { useEffect } from 'react'
import EmpAppbar from './EmpAppbar';
import backgroundImage from '../../Images/bg2.jpg';
import { useState } from 'react';
import Joblist from '../../JobList/JobList';
import Settings from '../Settings';
import UserContext from '../../api/context/context';
import { axiosRequest } from '../../api/api/axios';
import { PropagateLoader} from "react-spinners";
const EHome = (props) =>{

  const {user} = React.useContext(UserContext);
  
  const [post ,setPost] = useState(null);
  useEffect(()=>{
    
     
    axiosRequest.get(`auth/post/view/${user.id}/`,{
     headers: {
       'Authorization': `JWT ${user.access}`,
     }
   }).then((response)=>{
       //  console.log(response.data)
   setPost(response.data)
        
   }).catch(err=>console.log(err))
   
     },[user])

 

  const handelDelete = (id) =>{
    const newPost = post.filter(posts => posts.id !== id);
    setPost(newPost);
  }
  if(!post){
    return <div className="  absolute top-0 left-0 right-5 bottom-0 flex items-center justify-center ">
    <PropagateLoader color="black" loading={true} size={15}/> 
  </div>
  }

  return(
    <div className="bg-cover bg-center absolute inset-0" style={{ backgroundImage: `url(${backgroundImage})`,display : props.hide}}>
    <div className="bg-[#F7FAFF66] h-screen relative inset-0 pt-20 px-2  justify-center ">
    <div >

    <div className='justify-center text-center  w-half esm:px-0 px-5'>
      <Joblist post={post} /> 
      {console.log(post)}
    </div>

    
    </div>
    </div>
    </div>
  )
}

export default EHome;