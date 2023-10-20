import { useVotesContext } from '../../store/index';


const Total = () => {
  
  const { state, dispatch } = useVotesContext();

  const handleClick = () => {
    dispatch({type: 'INCREMENT_CAND2'})
  }

  return(
    <>
      <p1>{state.votesCand2}</p1>
      <button className="votebox" onClick={handleClick} >
        Cand 2
      </button>
    </>
  )


}

export default Cand2