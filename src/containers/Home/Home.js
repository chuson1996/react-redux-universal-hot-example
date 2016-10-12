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
import Image from 'react-bootstrap/lib/Image';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import { TypewriterText,
  AngularSVG,
  GruntSVG,
  WebpackSVG,
  JadeSVG,
  ReactSVG,
  ReduxSVG,
  NodeSVG } from 'components';

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
                  We all know that Javascript is drastically evolving every single day so Son keeps up-to-date to the latest trends.
                </p>
                <p>
                  Son has good depth of understanding in DOM and browsers, system integration with API interaction and data visualisation.
                </p>
                <p>
                  Being an introvert, Son is pretty friendly and outgoing. Son loves basketball and music, including karaoke singing. Drinking beer and singing karaoke with friends and co-workers is Son's most ideal weekend.
                </p>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>

        <div className={styles.masthead}>
          <div className="container">
            <Row>
              <Col xs={12} sm={6}>
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
              </Col>
              <Col xs={12} sm={6} className="text-center">
                <img
                  className={styles.myFace}
                  src={require('./face.jpg')}/>
              </Col>
            </Row>
          </div>
        </div>

        <div className={styles.caseStudy}>
          <div className="container text-center">
            <h2>Case studies</h2>
            <Row>
              <Col xs={12} sm={12} md={6}>
                <h3>LUXUS WORLDWIDE</h3>
                <p>October 2015 - May 2016</p>
                <p>I took part in building a webshop for Taaleri.com. My job was to implement the ui with the design given by the creative director of Luxus and integrate APIs provided by the client.</p>
                <div>
                  <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip">AngularJS</Tooltip>}>
                    <AngularSVG className={`${styles.skillLogo} hvr-float`}/>
                  </OverlayTrigger>
                  <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip">Grunt</Tooltip>}>
                    <GruntSVG className={`${styles.skillLogo} m-l-10 hvr-float`}/>
                  </OverlayTrigger>
                  <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip">Webpack</Tooltip>}>
                    <WebpackSVG className={`${styles.skillLogo} m-l-10 hvr-float`}/>
                  </OverlayTrigger>
                  <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip">Jade</Tooltip>}>
                    <JadeSVG className={`${styles.skillLogo} m-l-10 hvr-float`}/>
                  </OverlayTrigger>
                </div>
                <p className="m-t-30">
                  <i>"Son is a responsible and fast developing front-end developer. He has shown he works best in a team, but can and will take responsibility also when working alone. His technical skills and level of experience exceeded the requirements for the intern position he was in, and could easily work as a full-time developer, especially in front-end projects."
                  <br/>Minna Heiskanen - Administrative Manager at Luxus</i>
                </p>
              </Col>
              {/* <Col xs={12} sm={12} md={6} className={`${styles.luxusImagesContainer}`}>
                <img src={require('./taaleri-mobile.png')} className={`${styles.taaleriMobile} thumbnail`} />
                <img src={require('./taaleri-desktop.png')} className={`${styles.taaleriDesktop} thumbnail`}/>
              </Col> */}
            </Row>
            <Row className={`m-t-20`}>
              <Col xs={12} sm={12} md={6} mdPush={6}>
                <h3>Factory Finder</h3>
                <p>July 2016 - August 2016</p>
                <p>Factory Finder needed a way to shorten the customers' quoting process so I helped them develop their web platform to automate some of the tasks. My job was to implement UI layouts and integrate APIs to the application.</p>
                <div>
                  <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip">React</Tooltip>}>
                    <ReactSVG className={`${styles.skillLogo} hvr-float`}/>
                  </OverlayTrigger>
                  <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip">Redux</Tooltip>}>
                    <ReduxSVG className={`${styles.skillLogo} hvr-float m-l-10`}/>
                  </OverlayTrigger>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} mdPull={6} className={`${styles.factoryfinderImagesContainer}`}>
                <img src={require('./factoryfinder-mobile.png')} className={`${styles.factoryfinderMobile} thumbnail`}/>
                <img src={require('./factoryfinder-desktop.png')} className={`${styles.factoryfinderDesktop} thumbnail`}/>
              </Col>
            </Row>
          </div>
        </div>

        <div className={styles.awards}>
          <div className="container text-center">
            <h2>Awards</h2>
            <Row>
              <Col xs={12} sm={12} md={6}>
                <h3><a className="underline" href="https://2015.spaceappschallenge.org/project/water-mapping/">SPACE APPS MIKKELI</a></h3>
                <p>April 2015</p>
                <p>2nd place and People's choice award</p>
                <Row><Col sm={8} smOffset={2}>
                  <p>Our project was to create website where there is a water map, which shows which part of world water (river, lake) is usable.</p>
                </Col></Row>
                <div className="m-b-20">
                  <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip">AngularJS</Tooltip>}>
                    <AngularSVG className={`${styles.skillLogo} hvr-float`}/>
                  </OverlayTrigger>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6}>
                <Image
                  className={`${styles.spaceapp} hvr-grow-rotate`}
                  responsive
                  thumbnail
                  src={require('./spaceapp.jpg')}
                  alt="spaceapp" />
              </Col>
            </Row>
            <Row className="m-t-20">
              <Col xs={12} sm={12} md={6} mdPush={6}>
                <h3><a className="underline" href="http://futurehack.fi/">Future Hack</a></h3>
                <p>April 2016</p>
                <p>2nd place</p>
                <Row><Col sm={8} smOffset={2}>
                  <p>Competition Product: Health Assistance Bot - An AI to befriend with a Telegram user to provide health tips and support</p>
                </Col></Row>
                <div className="m-b-20">
                  <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip">NodeJS</Tooltip>}>
                    <NodeSVG className={`${styles.skillLogo} hvr-float`}/>
                  </OverlayTrigger>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} mdPull={6} className="m-t-10">
                <Image
                  className={`${styles.futurehack} hvr-grow-rotate`}
                  responsive
                  thumbnail
                  src={require('./futurehack.jpg')}
                  alt="futurehack" />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
