import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import Navigationitems from '../Navigationitems/Navigationitems';
const toolbar =(props)=>(
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <Logo height="80%"/>
    <nav>
        <Navigationitems/>
     </nav>
  </header>

);

export default toolbar;
