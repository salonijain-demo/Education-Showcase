import React ,{Component, Fragment}from 'react';
import '../styles/education.css';

class EducationBody extends Component{
  education = []
  education = this.props.education
  render(){
    return(
      <Fragment>
      {this.education.reverse().map((study)=>(
        <div className='educationBody' key={study.index}>
          <h4>Graduate {study.field} @ {study.university}</h4>
          <h6>{study.startYear}-{study.endYear}</h6>
          <span>Completed {study.degree} degree with {study.grade} grade</span>
        </div>
      ))}
    </Fragment>
    )
  }
}
export default EducationBody