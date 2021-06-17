export const navBarLinks = (styles) => {
    return [
        {
            href: '/',
            color: 'inherit',
            className: styles.navLink,
            component: 'button',
            onClick: (e)=> e.preventDefault(),
            underline: 'none',
            text: 'Home'
        },
        {
            href: '#',
            color: 'inherit',
            className: styles.navLink,
            component: 'button',
            onClick: (e)=> e.preventDefault(),
            underline: 'none',
            text: 'About Us'
        },
        {
            href: '#',
            color: 'inherit',
            className: styles.navLink,
            component: 'button',
            onClick: (e)=> e.preventDefault(),
            underline: 'none',
            text: 'Furniture'
        },
        {
            href: '#',
            color: 'inherit',
            className: styles.navLink,
            component: 'button',
            onClick: (e)=> e.preventDefault(),
            underline: 'none',
            text: 'Blog'
        },
        {
            href: '#',
            color: 'inherit',
            className: styles.navLink,
            component: 'button',
            onClick: (e)=> e.preventDefault(),
            underline: 'none',
            text: 'Contact Us'
        },
        {
            href: '#',
            color: 'inherit',
            className: styles.login,
            component: 'button',
            onClick: (e)=> e.preventDefault(),
            underline: 'none',
            text: 'Login'
        },
    ]
}