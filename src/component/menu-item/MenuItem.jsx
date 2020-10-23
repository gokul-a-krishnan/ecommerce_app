import React, {Component} from "react";
import {withRouter} from 'react-router-dom';
import './menu-item.scss'

class MenuItem extends Component {

    actionClick = () => {
        const {linkUrl, history, match} = this.props;
        console.log(this.props);
        history.push(`${match.url}${linkUrl}`);
    };

    render() {
        const {title, imageUrl, size} = this.props;
        return (
            <div className={`${size} menu-item`} onClick={this.actionClick}>
                <div className={'background-image'}
                     style={{
                         backgroundImage: `url(${imageUrl})`,
                     }}
                />
                <div className={'content'}>
                    <h1 className={'title'}>{title.toUpperCase()}</h1>
                    <span className={'subtitle'}>SHOP NOW</span>
                </div>
            </div>
        );
    }
}

export default withRouter(MenuItem);
