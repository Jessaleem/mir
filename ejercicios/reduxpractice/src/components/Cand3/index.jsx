import { useVotesContext } from '../../store/index';

const Cand3 = () => {
  
  const { state, dispatch } = useVotesContext();

  const handleClick = () => {
    dispatch({type: 'INCREMENT_CAND3'})
  }

  return(
    <>
      <h2>{state.votesCand3}</h2>
      <button className="votebox" onClick={handleClick} >
        Cand 3
      </button>
    </>
  )


}

export default Cand3