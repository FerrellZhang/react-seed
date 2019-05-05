import React, {Component} from 'react';
import imageJpg from '../images/sbBoy.jpg';
import { Link } from 'react-router-dom';
import styles from './styles.scss';
import { Button } from 'antd';
export default class Home extends Component {
    render() {
        // console.log('wwwwwwwwww', styles);
        return (
            <div>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/page">Page</Link></li>
                </ul>
                <div>
                    <img className={styles.home} src={imageJpg} />
                    <Button type="primary">Default</Button>
                </div>
                <div className={styles.title}>I am ferrell</div>
            </div>
        );
    }
}