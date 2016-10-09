import React, { Component } from 'react';
// import { Link } from 'react-router';
// import { CounterButton, GithubButton } from 'components';
// import config from '../../config';
import Helmet from 'react-helmet';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    const styles = require('./Home.scss');
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>

        <Modal
          show={this.state.showModal}
          onHide={() => this.close()}>
          <Modal.Header closeButton />
          <Modal.Body>
            <p>I'm super hyped!</p>
          </Modal.Body>
        </Modal>

        <div className={styles.masthead}>
          <div className="container">
            <h2>Chu Hoang Son</h2>
            <h4>Front-end Developer</h4>
            <Button
              bsStyle="warning"
              className="hvr-grow-rotate"
              onClick={() => this.open()}>ABOUT ME</Button>
          </div>
        </div>

        <div className={styles.caseStudy}>
          <div className="container text-center">
            <h2>Case studies</h2>
          </div>
        </div>
      </div>
    );
  }
}
