import React from 'react';
import PropTypes from 'prop-types'
import GitHubUser from '../services/GitHubUsers';

class SearchUser extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    GitHubUser.getByUsername(this.refs.username.value).then((response) => {
      this.props.updateUser(response.data);
    });

    GitHubUser.getReposByUsername(this.refs.username.value).then((response) => {
      this.props.updateRepos(response.data);
    });
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>GitHub Informações</h1>
        <div className="row">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                ref="username" // Pegar o input no componete
                className="form-control"
                placeholder="Ex: araujrafa"
                />
            </div>
            <button
              type="submit"
              className="btn btn-primary">Buscar
            </button>
          </form>
        </div>
      </div>
    );
  }
};

SearchUser.propTypes = {
  updateUser: PropTypes.func.isRequired,
  updateRepos: PropTypes.func.isRequired,
}

export default SearchUser;
