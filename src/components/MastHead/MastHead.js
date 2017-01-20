import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import update from 'react-addons-update';
import Button from 'react-bootstrap/lib/Button';
import Image from 'react-bootstrap/lib/Image';
import { TypewriterText } from 'components';

const animate = (val) => spring(val, { stiffness: 32, damping: 26 });

export default class SegmentEffect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      perspectiveOrigin: {
        x: 50,
        y: 50
      },
      effect: {
        shadowOpacity: 0,
        z: 0
      },
      segmentsOffset: [
        {
          top: 12,
          left: 70,
          width: 20,
          height: 10
        },
        {
          top: 12,
          left: 6,
          width: 30,
          height: 30
        },
        {
          top: 75,
          left: 15,
          width: 40,
          height: 20
        },
        {
          top: 30,
          left: 40,
          width: 40,
          height: 40
        }
      ]
    };
  }

  componentDidMount() {
    this.startAnimation();
    window.addEventListener('mousemove', this.onMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.onMouseMove);
  }

  onMouseMove = (e) => {
    // console.log(e.screenX, e.screenY);
    const perspectiveOrignX = 100 - Math.floor(e.screenX / window.innerWidth * 100);
    const perspectiveOrignY = 100 - Math.floor(e.screenY / window.innerHeight * 100);
    this.setState(update(this.state, {
      perspectiveOrigin: {
        $merge: {
          x: spring(perspectiveOrignX),
          y: spring(perspectiveOrignY)
        }
      }
    }));
  };

  startAnimation() {
    this.setState(update(this.state, {
      effect: {
        $merge: {
          shadowOpacity: animate(1),
          z: animate(20)
        }
      }
    }));
  }


  render() {
    const s = require('./MastHead.scss');
    return (
      <div className={`${s.segmenter} ${s.mastHead}`}>
        <div className={s.segmenter__background}>
        </div>
        <Motion
          style={this.state.effect}>
            {(style) =>
              <Motion style={this.state.perspectiveOrigin}>
                {({x, y}) =>
                  <div className={`${s.segmenter__pieces} hidden-xs`}
                    style={{
                      perspectiveOrigin: `${x}% ${y}%`
                    }}>
                    { this.state.segmentsOffset.map(({ top, left, width, height }, key) =>
                      <div key={key} className={s.segmenter__piece_wrap} style={{
                        transform: `translateZ(${style.z}px)`
                      }}>
                        <div className={s.segmenter__shadow}
                          style={{
                            top: `${top}%`,
                            left: `${left}%`,
                            width: `${width}%`,
                            height: `${height}%`,
                            opacity: style.shadowOpacity
                          }}></div>
                        <div className={s.segmenter__piece}
                          style={{
                            WebkitClipPath: `polygon(${left}% ${top}%, ${left + width}% ${top}%, ${left + width}% ${top + height}%, ${left}% ${top + height}%)`,
                            clipPath: `polygon(${left}% ${top}%, ${left + width}% ${top}%, ${left + width}% ${top + height}%, ${left}% ${top + height}%)`
                          }}></div>
                      </div>
                    )}
                  </div>
                }
              </Motion>
            }
          </Motion>
          <div className={s.segmenter__body}>
            <div className={s.content}>
              <Image className={s.myFace} src={require('./myFace.jpg')} thumbnail responsive />
              <h2>
                Chu Hoang Son
              </h2>
              <h4>
                <TypewriterText text="Front-end Developer" />
              </h4>
              <br/><br/>
              <a target="_blank" href="https://www.facebook.com/sonchu1996" style={{ borderBottom: 0 }}>
                <Button bsStyle="info" className="hvr-sweep-to-top">
                  <i className="fa fa-facebook m-l-3"></i>
                </Button>
              </a>
              <a target="_blank" href="https://github.com/chuson1996" style={{ borderBottom: 0 }}>
                <Button bsStyle="default" className="m-l-10 hvr-sweep-to-top">
                  <i className="fa fa-github m-l-3"></i>
                </Button>
              </a>
              <a target="_blank" href="https://fi.linkedin.com/in/chu-hoang-son-b92499a5" style={{ borderBottom: 0 }}>
                <Button bsStyle="primary" className="m-l-10 hvr-sweep-to-top">
                  <i className="fa fa-linkedin m-l-3"></i>
                </Button>
              </a>
            </div>
          </div>
      </div>
    );
  }
}
