import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

const animate = (val) => spring(val, {
  stiffness: 258,
  damping: 35
});

export default class MouseFocus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: 0,
      top: 0
    };
  }

  componentDidMount() {
    window.addEventListener('mousemove', (e) => {
      this.setState({
        left: animate(e.screenX),
        top: animate(e.screenY)
      });
    });
  }

  render() {
    const s = require('./MouseFocus.scss');
    return (
      <Motion style={this.state}>
        {({ left, top }) => <div className={s.mouseCircle} style={{ left, top }}></div>}
      </Motion>
    );
  }
}
