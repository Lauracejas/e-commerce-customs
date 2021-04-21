import React, { useState } from 'react';
import { Aside, Menu } from '../components';
// import { ThemeProvider } from 'styled-components';
// import { GlobalStyles } from './global';
// import { theme } from './theme';






const Dashboard = () => {
  const [open, setOpen] = useState(false);
    return (
       
        
      <>
      
      <Aside open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
        
      </>
    
    )
}

export default Dashboard
