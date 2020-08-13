import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle, faTasks, faPen } from '@fortawesome/free-solid-svg-icons';

class Entries extends React.Component {
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
        <span>
          <div>
            <FontAwesomeIcon icon={icon} /> {this.props.entry}
          </div>
        </span>
      </div>
    );
  }
}

export default Entries;
