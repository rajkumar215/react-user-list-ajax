import React, {Component} from 'react';
import axios from 'axios';

class App extends Component{

  constructor () {
    super()

    this.state = {users:[]}
  }

  getUSers() {
      axios('https://api.randomuser.me/?nat=US&results=5').then(response => this.setState({
          users: response.data.results
      }))
  }

  componentWillMount(){
    this.getUSers();
  }

  render() {
      return (
          <div className="App">
              User's List
              {this.state.users.map(user =>
                  <div>
                      <h3>{user.name.first}</h3>
                      <p>{user.email}</p>
                      <hr/>
                  </div>)}
          </div>
      );
  }
}

export default App;
