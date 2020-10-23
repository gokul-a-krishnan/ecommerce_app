import React, {Component} from "react";
import CollectionItem from "../collection-item/CollectionItem";
import './collection-preview.scss'

class CollectionPreview extends Component {
    render() {
        const {title, items} = this.props;
        return (
            <div className={'collection-preview'}>
                <h1 className={'title'}>{title.toUpperCase()}</h1>
                <div className={'preview'}>
                    {items
                        .filter((item, idx) => idx < 4)
                        .map(({id, ...itemProps}) => (
                                <CollectionItem key={id}{...itemProps}/>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default CollectionPreview;
