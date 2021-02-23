import React from 'react';
import GithubCardList from './GithubCardList';
import Github from '../api/Github';
class App extends React.Component {
  state = { repos: [] };
  E;
  componentDidMount = async () => {
    const response = await Github.get('/users/JGustafsonIII/repos', {
      headers: {
        Accept: 'application/vnd.github.inertia-preview+json',
      },
    });
    this.setState({ repos: response.data });
  };
  onSearch = (term) => {};
  render() {
    return (
      <div className='App container mx-auto'>
        <GithubCardList repos={this.state.repos} />
      </div>
    );
  }
}

export default App;
