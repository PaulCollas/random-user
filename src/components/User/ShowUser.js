import React, { Component } from 'react';

import { AiFillHeart } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdOutlineLocationCity } from 'react-icons/md';
import { AiFillPhone } from 'react-icons/ai';

import DeleteUser from './DeleteUser';
import axios from 'axios';


class ShowUser extends Component {

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
    <div>
        {
            this.state.persons.map(person => 
                <div className='randomuser-row'>
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
                        <DeleteUser />
                        <AiFillHeart className='like-icon' />
                    </div>
                </div> 
            )
        }
    </div>

    )}
}

export default ShowUser;