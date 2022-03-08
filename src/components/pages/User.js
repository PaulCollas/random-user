import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import AddNewUser from '../User/AddNewUser'

class AddNew extends Component {

  render() {
    return (
    <div className="todo-context">
        <Navbar />
        <h1>Nouvel élève</h1>
        <AddNewUser />
    </div>
    )
  }
}

export default AddNew;