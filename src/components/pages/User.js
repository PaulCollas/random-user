import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import AddNewUser from '../User/AddNewUser'

class AddNew extends Component {

  render() {
    return (
    <div className="randomuser-context">
        <h1>Nouvel élève</h1>

        {/* Rappel du composant ShowUser (avec le form sur de l'Api) */}
        <AddNewUser />
        
        {/*  Rappel de la Navbar  */}
        <Navbar />
    </div>
    )
  }
}

export default AddNew;