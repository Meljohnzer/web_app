import React, { useState } from 'react';
import compImage from '../../Images/profile2.png';
import cardImage from '../../Images/bg3.jpg';
import { RiUserLocationLine, RiUser3Line, RiBuilding2Line } from 'react-icons/ri';
import { MdWorkOutline } from 'react-icons/md';
import { AiOutlineClockCircle } from 'react-icons/ai';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import HourglassEmptyOutlinedIcon from '@mui/icons-material/HourglassEmptyOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { axiosRequest } from '../../api/api/axios';
import UserContext from '../../api/context/context';
import moment from 'moment'
import { PropagateLoader} from "react-spinners";


export default function Home(props) {
  const [showContainer, setShowContainer] = useState(false);
  const [showHiddenContainer, setShowHiddenContainer] = useState(false);
  const [showSuccess, setShowSucces] = useState(false)
  const {user} = React.useContext(UserContext);

  const handleViewButtonClick = () => {
    setShowContainer(true);
  };
  const handleApplyButtonClick = () => {
      setShowHiddenContainer(true);
    };
  const handleSuccess =() => {
    setShowSucces(true)
    setShowHiddenContainer(false)
    setShowContainer(false)
  }
 
    // Icon bookmark clicked color
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
//apply buttons
const [FileReq1, setFileReq1] = React.useState('');
const [FileReq2, setFileReq2] = React.useState('');

  const handleFileReq1 = (event) => {
    setFileReq1(event.target.value);
  };
  const handleFileReq2 = (event) => {
    setFileReq2(event.target.value);
  };
  const [socailLink, setSocialLink] = useState('');
  const [photoID, setPhotoID] = useState('');


  const [post,setPost] = useState(null)

  React.useEffect(()=>{
     
    axiosRequest.get('auth/post/view/home').then((response)=>{
       
   setPost(response.data)
  //  setLoading(false);
        
   }).catch(() =>console.log("Error"))
   
   
   
   },[])

   if(!post){
    return   <div className="absolute top-0 left-0 right-5 bottom-0 flex items-center justify-center">
    <PropagateLoader color="black" loading={true} size={15}/> 
  </div>
   }


  return (
<div className="flex flex-col justify-center lg:flex-row flex-wrap md:flex-row md:flex-wrap md:justify-center lg:justify-start p-2 items-center">
  { post.map((posts,index)=>(<div key={index}
      className="border-2 justify-center items-center bg-cover bg-center  p-2 rounded-lg flex flex-col"
      style={{ backgroundImage: `url(${cardImage})`, display: props.hide }}
    >
      <div
        className="bg-cover inset-0 flex"
        style={{
          backgroundImage: `url(${posts.profile[0].profile ? posts.profile[0].profile:compImage})`,
          margin: '2%',
          width: 100,
          height: 100,
          borderRadius: 50,
          alignSelf: 'center',
        }}
      ></div>
      <div className="h-40 w-72 border-grey border-2 rounded-lg bg-[#F7FAFF66]">
        <div className="flex-col px-2">
          <div className="flex justify-end " onClick={handleClick}>
            <BookmarkIcon  style={{ color: posts.bookmark.length > 0 ? 'gold' : 'inherit' }} />
          </div>

          <p className="border-b-2 border-gray-500 text-lg">
            {' '}
            <RiUser3Line className="inline-block mb-1 text-blue-500" />
            {posts.looking_for}
          </p>
         {posts.company.length  !== 0 && <p className="">
            {' '}
            <RiBuilding2Line className="inline-block mb-1 text-blue-500" />
            {posts.company[0].comp_name}
          </p>}
          <p className="">
            {' '}
            <RiUserLocationLine className="inline-block mb-1 text-blue-500" />
            {posts.street} {posts.city} {posts.province} {posts.zipcode}
          </p>
          <p className="">
            {' '}
            <MdWorkOutline className="inline-block mb-1 text-blue-500" />
            {posts.job_type}
          </p>
          <p className="">
            {' '}
            <AiOutlineClockCircle className="inline-block mb-1 text-blue-500" />
            {moment(posts.created_at).startOf('seconds').fromNow()}
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="w-auto active:scale-[.98] active:duration-75 translate-all hover:scale-[1.01]
           ease-in-out bg-blue-600 text-white mt-5 px-20 py-2 rounded-md"
          type="submit"
          onClick={handleViewButtonClick}
        >
          View
        </button>
      </div>

      {showContainer && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-filter backdrop-blur-md bg-gray-500 bg-opacity-10">
          <div className="bg-white p-2 rounded-md shadow-md w-8/12 flex">
            <div className="w-1/2 pr-5 outline outline-offset-1 outline-gray-500">
              <h2 className="flex justify-center pt-2 underline w-80 font-bold tracking-tight text-xl ">
                <PersonOutlineOutlinedIcon sx={{ fontSize: '32px' }} />
                {posts.looking_for}
              </h2>

              <div className="text-gray-500 font-semibold text-left pl-2   mt-4">
            {posts.company.length  !== 0 &&    <p className="hover:text-gray-700">
                  <ApartmentOutlinedIcon /> {posts.company[0].comp_name}
                </p>}
                <p className="hover:text-gray-700">
                  <FmdGoodOutlinedIcon />  {posts.street} {posts.city} {posts.province} {posts.zipcode}
                </p>
                <p className="hover:text-gray-700">
                  <BusinessCenterOutlinedIcon /> {posts.job_type}
                </p>
                <p className="hover:text-gray-700">
                  <HourglassEmptyOutlinedIcon /> {posts.created_at}
                </p>
              </div>
            </div>

            <div className="w-1/2 p-2 outline outline-offset-1 outline-gray-500">
              <div className="h-48 text-justify overflow-y-auto">
                <h2 className='font-bold tracking-tighter text-lg'>Description:</h2>
                {posts.job_desc}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md"
                  onClick={handleApplyButtonClick}
                >
                  Apply
                </button>

                <button
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
                  onClick={() => setShowContainer(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

{showHiddenContainer && (
  <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-filter backdrop-blur-md bg-gray-500 bg-opacity-10">
    <div className="bg-white p-2 rounded-md shadow-md w-8/12 flex flex-col">
      <div className='pb-4'>
        <FormControl className='w-full' >
          <InputLabel>File requirement</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="select1"
            value={FileReq1}
            label="File requirement"
            onChange={handleFileReq1}
          >
            <MenuItem value={10}>Resume</MenuItem>
            <MenuItem value={20}>Birth certificate</MenuItem>
            <MenuItem value={30}>Official ID</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl className='w-full'>
          <InputLabel>File requirement</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={FileReq2}
            label="File requirement"
            onChange={handleFileReq2}
          >
            <MenuItem value={100}>file1</MenuItem>
            <MenuItem value={200}>file2</MenuItem>
            <MenuItem value={300}>file3</MenuItem>
          </Select>
        </FormControl>
      </div>
      <form>
               <div className='mt-4 relative'>
                  <input
                    id='PhotoID'
                    type='file'
                    required
                    value={photoID}
                    onChange={(e) => setPhotoID(e.target.value)}
                    // className='peer h-10 w-full border-b-2 border-gray-300 rounded-md text-gray-900 placeholder-transparent
                    //  focus:outline-none  focus:border-yellow-300 '
                    className='pt-3'
                    placeholder='Photo ID'
                  />
                  <label
                
                    className='absolute left-2 -top-3.5 text-gray-900 font-semibold text-md'
                    htmlFor='Photo ID'>Photo ID</label>
                </div>

                <div className='mt-4 relative'>
                  <input
                    id='socialLInk'
                    type='string'
                    required
                    value={socailLink}
                    onChange={(e) => setSocialLink(e.target.value)}
                    className='peer h-10 w-full border-b-2 border-gray-300 rounded-md text-gray-900 placeholder-transparent
                     focus:outline-none  focus:border-yellow-300 '
                    placeholder='Social media link'
                  />
                  <label
                    className='absolute left-2 -top-3.5 text-gray-400 font-semibold text-sm transition-all 
                    peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-700 peer-placeholder-shown:top-2 
                    peer-focus:-3.5 peer-focus:text-gray-400 peer-focus:text-sm'
                    htmlFor='Social media link'>Social media link</label>
                </div>

      </form>
      <div className='flex justify-end mt-auto'>
        <button
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md"
          onClick={() => handleSuccess(false)}
        >
          Apply
        </button>
        <button
          className="mt-4 ml-4 px-4 py-2 bg-blue-600 text-white rounded-md"
          onClick={() => setShowHiddenContainer(false)}
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}
{showSuccess && (
  <div onClick={() => setShowSucces(false)} className="fixed inset-0 flex items-center justify-center z-50 backdrop-filter backdrop-blur-md bg-gray-500 bg-opacity-10">
    <div className='bg-white w-6/12 rounded-3xl'>
      <div className='flex justify-center'>
       <CheckCircleIcon  sx={{fontSize:300,color:'green'}}/>
      </div>
      <div className='flex justify-center'>
       <h2 className='pb-2 text-4xl tracking-tight font-extrabold'>Successfully sent</h2>
      </div>
    </div>
   

  </div>
)}

    </div>))}
    </div>
  );
}
