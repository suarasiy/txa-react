import userEvent from '@testing-library/user-event';
import { Component } from 'react';

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[]
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined,
  };

  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name.toLowerCase() === this.state.name.toLowerCase();
    });

    this.setState({ user: foundUser });
  }

  render() {
    const { name, user } = this.state;

    return (
    <div>
      <h3>User Search</h3>
      <input
        value={this.state.name}
        onChange={(e) => this.setState({ name: e.target.value })} />

      <button onClick={this.onClick}>Search</button>
      <p>{user && user.name}</p>
      <p>{user && user.age}</p>
      
    </div>
    )
  };
}

export default UserSearch;