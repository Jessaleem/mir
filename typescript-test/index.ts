let str: string = "Hola!" // inferencia de tipos
console.log(typeof str)

// number
// string
// boolean
// null
// undefined
// objects
// any -> valor por defecto que utiliza cuando no sabe de qué tipo es
// void -> se utiliza cuando las funciones no retornan nada

type Person = {
  name: string
  age?: number
}

function hello(obj: Person): string {
  return `Hola ${obj.name}`
}

console.log(hello({name: "pedro", age: 46}))

str = ""
if (str){
  console.log("Entró")
}

const arr: number[] = [1, 2 , 3]
// const arr: Array<number>

const people: Person[] = [{name:"pedro", age:30}, {name:"Maria"}]