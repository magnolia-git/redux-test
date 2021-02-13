import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Support from './pages/Support';
import Register from './pages/Register';
import MyAccount from './pages/MyAccount';
import { addUser, fetchTeam } from './redux/ActionCreators';


const mapStateToProps = state => {
  return {
    team: state.team,
    user: state.user,
    jwt: state.jwt
  };
}

const mapDispatchToProps = (dispatch) => ({
  fetchTeam: () => dispatch(fetchTeam()),
//	resetSupportForm: () => { dispatch(actions.reset('support'))},
//  postSupport: (firstname, lastname, email, message) => { dispatch(postSupport(firstname, lastname, email, message))},
  addUser: () => dispatch(addUser())

});

class App extends Component {

  constructor(props) {
    super(props);

  }


  componentDidMount() {
    this.props.fetchTeam();
  }



  render() {


  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={() => <Home addUser={this.props.addUser} />} />
        <Route path="/about" component={About} />
        <Route path="/team" component={() => <Team team={this.props.team} />} />
        <Route path="/support" component={() => <Support />} />
        <Route path="/register" component={() => <Register user={this.props.user} jwt={this.props.jwt} />} />
        <Route path="/account" component={MyAccount} />
      </Switch>
      <Footer />
    </div>
  );
}}




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
