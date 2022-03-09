import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

class Likes extends Component {
  render() {
    return (
    <div className="randomuser-context">
        <h1>Favoris</h1>

        <h3> Voici les élèves favoris:</h3>

        <div className='randomuser-row'>
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
        
        <Navbar />
    </div>
    )
  }
}

export default Likes;