import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
        
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