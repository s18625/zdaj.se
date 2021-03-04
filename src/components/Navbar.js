import React from 'react';
import {Link} from 'react-router-dom'
import * as RiIcons from 'react-icons/ri'
import './Navbar.css'

const Navbar = ({barData,show,toggle}) =>{

    return (
        <nav className={show ? "navbar":"navbar-hidden"}>
            <div className="menu">Menu</div>

            <ul>
                <li><RiIcons.RiArrowLeftSLine 
                    onClick={toggle} 
                    id={show ? "flipped-arrow" : "arrow"}/>
                </li>
                {barData.map((item, index) => {
                    
                    return (
                        <li key={index}>
                             <Link to={item.path}>
                                 <div className="nav-item">
                               
                                    {item.icon}
                                    <span>{item.text}</span>
                               
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )

}
            
 

export default Navbar;