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
    navLink: {            
        borderRadius: '1.5rem',
        fontWeight: theme.typography.fontWeightBold,
        
        '&:hover': {
            border: '1px solid white'
        },
        [theme.breakpoints.up("md")]: {
            fontSize: '0.7rem',
            paddingInline: '1.45rem',
            paddingBlock: '0.4rem',
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
        backgroundColor: '#000000',

        '&:hover': {
            backgroundColor: '#ffffff',
            color: '#000000'
        },
        [theme.breakpoints.up("md")]: {
            fontSize: '0.6rem',
            paddingInline: '1.55rem',
            paddingBlock: '0.5rem',
            marginLeft: '1.55rem',
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