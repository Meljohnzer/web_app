import React from 'react';
import EmpAppbar from './EmpAppbar';
import backgroundImage from '../../Images/bg2.jpg';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Settings from '../Settings';


export default function Create(props) {
  const [title, setTitle] = useState('');
  const [loc, setLoc] = useState('');
  const [desc, setDesc] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [rate, setRate] = useState('');
  const [jobtype, setJobtype] = useState('');
  const [salary, setSalary] = useState('');
  

  const handleSubmit = (e) => {
    console.log('posted');
  };

  const handleJobtype = (event) => {
    setJobtype(event.target.value);
  };
  const handleRate = (event) => {
    setRate(event.target.value);
  };
  return (
    <>
    
      <div
        className="bg-cover bg-center absolute inset-0"
        style={{ backgroundImage: `url(${backgroundImage})`, display: props.hide }}
      >
        <div className="bg-[#aeaeb066] h-screen flex pt-20">
          <div className="flex justify-center w-1/2">
            <div className="w-2/3 rounded-xl px-4 shadow-2xl mb-6">
              <h1 className="text-3xl text-center pt-5 text-white font-bold tracking-tight font-mono">
                JOB INFORMATION
              </h1>
              <form className="mt-12">
                <div className="relative">
                  <input
                    id="title"
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-gray-200 peer h-10 w-full border-b-2 border-gray-300 rounded-md text-gray-900
                     placeholder-transparent focus:outline-none focus:border-yellow-300"
                    placeholder="Job title"
                  />
                  <label
                    className="absolute left-2 -top-3.5 text-gray-400 text-sm font-semibold transition-all 
                    peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-placeholder-shown:top-2 
                    peer-focus:-3.5 peer-focus:text-gray-400 peer-focus:text-sm"
                    htmlFor="title"
                  >
                    Job Title
                  </label>
                </div>
                <div className='pt-2'>
                  <div className="grid grid-cols-2 gap-x-4">
                    <FormControl required sx={{ minWidth: 150 }}>
                      <InputLabel>Job type</InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={jobtype}
                        onChange={handleJobtype}
                        autoWidth
                        label="Job type"
                      >
                        <MenuItem value={10}>Remote</MenuItem>
                        <MenuItem value={21}>Full-time</MenuItem>
                        <MenuItem value={31}>Part-time</MenuItem>
                      </Select>
                    </FormControl>

                    <FormControl required sx={{ minWidth: 150 }}>
                      <InputLabel>Rate per</InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={rate}
                        onChange={handleRate}
                        autoWidth
                        label="Rate per"
                      >
                        <MenuItem value={100}>Hour</MenuItem>
                        <MenuItem value={200}>Weekly</MenuItem>
                        <MenuItem value={300}>Monthly</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>

                 {/* salary */}
                 <div className='mt-4 relative'>
                  <input
                    id='salary'
                    type='int'
                    required
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    className='peer h-10 w-full border-b-2 border-gray-300 rounded-md text-gray-900 placeholder-transparent
                     focus:outline-none  focus:border-yellow-300 '
                    placeholder='Salary'
                  />
                  <label
                    className='absolute left-2 -top-3.5 text-gray-400 font-semibold text-sm transition-all 
                    peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-700 peer-placeholder-shown:top-2 
                    peer-focus:-3.5 peer-focus:text-gray-400 peer-focus:text-sm'
                    htmlFor='salary'>Salary</label>
                </div>


                {/* vacant position */}
                <div className='mt-4 relative'>
                  <input
                    id='vacantPosition'
                    type='text'
                    required
                    value={loc}
                    onChange={(e) => setLoc(e.target.value)}
                    className='peer h-10 w-full border-b-2 border-gray-300 rounded-md text-gray-900 placeholder-transparent 
                    focus:outline-none  focus:border-yellow-300 '
                    placeholder='Location'
                  />
                  <label
                    className='absolute left-2 -top-3.5 text-gray-400 font-semibold text-sm transition-all 
                    peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-700 peer-placeholder-shown:top-2
                     peer-focus:-3.5 peer-focus:text-gray-400 peer-focus:text-sm'
                    htmlFor='vancantposition'>Vacant position</label>
                </div>

                {/* desc */}
                <div class="col-span-full mt-4">
                  <label for="desc" class="block text-sm font-medium leading-6 text-gray-900">Description</label>
                  <div class="mt-2">
                    <textarea
                      id="desc"
                      required
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                      rows="3"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-400
                       placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>
{/* ----------------------------------------------------------------------- */}
          <div className="flex justify-center w-1/2">
            <div className="w-2/3 h-2/3 rounded-xl px-4 shadow-2xl mb-6">
              <h1 className="text-3xl text-center pt-5 text-white font-bold tracking-tight font-mono">
                JOB LOCATION
              </h1>
              <form className="mt-12">
                  {/*street */}
                  <div className='mt-4 relative'>
                  <input
                    id='street'
                    type='text'
                    required
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    className='peer h-10 w-full border-b-2 border-gray-300 rounded-md text-gray-900 placeholder-transparent focus:outline-none  focus:border-yellow-300 '
                    placeholder='Street'
                  />
                  <label
                    className='absolute left-2 -top-3.5 text-gray-400 font-semibold text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-700 peer-placeholder-shown:top-2 peer-focus:-3.5 peer-focus:text-gray-400 peer-focus:text-sm'
                    htmlFor='title'>Street</label>
                </div>

                {/* city */}
                <div className='mt-4 relative'>
                  <input
                    id='city'
                    type='text'
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className='peer h-10 w-full border-b-2 border-gray-300 rounded-md text-gray-900 placeholder-transparent
                     focus:outline-none  focus:border-yellow-300 '
                    placeholder='City'
                  />
                  <label
                    className='absolute left-2 -top-3.5 text-gray-400 font-semibold text-sm transition-all 
                    peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-700 peer-placeholder-shown:top-2 
                    peer-focus:-3.5 peer-focus:text-gray-400 peer-focus:text-sm'
                    htmlFor='title'>City</label>
                </div>

                {/* province */}
                <div className='mt-4 relative'>
                  <input
                    id='province'
                    type='text'
                    required
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    className='peer h-10 w-full border-b-2 border-gray-300 rounded-md text-gray-900 placeholder-transparent 
                    focus:outline-none  focus:border-yellow-300 '
                    placeholder='Province'
                  />
                  <label
                    className='absolute left-2 -top-3.5 text-gray-400 font-semibold text-sm transition-all 
                    peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-700 peer-placeholder-shown:top-2
                     peer-focus:-3.5 peer-focus:text-gray-400 peer-focus:text-sm'
                    htmlFor='title'>Province</label>
                </div>

                {/* zipcode */}
                <div className='mt-4 relative'>
                  <input
                    id='zipcode'
                    type='text'
                    required
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                    className='peer h-10 w-full border-b-2 border-gray-300 rounded-md text-gray-900 
                    placeholder-transparent focus:outline-none  focus:border-yellow-300 '
                    placeholder='Zipcode'
                  />
                  <label
                    className='absolute left-2 -top-3.5 text-gray-400 font-semibold text-sm transition-all
                     peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-700 
                     peer-placeholder-shown:top-2 peer-focus:-3.5 peer-focus:text-gray-400 peer-focus:text-sm'
                    htmlFor='title'>Zip code</label>
                </div>
              </form>
              <div className='w-full flex flex-col items-center '>
                  <button onClick={handleSubmit} className='mt-4 w-40 h-10  text-2xl rounded-xl bg-gray-400 
                  font-semibold text-white hover:bg-yellow-600 transition ease-in'>Post</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
