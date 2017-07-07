import React from 'react';

class UserRepos extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      reposCount: 0,
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      reposCount: props.repos.length
    });
  }

  render(){
    const repos = this.props.repos.map(function(repos, key){
      return (
        <div key={key} className="thumbnail">
          <div className="caption">
            <h3>{repos.name}
              <span className="badge">{repos.stargazers_count} STARS</span>
            </h3>
            <p>{repos.description}</p>
            <p>
              <a href={repos.html_url} className="btn btn-primary" role="button">Repository</a>
            </p>
              <a href={repos.html_url + '/issues'} className="btn btn-default" role="button">Issues</a>
          </div>
        </div>
      );
    });

    return (
      <div>
        <h2>{this.state.reposCount} Repositores </h2>
        {repos}
      </div>
    );
  }
};

export default UserRepos;
