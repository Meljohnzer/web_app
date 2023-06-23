import React, { useState } from 'react'
import EmpAppbar from '../EmpAppbar'
import backgroundImage from '../../../Images/bg2.jpg'
import ApplicantsList from './ApplicantsList'
import Settings from '../../Settings'

const Applicants =(props) => {

  const [applicants ,setApplicants] = useState([

    {title:'John Doe', 
    company:'BEsagunsa Inc.',  
    location:'CDO',
    desc:'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ', 
    id:1},

    {title:'John Smith', 
    company:'BEsagunsa Inc.',
    location:'CDO',
    desc:'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur',
    id:2},
  
  ]); 
    // const handelDelete = (id) =>{
    //   const newApplicants = applicants.filter(applicants => applicants.id !== id);
    //   (newApplicants);
    // }

  return(
    <div className="bg-cover bg-center absolute inset-0" style={{ backgroundImage: `url(${backgroundImage})`,display : props.hide }}>
  
    <div className="bg-[#F7FAFF66] h-screen relative flex inset-0 pt-20 px-2">
    <div >

    <div className='justify-center text-center  w-full esm:px-0 px-5'>
      <ApplicantsList applicant={applicants} /> 
    </div>

    
    </div>
    </div>
    </div>
  )
  }
export default Applicants

