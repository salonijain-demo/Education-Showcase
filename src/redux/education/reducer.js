import {ENTER_NAME, ADD_EDUCATION} from './type';

const initialState = {
  name: '',
  education: [{
    university: 'Showcase University',
    grade: 'A',
    field: 'Computer Science',
    degree: 'BE',
    startYear: 'July 2015',
    endYear: 'May 2019'
  }]
}

const Reducer = (state=initialState,action) => {
  switch(action.type){
    case ENTER_NAME: return{
      ...state, name: action.payload
    }
    case ADD_EDUCATION: return{
      ...state,
      education: initialState.education.push(action.payload)
    }
    default: return state
  }
}

export default Reducer;