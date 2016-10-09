import React, { Component, PropTypes } from 'react';
import className from 'classnames';

export default class TypewriterText extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  };

  render() {
    const styles = require('./TypewriterText.scss');
    const { text } = this.props;
    const words = text.split(' ');
    const work = [];
    words.forEach((word) => {
      const splitWord = word.split('').map((char, index) => <i key={index}>{char}</i>);
      work.push(splitWord);
    });

    const formattedWords = work.map((word, index) => <span key={index}>{word}&nbsp;</span>);


    return (
      <span className={className(styles.animate, styles.typewriter)}>
        { formattedWords }
      </span>
    );
  }
}
