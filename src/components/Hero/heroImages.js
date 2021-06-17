import GreenCouch from '../../assets/images/green-couch.png';
import GreenLamp from '../../assets/images/green-lamp.png';
import WhiteFrame from '../../assets/images/white-frame.png';

export const heroImages = (styles) => {
    return [
        {
            component: 'img',
            alt: 'green couch',
            image: GreenCouch,
            className: styles.greenCouch,
        },
        {
            component: 'img',
            alt: 'green lamp',
            image: GreenLamp,
            className: styles.greenLamp,
        },
        {
            component: 'img',
            alt: 'white frame',
            image: WhiteFrame,
            className: styles.whiteFrame,
        },
    ]
}