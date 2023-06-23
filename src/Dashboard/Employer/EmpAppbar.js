import React, { useEffect } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import TextField from '@mui/material/TextField';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import profileImage from '../../Images/profile.png';
import Grid from '@mui/material/Grid';
import { Link, useNavigate } from 'react-router-dom';
import Profile from '../settingsDrawer/Profile';
import Account from '../settingsDrawer/Account';
import UserContext from '../../api/context/context';
import { axiosRequest } from '../../api/api/axios';

const pages = [
   'Home',
  'Applicants',
   'Create'
];
const settings = ['Logout'];

function EmpAppbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [activePage, setActivePage] = React.useState(pages[0]);
  const navigate = useNavigate();
  const {setPage} = React.useContext(UserContext);
  const {setUser} = React.useContext(UserContext);
  const {user} = React.useContext(UserContext);
  const [profile,setProfile] = React.useState()
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    
  };

  const HandleLogout = () =>{
    navigate('/')
    setUser({usertype:null,id:null,email:null,access:null})
  }

  const handlePageClick = (page) => {
    // setActivePage(path);
    // navigate(path);
    setActivePage(page)
    next(page)
  };

  const next  = (page) => {
    setPage({active:page})
    // console.log(page)
  }
  useEffect(()=>{

    axiosRequest.get('auth/profile/'+user.id + "/").then((response)=>response.data).then((data)=>{
     // console.log(data[0].profile[0][21])
   setProfile(data)
  //  setLoading(false)
 
    })
     
     },[])
    // console.log(profile[0].profile)
     if(!profile){
      return null
     }
  return (
    <AppBar position="fixed" style={{ backgroundColor: '#1e1e1e', display: 'flex', zIndex: 1 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'yellow' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            <span>HAN</span>
            <span className="text-blue-600">APP</span>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handlePageClick(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                color={activePage === page ? 'secondary' : 'inherit'}
                onClick={() => handlePageClick(page)}
                sx={{
                  my: 1,
                  color: 'white',
                  display: 'block',
                  borderRadius: 0,
                  '&:hover': {
                    color: 'yellow',
                  },
                  ...(activePage === page && {
                    color: 'yellow',
                    borderBottom: '3px solid yellow',
                  }),
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <div className="flex items-center">
              <TextField
                id="search-bar"
                label="Search"
                variant="outlined"
                fullWidth
                size="small"
                InputLabelProps={{
                  style: {
                    color: 'white', // change the color to whatever you want
                  },
                }}
                InputProps={{
                  style: {
                    color: 'white',
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white',
                      color: 'white',
                    },
                    '&:hover fieldset': {
                      borderColor: 'white',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'white',
                    },
                  },
                  mr: 2,
                }}
              />
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <img src={profile[0].profile ? profile[0].profile:profileImage} alt="profile" style={{ width: '50px', height: '50px', borderRadius: '25px' }} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <Grid container direction="column" justifyContent="center" alignItems="center">
                  <Profile profile = {profile}/>
                  <Account />
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center" onClick={HandleLogout}>{setting}</Typography>
                    </MenuItem>
                  ))}
                </Grid>
              </Menu>
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default EmpAppbar;
