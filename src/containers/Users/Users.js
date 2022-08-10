import React, { Component } from 'react'; 
import axios from 'axios';

class Users extends Component {

  state = {
    users: []
  }
  
  componentDidMount() {
    // to send ajax calls -- use either axios / native JS fetch api 
    // npm i axios
    // Make a request for a user with a given ID
    // What's the REST API Endpoint? https://jsonplaceholder.typicode.com/users
    // What's the Http Method? GET
    // What's the REST API Client Tool? Axios 
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then( (res) => { // successful resp 
        console.log(res.data);
        this.setState( {
          users: res.data
        });
      })
      .catch( (err) => {
        console.log(err);
      })
      .finally( () => {
        console.log('It is over!');
      });
  }

  render() {
    return (
      <div className='row'>
        <h2>Users</h2>

        { this.state.users && this.state.users.length > 0?
          // TODO: Loop thru to show the boxes many times 
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Name</h5>
              <p className="card-text">Email: a@b.com | Phone: 2342345 </p>
            </div>
          </div>
          :
          <div className='alert alert-danger'>
            No Users Found!
          </div>
        }
      </div>
    )
  }
}

export default Users