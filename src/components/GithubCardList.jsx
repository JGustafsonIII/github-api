import React from 'react';
import GithubCard from "./GithubCard";
class GithubCardList extends React.Component {

  render() {
    const repoList = this.props.repos.map(repo => <GithubCard key={repo.id} repo={repo} />);
    return <div className="grid grid-cols-3 gap-4">{repoList}</div>
  }
}

export default  GithubCardList;