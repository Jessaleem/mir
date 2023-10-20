import { createContext, useContext, useReducer } from 'react';

const VotesContext = createContext();

const initialState ={
  votesCand1: 0,
  votesCand2: 0,
  votesCand3: 0,
  votesCand4: 0,
  total:0
}

function reducer(state, action){
  switch (action.type) {
    case 'INCREMENT_CAND1':{
      return {
        ...state,
        votesCand1: state.votesCand1 + 1,
        total: state.total + 1,
      }
    } 
    case 'INCREMENT_CAND2':{
      return {
        ...state,
        votesCand2: state.votesCand2 + 1,
        total: state.total + 1,
      }
    } 
    case 'INCREMENT_CAND3':{
      return {
        ...state,
        votesCand3: state.votesCand3 + 1,
        total: state.total + 1,
      }
    } 
    case 'INCREMENT_CAND4':{
      return {
        ...state,
        votesCand4: state.votesCand4 + 1,
        total: state.total + 1,
      }
    } 
    default:
    return state;
  } 
}


export const VoteProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const store = {
    state,
    dispatch,
  }

  return(
    <VotesContext.Provider value ={store}>
     {children} 
    </VotesContext.Provider>
  )
}

export const useVotesContext = () => {
  const context = useContext(VotesContext)
  if (context === undefined){
  }
  
  return context;
}









export default VotesContext;