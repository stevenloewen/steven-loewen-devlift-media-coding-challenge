import React from 'react';
import { Typography, Container, Box, Card, CardMedia, CardActionArea, CardContent, IconButton } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { useStyles } from './styles';
import { forSale } from './forSale';

function Products(props) {

    const styles = useStyles();
    const styledForSale = forSale(styles);

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
                {styledForSale.map((item, index) => {
                    return(
                        <Card className={styles.card} key={index}>
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
                })}                
            </Container>
        </section>
    );
}

export default Products;