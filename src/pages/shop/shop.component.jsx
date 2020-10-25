import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
// import Card from "../../components/Card/Card";

// class ShopPage extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             collections: SHOP_DATA
//         };
//     }
//
//     render() {
//         const {collections} = this.state;
//         return (
//             <div className='shop-page'>
//                 {
//                     collections.map(({id, ...otherCollectionProps}) => (
//                         <CollectionPreview key={id}  {...otherCollectionProps} />
//                     ))
//                 }
//             </div>
//         )
//     }
// }

const ShopPage = () => {
    return (
        <div className='shop-page'>
            {
                SHOP_DATA.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id}  {...otherCollectionProps} />
                ))
            }
            {/*<Card width={20} height={30}></Card>*/}
        </div>
    )
};

export default ShopPage;