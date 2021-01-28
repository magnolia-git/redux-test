import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Team from './pages/Team.js';
import Support from './pages/Support.js';
import { fetchTeam, addSupport } from './redux/ActionCreators';

const mapStateToProps = state => {
  return {
    team: state.team,
    support: state.support
  };
}

const mapDispatchToProps = (dispatch) => ({
fetchTeam: () => {dispatch(fetchTeam())},
addSupport: () => {dispatch(addSupport())}
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
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/team" component={() => <Team team={this.props.team} />} />} />
    <Route path="/support" component={Support} />
    </Switch>
    <Footer />
    </div>
  );
}}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
