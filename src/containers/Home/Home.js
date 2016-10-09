import React, { Component } from 'react';
// import { Link } from 'react-router';
// import { CounterButton, GithubButton } from 'components';
// import config from '../../config';
import Helmet from 'react-helmet';
import className from 'classnames';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { TypewriterText } from 'components';

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
          className={styles.aboutMe}
          show={this.state.showModal}
          onHide={() => this.close()}>
          <Modal.Body>
            <Row>
              <Col xs={12} sm={6} className={styles.left}>
                <h3 className={className(styles.headline, 'text-center')}>
                  <TypewriterText text="About Me."/>
                </h3>
                <p className={className(styles.subheadline, 'text-center')}>
                  <TypewriterText text="Junior Front-end Developer."/>
                </p>
              </Col>
              <Col xs={12} sm={6} className={styles.right}>
                <p className={styles.text}>
                  Son is a front-end developer enthusiast with more than 3 years of experience in the industry.
                </p>
                <p>
                  We all know that Javascript is drastically evolving every single day so Son keeps up-to-date to the latest things.
                </p>
                <p>
                  Son have good depth understanding in DOM and browsers, system integration with API interaction and data visualisation.
                </p>
                <p>
                  Being an introvert, Son is pretty friendly and outgoing. Son love sports and music, including karaoke singing. Son's ideal weekend is to drink beer and sing karaoke with friends and co-workers.
                </p>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>

        <div className={styles.masthead}>
          <div className="container">
            <h2>
              <TypewriterText text="Chu Hoang Son" />
            </h2>
            <h4>
              <TypewriterText text="Front-end Developer" />
            </h4>
            <Button
              bsStyle="warning"
              className="hvr-grow-rotate"
              onClick={() => this.open()}>ABOUT ME</Button>
            <br/><br/>
            <Button bsStyle="info" className="hvr-sweep-to-top">
              <i className="fa fa-facebook m-l-3"></i>
            </Button>
            <Button bsStyle="default" className="m-l-10 hvr-sweep-to-top">
              <i className="fa fa-github m-l-3"></i>
            </Button>
            <Button bsStyle="primary" className="m-l-10 hvr-sweep-to-top">
              <i className="fa fa-linkedin m-l-3"></i>
            </Button>
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
