import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';
import AppBar from './appBar'
import Stepper from './stepper'
import Tabs from './tabs'
import BottomNavigation from './bottomNavigation'       
export default function FixedContainer() {
  return (
    <div className="backgroundSection">
        <React.Fragment>
      <CssBaseline />
      
      <div className="playSection">
      <Container>
          <AppBar/>
          <Stepper/>
          <Tabs/>
            
         
          
        <BottomNavigation/>
          
      </Container>
      </div>
    </React.Fragment>
    </div>
  );
}
