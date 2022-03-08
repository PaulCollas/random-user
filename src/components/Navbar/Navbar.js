import React, {useState, useEffect} from "react";
import "./Navbar.css"
import { NavLink } from "react-router-dom";
import { AiFillHome } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { MdDarkMode } from 'react-icons/md';
import { BiMenuAltRight } from 'react-icons/bi';

export default function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth)

    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {

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
            {(toggleMenu || largeur > 500) && (

                <ul className="liste">
                    <li className="items"><NavLink to="/" className='link'><AiFillHome size={30} style={{ fill: '#137bc0' }}/></NavLink></li>
                    <li className="items"><NavLink to="/likes" className='link'><AiFillHeart size={30} style={{ fill: '#137bc0' }}/></NavLink></li>
                    <li className="items"><MdDarkMode size={30} style={{ fill: '#137bc0' }}/></li>
                </ul>  

            )}

            <button onClick={toggleNavSmallScreen} className="btn"> <BiMenuAltRight size={30} style={{ fill: '#137bc0' }}/> </button>
        </nav>
    )
}