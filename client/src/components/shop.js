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
import Footer from './footer';
import one from './images/green-bottle.png';
import two from './images/blend-bottle.png';
import three from './images/blue-bottle.png';
import rb from './images/rb_logo.png';
import LocationOnSharpIcon from '@material-ui/icons/LocationOnSharp';
import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles(theme => ({
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
    padding: theme.spacing(8, 0, 3),
  },
  shopContent: {
    padding: theme.spacing(9, 0, 3),
  },
  card: {
    maxWidth: '100%',
    paddingBottom: 24,
  },
}));

export default function Shop() {
  const classes = useStyles();

  return (
    <main style={{ backgroundColor: 'white', overflowX: 'hidden' }}>
      <PersistentDrawerRight />
      
      {/* Hero unit */}
      <div className={classes.heroContent}>
        <Divider className="mobile-divider" />
        <Fade duration="800">
          <Container >
            <Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom style={{ paddingTop: '39px' }}>
              Pick Up a Bottle Today
            </Typography>
          </Container>
        </Fade>
      </div>

      <Divider />

      {/* End hero unit */}
      <div className={classes.shopContent}>
        <Container component="main">
          <Grid 
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={6}
            style={{ paddingBottom: '0px' }}
            className="shop-grid"
          >
            <Grid item xs={12} sm={12} md={6} style={{ scroll: 'none' }}>
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


            <Grid item xs={12} sm={12} md={6} style={{ scroll: 'none' }} className="find-grid">
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

        <Container>
          <Container style={{ border: '1px solid #e9e9e9', marginTop: '120px', marginBottom: '75px' }} >
          <Grid 
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={0}
            id="img-container"
          >
            <Grid item xs={12} sm={4}>
              <Image src={one} style={{ width: '100%' }} className="img-to-zoom3" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Image src={two} style={{ width: '100%' }} className="img-to-zoom3" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Image src={three} style={{ width: '100%' }} className="img-to-zoom3" />
            </Grid>
          </Grid>
        </Container>
        </Container>
      </div>

      <Footer />
    </main>
  );
}