import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { cookies } from './cookies';
import logo from '../components/images/age.png';
import { Image } from 'semantic-ui-react';


const Allowance = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Update the document title using the browser API
    if(cookies.get('verification') == 'yes') {
      window.location.href = "/";
    }
  });
  function handleClick(e: any) {
    if (e == 'no') {
      cookies.set('verification', 'no', { path: '/' });
      window.location.href = "https://google.com";
    }
    else {
      cookies.set('verification', 'yes', { path: '/' });
      window.location.href = "/";
    }
  }

  return (
    <div className="age-container">
      <Grid container direction="row" justify="center" alignItems="center" style={{ paddingTop: '10vh', paddingBottom: '5vh' }}>
        <Image src={logo} width='420px' />
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Typography variant="h3" component="h1" style={{ textAlign: 'center' }}>
          ARE YOU OF LEGAL DRINKING AGE?
        </Typography>
      </Grid> <br/>
      <Grid container item xs={12} justify="center" alignItems="center">
        <Button style={{ color: 'black', width: '100px', marginRight: '6px', borderColor: 'black', borderWidth: '2px' }} variant="outlined" onClick={() => handleClick('yes')}>YES</Button>
        <Button style={{ color: 'black', width: '100px', marginRight: '6px', borderColor: 'black', borderWidth: '2px' }} variant="outlined"onClick={() => handleClick('no')}>NO</Button>
      </Grid>
    </div>
  );
};
export default Allowance;