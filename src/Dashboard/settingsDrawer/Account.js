import React from 'react'
import { Drawer,Typography,Box,Button } from '@mui/material'
import { useState } from 'react'

const Account = () => {
    const [IsDrawerOpen, setIsDrawerOpen] = useState(false)
    return (
      <>
      <Button 
      size='medium'
      edge='start'
      color='inherit'
      onClick={()=> setIsDrawerOpen(true)}
      >
          Account</Button>
      <Drawer 
      anchor='left'
      open={IsDrawerOpen}
      onClose={()=> setIsDrawerOpen(false)} 
      >
          <Box p={2} width='500px' textAlign='center' role='presentation'>
              <Typography variant='h6' component='div'>Account</Typography>
          </Box>
      </Drawer>
      </>
      
    )
}

export default Account