import React, { useState } from 'react';
import { Typography, AppBar, IconButton, Toolbar, Link, Hidden } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import CloseIcon from '@material-ui/icons/Close';

import { useStyles } from './styles';
import { navBarLinks } from './navBarLinks';

function Header() {

    const [clicked, setClicked] = useState(false);

    const menuButtonClick = () => {
        setClicked(!clicked);
    };
    
    const styles = useStyles();
    const styledNavBarLinks = navBarLinks(styles);

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
                                {styledNavBarLinks.map((item, index) => {
                                    return(
                                        <Link href={item.href} color={item.color} className={item.className} component = {item.component} onClick = {item.onClick} underline={item.underline} key={index}>
                                            {item.text}
                                        </Link>
                                    )
                                })}
                            </Typography>
                        </Hidden>
                        <Hidden mdUp = 'true'>
                            <IconButton edge="end" color="inherit" aria-label="menu" onClick={menuButtonClick}>
                                {!clicked ? <SortIcon className={styles.menuButtonIcon} /> : <CloseIcon />}                                
                            </IconButton>
                            <Typography variant="h6" color="inherit" className={clicked ? [styles.navMenu, styles.navMenuActive] : styles.navMenu}>
                                {styledNavBarLinks.map((item, index) => {
                                    return(
                                        <Link href={item.href} color={item.color} className={item.className} component = {item.component} onClick = {item.onClick} underline={item.underline} key={index}>
                                            {item.text}
                                        </Link>
                                    )
                                })}
                            </Typography>
                        </Hidden>
                    </div>
                </Toolbar>
            </AppBar>
        </nav>
    );
}

export default Header;