import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';

class AddNew extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
    this.setState({ email: event.target.value });
    this.setState({ phone: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        this.setState({
          userId: res.data.id,
          userName: res.data.name,
          userPhone: res.data.phone
        })
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
    <div className="todo-context">
        <Navbar />
        <h1>Nouvel élève</h1>
        <form className="todo-form" onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Nom" name="text" className="todo-input edit" onChange={this.handleChange}/>
            <input type="text" placeholder="Email" name="text" className="todo-input edit" onChange={this.handleChange}/>
            <input type="text" placeholder="Télephone" name="text" className="todo-input edit" onChange={this.handleChange}/>
            <button className="todo-button edit" type="submit">Ajouter</button>
        </form >
    </div>
    )
  }
}

export default AddNew;