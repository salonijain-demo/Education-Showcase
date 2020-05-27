import React,{ Component } from 'react';
import Button from '../containers/Button';
import Input from '../containers/Input';
import { add_education } from '../redux/education/action';
import {connect} from 'react-redux';
import '../styles/education.css';
import {auto_complete} from '../api';
import Axios from 'axios';
import AsyncSelect from 'react-select/async';

let options=[]
let filterColors = []
let promiseOptions = []

class ModalContent extends Component{
  state={
    university: '',
    grade: '',
    degree: '',
    startYear: '',
    endYear: '',
    selected: null,
    inputValue: ''
  }
  
  handleEvent = event => {
    this.setState({[event.target.name]:event.target.value})
  }
  add = () => {
    this.props.add(this.state);
    this.props.toggle()
  }
  componentDidMount(){
    Axios.get(auto_complete+'middle')
    .then(res=>{
      res.data.map(university=>{
        options.push({label:university.name, value:university.name})
      })
    })
  }
  handleChange = selected => {
    this.setState({
      selected: selected,
      university: selected.value
    },()=>{
      console.log('university',this.state.university)
    });
  }
  handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, '');
    this.setState({ inputValue });
    return inputValue;
  };
  render(){
    filterColors = (inputValue) => {
      return options.filter(i =>
        i.label.toLowerCase().includes(inputValue.toLowerCase())
      );
    };
    promiseOptions = inputValue =>
    new Promise(async resolve => {
      if(inputValue){
      await Axios.get(auto_complete+inputValue)
      .then(res=>{
        res.data.map(university=>{
          options.push({label:university.name, value:university.name})
        })
      })
      }
      setTimeout(() => {
        resolve(filterColors(inputValue));
      }, 1000);
    })
    
    return(
      <div>
        <h2 className='education'>Add Your Education</h2>
        <div className='col-lg-12'>
            <h5 className='col-lg-6'>Name of Your College/University:</h5>
            <div className='col-lg-6'>
              <AsyncSelect cacheOptions defaultOptions
              onChange={this.handleChange} loadOptions={promiseOptions} />
            </div>
            <h5 className='col-lg-6'>Field of Study:</h5>
            <div className='col-lg-6'>
              <Input type='text' name='field' width='100%' value={this.state.field} onChange={this.handleEvent}></Input>
            </div>
            <h5 className='col-lg-6'>Your Grade:</h5>
            <div className='col-lg-6'>
              <Input type='text' name='grade' width='100%' value={this.state.grade} onChange={this.handleEvent}></Input>
            </div>
            <h5 className='col-lg-6'>Degree:</h5>
            <div className='col-lg-6'>
              <Input type='text' name='degree' width='100%' value={this.state.degree} onChange={this.handleEvent}></Input>
            </div>
            <h5 className='col-lg-6'>Start Year:</h5>
            <div className='col-lg-6'>
              <Input type='text' name='startYear' width='100%' value={this.state.startYear} onChange={this.handleEvent}></Input>
            </div>
            <h5 className='col-lg-6'>End Year:</h5>
            <div className='col-lg-6'>
              <Input type='text' name='endYear' width='100%' value={this.state.endYear} onChange={this.handleEvent}></Input>
            </div>
        </div>
        <div className='footer'>
          <Button backgroundColor='green'onClick={this.add}>Add</Button>{this.props.education.university}
          <Button backgroundColor='gray' onClick={this.props.toggle}>Cancel</Button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  education: state.education
})
const mapDispatchToProps = {
  add: add_education
}

export default connect(mapStateToProps,mapDispatchToProps)(ModalContent);