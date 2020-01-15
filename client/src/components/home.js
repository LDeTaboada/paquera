import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import logo from '../components/images/side-logo.png';
import Drawer from '@material-ui/core/Drawer';
import Fade from 'react-reveal/Fade';
import './main.css';
import clsx from 'clsx';
import { loadCSS } from 'fg-loadcss';
import Icon from '@material-ui/core/Icon';
import vid_pc from './images/video.mp4';
import vid_mob from './images/video.mp4';
import InstagramEmbed from 'react-instagram-embed';
import loading from './images/bottle.gif'
import one from './images/green-bottle.png';
import two from './images/blend-bottle.png';
import three from './images/blue-bottle.png';
import { Image } from 'semantic-ui-react';
import Footer from './footer-home';
import mission from './images/mission.jpg';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import shop from './images/home-shop2.png';
import { Parallax, Background } from 'react-parallax';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import background from './images/background.png';
import Fab from '@material-ui/core/Fab';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Jump from 'react-reveal/Jump';
import PersistentDrawerRight from './navbarMain';


class Home extends Component {
  
  constructor(props) {
    super(props);

    this.state = {};
    this.state = { isLoading: true }
  }

  async componentDidMount() {
    this.tryPlayVideo();
  }

  tryPlayVideo() {
    setTimeout(() => {
      if (this.player) {
        this.player.play();
        this.setState({isLoading: false});
      }
      else {
        this.tryPlayVideo();
        this.setState({isLoading: false});
      }
    }, 3000);
  }

  render() {
    if (this.state.isLoading == true) {
      return (
        <div className="gif-container">
            <Grid container direction="row" justify="center" alignItems="center" style={{ paddingTop: '20vh' }}>
              <Image src = {loading} className="loading-gif" />
            </Grid>
        </div>
      )
    }

    else {

      return (
        <div>
          <div className="menu-display">
            <PersistentDrawerRight/>
          </div>
          
            <Container className="nav-container">
              <a href="/shop/">
                <Fade bottom distance="20px" duration="800" delay="400">
                  <p id="nav-text3" className="shine" style={{ marginTop: '65px' }}>shop Paquera</p>
                </Fade>
              </a>
  

              <a href="/oaxaca-process/">
                <Fade bottom distance="20px" duration="800" delay="400">
                  <p id="nav-text3" className="shine" style={{ marginTop: '100px' }}>oaxaca process</p>
                </Fade>
              </a>

              <a href="/story/">
                <Fade bottom distance="20px" duration="800" delay="400">
                  <p id="nav-text3" className="shine" style={{ marginTop: '135px' }}>story</p>
                </Fade>
              </a>

              <a href="/stockists/">
                <Fade bottom distance="20px" duration="800" delay="400">
                  <p id="nav-text3" className="shine" style={{ marginTop: '170px' }}>stockists</p>
                </Fade>
              </a>

              <a href="/blog/">
                <Fade bottom distance="20px" duration="800" delay="400">
                  <p id="nav-text3" className="shine" style={{ marginTop: '205px' }}>blog</p>
                </Fade>
              </a>

              <a href="https://www.instagram.com/paqueramezcal/">
                <Fade bottom distance="20px" duration="800" delay="400">
                  <p id="nav-text4" className="shine" style={{ marginTop: '250px' }}>Instagram</p>
                </Fade>
              </a>

              <a href="https://www.facebook.com/paqueramezcal/">
                <Fade bottom distance="20px" duration="800" delay="400">
                  <p id="nav-text4" className="shine" style={{ marginTop: '282px' }}>Facebook</p>
                </Fade>
              </a>

              <a href="/" >
                <Image src={logo} className="logo-z" style={{ width: '190px', paddingBottom: '21px' }}/>
              </a>
            </Container>


          <main style={{ backgroundColor: 'white' }} className="main-overflow">
            

            {/* Hero unit */}
            <div style={{ marginBottom: '120px' }}>

            <Image src={background} className="background-image" />

            <div className="hero-div">
              <Grid 
                container
                direction="column"
                justify="space-between"
                spacing={6}
                >
                <Grid item>
                  <Fade bottom distance="20px" duration="800">
                    <Typography variant="h1" component="h1" align="left" color="textPrimary" className="hero-h1">
                      Paquera Mezcal
                    </Typography>
                  </Fade>
                </Grid>
                <Grid item>
                  <Fade bottom distance="20px" duration="800" delay="200">
                    <Typography variant="h1" component="h1" align="left" color="textPrimary" className="hero-h2">
                      Starts with
                    </Typography>
                  </Fade>
                </Grid>
                <Grid item>
                  <Fade bottom distance="20px" duration="800" delay="200">
                    <Typography variant="h1" component="h1" align="left" color="textPrimary" className="hero-h2" id="hero-h2-2">
                      a smokey kiss...
                    </Typography>
                  </Fade>
                </Grid>
              </Grid>
              <Fab id="scroll-button" className="animated bounce">
                <ExpandMoreIcon />
              </Fab>
            </div>


            {/* Video unit */}
              <Container className="section-container" id="video-padding" style={{ paddingTop: '60px' }}>
                <Typography variant="h1" component="h1" align="left" color="textPrimary" className="overlay-text" id="h2-display">
                Paquera is a
                </Typography>
                <Typography variant="h1" component="h1" align="left" color="textPrimary" className="overlay-text2">
                way of Life
                </Typography>
              </Container>

              <div>
                <video height="50%" autoplay="true" muted loop id="my-video" playsinline="true" className="home-video">
                  <source src={vid_pc} type="video/mp4" />
                </video>
                <script> document.getElementById('my-video').play(); </script>
              </div>

            <Container className="blank-container" />


            {/* Shop unit */}
              <Container className="image-container" id="shop-padding">

                <Grid 
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  spacing={6}
                >
                  <Grid item xs={12} sm={12} md={7}>
                    <Typography variant="h1" component="h1" align="left" color="textPrimary" style={{ fontSize: '120px' }} className="overlay-text3">
                    Order
                    </Typography>
                    <Typography variant="h1" component="h1" align="left" color="textPrimary" style={{ fontSize: '120px' }} className="overlay-text3">
                    Paquera Mezcal
                    </Typography>
                    <Typography variant="h5" align="left" className="box-text" paragraph style={{ paddingTop: '18px', paddingBottom: '18px' }} className="overlay-text4">
                      Shop online at Reserve Bar or find a retailer near you
                    </Typography>
                    <Button
                      id="button-custom"
                      variant="outlined"
                      className="button-styling"
                      color="primary"
                      endIcon={<ArrowForwardIcon />}
                      href="/shop/"
                    >
                      PURHCASE NOW
                    </Button>
                  </Grid>

                  <Grid item xs={12} sm={12} md={5}>
                    <Fade duration="800">
                      <Image src={shop} className="home-image"/>
                    </Fade>
                  </Grid>
                </Grid>
              </Container>


            {/* Story unit */}
              <Container className="section-container" id="image-container">
                <a href="/story/">
                  <Typography variant="h1" component="h1" align="left" color="textPrimary" style={{ paddingTop: '60px' }} className="overlay-text" id="h2-display">
                  Paquera
                  </Typography>
                  <Typography variant="h1" component="h1" align="left" color="textPrimary" className="overlay-text2">
                  Story
                  </Typography>
                </a>
              </Container>
              <div>
                <Parallax
                  blur={0}
                  bgImage={require('./images/parallax-1.jpeg')}
                  strength={0}
                  className="parallax-image2"
                >
                  <div style={{ height: '600px' }} />
                </Parallax>
              </div>

                <Grid 
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  spacing={6}
                >
                  <Grid container item xs={12} sm={0} md={6}>
                  </Grid>

                  <Grid container item xs={12} sm={12} md={6}>
                    <Container className="text-fade">
                      <Typography variant="h5" align="left" className="box-text" paragraph>
                        At Paquera, we set out to create a premium spirit that both captures a feeling and empowers a community. Paquera is ethically produced by a group of Mezcaleros who have dedicated their life's work to growing, harvesting, and bottling premium artisanal mezcal.
                      </Typography>
                      <Button
                        id="button-custom4"
                        variant="outlined"
                        color="primary"
                        endIcon={<ArrowForwardIcon />}
                        href="/story/"
                      >
                        read more
                      </Button>
                    </Container>
                  </Grid>

                </Grid>
            
            {/* Process unit */}
              <Container className="section-container" id="image-container2">
                <a href="/oaxaca-process/">
                  <Typography variant="h1" component="h1" align="left" color="textPrimary" style={{ paddingTop: '60px' }} className="overlay-text"  id="h2-display">
                  Oaxaca
                  </Typography>
                  <Typography variant="h1" component="h1" align="left" color="textPrimary" className="overlay-text2">
                  Process
                  </Typography>
                </a>
              </Container>
              <div>
                <Parallax
                  blur={0}
                  bgImage={require('./images/story-4.jpg')}
                  strength={0}
                  className="parallax-image"
                >
                  <div style={{ height: '600px' }} />
                </Parallax>
              </div>

                 <Grid 
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  spacing={6}
                >
                  <Grid container item xs={12} sm={0} md={6}>
                  </Grid>

                  <Grid container item xs={12} sm={12} md={6}>
                    <Container className="text-fade">
                      <Typography variant="h5" align="left" className="box-text" paragraph>
                        Paquera is produced by a group of Mezcaleros that put their life's work into growing, harvesting, and bottling premium artisanal mezcal. The familes who plant the agave have known this land for centuries and take great care to ensure the fields are natural and grown organically.
                      </Typography>
                      <Button
                        id="button-custom4"
                        variant="outlined"
                        color="primary"
                        endIcon={<ArrowForwardIcon />}
                        href="/story/"
                      >
                        read more
                      </Button>
                    </Container>
                  </Grid>

                </Grid>


            {/* Cocktails unit */}

              <Container className="section-container" id="image-container2">
                <a href="/blog/">
                  <Typography variant="h1" component="h1" align="left" color="textPrimary" style={{ paddingTop: '60px' }} className="overlay-text" id="h2-display">
                  Paquera
                  </Typography>
                  <Typography variant="h1" component="h1" align="left" color="textPrimary" className="overlay-text2">
                  Cocktails
                  </Typography>
                </a>
              </Container>
              <div>
                <Parallax
                  blur={0}
                  bgImage={require('./images/cocktails.jpeg')}
                  strength={0}
                  className="parallax-image"
                >
                  <div style={{ height: '600px' }} />
                </Parallax>
              </div>

                 <Grid 
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  spacing={6}
                >
                  <Grid container item xs={12} sm={0} md={6}>
                  </Grid>

                  <Grid container item xs={12} sm={12} md={6}>
                    <Container className="text-fade">
                      <Typography variant="h5" align="left" className="box-text" paragraph>
                        With characteristics that range from earthy and smoky to fresh and verdant, mezcal is a versatile spirit primed for mixing into cocktails. Check out our recipes for delicious ways to drink Paquera mezcal.
                      </Typography>
                      <Button
                        id="button-custom4"
                        variant="outlined"
                        color="primary"
                        endIcon={<ArrowForwardIcon />}
                        href="/story/"
                      >
                        read more
                      </Button>
                    </Container>
                  </Grid>

                </Grid>


            </div>

        </main>
        <Footer/>
      </div>
      );
    }
  }
}

export default Home;
