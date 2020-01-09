import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import logo from '../components/images/story-2.jpg';
import './main.css';
import clsx from 'clsx';
import { loadCSS } from 'fg-loadcss';
import Icon from '@material-ui/core/Icon';
import vid_pc from './images/video.mp4';
import vid_mob from './images/video.mp4';
import PersistentDrawerRight from './navbarMain';
import InstagramEmbed from 'react-instagram-embed';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import loading from './images/bottle.gif'
import one from './images/green-bottle.png';
import two from './images/blend-bottle.png';
import three from './images/blue-bottle.png';
import { Image } from 'semantic-ui-react';
import Footer from './footer';
import mission from './images/mission.jpg';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Reveal from 'react-reveal/Reveal';
import shop from './images/home-shop.jpg';
import { Parallax, Background } from 'react-parallax';


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
    }, 2000);
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
        <main className="main-story" style={{ backgroundColor: 'white' }}>
          <PersistentDrawerRight />
          

          {/* Hero unit */}
          <div style={{ paddingTop: '65px', paddingBottom: '90px' }}>

            <Container style={{ height: '100vh' }}>
              <p> here's where the animation will go when it's ready, this section should also probably have some sort of background, do you like how largo does it with the big outlined letters? maybe a P? </p>
              <Typography variant="h1" component="h1" align="left" color="textPrimary" style={{ fontSize: '120px', paddingTop: '40vh' }}>
                Paquera Mezcal
              </Typography>
              <Typography variant="h1" component="h1" align="left" color="textPrimary" gutterBottom style={{ fontSize: '120px' }}>
                Mezcal Artisanal
              </Typography>
            </Container>


          {/* Video unit */}
            <Container>
              <Reveal effect="fadeInUp">
                <Typography variant="h1" component="h1" align="left" color="textPrimary" style={{ fontSize: '120px' }} className="overlay-text">
                Our way of doing
                </Typography>
              </Reveal>
            </Container>

            <div>
              <Reveal effect="fadeInUp">
                <video width="100%" height="50%" autoplay="true" loop id="my-video" playsinline className="home-video">
                  <source src={vid_pc} type="video/mp4" />
                </video>
                <script> document.getElementById('my-video').play(); </script>
              </Reveal>
            </div>


          {/* Shop unit */}
            <Container className="image-container">
              <Reveal effect="fadeInUp">
                <Typography variant="h1" component="h1" align="left" color="textPrimary" style={{ fontSize: '120px' }} className="overlay-text">
                Pick Up a Bottle of
                </Typography>
              </Reveal>
              <Reveal effect="fadeInUp">
                <Typography variant="h1" component="h1" align="left" color="textPrimary" style={{ fontSize: '120px' }} className="overlay-text">
                Paquera Mezcal
                </Typography>
              </Reveal>

              <Reveal effect="fadeInUp">
                <Grid 
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  spacing={6}
                >
                  <Grid item xs={12} sm={3}>
                    <Typography variant="h5" align="left" className="box-text" paragraph style={{ paddingTop: '18px', paddingBottom: '18px' }} className="overlay-text">
                      Shop online at Reserve Bar or find a retailer near you
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={7}>
                  </Grid>
                </Grid>
              </Reveal>

              <Reveal effect="fadeInUp">
                <Button
                  id="button-custom"
                  variant="outlined"
                  style={{ color: 'black', borderColor: 'black' }}
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                  href="/shop/"
                >
                  PURHCASE NOW
                </Button>
              </Reveal>

              <Reveal effect="fadeInUp">
                <Grid 
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  spacing={6}
                >
                  <Grid item xs={12} sm={4}>
                  </Grid>

                  <Grid item xs={12} sm={8}>
                    <Image src={shop} className="story-image" id="home-image1"/>
                  </Grid>
                </Grid>
              </Reveal>
            </Container>


          {/* Story unit */}
            <Container className="image-container">
              <Reveal effect="fadeInUp">
                <Typography variant="h1" component="h1" align="left" color="textPrimary" style={{ fontSize: '120px' }} className="overlay-text">
                Our Story
                </Typography>
              </Reveal>
            </Container>

            <div>
              <Reveal effect="fadeInUp">
                <Parallax
                  blur={0}
                  bgImage={require('./images/parallax-1.jpeg')}
                  strength={200}
                  className="parallax-image"
                >
                  <div style={{ height: '510px' }} />
                </Parallax>
              </Reveal>
            </div>

            <Container>
              <Reveal effect="fadeInUp">
                <Grid 
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  spacing={6}
                >
                  <Grid item xs={12} sm={4}>
                  </Grid>

                  <Grid item xs={12} sm={8}>
                    <Container className="text-fade">
                      <Reveal effect="fadeInUp">
                        <Typography variant="h5" align="left" className="box-text" paragraph>
                          At Paquera, we set out to create a premium spirit that both captures a feeling and empowers a community. Paquera is ethically produced by a group of Mezcaleros who have dedicated their life's work to growing, harvesting, and bottling premium artisanal mezcal.
                        </Typography>
                      </Reveal>
                      <Reveal effect="fadeInUp">
                        <Button
                          id="button-custom4"
                          variant="outlined"
                          color="primary"
                          endIcon={<ArrowForwardIcon />}
                          href="/story/"
                        >
                          read more
                        </Button>
                      </Reveal>
                    </Container>
                  </Grid>
                </Grid>
              </Reveal>
            </Container>

          

          {/* Process unit */}
            <Container className="image-container">
              <Reveal effect="fadeInUp">
                <Typography variant="h1" component="h1" align="left" color="textPrimary" style={{ fontSize: '120px', paddingTop: '60px' }} className="overlay-text">
                The Oaxaca Process
                </Typography>
              </Reveal>
            </Container>

            <div>
              <Reveal effect="fadeInUp">
                <Parallax
                  blur={0}
                  bgImage={require('./images/story-4.jpg')}
                  strength={200}
                  className="parallax-image"
                >
                  <div style={{ height: '510px' }} />
                </Parallax>
              </Reveal>
            </div>

            <Container>
              <Reveal effect="fadeInUp">
                <Grid 
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                  spacing={6}
                >
                  <Grid item xs={12} sm={4}>
                  </Grid>

                  <Grid item xs={12} sm={8}>
                    <Container className="text-fade">
                      <Reveal effect="fadeInUp">
                        <Typography variant="h5" align="left" className="box-text" paragraph>
                          At Paquera, we set out to create a premium spirit that both captures a feeling and empowers a community. Paquera is ethically produced by a group of Mezcaleros who have dedicated their life's work to growing, harvesting, and bottling premium artisanal mezcal.
                        </Typography>
                      </Reveal>
                      <Reveal effect="fadeInUp">
                        <Button
                          id="button-custom4"
                          variant="outlined"
                          color="primary"
                          endIcon={<ArrowForwardIcon />}
                          href="/oaxaca-process/"
                        >
                          read more
                        </Button>
                      </Reveal>
                    </Container>
                  </Grid>
                </Grid>
              </Reveal>
            </Container>

          </div>

        <Footer />
      </main>
      );
    }
  }
}

export default Home;