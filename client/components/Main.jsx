import React from 'react';
import { Link } from 'react-router-dom';
import Entries from './Entries.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle, faTasks, faPen } from '@fortawesome/free-solid-svg-icons';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: [],
      entry: [],
      id: [],
      // deleteId: [],
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8080/api/new');
    // console.log(response);
    const json = await response.json();
    // console.log('json', json);
    this.setState(json);
  }

  // async handleSubmit(event) {
  //   event.preventDefault();
  //   try {
  //     const response = await fetch('http://localhost:8080/api/delete', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         deletedId: this.state.deleteId,
  //       }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     if (response.status === 200) {
  //       //redirect to Main
  //       window.location.reload(false);
  //     }
  //   } catch (error) {
  //     console.log('Error in handleSubmit of Main:', error);
  //   }
  // }

  // handleChange(event) {
  //   this.setState({ ...this.state, deleteId: event.target.value });
  // }

  //   async getEntries() {
  //     try {
  //       const response = await fetch('http://localhost:8080/api/new');
  //       console.log('main.jsx response', response);
  //     } catch (errors) {
  //       console.log('Error in getEntries of Main:', error);
  //     }
  //   }

  render() {
    const entries = this.state.entry.map((item, index) => {
      return (
        <Entries
          key={`entry${index}`}
          entry={item}
          type={this.state.type[index]}
          id={this.state.id[index]}
        />
      );
    });

    return (
      <div className="main-text">
        <div className="smallest-text">
          Welcome to The Magic Calendar. Each type of entry has a specific icon.
          <br />
          <FontAwesomeIcon icon={faTasks} /> are for TASKS,
          <br />
          <FontAwesomeIcon icon={faPen} /> are for NOTES, and <br />
          <FontAwesomeIcon icon={faDotCircle} /> are for EVENTS
        </div>
        <Link to="/new">
          <button type="button" className="buttons">
            Create New Entry
          </button>
        </Link>
        {/* <form onSubmit={this.handleSubmit}>
          <label className="smallest-text">
            To delete a specific entry, please type the entry number and click
            the "Delete Entry" button
            <input
              value={this.state.deleteId}
              onChange={this.handleChange}
              type="text"
              className="small-input"
            ></input>
          </label>
          <input
            type="submit"
            value="Delete Entry"
            className="buttons smaller-button"
          ></input>
        </form> */}

        {entries}
      </div>
    );
  }
}

export default Main;
