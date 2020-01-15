import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PersistentDrawerRight from './navbarMain';
import Divider from '@material-ui/core/Divider';
import green from './images/p-green.jpg';
import purple from './images/p-purple.jpg';
import pink from './images/p-pink.jpg';
import { Image } from 'semantic-ui-react';
import Fade from 'react-reveal/Fade';
import Footer from './footer-home';
import one from './images/green-bottle.png';
import two from './images/blend-bottle.png';
import three from './images/blue-bottle.png';
import rb from './images/rb_logo.png';
import LocationOnSharpIcon from '@material-ui/icons/LocationOnSharp';
import Icon from '@material-ui/core/Icon';
import logo from '../components/images/side-logo.png';
import Modal from '@material-ui/core/Modal';
import Modal1 from './modal_1';
import Modal2 from './modal_2';
import Modal3 from './modal_3';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
      paddingTop: 12,
    },
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(0, 0, 0),
  },
  shopContent: {
    padding: theme.spacing(9, 0, 3),
  },
  card: {
    maxWidth: '100%',
    paddingBottom: 24,
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [cho, setCho] = React.useState(false);
  const [dank, setDank] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen2 = () => {
    setOpen(true);
  };

  const handleClose2 = () => {
    setOpen(false);
  };

  const handleOpen3 = () => {
    setDank(true);
  };

  const handleClose3 = () => {
    setDank(false);
  };  

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


    <main className="main-alt2">
      
      {/* Hero unit */}
      <div className={classes.heroContent}>
        <Fade duration="800">
          <Container >
            <Typography component="h2" variant="h2" align="center" color="textPrimary" className="alt-h1" gutterBottom>
              Order Paquera
            </Typography>
          </Container>
        </Fade>
      </div>

      {/* End hero unit */}
      <div className={classes.shopContent}>
        <Container className="scroll-grid">
          <Grid 
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={6}
            style={{ paddingBottom: '0px' }}
            className="shop-grid"
          >
            <Grid item xs={12} sm={12} md={6} style={{ scroll: 'none' }} className="scroll-grid">
              <Fade duration="800" delay="200">
                <Typography gutterBottom variant="h3" component="h3" style={{ textAlign: 'center' }}>
                  Order Online
                </Typography>
                <Typography gutterBottom variant="h5" component="h4" style={{ textAlign: 'center', fontSize: '20px' }}>
                  Order Paquera online at Reserve Bar
                </Typography>
                <Grid container direction="row" justify="center" alignItems="center">
                  <Image src={rb} width='300px' style={{ paddingTop: '21px', paddingBottom: '21px' }} />
                </Grid>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item>
                    <Button size="large" variant="outlined" color="primary" id="button-custom" style={{ color: 'black', borderColor: 'black', width: '300px', borderWidth: '2px' }} href="https://www.reservebar.com/collections/paquera-mezcal">
                      Order Now
                    </Button>
                  </Grid>
                </Grid>
              </Fade>
            </Grid>


            <Grid item xs={12} sm={12} md={6} style={{ scroll: 'none' }} className="scroll-grid">
              <Fade duration="800" delay="200">
                <Typography gutterBottom variant="h3" component="h3" style={{ textAlign: 'center' }}>
                  Find Us Near You
                </Typography>
                <Typography gutterBottom variant="h5" component="h4" style={{ textAlign: 'center', fontSize: '20px' }}>
                  Pick up a bottle of Paquera at a retailer near you
                </Typography>
                <Grid container direction="row" justify="center" alignItems="center">
                  <LocationOnSharpIcon style={{ marginTop: '33px', marginBottom: '29px', fontSize: '60px' }}/>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item>
                    <Button size="large" variant="outlined" color="primary" id="button-custom" style={{ color: 'black', borderColor: 'black', width: '300px', borderWidth: '2px' }} href="/stockists/">
                      Find paquera
                    </Button>
                  </Grid>
                </Grid>
              </Fade>
            </Grid>

          </Grid>
        </Container>

        <Container style={{ marginTop: '120px', marginBottom: '75px' }} >
          <Grid 
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={0}
            id="img-container"
          >
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Image src={one} style={{ width: '100%' }} className="img-to-zoom3" />
              <p id="p-blog2" style={{ textAlign: 'center' }}> 100% ESPADÍN</p>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className="modal-button"
              >
                <Grid item>
                  <Modal1 />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Image src={two} style={{ width: '100%' }} className="img-to-zoom3" id="zoom-margin" />
              <p id="p-blog2" style={{ textAlign: 'center' }}> 80% ESPADÍN / 20% BARRIL </p>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className="modal-button"
              >
                <Grid item>
                  <Modal2 />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Image src={three} style={{ width: '100%' }} className="img-to-zoom3" />
              <p id="p-blog2" style={{ textAlign: 'center' }}> 100% BARRIL</p>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className="modal-button"
              >
                <Grid item>
                  <Modal3 />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>


        </div>

      </main>
    <Footer />
  </div>
  );
}