import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


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
    width: '75%',
    height: '60vh',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3, 3, 3),
    paddingBottom: '60px',
  },
}));

export default function Modal3() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="modal-scroll">
      <Button size="large" variant="outlined" color="primary" id="button-custom2" onClick={handleOpen}>
        Learn More
      </Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <Container style={modalStyle} className={classes.paper}>
          <Grid container spacing={10}>
            <Grid item md={6}>
              <Typography variant="h5" component="h5" align="left" color="textPrimary" >
                Scent & Flavor
              </Typography>
              <Typography variant="h6" align="left" color="textSecondary">
                AROMA & PALATE:
                Hints of apple peel, lemon zest, and vanilla bean.
              </Typography>
              <Typography variant="h6" align="left" color="textSecondary" style={{ paddingTop: '18px' }}>
                FINISH:
                Rich balance of agave and fruit. Buttery finish.
              </Typography>
              <Typography variant="h6" component="h6" align="left" color="textPrimary" style={{ paddingTop: '18px' }}>
                “Spicy but restrained nose; Silky and elegant with balanced, stylish flavors and considerable finesse and breeding, crisp and long.” – Anthony Dias Blue, Renowned spirits critic
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Typography variant="h5" component="h5" align="left" color="textPrimary" >
                Origins
              </Typography>
              <Typography variant="h6" align="left" color="textSecondary">
                Paquera is grown, produced, and bottled in San Miguel Ejutla by Head Mezcalero and expert, Francisco Javier. Passed down from one generation to the next, Francisco and his coalition of mezcelaros has set the bar for certified artisanal mezcal, keeping to the same agricultural and production methods set by his family ancestors. Paquera Mezcal seeks to support and preserve these practices by working with ICESA to provide resources needed to sustain mezcal production and growth.
              </Typography>
              <Button size="large" variant="outlined" color="primary" id="button-custom2" className="inner-modal-button">
                Buy Now
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Modal>
    </div>
  );
}