import React, { Component } from 'react';

import { AiFillHeart } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdOutlineLocationCity } from 'react-icons/md';
import { AiFillPhone } from 'react-icons/ai';

import DeleteUser from './DeleteUser';
import axios from 'axios';


class ShowUser extends Component {

    state = {
        users: []
    }
    
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const users = res.data;
            this.setState({ users });
          })
    }

    render() {
    return (
    <div>
        {
            this.state.users.map(user => 
                <div className='randomuser-row'>
                    <div>
                        <p>
                            <span className='items-list'>
                            <BsFillPersonFill className='delete-icon'/> {user.name} 
                            </span>
                            <span className='items-list'>
                            <MdOutlineLocationCity className='delete-icon'/> {user.email} 
                            </span>
                            <span className='items-list'>
                            <AiFillPhone className='delete-icon'/> {user.phone} 
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