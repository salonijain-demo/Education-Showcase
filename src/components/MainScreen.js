import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { enter_name } from '../redux/education/action';
import { Redirect } from 'react-router-dom';
import Button from '../containers/Button';
import Input from '../containers/Input';

class MainScreen extends Component{
  state={ name:'', redirect:false }
  handleEvent = event => this.setState({[event.target.name]:event.target.value})
  enter = () => {
    this.props.enter(this.state.name)
    this.setState({redirect:true})
  }
  render(){
    if(this.state.redirect){
      return <Redirect to='/education' />
    }
    return(
      <div>
        <h2>Hi there! Welcome to your education showcase</h2>
        <h2>Type your name and click "Enter" below to begin!</h2>
        <Input type='text' name='name' value={this.state.name} onChange={this.handleEvent} placeholder='Your Name'></Input>
        <Button onClick={this.enter} backgroundColor='blue'>Enter</Button>
      </div>
    )
  }
}
const mapDispatchToProps = {
  enter:enter_name
}
export default connect(null,mapDispatchToProps)(MainScreen);