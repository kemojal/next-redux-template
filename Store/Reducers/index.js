import { Data } from "../../Data";

const initialState = {
  Data, 
  score: 0, 
  question: Data[Math.floor(Math.random() * Data.length)], 
  n: 1,
  //disableBtn: false
}
export default function (state = initialState, action){
  let randN = Math.floor(Math.random() * state.Data.length)
  switch (action.type) {
    case "CHANGE_QUESTION":
      return  {...state, question: state.Data[randN], n:state.n+1}
    case "ADD_SCORE":
      return  {...state, score: state.score +280, question: state.Data[randN], n:state.n+1}
    default:
      return state;
  }
};