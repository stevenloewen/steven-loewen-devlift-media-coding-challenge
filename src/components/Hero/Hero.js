import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Box, CardMedia } from '@material-ui/core';
// import Image from 'material-ui-image';

import GreenCouch from '../../assets/images/green-couch.png';
import GreenLamp from '../../assets/images/green-lamp.png';


function Hero(props) {

    const useStyles = makeStyles((theme) => ({
        heroContainer: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

            [theme.breakpoints.up("sm")]: {
                paddingInline: '1.5rem',
                paddingBlock: '0.8rem',
                height: 350,
              },
              [theme.breakpoints.up("lg")]: {
                paddingInline: '4.5rem',
                paddingBlock: '3rem',
              },
        },
        heroTextContainer:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 0,
        },
        heroMainText: {
            fontWeight: theme.typography.fontWeightBold,
            marginBottom: '1.5rem',
            [theme.breakpoints.up("sm")]: {
                fontSize: "2rem",
                width: '80%',
              },
              [theme.breakpoints.up("lg")]: {
                fontSize: "2.5rem",
                width: '100%',
              },
        },
        heroText: {
            fontWeight: theme.typography.fontWeightBold,
            lineHeight: '1rem',
            [theme.breakpoints.up("sm")]: {
                fontSize: "0.6rem",
                width: '80%',

              },
              [theme.breakpoints.up("lg")]: {
                fontSize: "1rem",
                width: '100%',
              },
        },
        heroMediaContainer: {
            position: 'absolute',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            bottom: -45,
            padding: 0,
            height: 170,
            width: 272,
        },
        greenCouch: {
            position: 'absolute',
            margin: 0,
            // display: 'inline-block',
            objectFit: 'contain',
            width: 225,
            // bottom: -45,
        },
        greenLamp: {
            position: 'absolute',
            margin: 0,
            // display: 'inline-block',
            width: 96,
            zIndex: 1,
            // bottom: -45,
            right: 0,
            
        }
      }));
    
    const styles = useStyles();

    
    

    return (
        <section>
            <Container className={styles.heroContainer} component='div' >
                <Box className={styles.heroTextContainer} component='div' textAlign={{ xs: 'center', sm: 'center', md: 'left' }} >
                    <Typography variant="h1" component="h1" className={styles.heroMainText} color="inherit">
                        Furniture that everyone loves
                    </Typography>
                    <Typography variant="h3" component="h3" className={styles.heroText} color="inherit">
                        We have 5000+ reviews! Our customers trust our furniture and quality products.
                    </Typography>
                </Box>
                <Container className={styles.heroMediaContainer} component='div'>
                    {/* <Box component='div'> */}
                        <CardMedia component='img' alt='green couch' src={GreenCouch} className={styles.greenCouch}/>
                    {/* </Box> */}
                    {/* <Box component='div'> */}
                        <CardMedia component='img' alt='green lamp' src={GreenLamp} className={styles.greenLamp}/>
                    {/* </Box> */}
                </Container>
            </Container>
        </section>
    );
}

export default Hero;