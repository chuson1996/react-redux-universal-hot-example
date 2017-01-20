import React, { Component, PropTypes } from 'react';
import ImageZoom from 'react-medium-image-zoom';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Image from 'react-bootstrap/lib/Image';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import Waypoint from 'react-waypoint';
import c from 'classnames';
import {
  AngularSVG,
  GruntSVG,
  WebpackSVG,
  JadeSVG,
  ReactSVG,
  ReduxSVG,
  NodeSVG,
  SketchSVG } from 'components/SVGs';

export default class ProjectSection extends Component {
  static propTypes = {
    skills: PropTypes.array,
    images: PropTypes.array,
    title: PropTypes.any,
    description: PropTypes.any,
    animation: PropTypes.object,
    date: PropTypes.string,
    reverseOrder: PropTypes.bool,
    links: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      inView: false
    };
  }

  flyIn = () => {
    this.setState({ inView: true });
  };

  render() {
    const styles = require('./ProjectSection.scss');
    const {
      skills,
      images,
      animation,
      date,
      reverseOrder,
      links
    } = this.props;
    let { description, title } = this.props;
    if (typeof description === 'string') {
      description = <p>{description}</p>;
    }
    if (typeof title === 'string') {
      title = <h3>{title}</h3>;
    }

    const firstColProps = {
      xs: 12,
      sm: 12,
      md: 6,
    };
    const secondColProps = {
      xs: 12,
      sm: 12,
      md: 6,
    };

    if (!images || !images.length) {
      firstColProps.mdOffset = 3;
    }
    if (reverseOrder) {
      firstColProps.mdPush = 6;
      secondColProps.mdPull = 6;
    }

    const skillsSVG = skills.map((skill) => {
      switch (skill) {
        case 'AngularJS':
          return <AngularSVG className={`${styles.skillLogo} hvr-float`} />;
        case 'Webpack':
          return <WebpackSVG className={`${styles.skillLogo} hvr-float`} />;
        case 'Grunt':
          return <GruntSVG className={`${styles.skillLogo} hvr-float`} />;
        case 'Jade':
          return <JadeSVG className={`${styles.skillLogo} hvr-float`} />;
        case 'ReactJS':
          return <ReactSVG className={`${styles.skillLogo} hvr-float`} />;
        case 'Redux':
          return <ReduxSVG className={`${styles.skillLogo} hvr-float`} />;
        case 'NodeJS':
          return <NodeSVG className={`${styles.skillLogo} hvr-float`} />;
        case 'Sketch':
          return <SketchSVG className={`${styles.skillLogo} hvr-float`} />;
        default:
          throw new Error(`Unknow skill ${skill}`);
      }
    });
    return (
      <Row className={styles.projectSection}>
        <Waypoint onEnter={this.flyIn} />
        <Col {...firstColProps}
          className={c('animated', { [animation.leftCol]: this.state.inView })}
          // data-scroll-watch
          // data-animate={animation.leftCol}
        >
          {title}
          <p>{date}</p>
          {description}
          { links &&
            <p>
              { links.website && <span>
                  <i className="fa fa-globe"></i> <a href={links.website}>{links.website}</a>
                </span> }
              { links.website && links.github && <br /> }
              { links.github && <span>
                  <i className="fa fa-github"></i> <a href={links.github}>{links.github}</a>
                </span> }
            </p>
          }
          <div className="m-b-20">
            { skills && !!skills.length && skills.map((skill, index) =>
              <OverlayTrigger key={index} placement="bottom" overlay={<Tooltip id="tooltip">{skill}</Tooltip>}>
                { skillsSVG[index] }
              </OverlayTrigger>
            )}
          </div>
        </Col>
        { images && !!images.length &&
          <Col {...secondColProps}
            className={c(styles.imagesContainer, { [styles.reverseOrder]: reverseOrder }, 'animated', { [animation.rightCol]: this.state.inView })}
          >
            { images.map(({ className, platform, src, ...others }, index) =>
              <ImageZoom
                key={index}
                image={{
                  src,
                  className: c('img-thumbnail', className, { [styles.imageDesktop]: platform === 'desktop', [styles.imageMobile]: platform === 'mobile' })
                }}
                zoomImage={{
                  src
                }} />
              // <Image
              //   key={index}
              //   src={src}
              //   className={c(className, { [styles.imageDesktop]: platform === 'desktop', [styles.imageMobile]: platform === 'mobile' })}
              //   thumbnail
              //   {...others} />
            )}
          </Col>
        }
      </Row>
    );
  }
}
