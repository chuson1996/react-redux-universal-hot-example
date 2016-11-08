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
// import Image from 'react-bootstrap/lib/Image';
// import Tooltip from 'react-bootstrap/lib/Tooltip';
// import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import { TypewriterText,
  // AngularSVG,
  // GruntSVG,
  // WebpackSVG,
  // JadeSVG,
  // ReactSVG,
  // ReduxSVG,
  // NodeSVG,
  ProjectSection } from 'components';

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
          <div>
            <Row>
              <Col xs={12}>
                <h2>
                  <TypewriterText text="Chu Hoang Son" />
                </h2>
                <h4>
                  <TypewriterText text="Front-end Developer" />
                </h4>
                {/* <Button
                  bsStyle="warning"
                  className="hvr-grow-rotate"
                  onClick={() => this.open()}>ABOUT ME</Button> */}
                <br/><br/>
                <a href="https://www.facebook.com/holdmyhandifyoucan" style={{ borderBottom: 0 }}>
                  <Button bsStyle="info" className="hvr-sweep-to-top">
                    <i className="fa fa-facebook m-l-3"></i>
                  </Button>
                </a>
                <a href="https://github.com/chuson1996/web-portfolio" style={{ borderBottom: 0 }}>
                  <Button bsStyle="default" className="m-l-10 hvr-sweep-to-top">
                    <i className="fa fa-github m-l-3"></i>
                  </Button>
                </a>
                <a href="https://fi.linkedin.com/in/chu-hoang-son-b92499a5" style={{ borderBottom: 0 }}>
                  <Button bsStyle="primary" className="m-l-10 hvr-sweep-to-top">
                    <i className="fa fa-linkedin m-l-3"></i>
                  </Button>
                </a>
              </Col>
              {/* <Col xs={12} sm={6} className="text-center">
                <img
                  className={styles.myFace}
                  src={require('./face.jpg')}/>
              </Col> */}
            </Row>
          </div>
        </div>

        <div className={styles.caseStudy}>
          <div className="container text-center">
            <h2>Latest work</h2>
            <ProjectSection
              title="LUXUS WORLDWIDE"
              date="October 2015 - May 2016"
              description={<p><i>"Son is a responsible and fast developing front-end developer. He has shown he works best in a team, but can and will take responsibility also when working alone. His technical skills and level of experience exceeded the requirements for the intern position he was in, and could easily work as a full-time developer, especially in front-end projects."
                  <br/>Minna Heiskanen - Administrative Manager at Luxus</i></p>}
              skills={['AngularJS', 'Grunt', 'Webpack', 'Jade']}
              animation={{ leftCol: 'fadeIn' }} />

            <ProjectSection
              animation={{leftCol: 'fadeInLeft', rightCol: 'fadeInRight'}}
              title="Factory Finder"
              date="July 2016 - August 2016"
              description="Factory Finder needed a way to shorten the customers' quoting process so I helped them develop their web platform to automate some of the tasks. My job was to implement UI layouts and integrate APIs to the application."
              skills={['ReactJS', 'Redux']}
              reverseOrder={!false}
              images={[
                {
                  src: require('./factoryfinder-mobile.png'),
                  platform: 'mobile'
                },
                {
                  src: require('./factoryfinder-desktop.png'),
                  platform: 'desktop'
                }
              ]} />
          </div>
        </div>

        <div className={styles.awards}>
          <div className="container text-center">
            <h2
              data-scroll-watch
              data-animate="tada">Awards</h2>

            <ProjectSection
              animation={{leftCol: 'fadeInRight', rightCol: 'fadeInLeft'}}
              title={<h3><a className="underline" href="https://2015.spaceappschallenge.org/project/water-mapping/">SPACE APPS MIKKELI</a></h3>}
              date="April 2015"
              description={<Row><Col sm={8} smOffset={2}>
                  <p>Our project was to create website where there is a water map, which shows which part of world water (river, lake) is usable.</p>
                </Col></Row>}
              skills={['AngularJS']}
              images={[{
                src: require('./spaceapp.jpg'),
                alt: 'spaceapp',
                className: `${styles.spaceapp} hvr-grow-rotate`
              }]} />

            <ProjectSection
              reverseOrder
              animation={{leftCol: 'fadeInRight', rightCol: 'fadeInLeft'}}
              title={<h3><a className="underline" href="http://futurehack.fi/">Future Hack</a></h3>}
              date="April 2016"
              description={<Row><Col sm={8} smOffset={2}>
                  <p>Competition Product: Health Assistance Bot - An AI to befriend with a Telegram user to provide health tips and support</p>
                </Col></Row>}
              skills={['NodeJS']}
              images={[{
                src: require('./futurehack.jpg'),
                alt: 'futurehack',
                className: `${styles.futurehack} hvr-grow-rotate`
              }]} />
          </div>
        </div>

        <div className={styles.sideProjects}>
          <div className="container text-center">
            <h2
              data-scroll-watch
              data-animate="pulse">SIDE PROJECTS</h2>

            <ProjectSection
              animation={{ leftCol: 'fadeInRight', rightCol: 'fadeInLeft'}}
              title="Front-end Bookmark"
              date="November 2016"
              description="To alleviate the hurdle of not knowing where or what to learn about front end development, Front-end Bookmark will provide developers with hundreds of resources for inspiration and further enriching their own knowledge."
              links={{
                website: 'https://frontend-bookmark.herokuapp.com',
                github: 'https://github.com/chuson1996/frontend-advisor'
              }}
              skills={['ReactJS', 'Redux']}
              images={[{
                src: require('./frontendbookmark-desktop.png'),
                platform: 'desktop'
              }, {
                src: require('./frontendbookmark-mobile.png'),
                platform: 'mobile'
              }]} />

            <ProjectSection
              animation={{leftCol: 'bounceIn'}}
              title="Web Portfolio"
              date="October 2016"
              description="Well... This is my web portfolio. :)"
              links={{
                github: 'https://github.com/chuson1996/web-portfolio'
              }}
              skills={['ReactJS']} />

            <ProjectSection
              reverseOrder
              animation={{leftCol: 'bounceInLeft', rightCol: 'bounceInRight'}}
              title="SpeedVocab (ReactJS)"
              date="June 2016 - July 2016"
              description="I rebuilt SpeedVocab to learn ReactJS. But this time, instead of re-inventing the wheel, I integrateed Quizlet into my application and added what it didn't have: Word usage and unlimited images. I also practiced the behavior of good UX."
              links={{
                website: 'http://chuson1996.herokuapp.com',
                github: 'github.com/chuson1996/SpeedVocab-React'
              }}
              skills={['ReactJS', 'Webpack', 'Redux']}
              images={[{
                src: require('./speedvocab-react-mobile.png'),
                platform: 'mobile'
              }, {
                src: require('./speedvocab-react-desktop.png'),
                platform: 'desktop'
              }]} />

            <ProjectSection
              animation={{ leftCol: 'fadeInRight', rightCol: 'fadeInLeft'}}
              title="SpeedVocab (Angular)"
              date=""
              description="I built this project to serve the purpose of passing my Finnish exam."
              links={{
                website: 'http://chuson.herokuapp.com/',
                github: 'https://github.com/chuson1996/SpeedVocab'
              }}
              skills={['AngularJS', 'Grunt']}
              images={[{
                src: require('./speedvocab-angular-desktop.png'),
                platform: 'desktop'
              }, {
                src: require('./speedvocab-angular-tablet.png'),
                platform: 'mobile'
              }]} />
          </div>
        </div>
      </div>
    );
  }
}
