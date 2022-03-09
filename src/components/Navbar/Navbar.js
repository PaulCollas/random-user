import React, {useState, useEffect} from "react";
import "./Navbar.css"
import { NavLink } from "react-router-dom";
import { AiFillHome } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { MdDarkMode } from 'react-icons/md';
import { BiMenuAltRight } from 'react-icons/bi';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import logo from '../../assets/logo-efrei.png';

export default function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth)

    {/* Switcher entre les menus */}
    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {

        {/* Sélection du changement de la taille d'écran */}
        const changeWidth = () => {
            setLargeur(window.innerWidth);

            if(window.innerWidth > 500) {
                setToggleMenu(false);
            }
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, [])

    return (
        <nav>
            {/* Si la condition est vrai alors on affiche la navigation... */}
            {(toggleMenu || largeur > 500) && (
                <div className="menu">
                    <ul className="liste">
                        <li className="items"><NavLink to="/" className='link'><AiFillHome size={30} style={{ fill: '#137bc0' }}/></NavLink></li>
                        <li className="items"><NavLink to="/likes" className='link'><AiFillHeart size={30} style={{ fill: '#137bc0' }}/></NavLink></li>
                        <img src={logo} alt="logo" className='logo'/>
                        <li className="items"><NavLink to="/addnew" className='link'><BsFillPersonPlusFill size={30} style={{ fill: '#137bc0' }}/></NavLink></li>
                        <li className="items"><MdDarkMode size={30} style={{ fill: '#137bc0' }}/></li>
                    </ul>  

                </div>


            )}
            {/* ... sinon on affiche le menu hamburger */}
            <button onClick={toggleNavSmallScreen} className="btn"> <BiMenuAltRight size={30} style={{ fill: '#137bc0' }}/> </button>
        </nav>
    )
}