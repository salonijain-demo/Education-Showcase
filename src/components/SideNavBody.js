import React ,{useState,Component}from 'react';
import '../styles/education.css';

class SideNavBody extends Component{
  education = []
  education = this.props.education
  render(){
    return(
      <div className='sideNavBody'>
       {this.education.reverse().map((study)=>(
         <div key={study.index}>
           <h4>{study.university}</h4>
           <h6>{study.field}</h6>
         </div>
        ))}
    </div>
    )
  }
}
export default SideNavBody