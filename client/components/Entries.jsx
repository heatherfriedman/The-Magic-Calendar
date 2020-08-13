import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle, faTasks, faPen } from '@fortawesome/free-solid-svg-icons';

class Entries extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick(event) {
    try {
      const response = await fetch('http://localhost:8080/api/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('delete request response', response);
    } catch (error) {
      console.log('Error in handleClick of Entries:', error);
    }
  }

  render() {
    let icon;
    if (this.props.type === 'task') {
      icon = faTasks;
    }
    if (this.props.type === 'note') {
      icon = faPen;
    }
    if (this.props.type === 'event') {
      icon = faDotCircle;
    }
    return (
      <div>
        <div className="spacing-left">
          <FontAwesomeIcon icon={icon} /> {this.props.entry}
        </div>
        <button
          className="buttons smaller-button spacing-right"
          onClick={() => {
            this.handleClick;
          }}
        >
          Delete Entry
        </button>
      </div>
    );
  }
}

export default withRouter(Entries);
