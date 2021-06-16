import React from 'react';
import { Typography, AppBar, IconButton, Toolbar, Link, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SortIcon from '@material-ui/icons/Sort';
import './Navbar.scss';

function Header() {
    
    const useStyles = makeStyles((theme) => ({
        appBar: {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,          

          [theme.breakpoints.up("sm")]: {
            paddingInline: '1.5rem',
            paddingBlock: '1.5rem',
          },
          [theme.breakpoints.up("lg")]: {
            paddingInline: '4.5rem',
            paddingBlock: '3rem',
          },          
        },
        toolBar: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingInline: 0,
        },
        fundo: {
            fontWeight: theme.typography.fontWeightBold,
        },
        navLink: {            
            borderRadius: '1.25rem',
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
            borderRadius: '1.25rem',
            fontWeight: theme.typography.fontWeightBold,
            backgroundColor: '#000000',
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
        }
      }));
    
    const styles = useStyles();

    return (
        <nav>
            <AppBar position="static" className={styles.appBar}>
                <Toolbar variant="dense" className={styles.toolBar}>                    
                    <Typography variant="h6" color="inherit">
                        <Link href='/' color="inherit" className={styles.fundo} onClick = {(e)=> e.preventDefault()} underline='none'>
                            Fundo
                        </Link>
                    </Typography>
                    <div>
                        <Hidden only={['xs','sm']}>
                            <Typography variant="h6" color="inherit">
                                <Link href='/' color="inherit" className={styles.navLink} component = 'button' onClick = {(e)=> e.preventDefault()} underline='none'>
                                    Home
                                </Link>
                                <Link href='#' color="inherit" className={styles.navLink} component = 'button' onClick = {(e)=> e.preventDefault()} underline='none'>
                                    About Us
                                </Link>
                                <Link href='#' color="inherit" className={styles.navLink} component = 'button' onClick = {(e)=> e.preventDefault()} underline='none'>
                                    Furniture
                                </Link>
                                <Link href='#' color="inherit" className={styles.navLink} component = 'button' onClick = {(e)=> e.preventDefault()} underline='none'>
                                    Blog
                                </Link>
                                <Link href='#' color="inherit" className={styles.navLink} component = 'button' onClick = {(e)=> e.preventDefault()} underline='none'>
                                    Contact Us
                                </Link>
                                <Link href='#' color="inherit" className={styles.login} component = 'button' onClick = {(e)=> e.preventDefault()} underline='none'>
                                    Login
                                </Link>
                            </Typography>
                        </Hidden>
                        <Hidden mdUp = 'true'>
                            <IconButton edge="end" color="inherit" aria-label="menu" className='menu-button'>
                                <SortIcon className='menu-button__icon' />
                            </IconButton>
                        </Hidden>
                    </div>
                </Toolbar>
            </AppBar>
        </nav>
    );
}

export default Header;