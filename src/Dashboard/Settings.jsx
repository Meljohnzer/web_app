import React, { useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';

const Settings = () => {
  const [isContainerVisible, setIsContainerVisible] = useState(false);

  const handleIconClick = () => {
    setIsContainerVisible(!isContainerVisible);
  };

  return (
    <div className='fixed bottom-0 right-0 p-4'>
      <div >
        <SettingsIcon onClick={handleIconClick} sx={{ fontSize: 50, color: 'gray' }} />
      </div>
      {isContainerVisible && (
        <div className='container'>
          {/* Container content */}
          This is the container that appears when the icon is clicked.
        </div>
      )}
    </div>
  );
};

export default Settings;
