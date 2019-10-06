import React from 'react';
import Firebase from 'firebase'
import logo from './logo.svg';
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: null};

    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.renderLoginButton = this.renderLoginButton.bin(this);
  }

  ComponentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  handleAuth() {
    const provider = new firebase.auth.GoogleAuthprovider()
      firebase.auth().signInWithPopup(provider)
        .then(result => console.log (`${result.user.email} ha iniciado sesión`));
        .Catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  handleLogout() {
    firebase.auth().signOut()
      .then(result => console.log (`${result.user.email} ha salido`));
      .Catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  renderLoginButton() {
    if (this.state.user) {
      return (
        <div>
          <img width="100"
          src={this.state.user.photoURL} 
          alt={this.state.user.displayName}
          />
          <p>Hola {this.state.displayName}!</p>
          <button onClick={this.handleLogout}>
          Salir
          </button>
        </div>
      );
    } else {
      return (
        <button onClick={this.handleAuth}>
        Login
        </button>
      );
    }
  }

  render() {
    return(
      <div className="App">
        <div className="App-header">
          <h2>AcTúAl</h2>
        </div>
        <p className="App-intro">
          { this.renderLoginButton() }
        </p>
      </div>
    );
  }
}

export default App;