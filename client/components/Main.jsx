import React from 'react';
import { Link } from 'react-router-dom';
import Entries from './Entries.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: ['task', 'event', 'note', 'event', 'task', 'note'],
      entry: [
        'finish project',
        'go to sleep',
        'projects are hard',
        'IT IS WORKS?',
        'give Sawyer a hug',
        'Alex is the best!',
      ],
    };
    // this.getEntries = this.getEntries.bind(this);
  }

  //   componentDidMount() {
  //     fetch('http://localhost:8080/api/new').then((res) =>
  //       console.log('mounted', res),
  //     );
  //   }

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
      return <Entries entry={item} type={this.state.type[index]} />;
    });

    return (
      <div>
        <Link to="/new">
          <button>Create New Entry</button>
        </Link>
        {entries}
      </div>
    );
  }
}

export default Main;
