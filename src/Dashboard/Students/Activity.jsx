import React, { useState } from 'react';
import compImage from '../../Images/profile2.png';
import cardImage from '../../Images/bg3.jpg';
import { RiUserLocationLine, RiUser3Line, RiBuilding2Line } from 'react-icons/ri';
import { MdWorkOutline } from 'react-icons/md';
import { AiOutlineClockCircle } from 'react-icons/ai';
import PersonOutlineOutlinedIcon  from '@mui/icons-material/PersonOutlineOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import HourglassEmptyOutlinedIcon from '@mui/icons-material/HourglassEmptyOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export default function  Bookmark(props) {
  const [showContainer, setShowContainer] = useState(false);

  const handleViewButtonClick = () => {
    setShowContainer(true);
  };
// icon bookmak clicked color
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };


  // Define the 'posts' object with the necessary properties.
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
          className="w-auto active:scale-[.98] active:duration-75 translate-all hover:scale-[1.01] ease-in-out bg-yellow-400 text-white mt-5 px-20 py-2 rounded-md"
          type="submit"
          onClick={handleViewButtonClick}
        >
          Pending
        </button>
      </div>

      {showContainer && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
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
                <h2 className='text-xl font-bold tracking-tighter  flex justify-center '>STATUS</h2>
                <div className="flex justify-center pt-7">
                <div className=' flex justify-center pt-5 rounded-md bg-yellow-500 h-20 w-80 font-bold 
                tracking-tighter text-lg'>
                  NOT YET REVIEWED BY THE EMPLOYER
                </div>
                </div>
              </div>

              <button
                className=" mb-2 mt-4 px-4 py-2 bg-blue-600 text-white rounded-md self-end"
                onClick={() => setShowContainer(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
