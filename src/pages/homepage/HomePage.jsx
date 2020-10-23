import React, {Component} from "react";
import './homepage.scss'
import Directory from "../../component/directory/Directory";

class HomePage extends Component {

    render() {
        return (
            <div className={'homepage'}>
                <Directory/>
            </div>
        );
    }
}

export default HomePage;
