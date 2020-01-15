import React from 'react';
import './main.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import storyHero from './images/story-hero.png';
import Fade from 'react-reveal/Fade';
import logo from '../components/images/side-logo.png';


import process1 from './images/process1.jpg';
import process2 from './images/process2.png';
import process3 from './images/hero.png';
import process4 from './images/process4.jpg';
import process5 from './images/process5.png';
import process6 from './images/process6.jpg';
import process7 from './images/bottles.png';


import PersistentDrawerRight from './navbarMain';
import { makeStyles } from '@material-ui/core/styles';
import { Image } from 'semantic-ui-react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { Parallax, Background } from 'react-parallax';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Footer from './footer-home';


const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 0, 0),
  },
  storyContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 0, 6),
  },
  storyContent2: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0, 6),
  },
  storyContent3: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0, 12),
  },
  storyHeader: {
  	fontSize: 80,
  	paddingTop: 30,
	},
	storyText: {
  	fontSize: 20,
  	padding: theme.spacing(6, 0, 0),
  },
  storyText1: {
  	fontSize: 20,
  },
  storyText2: {
  	fontSize: 36,
  	fontWeight: 800,
  	color: '#262626',
  },
}));

export default function Process() {
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

				<div className={classes.storyContent}>

		      <div>
			      <Fade bottom duration="800" distance="20px">	
		      		<Grid item xs={12} sm={12}>
			      		<Typography variant="h1" align="center" color="textPrimary" className="alt-h1" id="process-header1">
			           	Mezcal Process
			          </Typography>
	      				<Image src={process1} className="story-image" style={{ marginTop: '-72px' }} />
	      			</Grid>
	      		</Fade>
	      		<Grid container spacing={6}>
	      			<Container>
		      			<Grid item xs={12} sm={12}>
		      				<Container>
		      				<Fade bottom duration="800" distance="20px" delay="400">
					      		<Typography variant="h5" align="center" color="textSecondary" paragraph className={classes.storyText}>
											Paquera is produced by a group of Mezcaleros that put their life's work into growing, harvesting, and bottling premium artisanal mezcal. The familes who plant the agave have known this land for centuries and take great care to ensure the fields are natural and grown organically. These Espadin agave take 6-7 years to mature.
					          </Typography>
					        </Fade>
					      </Container>
		      			</Grid>
		      		</Container>
	      		</Grid>
	      	</div>

	      </div>

	      <div className={classes.storyContent2}>

	      	<div>
	      		<Grid item xs={12} sm={12}>
      				<Image src={process2} className="story-image" />
      			</Grid>
	      		<Grid container spacing={6}>
	      			<Grid item xs={12} sm={12}>
	      				<Container>
				      		<Typography variant="h1" align="center" color="textPrimary" className={classes.storyHeader} id="process-header">
				           	harvest
				          </Typography>
				      		<Typography variant="h5" align="center" color="textSecondary" paragraph className={classes.storyText1}>
										The leaves from the agave are removed from the hearts, which are called piñas. An agave reaches maturity just once in it's lifetime.
				          </Typography>
				        </Container>
	      			</Grid>
	      		</Grid>
	      	</div>
		    </div>

	    	<div className={classes.storyContent2}>
		      <div>
	      		<Grid item xs={12} sm={12}>
      				<Image src={process3} className="story-image" />
      			</Grid>
	      		<Grid container spacing={6}>
	      			<Grid item xs={12} sm={12}>
	      				<Container>
				      		<Typography variant="h1" align="center" color="textPrimary" className={classes.storyHeader} id="process-header">
				           	Roast
				          </Typography>
				      		<Typography variant="h5" align="center" color="textSecondary" paragraph className={classes.storyText1}>
										The piñas are split in two in an earth pit lined with stones. After the stones are heated by a wood fire in the middle, the piñas are placed in the oven for 307 days and covered with shredded dried agave pulp from previous batches. Profile of mezcal is determined by humidity, temperature, and duration.
				          </Typography>
				        </Container>
	      			</Grid>
	      		</Grid>
	      	</div>
	      </div>

	      <div className={classes.storyContent2}>
		      <div>
	      		<Grid item xs={12} sm={12}>
      				<Image src={process4} className="story-image" />
      			</Grid>
	      		<Grid container spacing={6}>
	      			<Grid item xs={12} sm={12}>
	      				<Container>
				      		<Typography variant="h1" align="center" color="textPrimary" className={classes.storyHeader} id="process-header">
				           	Crushed in a tohona
				          </Typography>
				      		<Typography variant="h5" align="center" color="textSecondary" paragraph className={classes.storyText1}>
										Once the piñas have been removed from the pit, they are chopped into smaller pieces and placd in a tahona. The giant cement wheel is pulled by a horse or donkey, crushing the piñas into a pulp consistency. 
				          </Typography>
				        </Container>
	      			</Grid>
	      		</Grid>
	      	</div>
	      </div>

	      <div className={classes.storyContent2}>
		      <div>
	      		<Grid item xs={12} sm={12}>
      				<Image src={process5} className="story-image" style={{ border: '1px solid #e9e9e9' }}/>
      			</Grid>
	      		<Grid container spacing={6}>
	      			<Grid item xs={12} sm={12}>
	      				<Container>
				      		<Typography variant="h1" align="center" color="textPrimary" className={classes.storyHeader} id="process-header">
				           	Fermentation
				          </Typography>
				      		<Typography variant="h5" align="center" color="textSecondary" paragraph className={classes.storyText1}>
										The pulp rests in the wooden vessels and is left to simmer from 7 to 10 days, depending on weather. The rocks are used to keep weight and pressure on the agave pulp. As the agave pulp ferments, wild yeasts and microbes from the agave sitting in the wooden vessels will turn the natural sugars into alcohol. 
				          </Typography>
				        </Container>
	      			</Grid>
	      		</Grid>
	      	</div>
		    </div>

	      <div className={classes.storyContent2}>
		      <div>
	      		<Grid item xs={12} sm={12}>
      				<Image src={process6} className="story-image" />
      			</Grid>
	      		<Grid container spacing={6}>
	      			<Grid item xs={12} sm={12}>
	      				<Container>
				      		<Typography variant="h1" align="center" color="textPrimary" className={classes.storyHeader} id="process-header">
				           	Distillation
				          </Typography>
				      		<Typography variant="h5" align="center" color="textSecondary" paragraph className={classes.storyText1}>
										Once the fermentation process is completed, the mash and liquid is moved into the wood-fired copper alembics (stills or vats) to filter and refine the alcohol. After the first distillation, the liquid is drained and the mash removed. Paquera Mezcal is distilled two times.
				          </Typography>
				        </Container>
	      			</Grid>
	      		</Grid>
	      	</div>
		    </div>

		    <div className={classes.storyContent3}>
		      <div>
	      		<Grid item xs={12} sm={12}>
      				<Image src={process7} className="story-image" style={{ border: '1px solid #e9e9e9' }} />
      			</Grid>
	      		<Grid container spacing={6}>
	      			<Grid item xs={12} sm={12}>
	      				<Container>
				      		<Typography variant="h1" align="center" color="textPrimary" className={classes.storyHeader} id="process-header">
				           	Bottling
				          </Typography>
				      		<Typography variant="h5" align="center" color="textSecondary" paragraph className={classes.storyText1}>
										Paquera Mezcal is bottled in Ejutla, Mexico. We offer 3 different types of mezcal: 100% Espadin, 80% Espadin/20% Barill Blend, and 100% Barril.
				          </Typography>
				        </Container>
	      			</Grid>
	      		</Grid>
	      	</div>
		    </div>

			</main>
		<Footer />
	</div>

	)
}