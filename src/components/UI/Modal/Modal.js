import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Auxx';
import BackDrop from '../Backdrop/BackDrop';

const modal=(props)=>(
  <Aux>
  <BackDrop show={props.show} clicked ={props.modalClicked}/>
  <div className={classes.Modal}
  style={{
    transform:props.show?'translateY(0)':'translateY(-100vh)',
    opacity:props.show?'1':'0'
  }}>
      {props.children}
  </div>
  </Aux>
);

export default modal;
