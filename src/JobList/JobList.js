import React, { useState } from "react";
import profileImg from '../Images/profile.png';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import HourglassEmptyOutlinedIcon from '@mui/icons-material/HourglassEmptyOutlined';  
import moment from 'moment'
const Joblist = ({ post, title, handleManage }) => {
  const [selectedJobId, setSelectedJobId] = useState(null);

  const toggleContainerVisibility = (jobId) => {
    setSelectedJobId(jobId === selectedJobId ? null : jobId);
  };

  const handleEdit = (postId) => {
    
    console.log(`edit button clicked for id: ${postId}`);
  };
  if(post === undefined){
    return(
   null
      )
    
  }

  return (
    <div className="post-list ">
      <div className="flex flex-col lg:flex-row flex-wrap md:flex-row md:flex-wrap md:justify-center justify-center lg:justify-start items-center">
        {post.map((posts) => (
          <div className="post-preview p-1 max-w-xs" key={posts.id}>
            <div className=" container mx-auto bg-slate-300 bg-opacity-60 rounded-lg hover:bg-opacity-95 transition duration-300 ease-in">
              <img src={posts.profile[0].profile ? posts.profile[0].profile : profileImg } alt="Profile" className="profile-image mx-auto h-40 rounded-full p-2" />

              <h2 className="font-bold tracking-tight text-lg border-solid border-2 border-black">
                {/* <PersonOutlineOutlinedIcon /> */}
                {posts.looking_for}
              </h2>

              <div className="text-gray-500 font-semibold text-left p-3">
                {posts.company != "" && <p className=" hover:text-gray-700"><ApartmentOutlinedIcon /> {posts.company[0].comp_name}</p>}
                <p className=" hover:text-gray-700"><FmdGoodOutlinedIcon /> {posts.address[0].street} {posts.address[0].city} {posts.address[0].province} {posts.address[0].zipcode}</p>
                <p className=" hover:text-gray-700"><BusinessCenterOutlinedIcon /> {posts.job_type}</p>
                <p className=" hover:text-gray-700"><PersonOutlineOutlinedIcon /> {posts.applies.length} People applied</p>
                <p className=" hover:text-gray-700"><HourglassEmptyOutlinedIcon /> {moment(posts.created_at).startOf('seconds').fromNow()}</p>
              </div>

              <div className="p-5">
                <button
                  onClick={() => toggleContainerVisibility(posts.id)}
                  className="bg-green-600 p-1 rounded-xl w-56 text-white font-semibold"
                >
                  Manage
                </button>

                {selectedJobId === posts.id && (
                  <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-75">
                    <div className="  w-3/5  container mx-auto bg-white rounded-lg p-8 flex">
                      <div className="w-2/3">
                        <h2 className=" w-96 font-bold tracking-tight text-lg border-solid border-2 border-black">
                          {/* <PersonOutlineOutlinedIcon /> */}
                          {posts.looking_for}
                        </h2>

                        <div className="text-gray-500 font-semibold text-left pl-6">
                          {posts.company != "" && <p className=" hover:text-gray-700"><ApartmentOutlinedIcon /> {posts.company[0].comp_name}</p>}
                          <p className=" hover:text-gray-700"><FmdGoodOutlinedIcon /> {posts.address[0].street} {posts.address[0].city} {posts.address[0].province} {posts.address[0].zipcode}</p>
                          <p className=" hover:text-gray-700"><BusinessCenterOutlinedIcon /> {posts.job_type}</p>
                          <p className=" hover:text-gray-700"><PersonOutlineOutlinedIcon /> {posts.applies.length} People applied</p>
                          <p className=" hover:text-gray-700"><HourglassEmptyOutlinedIcon /> {moment(posts.created_at).startOf('seconds').fromNow()}</p>
                        </div>
                      </div>

                      <div className=" w-4/6 flex flex-col justify-between">
                        <div className=" h-48 text-justify overflow-y-auto">
                          <p>{posts.desc}</p>
                        </div>
                        <div className="  absolute bottom-52 left-80 h-16 w-16 ">
                        <button
                          onClick={() => toggleContainerVisibility(posts.id)}
                          className=" w-24 mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg"
                        >
                          Back
                        </button>
                        </div>
                        <div className="absolute bottom-52 left-1/3 h-16 w-24">
                        <button
                          onClick={() => handleEdit(posts.id)}
                          className=" w-24 mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg"
                        >
                          Edit
                        </button>
                        </div>

                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Joblist;
