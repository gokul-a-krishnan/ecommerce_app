import React, {Component} from "react";
import './data'
import ShopData from "./data.js";
import CollectionPreview from "../../component/collection-preview/CollectionPreview";

class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: ShopData
        };
    }

    render() {
        const {collections} = this.state;
        return (
            <div className={'shop-page'}>
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;
