
import React from 'react';
import axios from 'axios';
import { RiCloseCircleLine } from 'react-icons/ri';

export default class PersonList extends React.Component {
  state = {
    id: '',
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
        .then(() => this.setState({ status: 'Delete successful' }));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <button type="submit" onClick={this.handleChange}><RiCloseCircleLine className='icon-randomuser' /></button>
        </form>
      </div>
    )
  }
}