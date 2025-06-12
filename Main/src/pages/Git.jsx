import React from 'react';
import { useState } from 'react';

const Git = () => {
    // fetching git api
    const [repos, setRepos] = useState([]);
    React.useEffect(() => {
        fetch('https://api.github.com/users/Gunvanth123')
            .then(response => response.json())
            .then(data => {setRepos(data); console.log(data);})
            .catch(error => console.error('Error fetching repos:', error));
    }, []);
  return <h2>Our GitHub Projects {repos.public_repos}</h2>;
};

export default Git;
