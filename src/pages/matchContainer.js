import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MatchCard from '../component/eachMatchComponent/matchCard'
import Container from '@material-ui/core/Container';
import AppBar from '../component/eachMatchComponent/matchAppBar'
import Stepper from '../component/stepper'
import BottomNavigation from '../component/mainPageComponent/bottomNavigation'     
import Tabs from '../component/eachMatchComponent/tabs';
export default function FixedContainer(){
  return (
        <React.Fragment>
      <CssBaseline />
      
      <div className="playSection">
      <Container className="container" inline>
          <AppBar/>
          <Stepper/>
          <center><MatchCard/></center>
          <Tabs/>
          
        <BottomNavigation/>
          
      </Container>
      </div>
    </React.Fragment>
   
  );
}

