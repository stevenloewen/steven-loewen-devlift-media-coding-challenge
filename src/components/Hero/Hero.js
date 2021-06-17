import React from 'react';
import { Typography, Container, Box, CardMedia, Link, Hidden } from '@material-ui/core';

import { heroImages } from './heroImages';
import { linksToProducts } from './linksToProducts';
import { useStyles } from './styles';


function Hero(props) {

    const styles = useStyles();
    const styledHeroImages = heroImages(styles);
    const styledLinksToProducts = linksToProducts(styles);

    return (
        <section className={styles.hero}>
            <Container className={styles.heroContainer} component='div' maxWidth='false'>
                <Box className={styles.heroTextContainer} component='div' textAlign={{ xs: 'center', sm: 'center', md: 'left' }} >
                    <Typography variant="h1" component="h1" className={styles.heroMainText} color="inherit">
                        Furniture that everyone loves
                    </Typography>
                    <Typography variant="h3" component="h3" className={styles.heroText} color="inherit">
                        We have 5000+ reviews! Our customers trust our furniture and quality products.
                    </Typography>
                    <Hidden only={['xs','sm']} className={styles.buttonsContainer}>
                        <Typography variant="h6" className={styles.buttons} >
                        {styledLinksToProducts.map((item, index) => {
                            return(
                                <Link href={item.href} className={item.className} component = {item.component} onClick = {item.onClick} underline={item.underline} key={index}>
                                    {item.text}
                                </Link>
                            )
                        })}
                        </Typography>
                    </Hidden>
                </Box>
                <Container className={styles.heroMediaContainer} component='div'>
                    {styledHeroImages.map((item, index) => {
                        return(
                            <CardMedia component={item.component} alt={item.alt} src={item.image} className={item.className} key={index}/>
                        )
                    })}
                </Container>
            </Container>
            <Hidden mdUp = 'true'>
                <Typography variant="h6" className={styles.buttons}>
                    {styledLinksToProducts.map((item, index) => {
                        return(
                            <Link href={item.href} className={item.className} component = {item.component} onClick = {item.onClick} underline={item.underline} key={index}>
                                {item.text}
                            </Link>
                        )
                    })}
                </Typography>
            </Hidden>
        </section>
    );
}

export default Hero;