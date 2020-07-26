import styles from './navbar.module.scss';

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to="/profile/">Profile</Link>
        </li>
        <li>
          <Link to="/messages/">Messages</Link>
        </li>
        <li>
          <Link to="/news/">News</Link>
        </li>
        <li>
          <Link to="/music/">Music</Link>
        </li>
        <li>
          <Link to="/settings/">Settings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;