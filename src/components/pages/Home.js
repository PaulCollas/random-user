import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import { RiCloseCircleLine } from 'react-icons/ri';
import { AiFillHeart } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdOutlineLocationCity } from 'react-icons/md';
import { AiFillPhone } from 'react-icons/ai';
import axios from 'axios';

class Home extends Component {

    state = {
        persons: []
    }

    
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
    }

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

        <h3> Voici les informations des élèves :</h3>
        {
            this.state.persons.map(person => 
                <div className='todo-row'>
                    <div>
                        <p>
                            <span className='items-list'>
                            <BsFillPersonFill className='delete-icon'/> {person.name} 
                            </span>
                            <span className='items-list'>
                            <MdOutlineLocationCity className='delete-icon'/> {person.email} 
                            </span>
                            <span className='items-list'>
                            <AiFillPhone className='delete-icon'/> {person.phone} 
                            </span>
                        </p> 

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
            )
        }

    </div>
    )
    }
}

export default Home;