import menu from '../Images/menu.svg';
import close from '../Images/close.svg';
import { useState } from 'react';

const Header = () => {

    const [menuClick , setMenuClick] = useState(false);
  return (
    <header className="header__container">
        <h1>ANS <span>DEV</span></h1>
        <nav>
            <img src={menu} alt="menu" onClick={()=>{
                setMenuClick(true);
            }}/>
            <ul style={{right:`${menuClick ? '-20px':'-250px'}`}}>
                <div className='header__menuClose'>
                    <img src={close} alt="close menu" onClick={()=>{
                        setMenuClick(false);
                    }} />
                </div>
                <div className='header__menu'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Projects</li>
                </div>
            </ul>
        </nav>
    </header>
  )
}

export default Header