export const linksToProducts = (styles) => {
    return [
        {
            href: '#',
            className: styles.buyNow,
            component: 'button',
            onClick: (e)=> e.preventDefault(),
            underline: 'none',
            text: 'Buy Now'
        },
        {
            href: '#',
            className: styles.explore,
            component: 'button',
            onClick: (e)=> e.preventDefault(),
            underline: 'none',
            text: 'Explore'
        },
    ]
}