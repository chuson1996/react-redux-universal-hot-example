import React, { Component, PropTypes } from 'react';

export default class AngularSVG extends Component {
  static propTypes = {
    className: PropTypes.string
  };

  render() {
    const { className } = this.props;
    const styles = require('./AngularSVG.scss');
    const ratio = 165.908 / 175.75; // width/height
    const width = 165.908;
    const height = width / ratio;

    return (<svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        enable-background={`new 0 0 ${width} ${height}`}
        className={`${styles.angularSvg} ${className}`}>
      <g>
        <polygon fill="#B4B4B4" points="82.689,0 0,29.1 13.067,137.436 82.777,175.75 152.846,136.917 165.908,28.585  " />
        <polygon points="157.66,34.846 82.496,9.214 82.496,166.596 145.487,131.734  " className={styles.rightSide}/>
        <polygon points="9.279,35.308 20.476,132.197 82.495,166.596 82.495,9.211  " className={styles.leftSide}/>
        <path fill="#F3F3F3" d="M103.186,92.996l-20.69,9.675H60.689l-10.251,25.64l-19.067,0.354L82.496,14.929L103.186,92.996z    M101.186,88.125L82.633,51.396L67.415,87.493h15.08L101.186,88.125z"/>
        <polygon fill="#B4B4B4" points="82.495,14.929 82.632,51.396 99.9,87.521 82.534,87.521 82.495,102.648 106.508,102.671    117.731,128.668 135.975,129.006  "/>
      </g>
    </svg>);
  }
}
