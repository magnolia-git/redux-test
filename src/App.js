import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/HeaderComponent';
import HeaderLogged from './components/HeaderComponentLogged';
import Footer from './components/FooterComponent';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Support from './pages/Support';
import Register from './pages/Register';
import MyAccount from './pages/MyAccount';
import { fetchTeam, postSupport, postUser } from './redux/ActionCreators';
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
  return {
    team: state.team
  };
}

const mapDispatchToProps = (dispatch) => ({
  fetchTeam: () => {dispatch(fetchTeam())},
	resetSupportForm: () => { dispatch(actions.reset('support'))},
  resetRegisterForm: () => { dispatch(actions.reset('user'))},
  postSupport: (firstname, lastname, email, message) => { dispatch(postSupport(firstname, lastname, email, message))},
  postUser: (userName, email, password) => { dispatch(postUser(userName, email, password))}
});

class App extends Component {

  componentDidMount() {
  	this.props.fetchTeam();
  }



  render() {

  return (
    <div>
    <Header />
    <Switch location={this.props.location}>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/team" component={() => <Team team={this.props.team} />} />
    <Route path="/support" component={() => <Support postSupport={this.props.postSupport} resetSupportForm={this.props.resetSupportForm} />} />
    <Route path="/register" component={() => <Register postUser={this.props.postUser} resetRegisterForm={this.props.resetRegisterForm} />} />
    <Route path="/account" component={MyAccount} />
    </Switch>
    <Footer />
    </div>
  );
}}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
