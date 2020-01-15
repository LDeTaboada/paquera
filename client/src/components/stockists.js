import React from 'react';
import PersistentDrawerRight from './navbarMain';
import Container from '@material-ui/core/Container';
import Footer from './footer-home';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import logo from '../components/images/side-logo.png';
import Fade from 'react-reveal/Fade';
import { Image } from 'semantic-ui-react';


const useStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(0, 0, 0),
  },
  mapContent: {
  	padding: theme.spacing(0, 0, 12),
  },
}));

export default function Stockists() {
  const classes = useStyles();

  return (
    <div>
          <div className="menu-display">
            <PersistentDrawerRight/>
          </div>
          
            <Container className="nav-container">

              <a href="/">
                <Fade bottom distance="20px" duration="800" delay="400">
                  <p id="nav-text3" className="shine" style={{ marginTop: '65px' }}>Home</p>
                </Fade>
              </a>


              <a href="/shop/">
                <Fade bottom distance="20px" duration="800" delay="400">
                  <p id="nav-text3" className="shine" style={{ marginTop: '100px' }}>Shop Paquera</p>
                </Fade>
              </a>

              <a href="/oaxaca-process/">
                <Fade bottom distance="20px" duration="800" delay="400">
                  <p id="nav-text3" className="shine" style={{ marginTop: '135px' }}>oaxaca process</p>
                </Fade>
              </a>

              <a href="/story/">
                <Fade bottom distance="20px" duration="800" delay="400">
                  <p id="nav-text3" className="shine" style={{ marginTop: '170px' }}>story</p>
                </Fade>
              </a>

              <a href="/stockists/">
                <Fade bottom distance="20px" duration="800" delay="400">
                  <p id="nav-text3" className="shine" style={{ marginTop: '205px' }}>stockists</p>
                </Fade>
              </a>

              <a href="/blog/">
                <Fade bottom distance="20px" duration="800" delay="400">
                  <p id="nav-text3" className="shine" style={{ marginTop: '240px' }}>blog</p>
                </Fade>
              </a>

              <a href="https://www.instagram.com/paqueramezcal/">
                <Fade bottom distance="20px" duration="800" delay="400">
                  <p id="nav-text4" className="shine" style={{ marginTop: '285px' }}>Instagram</p>
                </Fade>
              </a>

              <a href="https://www.facebook.com/paqueramezcal/">
                <Fade bottom distance="20px" duration="800" delay="400">
                  <p id="nav-text4" className="shine" style={{ marginTop: '317px' }}>Facebook</p>
                </Fade>
              </a>

              <a href="/" >
                <Image src={logo} className="logo-z" style={{ width: '190px', paddingBottom: '21px' }}/>
              </a>
            </Container>


          <main className="main-alt">


    	  <div className={classes.heroContent}>
          <Container >
            <Typography className="alt-h1" component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>
              Stockists
            </Typography>
          </Container>
        </div>


    		<Container className={classes.mapContent}>
          <Container>
      		  <div id='storerocket-widget' data-storerocket-filters='' data-storerocket-env='p' data-storerocket-id='5Ax86Kapy1' />
          </Container>
    		</Container>
    	</main>

        <Footer/>
    </div>
  );
}