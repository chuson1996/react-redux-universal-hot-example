import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { IndexLink } from 'react-router';
// import { LinkContainer } from 'react-router-bootstrap';
// import Navbar from 'react-bootstrap/lib/Navbar';
// import Nav from 'react-bootstrap/lib/Nav';
// import NavItem from 'react-bootstrap/lib/NavItem';
import Helmet from 'react-helmet';
// import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
// import { isLoaded as isAuthLoaded, load as loadAuth, logout } from 'redux/modules/auth';
// import { InfoBar } from 'components';
import { push } from 'react-router-redux';
import config from '../../config';
import { asyncConnect } from 'redux-async-connect';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import last from 'lodash/last';
import { Footer } from 'components';

@asyncConnect([{
  promise: () => Promise.all([]) // Without this line, server-side rendering breaks!?
}])
@connect(
  state => ({user: state.auth.user}),
  {
    // logout,
    pushState: push
  })
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    user: PropTypes.object,
    // logout: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired,
    location: PropTypes.object
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    // const {
    //   // user,
    //   location: { pathname }
    // } = this.props;
    const styles = require('./App.scss');
    // const segment = last(pathname.split('/')) || 'root';

    return (
      <div className={styles.app}>
        <Helmet {...config.app}/>
        {/* <Navbar fixedTop bsStyle="inverse">
          <Navbar.Header>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse eventKey={0}>
            <Nav nav pullRight>
              <NavItem eventKey={0}>Something</NavItem>
              <NavItem eventKey={0}>Else</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar> */}
        <div className={styles.appContent}>
          {this.props.children}
          {/* <ReactCSSTransitionGroup
            transitionName={{
              enter: styles['page-enter'],
              enterActive: styles['page-enter-active'],
              leave: styles['page-leave'],
              leaveActive: styles['page-leave-active']
            }}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            {React.cloneElement(this.props.children, {key: segment})}
          </ReactCSSTransitionGroup> */}
        </div>
        {/* <InfoBar/> */}

        <Footer/>
      </div>
    );
  }
}
