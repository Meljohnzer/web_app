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

export default function Bookmark(props) {
  const [showContainer, setShowContainer] = useState(false);
  const [showSuccess, setShowSucces] = useState(false)
  const [showHiddenContainer, setShowHiddenContainer] = useState(false);

  const handleApplyButtonClick = () => {
    setShowHiddenContainer(true);
  };
  const handleSuccess =() => {
    setShowSucces(true)
    setShowHiddenContainer(false)
    setShowContainer(false)
  }

  const handleViewButtonClick = () => {
    setShowContainer(true);
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

// icon bookmak clicked color
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };


  // Define the 'posts' object with the necessary properties
  const posts = {
    title: 'Back-end developer',
    company: 'BeSagunsa Inc.',
    location: 'Imbatug, Baungon, Bukidnon',
    jobType: 'Remote',
    time: '12 hours ago',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  };

  return (
    <div className="border-2 justify-center items-center bg-cover bg-center absolute px-2 py-2 rounded-lg flex flex-col" style={{ backgroundImage: `url(${cardImage})`, display: props.hide }}>
      <div className="bg-cover inset-0 flex" style={{ backgroundImage: `url(${compImage})`, margin: '2%', width: 100, height: 100, borderRadius: 50, alignSelf: 'center' }}></div>
      <div className="h-40 w-72 border-grey border-2 rounded-lg bg-[#F7FAFF66]">
        <div className="flex-col px-2">

        <div className="flex justify-end text-yellow-500" onClick={handleClick}>
      <BookmarkIcon style={{ color: isClicked ? 'black' : 'inherit' }} />
        </div>

          <p className="border-b-2 border-gray-500 text-lg">
            {' '}
            <RiUser3Line className="inline-block mb-1 text-blue-500" />
            {posts.title}
          </p>
          <p className="">
            {' '}
            <RiBuilding2Line className="inline-block mb-1 text-blue-500" />
            {posts.company}
          </p>
          <p className="">
            {' '}
            <RiUserLocationLine className="inline-block mb-1 text-blue-500" />
            {posts.location}
          </p>
          <p className="">
            {' '}
            <MdWorkOutline className="inline-block mb-1 text-blue-500" />
            {posts.jobType}
          </p>
          <p className="">
            {' '}
            <AiOutlineClockCircle className="inline-block mb-1 text-blue-500" />
            {posts.time}
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="w-auto active:scale-[.98] active:duration-75 translate-all hover:scale-[1.01] ease-in-out bg-blue-600 text-white mt-5 px-20 py-2 rounded-md"
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
              <h2 className="w-80 font-bold tracking-tight text-lg border-solid border-2 border-black">
                <PersonOutlineOutlinedIcon />
                {posts.title}
              </h2>

              <div className="text-gray-500 font-semibold text-left mt-4">
                <p className="hover:text-gray-700">
                  <ApartmentOutlinedIcon /> {posts.company}
                </p>
                <p className="hover:text-gray-700">
                  <FmdGoodOutlinedIcon /> {posts.location}
                </p>
                <p className="hover:text-gray-700">
                  <BusinessCenterOutlinedIcon /> {posts.jobType}
                </p>
                <p className="hover:text-gray-700">
                  <HourglassEmptyOutlinedIcon /> {posts.time}
                </p>
              </div>
            </div>

            <div className="w-1/2 pl-5 outline outline-offset-1 outline-gray-500">
              <div className="h-48 text-justify overflow-y-auto">
                <p>{posts.desc}</p>
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
    </div>
  );
}
