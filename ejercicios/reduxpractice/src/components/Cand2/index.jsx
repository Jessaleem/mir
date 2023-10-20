import { useVotesContext } from '../../store/index';


const Cand2 = () => {
  
  const { state, dispatch } = useVotesContext();

  const handleClick = () => {
    dispatch({type: 'INCREMENT_CAND2'})
  }

  return(
    <>
      <h2>{state.votesCand2}</h2>
      <button className="votebox" onClick={handleClick} >
        Cand 2
      </button>
    </>
  )


}

export default Cand2