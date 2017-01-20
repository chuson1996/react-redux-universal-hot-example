import React, { Component, PropTypes } from 'react';
import cln from 'classnames';

export default class SketchSVG extends Component {
  static propTypes = {
    className: PropTypes.string
  };

  render() {
    const { className, ...rest } = this.props;
    const styles = require('./SketchSVG.scss');
    return (
      <svg width="992px" height="896px" viewBox="0 0 992 896" version="1.1"
       className={cln(className, styles.sketchSVG)} {...rest}>
        <defs>
          <linearGradient className={styles.lineGradient1} x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
            <stop className={styles.c1} offset="0%"></stop>
            <stop className={styles.c2} offset="35.9011907%"></stop>
            <stop className={styles.c3} offset="100%"></stop>
          </linearGradient>
          <polygon id="path-2" points="218.981268 30.0427748 497.787374 0.0209018586 775.00273 30.0427748 993.002323 320.076494 497 896.061096 0.953857422 320.076494"></polygon>
          <linearGradient className={styles.lineGradient4} x1="0%" y1="14.9661404%" x2="100%" y2="100%" id="linearGradient-4">
            <stop className={styles.c1} offset="0%"></stop>
            <stop className={styles.c2} offset="100%"></stop>
          </linearGradient>
          <linearGradient className={styles.lineGradient5} x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-5">
            <stop className={styles.c1} offset="0%"></stop>
            <stop className={styles.c2} offset="100%"></stop>
          </linearGradient>
          <linearGradient className={styles.lineGradient6} x1="28.7540427%" y1="30.6154677%" x2="94.1091651%" y2="10.6488517%" id="linearGradient-6">
            <stop className={styles.c1} offset="0%"></stop>
            <stop className={styles.c2} offset="100%"></stop>
          </linearGradient>
          <linearGradient className={styles.lineGradient7} x1="75.6875406%" y1="75.3560649%" x2="6.29709175%" y2="100%" id="linearGradient-7">
            <stop className={styles.c1} offset="0%"></stop>
            <stop className={styles.c2} offset="100%"></stop>
          </linearGradient>
          <linearGradient className={styles.lineGradient8} x1="100%" y1="100%" x2="0%" y2="50%" id="linearGradient-8">
            <stop className={styles.c1} offset="0%"></stop>
            <stop className={styles.c2} offset="100%"></stop>
          </linearGradient>
          <linearGradient className={styles.lineGradient9} x1="75%" y1="25%" x2="75%" y2="98.5957753%" id="linearGradient-9">
            <stop className={styles.c1} offset="0%"></stop>
            <stop className={styles.c2} offset="100%"></stop>
          </linearGradient>
          <linearGradient className={styles.lineGradient10} x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-10">
            <stop className={styles.c1} offset="0%"></stop>
            <stop className={styles.c2} offset="100%"></stop>
          </linearGradient>
          <linearGradient className={styles.lineGradient11} x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-11">
            <stop className={styles.c1} offset="0%"></stop>
            <stop className={styles.c2} offset="100%"></stop>
          </linearGradient>
        </defs>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fill-rule="evenodd">
          <g id="Icon-512---Shapes" transform="translate(-16.000000, -64.000000)">
            <g id="Icon-512" transform="translate(15.000000, 64.000000)">
              <mask id="mask-3" fill="white">
                <use xlinkHref="#path-2"></use>
              </mask>
              <use id="Mask" fill="url(#linearGradient-1)" xlinkHref="#path-2"></use>
              <polygon id="Bottom-Right-Shape" fill="url(#linearGradient-4)" mask="url(#mask-3)" transform="translate(745.000763, 607.978577) scale(1, -1) translate(-745.000763, -607.978577) " points="791.031616 895.961609 993.001526 895.961609 497 319.995544"></polygon>
              <polygon id="Bottom-Left-Shape" fill="url(#linearGradient-4)" mask="url(#mask-3)" transform="translate(249.000000, 608.051453) scale(-1, -1) translate(-249.000000, -608.051453) " points="295.03009 896.102905 497 896.102905 1 320"></polygon>
              <polygon id="Bottom-center-shape" fill="url(#linearGradient-5)" mask="url(#mask-3)" transform="translate(496.971924, 608.032013) scale(1, -1) translate(-496.971924, -608.032013) " points="202.971924 896.055908 790.971924 895.907532 497.015139 320.008118"></polygon>
              <polygon id="Bottom-Left-line" className={styles.fillOrange} mask="url(#mask-3)" transform="translate(349.993531, 608.032013) scale(1, -1) translate(-349.993531, -608.032013) " points="202.971924 896.055908 213.051679 896.055908 497.015139 320.008118"></polygon>
              <polygon id="Bottom-Right-line" className={styles.fillOrange} mask="url(#mask-3)" transform="translate(644.021608, 608.023895) scale(-1, -1) translate(-644.021608, -608.023895) " points="497 896.047791 507.079755 896.047791 791.043215 320"></polygon>
              <polygon id="Top-Right-Shape" fill="url(#linearGradient-6)" mask="url(#mask-3)" points="774.990885 30.0035548 791.052429 319.986694 497.798828 0.0385742188"></polygon>
              <polygon id="Right-Shape" fill="url(#linearGradient-7)" mask="url(#mask-3)" points="774.990885 30.0035548 791.052429 319.986694 992.994141 319.986694"></polygon>
              <polygon id="Righ-Line" fill="url(#linearGradient-8)" mask="url(#mask-3)" points="790.516057 309.996831 791.052429 319.986694 992.994141 319.986694"></polygon>
              <polygon id="Top-Right-Line" fill="url(#linearGradient-9)" mask="url(#mask-3)" points="781.03583 319.986694 791.052429 319.986694 774.991586 30.0987096"></polygon>
              <polygon id="Left-shape" fill="url(#linearGradient-7)" mask="url(#mask-3)" transform="translate(110.002360, 174.991570) scale(-1, 1) translate(-110.002360, -174.991570) " points="1.00146484 30 17.0630091 319.98314 219.003256 319.98314"></polygon>
              <polygon id="Left-Line" fill="url(#linearGradient-8)" mask="url(#mask-3)" transform="translate(102.239042, 314.994931) scale(-1, 1) translate(-102.239042, -314.994931) " points="1 310 1.5363725 319.989863 203.478084 319.989863"></polygon>
              <polygon id="Top-Left-shape" fill="url(#linearGradient-6)" mask="url(#mask-3)" transform="translate(350.389424, 159.992287) scale(-1, 1) translate(-350.389424, -159.992287) " points="481.717303 29.9649806 497.778847 319.94812 203 0.0364540502"></polygon>
              <polygon id="Top-Left-line" fill="url(#linearGradient-9)" mask="url(#mask-3)" points="203.044243 319.887985 213.060843 319.887985 218.997118 30.0017014"></polygon>
              <polygon id="Top-Centher-shape" fill="url(#linearGradient-10)" mask="url(#mask-3)" points="203.008423 319.986694 791.008423 319.986694 497.776767 0.0385742188"></polygon>
              <path d="M519.845406,24.117896 L791.008423,319.986694 L203.008423,319.986694 L472.952285,26.9836199 L222.008423,310.038574 L772.008423,310.038574 L519.845406,24.117896 Z" id="Top-Center-line" fill="url(#linearGradient-11)" mask="url(#mask-3)"></path>
            </g>
          </g>
        </g>
      </svg>
    );
  }
}
