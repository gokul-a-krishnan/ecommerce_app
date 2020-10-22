import React, {Component} from "react";
import './homepage.scss'

class HomePage extends Component {
    render() {
        return (
            <div className={'homepage'}>
                <div className={'directory-menu'}>
                    <div className={'menu-item'}>
                        <div className={'content'}>
                            <h1 className={'title'}>HATS</h1>
                            <span className={'subtitle'}>SHOP NOW</span>
                        </div>
                    </div><div className={'menu-item'}>
                        <div className={'content'}>
                            <h1 className={'title'}>JACKETS</h1>
                            <span className={'subtitle'}>SHOP NOW</span>
                        </div>
                    </div><div className={'menu-item'}>
                        <div className={'content'}>
                            <h1 className={'title'}>SNEAKERS</h1>
                            <span className={'subtitle'}>SHOP NOW</span>
                        </div>
                    </div><div className={'menu-item'}>
                        <div className={'content'}>
                            <h1 className={'title'}>WOMENS</h1>
                            <span className={'subtitle'}>SHOP NOW</span>
                        </div>
                    </div><div className={'menu-item'}>
                        <div className={'content'}>
                            <h1 className={'title'}>MENS</h1>
                            <span className={'subtitle'}>SHOP NOW</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;


https://github.com/gokul-a-krishnan/ecommerce_app
