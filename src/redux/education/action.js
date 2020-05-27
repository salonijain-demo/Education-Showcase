import {ENTER_NAME, ADD_EDUCATION} from './type';

export const enter_name = (name) => {
  return{
    type: ENTER_NAME,
    payload: name,
  }
}

export const add_education = (education) => {
  return{
    type: ADD_EDUCATION,
    payload: education
  }
}