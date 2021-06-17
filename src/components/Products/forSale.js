import ArmChair from '../../assets/images/green-arm-chair-wood-legs.png';
import AloeVera from '../../assets/images/aloe-vera-plant.png';
import PalmTree from '../../assets/images/palm-tree.png';

export const forSale = (styles) => {
    return [
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
}