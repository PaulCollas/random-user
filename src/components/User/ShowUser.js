import React, { Component } from 'react';

import { AiFillHeart } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdOutlineLocationCity } from 'react-icons/md';
import { AiFillPhone } from 'react-icons/ai';
import { RiCloseCircleLine } from 'react-icons/ri';
// import DeleteUser from './DeleteUser';
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

    // For setState for delete user
    handleChange = user => {
        this.setState({ id: user.id });
    }
    
    // Submit for request delete user
    handleSubmit = user => {
    user.preventDefault();

        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.user.id}`)
            .then(() => this.setState({ status: 'Delete successful' }));

        console.log(axios.delete(`https://jsonplaceholder.typicode.com/users/${this.user.id}`))
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
                            <BsFillPersonFill className='icon-randomuser'/> {user.name} 
                            </span>
                            <span className='items-list'>
                            <MdOutlineLocationCity className='icon-randomuser'/> {user.email} 
                            </span>
                            <span className='items-list'>
                            <AiFillPhone className='icon-randomuser'/> {user.phone} 
                            </span>
                        </p> 

                    </div>
                    <div className='icons'>
                    <form onSubmit={this.handleSubmit}>
                        <button type="submit" onClick={this.handleChange}><RiCloseCircleLine className='icon-randomuser' /></button>
                    </form>
                        <AiFillHeart className='like-icon'/>
                    </div>
                </div> 
            )
        }
    </div>

    )}
}

export default ShowUser;