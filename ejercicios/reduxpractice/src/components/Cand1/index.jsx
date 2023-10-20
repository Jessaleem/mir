import { useVotesContext } from '../../store/index';


const Cand1 = () => {
  
  const { state, dispatch } = useVotesContext();

  const handleClick = () => {
    dispatch({type: 'INCREMENT_CAND1'})
  }

  return(
    <>
      <h2>{state.votesCand1}</h2>
      <button className="votebox" onClick={handleClick} >
        Cand 1
      </button>
    </>
  )


}

export default Cand1