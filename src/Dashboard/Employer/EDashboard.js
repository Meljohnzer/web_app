import * as React from 'react';
import Box from '@mui/material/Box';
import { FaUserCircle } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io'
import cardImage from '../../Images/bg2.jpg'
import { Link, useNavigate } from 'react-router-dom';
import EmpAppbar from './EmpAppbar';
import UserContext from '../../api/context/context';
import backgroundImage from '../../Images/bg2.jpg'
import Applicants from './applicantPage/Applicants';
import Create from './Create';
import EHome from './EHome';
import Settings from '../Settings';
import { axiosRequest } from '../../api/api/axios';
import { Navigate } from 'react-router-dom';
export default function Employer(props  ) {
  const {page} = React.useContext(UserContext);
  const {user} = React.useContext(UserContext);
  const navigate = useNavigate();
      React.useEffect(()=>{
          if(user.access === null ){
            navigate("/web_app")
          }else{
            axiosRequest.get(`auth/web/profile/${user.id}`, {
              headers: {
                'Authorization': `JWT ${user.access}`,
              }
            }).then((response)=>{
              // console.log(response.data)
              if (response.data[0].userdetails.length === 0 ) {
                navigate('web_app/personal');
              } else {
                console.log(null)
              }
              
            }).catch(err=>{
              // console.log(err)
            })
             
            
          }


      },[])

    return (
      <div className="bg-cover bg-fixed bg-center absolute inset-0" style={{ backgroundImage: `url(${backgroundImage})` ,minHeight:"100%"}}>
      <EmpAppbar/>
      <Settings />
      <div className="bg-[#F7FAFF66] h-screen relative flex inset-0 pt-20 px-2">
      <div>
 <> <EHome  hide = {page.active === 'Home' ? null : "none"}/> 
  <Applicants hide = {page.active === 'Applicants' ? null : "none"}/> 
  <Create hide = {page.active === 'Create' ? null : "none"}/> 
  {/* {console.log(user)} */}

  </>
  

      
      </div>
      </div>
      </div>
      );
}
