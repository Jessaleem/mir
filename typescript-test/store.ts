
fuction createStore<T>() {
  let state = T

  function setState<T>(s: T){
    state = s
  }

  function getState<T>(): T {
    return state
  }
  return(
  setState,
  getState
  )
}

const store = createStore<number>()
