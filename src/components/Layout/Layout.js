import React,{Component} from 'react';
import Aux from '../../hoc/Auxx';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class  Layout extends Component{
  state={
    showSideDrawer:true
  }
  sideDrawerClosedHandler=()=>{
    this.setState({showSideDrawer:false});
  }
  render(){
    return(
      <Aux>
      <SideDrawer
        open = {this.state.showSideDrawer}
      closed={this.sideDrawerClosedHandler}/>
      <Toolbar/>
        <main className={classes.Content}>
          {this.props.children}
        </main>

    </Aux>
  );
  }
}

export default Layout;
