import React from 'react';
import { Link } from 'react-router-dom';
import Entries from './Entries.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: [],
      entry: [],
    };
    // this.getEntries = this.getEntries.bind(this);
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8080/api/new');
    // console.log(response);
    const json = await response.json();
    // console.log('json', json);
    this.setState(json);
  }

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
        />
      );
    });

    return (
      <div className="main-text">
        <Link to="/new">
          <button type="button" className="buttons">
            Create New Entry
          </button>
        </Link>
        {entries}
      </div>
    );
  }
}

export default Main;
