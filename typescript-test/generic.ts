// Generics

const a: Array<number> = [1, 2, 3]

let state: any

function setState<T>(s: T){
  state = s
}

function getState<T>(): T {
  return state
}

setState<number>(5)
getState<number>()