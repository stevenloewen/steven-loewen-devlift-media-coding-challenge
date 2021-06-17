import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Box, Card, CardMedia, CardActionArea, CardContent, IconButton } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArmChair from '../../assets/images/green-arm-chair-wood-legs.png';
import AloeVera from '../../assets/images/aloe-vera-plant.png';
import PalmTree from '../../assets/images/palm-tree.png';

function Products(props) {

    const useStyles = makeStyles((theme) => ({
        
        products: {
            paddingInline: '1.5rem',

            [theme.breakpoints.up("md")]: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingInline: '3.6rem',
            },
            [theme.breakpoints.up("lg")]: {
                paddingInline: '5.7rem',
                marginBottom: '4rem'
            },            
        },
        promotionContainer: {
            padding: 0,
            maxWidth: 485,
            [theme.breakpoints.up("md")]: {
                width: '25%',
                marginRight: '1.5rem'
            },
        },
        promotion: {
            marginBottom: '2rem',                       
        },
        promotionTitle: {
            fontSize: '1.5rem',
            fontWeight: theme.typography.fontWeightBold,
            width: '60%',
            lineHeight: '2rem',
            marginBottom: '1.5rem',

            [theme.breakpoints.up("md")]: {
                width: '100%',                
            },
            [theme.breakpoints.up("lg")]: {
                fontSize: '2rem',                
            },
        },
        promotionText: {
            color: 'grey',
            fontWeight: theme.typography.fontWeightBold,
            fontSize: '0.7rem',

            [theme.breakpoints.up("lg")]: {
                fontSize: '1rem',                
            },
        },
        arrowButton: {
            backgroundColor: theme.palette.primary.main, 
            marginBottom: '1rem',
            '&:hover': {
                backgroundColor: theme.palette.primary.main,
                transform: "scale3d(1.05, 1.05, 1)",
            },
        },
        arrow: {
            color: '#ffffff'
        },
        cardsContainer : {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 0,

            [theme.breakpoints.up("md")]: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start'
            },
        },
        card: {
            width: 144,

            [theme.breakpoints.up("md")]: {
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%'
            },
        },
        infoContainer: {

            [theme.breakpoints.up("md")]: {
                width: '100%',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%'
            },
        },
        media: {
            height: 150,
            backgroundSize: 'contain',
            marginBottom: '1rem',
        },
        productContainer: {
            
            [theme.breakpoints.up("md")]: {
                maxWidth: 155,
            },            
        },
        product: {
            fontSize: '0.7rem',
            fontWeight: theme.typography.fontWeightBold,
            color: '#000000',
            marginBottom: '1rem',

            [theme.breakpoints.up("lg")]: {
                fontSize: '1rem',                
            },
        },
        price: {
            fontSize: '1rem',
            fontWeight: theme.typography.fontWeightBold,
            color: '#000000',

            [theme.breakpoints.up("lg")]: {
                fontSize: '1.3rem',                
            },
        },        
    }));

    const styles = useStyles();

    //object of items for sale
    
    const forSale = [
        {
            image: ArmChair,
            product: 'Green arm chair with wooden legs',
            price: '$300'
        },
        {
            image: AloeVera,
            product: 'Aloe vera plant with wooden stand',
            price: '$100'
        },
        {
            image: PalmTree,
            product: '6 foot tall palm tree in metal pot',
            price: '$150'
        },
    ]

    return (
        <section className={styles.products}>
            <Container className={styles.promotionContainer} maxWidth='false' disableGutters='true'>
                <Box component='div' textAlign={'left'} className={styles.promotion}>
                    <Typography variant="h2" component="h2" color="inherit" className={styles.promotionTitle}>
                        Why we are the best in our town
                    </Typography>
                    <Typography variant="body1" component="p" className={styles.promotionText}>
                        We have 5000+ reviews! Our customers trust our furniture and quality products. If you order more than $500 worth of merchandise we will express deliver your items for free!
                    </Typography>                    
                </Box> 
                <Box textAlign={'center'}>
                    <IconButton className={styles.arrowButton}>
                        <ArrowForwardIosIcon className={styles.arrow}/>
                    </IconButton>
                </Box>
            </Container>
            <Container className={styles.cardsContainer} maxWidth='false' disableGutters='true'>
                {forSale.map((item) => {
                    return(
                        <Card className={styles.card}>
                            <CardActionArea className={styles.infoContainer}>
                                <CardMedia className={styles.media} image={item.image} alt={item.product}/>
                                <CardContent className={styles.productContainer}>
                                    <Typography className={styles.product} gutterBottom variant="h5" component="h2">
                                        {item.product}
                                    </Typography>
                                    <Typography className={styles.price} variant="body2" color="textSecondary" component="p">
                                        {item.price}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    )
                    })
                }                
            </Container>
        </section>
    );
}

export default Products;