import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import { RiCloseCircleLine } from 'react-icons/ri';
import { AiFillHeart } from 'react-icons/ai';

class Home extends Component {
  render() {
    return (
    <div className="todo-context">
        
        <Navbar />

        <h1>Accueil</h1>
        
        {/* <form className="todo-form">
            <input type="text" placeholder="Update your item" name="text" className="todo-input edit" />
            <button className="todo-button edit">Mettre à jour</button>
            <input type="text" placeholder="Nom de la tâche" name="text" className="todo-input" />         
            <button className="todo-button">Ajouter</button>
        </form > */}

        <h1> Voici les informations des élèves :</h1>
        <div className='todo-row'>
            <div>
                test
            </div>
            <div className='icons'>
                <RiCloseCircleLine
                    className='delete-icon'
                />
                <AiFillHeart
                    className='like-icon'
                />
            </div>
        </div> 
    </div>
    )
  }
}

export default Home;