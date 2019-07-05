import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <h4 className="names">
          <a
            className="footerLinks"
            href="https://www.linkedin.com/in/lauren-carne-306a2a13/"
            target="_blank"
          >
            Lauren Carne
          </a>
          &
          <a
            className="footerLinks"
            href="https://www.linkedin.com/in/miao-shan-a60b2621/"
            target="_blank"
          >
            Miao Shan
          </a>
        </h4>
        <h5 className="copyright"> &copy; Copyright 2019 Flatiron School </h5>
      </footer>
    );
  }
}

export default Footer;
