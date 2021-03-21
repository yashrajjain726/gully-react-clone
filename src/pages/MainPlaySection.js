import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';
import AppBar from '../component/mainPageComponent/mainAppBar'
import Stepper from '../component/stepper'
import Tabs from '../component/tabs'
import BottomNavigation from '../component/mainPageComponent/bottomNavigation'       
export default function FixedContainer() {
  return (
   
        <React.Fragment>
      <CssBaseline />
      
      <div className="playSection">
      <Container className="container" inline>
          <AppBar/>
          <Stepper/>
          <Tabs/>
            
         
          
        <BottomNavigation/>
          
      </Container>
      </div>
    </React.Fragment>
  );
}
