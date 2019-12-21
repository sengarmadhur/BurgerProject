import React ,{ Component} from 'react';
import Aux from '../../hoc/Auxx';
import Burger from '../../components/Burger/Burger';
import BuildControls from  '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES ={
  salad:15,
  cheese:20,
  bacon:25,
  meat:30,
}
class BurgerBuilder extends Component{
  state = {
    ingredients:{
      cheese:0,
      salad:0,
      bacon:0,
      meat:0,

    },
    totalprice:40,
    purchaseable:false,
    purchasing:false,
  }
  updatePurchaseState(ingredients){

    const sum =Object.keys(ingredients).map(
      igKey=>{
        return ingredients[igKey];
      }
    ).reduce((sum,el)=>{
      return sum+el;
    },0);
    this.setState({purchaseable:sum>0});
  }
  purchaseHandler=()=>{
    this.setState({purchasing:true});
  }
  purchaseCancelHandler=()=>{
    this.setState({purchasing:false});
  }
  purchaseContinueHandler=()=>{
    alert('You Continue!');
  }
  addIngredientHandler =(type)=>{
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount+1;
    const updatedIngredients ={
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;
    const oldprice = this.state.totalprice;
    const priceaddition = INGREDIENT_PRICES[type];
    const newprice = oldprice + priceaddition;
    this.setState({totalprice:newprice,ingredients:updatedIngredients});
    this.updatePurchaseState(updatedIngredients);

  }
  removeIngredientHandler =(type)=>{

    const oldCount = this.state.ingredients[type];
    if(oldCount<=0){
      return  ;
    }
    const updatedCount = oldCount-1;
    const updatedIngredients ={
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;
    const oldprice = this.state.totalprice;
    const pricededuction = INGREDIENT_PRICES[type];
    const newprice = oldprice - pricededuction;
    this.setState({totalprice:newprice,ingredients:updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  }
   render()
   {
     const disabledInfo ={
       ...this.state.ingredients
     };
     for(let key in disabledInfo){
       disabledInfo[key] = disabledInfo[key]<=0;
     }
      return (
        <Aux>
          <Modal show ={this.state.purchasing} modalClicked={this.purchaseCancelHandler}>
              <OrderSummary ingredients={this.state.ingredients}
              price = {this.state.totalprice}
              purchaseCancelled={this.purchaseCancelHandler}
              purchaseContinued={this.purchaseContinueHandler}/>
          </Modal>
          <Burger ingredients={this.state.ingredients}/>
          <BuildControls
          ingredientsAdded ={this.addIngredientHandler}
          ingredientsRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          purchaseable={this.state.purchaseable}
          ordered={this.purchaseHandler}
          price={this.state.totalprice}/>
        </Aux>
      );
   }

}
export default BurgerBuilder;
