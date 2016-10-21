import React, { Component } from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

export default class Footer extends Component {
  static propTypes = {};

  render() {
    const styles = require('./Footer.scss');
    return (
      <div className={`well text-center m-b-0 ${styles.footer}`}>
        <Nav
          bsStyle="pills"
          justified
          activeKey={0}
          className={styles.footerLinks}>
          <NavItem className={`${styles.link} hvr-underline-from-center`} eventKey={3} href="https://www.facebook.com/holdmyhandifyoucan">Facebook</NavItem>
          <NavItem className={`${styles.link} hvr-underline-from-center`} eventKey={2} href="https://github.com/chuson1996">Github</NavItem>
          <NavItem className={`${styles.link} hvr-underline-from-center`} eventKey={1} href="https://fi.linkedin.com/in/chu-hoang-son-b92499a5">LinkedIn</NavItem>
        </Nav>
        © 2016 Chu Hoang Son - <a href="mailto:chuson1996@gmail.com">Contact</a>
      </div>
    );
  }
}
