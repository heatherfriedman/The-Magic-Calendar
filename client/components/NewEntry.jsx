import React from 'react';

class NewEntry extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { type: '', entry: '' };
  }
  handleChange(event) {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/new', {
        method: 'POST',
        body: JSON.stringify({
          type: this.state.type,
          entry: this.state.entry,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        this.props.history.replace('/main');
      }
    } catch (error) {
      console.log('Error in handleSubmit of NewEntry:', error);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Select Type of Entry:
            <select
              name="type"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <option>CHOOSE AN ENTRY TYPE</option>
              <option name="type" value="task">
                Task
              </option>
              <option name="type" value="event">
                Event
              </option>
              <option name="type" value="note">
                Note
              </option>
            </select>
          </label>
          <label>Entry: </label>
          <input
            name="entry"
            onChange={this.handleChange}
            value={this.state.entry}
            type="text"
          ></input>

          <input type="submit" value="Create Entry"></input>
        </form>
      </div>
    );
  }
}

export default NewEntry;
