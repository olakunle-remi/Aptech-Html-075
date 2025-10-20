import React from 'react';
import './header.css';

function Header(){
    return(
        <div className='top'>
            <p>Abbey</p>
            <nav>
                <a href="">Home</a>
                <a  href="">about</a>
                <a  href="">skills</a>
                <a  href="">work</a>
                <a  href="">contact</a>
            </nav>

      
        <div className='btn'>
            <button>CV</button>
            <button>Contact</button>
        </div>
      
        </div>
    );
}
export default Header;