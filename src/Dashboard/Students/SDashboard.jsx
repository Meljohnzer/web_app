import React, { useEffect } from 'react'
import Appbar from '../Appbar'
import backgroundImage from '../../Images/bg2.jpg';
import Home from '../Students/Home';
import Bookmark from './Bookmark';
import Activity from './Activity';
import UserContext from '../../api/context/context';
import Settings from '../Settings';
import { axiosRequest } from '../../api/api/axios';
import { Link, useNavigate} from 'react-router-dom';

export default function SDashboard() {
  
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
          if (response.data[0].userdetails.length == 0) {
            navigate('/web_app/personal');
            
          } else if (response.data[0].guardian.length == 0) {
            navigate('/web_app/Sguardian');
          } else if (response.data[0].educationbg.length == 0) {
            navigate('/web_app/Seducation');
          } else {
            console.log("null")
          }
        
      }).catch(err=>{
        // console.log(err)
      })
    }


},[])

  return (
    <div className="bg-cover bg-center absolute inset-0" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Appbar/>
      <Settings/>
      <div className="bg-[#F7FAFF66] h-screen lg:justify-start md:justify-center relative flex inset-0 pt-20 px-2">
      <div>
 <> <Home  hide = {page.active === 'Home' ? null : "none"}/> 
  <Bookmark hide = {page.active === 'Bookmarks' ? null : "none"}/> 
  <Activity hide = {page.active === 'Activity log' ? null : "none"}/> 
  {/* {console.log(page)} */}

  </>
  

      
      </div>
      </div>
      </div>
  )
}
