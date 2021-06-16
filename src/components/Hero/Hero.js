import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Box, CardMedia, Link, Hidden } from '@material-ui/core';

import GreenCouch from '../../assets/images/green-couch.png';
import GreenLamp from '../../assets/images/green-lamp.png';
import WhiteFrame from '../../assets/images/white-frame.png';


function Hero(props) {

    const useStyles = makeStyles((theme) => ({
        
        heroContainer: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: 0,
            marginBottom: 85,

            [theme.breakpoints.up("sm")]: {
                paddingInline: '1.5rem',
                paddingBlock: '0.8rem',
                height: 350,
              },
              [theme.breakpoints.up("md")]: {
                flexDirection: 'row',
                height: 310,
                alignItems: 'flex-start',
                paddingInline: '3.6rem',
                paddingBlock: '1.96rem',
              },
              [theme.breakpoints.up("lg")]: {
                paddingInline: '5.7rem',
                paddingBlock: '3.125rem',
                height: 450,
              },
              
        },
        heroTextContainer:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 0,
            [theme.breakpoints.up("md")]: {
                alignItems: 'flex-start',
                width: '40%' 
              },
            [theme.breakpoints.up("lg")]: {
                justifyContent: 'flex-start',
                width: '60%'          
            },
        },
        heroMainText: {
            fontWeight: theme.typography.fontWeightBold,
            marginBottom: '1.5rem',
            [theme.breakpoints.up("sm")]: {
                fontSize: "2rem",
                width: '80%',
              },
              [theme.breakpoints.up("lg")]: {
                fontSize: "3rem",
                width: '50%',
                
              },
        },
        heroText: {
            fontWeight: theme.typography.fontWeightBold,
            lineHeight: '1rem',
            [theme.breakpoints.up("sm")]: {
                fontSize: "0.6rem",
                width: '80%',
            },
            [theme.breakpoints.up("md")]: {
                fontSize: "0.7rem",
                width: '95%',
                lineHeight: '1rem',
                marginBottom: '1rem'
            },
            [theme.breakpoints.up("lg")]: {
                fontSize: "1rem",
                width: '60%',
                lineHeight: '1.5rem',
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
            [theme.breakpoints.up("md")]: {
                right: '3.6rem',
                bottom: -75,
                height: 297.5,
                width: '60%',
                maxWidth: 511,
            },
            [theme.breakpoints.up("lg")]: {
                bottom: -120,
                right: '5.7rem',
                height: 425,
                width: 750,
                maxWidth: 750,
            },
        },
        greenCouch: {
            position: 'absolute',
            margin: 0,
            objectFit: 'contain',
            width: 225,
            
            [theme.breakpoints.up("md")]: {
                width: '81.4%',
                maxWidth: 412.5,
            },
            [theme.breakpoints.up("lg")]: {
                width: 600,
                maxWidth: 600,
            },
        },
        greenLamp: {
            position: 'absolute',
            margin: 0,
            width: 96,
            zIndex: 1,
            right: 0,
            
            [theme.breakpoints.up("md")]: {
                width: '35.8%',
                maxWidth: 185.5,
            },
            [theme.breakpoints.up("lg")]: {
                width: 275,
                maxWidth: 275,
            },
        },
        whiteFrame: {
            position: 'absolute',
            margin: 0,
            width: 80,
            zIndex: 1,
            left: '27.3%',
            bottom: 100,

            [theme.breakpoints.up("md")]: {
                width: '28.2%',
                maxWidth: 140,
                bottom: 187.5,
            },
            [theme.breakpoints.up("lg")]: {
                width: 200,
                maxWidth: 200,
                bottom: 275,
            },   
        },
        buttons: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            
            [theme.breakpoints.up("md")]: {
                flexDirection: 'row',
                width: '90%',
                
            }, 
        },
        buyNow: {
            backgroundColor: '#000000',
            fontSize: '1rem',
            paddingBlock: '1rem',
            borderRadius: '1.5rem',
            fontWeight: theme.typography.fontWeightBold,   
            marginBottom: '1rem',
            color: theme.palette.primary.contrastText,  
            width: 272, 
            '&:hover': {
                border: '1px solid #000000',
                backgroundColor: 'transparent',
                color: '#000000'
            },
            [theme.breakpoints.up("md")]: {
                fontSize: "0.7rem",
                paddingBlock: "0.7rem",
                marginBottom: 0,
                width: 90,
                marginRight: '1rem',
                '&:hover': {
                    backgroundColor: '#ffffff',
                    color: '#000000',
                    border: 'none'
                },
            },
                  
        },
        explore: {
            fontSize: '1rem',
            paddingBlock: '1rem',
            borderRadius: '1.5rem',
            fontWeight: theme.typography.fontWeightBold, 
            border: '1px solid #000000',
            color: '#000000',
            width: 272,
            '&:hover': {
                border: 'none',
                backgroundColor: '#000000',
                color: '#ffffff'
            },

            [theme.breakpoints.up("md")]: {
                fontSize: "0.7rem",
                paddingBlock: "0.7rem",
                width: 90,
                border: '1px solid #ffffff',
                color: '#ffffff',
                '&:hover': {
                    border: '1px solid #000000',
                    backgroundColor: 'transparent',
                    color: '#000000'
                },
            },
            
        }
      }));
    
    const styles = useStyles();

   
    

    return (
        <section>
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
                            <Link href='#' className={styles.buyNow} component = 'button' onClick = {(e)=> e.preventDefault()} underline='none'>
                                Buy Now
                            </Link>
                            <Link href='#' className={styles.explore} component = 'button' onClick = {(e)=> e.preventDefault()} underline='none'>
                                Explore
                            </Link>
                        </Typography>
                    </Hidden>
                </Box>
                <Container className={styles.heroMediaContainer} component='div'>
                    <CardMedia component='img' alt='green couch' src={GreenCouch} className={styles.greenCouch}/>
                    <CardMedia component='img' alt='green lamp' src={GreenLamp} className={styles.greenLamp}/>
                    <CardMedia component='img' alt='white frame' src={WhiteFrame} className={styles.whiteFrame}/>
                </Container>
            </Container>
            <Hidden mdUp = 'true'>
                <Typography variant="h6" className={styles.buttons} >
                    <Link href='#' className={styles.buyNow} component = 'button' onClick = {(e)=> e.preventDefault()} underline='none'>
                        Buy Now
                    </Link>
                    <Link href='#' className={styles.explore} component = 'button' onClick = {(e)=> e.preventDefault()} underline='none'>
                        Explore
                    </Link>
                </Typography>
            </Hidden>
        </section>
    );
}

export default Hero;