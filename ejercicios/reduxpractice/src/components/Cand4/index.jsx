import { useVotesContext } from '../../store/index';

const Cand4 = () => {
  
  const { state, dispatch } = useVotesContext();

  const handleClick = () => {
    dispatch({type: 'INCREMENT_CAND4'})
  }

  return(
    <>
      <h2>{state.votesCand4}</h2>
      <button className="votebox" onClick={handleClick} >
        Cand 4
      </button>
    </>
  )


}

export default Cand4