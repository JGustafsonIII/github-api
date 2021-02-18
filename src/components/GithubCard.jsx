import React from 'react';

const GithubCard = ({repo}) => {
  return(
    <div className="bg-green-900 md:container border-black border-2">
      <img className='inline' src={repo.owner.avatar_url} style={{height: "50px", width: "50px"}}/>
      <h1>{repo.full_name}</h1>
      <p>{repo.description}</p>
      <br />
  </div>
  );}

export default GithubCard;