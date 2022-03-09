import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import ShowUser from '../User/ShowUser';

class Likes extends Component {

    render() {
    return (
    <div className="randomuser-context">
        
        <h1>Favoris</h1>

        <h3> Voici les élèves favoris :</h3>

        {/* Rappel du composant ShowUser (avec l'utilsiation de l'Api) */}
        <ShowUser />

        {/*  Rappel de la Navbar  */}
        <Navbar />
    </div>
    )
    }
}

export default Likes;