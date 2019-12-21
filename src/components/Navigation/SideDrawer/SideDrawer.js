import React from  'react';
import Logo from '../../Logo/Logo';
import Navigationitems from '../Navigationitems/Navigationitems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/BackDrop';
import Aux from '../../../hoc/Auxx';
const sideDrawer=(props)=>{
  let attachclass =[classes.SideDrawer,classes.Close];
  if(props.open){
    attachclass = [classes.SideDrawer,classes.Open];
  }
  return(
    <Aux>
    <Backdrop show ={props.open} clicked={props.closed}/>
    <div className={attachclass.join(' ')}>
        <Logo height="10%"/>
        <nav>
            <Navigationitems/>
        </nav>
    </div>
    </Aux>
  );
};

export default sideDrawer;
