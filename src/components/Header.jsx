import { useState } from 'react';
import food from '../assets/food.png'
import { Link } from 'react-router-dom';

const Header = () => {
    const [userState, setUserState] = useState('Login');

    const onLogin = () => {
        setUserState(userState == 'Login' ? 'Logout' : 'Login');
    };
    //using anchor tag will refresh the page, so we use Link from react-router-dom
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={food} alt="logo" />
            </div>
            <div className="menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contactus">Contact</Link></li>
                    <li>Cart</li>
                    <button className='login' onClick={() => onLogin()}>{userState}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;