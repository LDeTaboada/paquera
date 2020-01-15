import React from "react";
import PostPreview from "./PostPreview";
import { Segment, Menu } from "decentraland-ui";
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Footer from '../footer';
import Grid from '@material-ui/core/Grid';
import { Image } from 'semantic-ui-react';
import one from '../images/green-bottle.png';
import two from '../images/blend-bottle.png';
import three from '../images/blue-bottle.png';
import Button from '@material-ui/core/Button';
import bottles from '../images/bottles.png';


const Screen = ({ pages, category }) => {
  const filteredPages = category === "All" ? pages : pages.filter(page => (page.categories.length > 0 ? page.categories[0].name === category : false));
  return (
    <div className="blog-page">
      <Divider style={{ marginTop: '-20px' }} className="mobile-divider2" />
      <Container className="container" style={{ marginTop: '30px', marginBottom: '60px' }} id="blogs-container">
        <div className="posts">
          {filteredPages.map(page => (
            <PostPreview
              key={`blogpost-${page.title}-${page.created}`}
              title={page.title}
              summary={page.summary}
              categories={page.categories}
              created={page.created}
              featured_image={page.featured_image}
              url={page.url}
              slug={page.slug}
            />
          ))}
        </div>

      <div style={{ paddingLeft: '18px', paddingRight: '18px', paddingTop: '120px' }}>
        <Container >
          <h2 id="p-blog" style={{ textAlign: 'center' }}> Shop </h2>

          <Grid 
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={0}
            className="blog-shop1"
          >
            <Grid item xs={12} sm={12} md={4} className="img-hover-zoom">
              <Image src={one} className="img-to-zoom" />
              <p id="p-blog2" style={{ textAlign: 'center' }}> 100% ESPADÍN</p>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item>
                  <Button size="large" variant="outlined" color="primary" id="button-custom2" href="https://www.reservebar.com/products/paquera-mezcal-100-espadin">
                    Order Online
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={4} className="img-hover-zoom">
              <Image src={two} className="img-to-zoom" />
              <p id="p-blog2" style={{ textAlign: 'center' }}> 80% ESPADÍN / 20% BARRIL </p>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item>
                  <Button size="large" variant="outlined" color="primary" id="button-custom2" href="https://www.reservebar.com/products/paquera-mezcal-80-espadin-20-barril">
                    Order Online
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={4} className="img-hover-zoom">
              <Image src={three} className="img-to-zoom" />
              <p id="p-blog2" style={{ textAlign: 'center' }}> 100% BARRIL </p>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item>
                  <Button size="large" variant="outlined" color="primary" id="button-custom2" href="https://www.reservebar.com/products/paquera-mezcal-100-barril">
                    Order Online
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid 
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={0}
            className="blog-shop2"
          >
            <Grid item xs={12} sm={12} md={12} className="img-hover-zoom">
              <Image src={bottles} className="img-to-zoom" />
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item>
                  <Button size="large" variant="outlined" color="primary" id="button-custom" style={{ marginTop: '60px', marginBottom: '30px', color: 'black', borderColor: 'black', borderWidth: '2px' }} href="https://www.reservebar.com/collections/paquera-mezcal">
                    Order Online
                  </Button>
                </Grid>
              </Grid>
            </Grid>

          </Grid>

        </Container>
      </div>

      </Container>

      <Footer />
    </div>
  );
};

export default Screen;
