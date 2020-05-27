import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from '../containers/Button';
import ModalContent from './ModalContent';
import StyleModal from '../containers/Modal';
import SideNavBody from './SideNavBody';
import EducationBody from './EducationBody';

class EducationScreen extends Component{
  state={
    open: false
  }
  toggle = () => {
    this.setState({
      open: !this.state.open
    })
  }
  render(){
    return(
      <div className='col-lg-12'>
        <div className='col-lg-12'>
          <h2>Welcome to {this.props.name}'s education page.</h2>
          <Button backgroundColor='gray' onClick={this.toggle}>Add new education</Button>
          <StyleModal isOpen={this.state.open} onBackgroundClick={this.toggle}
            onEscapeKeydown={this.toggle}>
            <ModalContent toggle={this.toggle}></ModalContent>
          </StyleModal>
        </div>
        <div className='col-lg-3'>
          <SideNavBody education={this.props.education}></SideNavBody>
        </div>
        <div className='col-lg-9'>
          <EducationBody education={this.props.education}></EducationBody>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  name: state.name,
  education: state.education
})
export default connect(mapStateToProps)(EducationScreen);