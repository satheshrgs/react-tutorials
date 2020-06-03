import React from 'react';
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.counter = 0;
    this.state = {
      users: [
        {
          id: 1,
          firstName: 'First Name',
          lastName: 'Last Name',
        }
      ]
    }
  }

  addUser = () => {
    const [ user ] = this.state.users;
    const updatedUser = { ...user, id: user.id + 1};
    const updatedUsers = [ ...this.state.users, updatedUser ];
    console.log(updatedUsers);
    this.setState({
      users: updatedUsers
    })
  }


  render() {
    const { users } = this.state;
    return (
      <>
      <button onClick={this.addUser}>Add User</button>
      {users.map(user => (
        <div key={user.id}>{user.firstName} {user.lastName}</div>
      ))}
      </>
    );
  }
}

export default App;

