import React, {useState, useEffect} from "react";
import "./Navbar.css";
import { GlobalStyles } from '../style/globalStyles';
import { NavLink } from "react-router-dom";
import { AiFillHome } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { MdDarkMode } from 'react-icons/md';
import { BiMenuAltRight } from 'react-icons/bi';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import logo from '../../assets/logo-efrei.png';
import { ThemeProvider } from 'styled-components';

export default function Navbar() {

    
    // Définition des ToggleMenu et de la largeur de l'écran
    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth);

    // Définition du theme
    const [theme, setTheme] = useState(true);

    // Définition des couleurs des themes
	const lightTheme = { body: '#FFF', text: '#363537' };
	const darkTheme = { body: '#363537', text: '#FAFAFA' };

    // Switcher entre les menus
    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {

        // Sélection du changement de la taille d'écran 
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

    // Si la condition est vrai alors on affiche la navigation...
    // ... sinon on affiche le menu hamburger
    return (
        <ThemeProvider theme={theme ? lightTheme : darkTheme}>
            <GlobalStyles />
            <nav>
                {(toggleMenu || largeur > 500) && (
                    <div className="menu">
                        <ul className="liste">
                            <li className="items"><NavLink to="/" className='link'><AiFillHome size={30} style={{ fill: '#137bc0' }}/></NavLink></li>
                            <li className="items"><NavLink to="/likes" className='link'><AiFillHeart size={30} style={{ fill: '#137bc0' }}/></NavLink></li>
                            <img src={logo} alt="logo" className='logo'/>
                            <li className="items"><NavLink to="/addnew" className='link'><BsFillPersonPlusFill size={30} style={{ fill: '#137bc0' }}/></NavLink></li>
                            <li className="items" onClick={() => setTheme(!theme)}><MdDarkMode size={30} style={{ fill: '#137bc0' }}/></li>
                        </ul>  

                    </div>


                )}
                <button onClick={toggleNavSmallScreen} className="btn"> <BiMenuAltRight size={30} style={{ fill: '#137bc0' }}/> </button>
            </nav>            
        </ThemeProvider>

    )
}