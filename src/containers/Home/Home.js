import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { ProjectSection, MastHead } from 'components';

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

        <div className={styles.masthead}>
          <div>
            <Row>
              <Col xs={12}>
                <MastHead/>
              </Col>
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
                  <p>2nd place</p>
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
                  <p>2nd place</p>
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
            <h2>SIDE PROJECTS</h2>

            <ProjectSection
              animation={{ leftCol: 'fadeInRight', rightCol: 'fadeInLeft'}}
              title="FRODEV"
              date="November 2016"
              description="To alleviate the hurdle of not knowing where or what to learn about front end development, Front-end Bookmark will provide developers with hundreds of resources for inspiration and further enriching their own knowledge."
              links={{
                website: 'https://frodev.herokuapp.com',
                github: 'https://github.com/chuson1996/frontend-advisor'
              }}
              skills={['NodeJS', 'ReactJS', 'Redux', 'Sketch']}
              images={[{
                src: require('./frontendbookmark-mobile.png'),
                platform: 'mobile'
              }, {
                src: require('./frontendbookmark-desktop.png'),
                platform: 'desktop'
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
              description="A web app to study vocabulary using Quizlet API."
              links={{
                website: 'http://speedvocab2.herokuapp.com',
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
          </div>
        </div>

        <div className={`${styles.aboutMe}`}>
          <div className="container">
            <Row>
              <Col xs={12}>
                <h1>WHO AM I?</h1>
                <p>I am that person who's deeply in love with front-end development. Though things change and evolve notably fast in this field but that's one of the reasons why I love it. I genuinely believe that learning web development is fascinating. Thus I share my work on social media.</p>

                <h2><a target="_blank" href="https://www.youtube.com/channel/UCE7Y95L1btz6qQkfyFfYFQA">Youtube (Latest Video)</a></h2>
                <iframe src="https://www.youtube.com/embed/SJxkVVJZ-7E" frameborder="0" allowfullscreen></iframe>


                <br/><br/><br/>
                <h2><a target="_blank" href="https://www.instagram.com/code_everyday/">Instagram</a></h2>
                <ul className="juicer-feed" data-feed-id="code_everyday"></ul>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
