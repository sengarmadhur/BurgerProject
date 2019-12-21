import React from 'react';
import classes from './Navigationitems.css';
import Navigationitem from './Navigationitem/Navigationitem';

const Navigationitems=(props)=>(
  <ul className={classes.Navigationitems}>
      <Navigationitem link="/" active>Burger Builder</Navigationitem>
      <Navigationitem link="/" >CheckOut</Navigationitem>
  </ul>
);

export default Navigationitems;
