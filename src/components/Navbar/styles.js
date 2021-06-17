import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    appBar: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,          

      [theme.breakpoints.up("sm")]: {
        paddingInline: '1.5rem',
        paddingBlock: '1.5rem',
      },
      [theme.breakpoints.up("md")]: {
        paddingInline: '3.6rem',
        paddingBlock: '1.96rem',
        },
      [theme.breakpoints.up("lg")]: {
        paddingInline: '5.7rem',
        paddingBlock: '3rem',
      },          
    },
    toolBar: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingInline: 0,
      alignItems: 'center'
    },
    fundo: {
        fontWeight: theme.typography.fontWeightBold,
        
        [theme.breakpoints.up("lg")]: {
            fontSize: '2rem'
        }, 
    },
    navMenu: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1.75rem 1rem',
        position: 'fixed',
        top: '4.375rem',
        right: '-100%',
        opacity: 1,
        transition: 'all 0.5s ease',
        alignItems: 'flex-end',
        borderBottomLeftRadius: '1.5rem',
        borderTopRightRadius: '1.5rem'
    },
    navMenuActive: {
        background: '#ffffff',
        right: 0,
        opacity: 1,
        transition: 'all 0.5s ease',
        zIndex: 1,
    },
    navLink: {            
        borderRadius: '1.5rem',
        fontWeight: theme.typography.fontWeightBold,
        
        [theme.breakpoints.up("sm")]: {
            fontSize: '0.7rem',
            paddingInline: '1.5rem',
            paddingBlock: '0.4rem',
            color: theme.palette.primary.main,

            '&:hover': {
                backgroundColor: theme.palette.primary.main,
                color: '#ffffff'
            },
        },
        [theme.breakpoints.up("md")]: {
            fontSize: '0.7rem',
            paddingInline: '1.45rem',
            paddingBlock: '0.4rem',
            color: '#ffffff',

            '&:hover': {
                border: '1px solid white'
            },
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: '0.8rem',
            paddingInline: '1.65rem',
            paddingBlock: '0.6rem',
        },
    },
    login: {
        borderRadius: '1.5rem',
        fontWeight: theme.typography.fontWeightBold,
        
        [theme.breakpoints.up("sm")]: {
            fontSize: '0.7rem',
            paddingInline: '1.5rem',
            paddingBlock: '0.4rem',
            color: '#000000',

            '&:hover': {
                backgroundColor: '#000000',
                color: '#ffffff'
            },
        },
        [theme.breakpoints.up("md")]: {
            fontSize: '0.6rem',
            paddingInline: '1.55rem',
            paddingBlock: '0.5rem',
            marginLeft: '1.55rem',
            backgroundColor: '#000000',
            color: '#ffffff',

            '&:hover': {
                backgroundColor: '#ffffff',
                color: '#000000',
                border: 'none'
            },
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: '0.7rem',
            paddingInline: '1.75rem',
            paddingBlock: '0.7rem',
            marginLeft: '1.75rem',
        },                
    },
    menuButtonIcon: {
        transform: 'scaleX(-1)', 
    }
  }));