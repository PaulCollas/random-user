import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import ShowUser from '../User/ShowUser';

class Home extends Component {

    render() {
    return (
    <div className="randomuser-context">
        
        <h1>Accueil</h1>

        <h3> Voici les informations des élèves :</h3>

        {/* Rappel du composant ShowUser (avec l'utilsiation de l'Api) */}
        <ShowUser />

        {/*  Rappel de la Navbar  */}
        <Navbar />

    </div>
    )
    }
}

export default Home;