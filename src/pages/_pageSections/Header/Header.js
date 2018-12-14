import React, { Fragment } from 'react';
import './Header.css';

const Header = () => (
    <Fragment>
      <header className="Header__header">
        <span>
          Header&nbsp;
          <a
            className="Header__link"
            href="https://botbotdot.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            botbotdot.com
          </a>
        </span>
      </header>
    </Fragment>
)

export default Header;
