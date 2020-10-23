import React, {Component} from "react";
import './collection-item.scss'

class CollectionItem extends Component {
    render() {
        const { name, price, imageUrl} = this.props;
        return (
            <div className={'collection-item'}>
                <div
                    className={'image'}
                    style={{
                        width:'100%',
                        backgroundImage: `url(${imageUrl}`
                    }}
                />
                <div className={'collection-footer'}>
                    <span className={'name'}>{name}</span>
                    <span className={'price'}>{price}</span>
                </div>
            </div>
        );
    }
}

export default CollectionItem;
