import React, { useState } from "react";
import profileImg from "../../../Images/profile.png";
//icons
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined";

const ApplicantsList = ({ applicant, title, handleManage }) => {
  const [expandedId, setExpandedId] = useState(null);

  const handleReviewClick = (id) => {
    setExpandedId(id === expandedId ? null : id);
  };

  const handleBackClick = () => {
    setExpandedId(null);
  };

  return (
    <div className="post-list p-5">
      <div className="bg grid gap-5 grid-cols-4">
        <h2 className="font-semibold tracking-tighter text-lg col-span-4">{title}</h2>
        {applicant.map((applicants) => (
          <div className="post-preview p-4" key={applicants.id}>
            <div className="container mx-auto bg-slate-300 bg-opacity-60 rounded-lg hover:bg-opacity-95 transition duration-300 ease-in">
              <img src={profileImg} alt="Profile" className="profile-image mx-auto h-40" />

              <h2 className="font-bold tracking-tight text-lg border-solid border-2 border-black">
                <PersonOutlineOutlinedIcon />
                {applicants.title}
              </h2>

              <div className="text-gray-500 font-semibold text-left pl-6">
                <p className=" hover:text-gray-700">
                  <ApartmentOutlinedIcon /> {applicants.company}
                </p>
                <p className=" hover:text-gray-700">
                  <FmdGoodOutlinedIcon /> {applicants.location}
                </p>
              </div>

              {/* review */}
              {expandedId === applicants.id && (

                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                  <div className="bg-white rounded-lg p-8 ">

                  <h2 className="font-bold tracking-tight text-3xl border-solid border-2 border-gray-500">
                    {applicants.title}
                  </h2>

                  <p className="text-justify cursor-default pb-2">
                    <h2 className="font-bold pt-2">About me:</h2>
                   {applicants.desc}
                </p>

                <p className=" font-semibold cursor-pointer hover:text-gray-700 text-left">
                                  <FmdGoodOutlinedIcon /> {applicants.location} 
                  </p>

                <div className=" pl-2 border-solid border-2 border-gray-500">
                <a href="#" className=" text-blue-500 underline">
                    View Resume
                </a>
                
               
                </div>
                    <button
                      onClick={handleBackClick}
                      className="bg-gray-400 px-4 py-2 rounded-lg text-white font-semibold mt-4"
                    >
                      Back
                    </button>
                  </div>
                </div>
              )}

              <div className="p-5">
                <button
                  onClick={() => handleReviewClick(applicants.id)}
                  className="bg-green-600 p-1 rounded-xl w-56 text-white font-semibold"
                >
                  Review
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicantsList;
