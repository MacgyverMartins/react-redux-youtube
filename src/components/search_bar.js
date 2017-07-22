import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {term: ''};
  }

  render() {
    return (
        <div>
          <input onChange={event => this.setState({ term: event.target.value })} />
          The value of the input is: {this.state.term}
        </div>
      );
  }

  onChangeInput(event) {
    this.setState({term: event.target.value})
  }
}

export default SearchBar;
