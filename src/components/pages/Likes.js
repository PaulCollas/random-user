import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

class Likes extends Component {
  render() {
    return (
    <div className="todo-context">
        <Navbar />
        <h1>Favoris</h1>

        <h3> Voici les élèves favoris:</h3>

        <div className='todo-row'>
            <div>
                test
            </div>
            <div className='icons'>
                <RiCloseCircleLine
                    className='delete-icon'
                />
                <TiEdit
                    className='edit-icon'
                />
            </div>
        </div> 
    </div>
    )
  }
}

export default Likes;