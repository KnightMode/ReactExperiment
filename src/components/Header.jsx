import { useState } from 'react';
import food from '../assets/food.png'

const Header = () => {
    const [userState, setUserState] = useState('Login');

    const onLogin = () => {
        setUserState(userState == 'Login' ? 'Logout' : 'Login');
    };

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={food} alt="logo" />
            </div>
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className='login' onClick={() => onLogin()}>{userState}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;