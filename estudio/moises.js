// function duplicar(arr){
//   let array2=[];

//   for (let i=0; i <= arr.length-1; i++) {
//     array2.push(arr[i]*2);
//   }
//   return(array2);
// }
// console.log(duplicar([1, 2, 3]))

function duplicar(arr){
  let array2=[];

  for (let i=0; i <= arr.length-1; i++) {
    
    if (arr[i] % 2 == 0) {
      array2.push(arr[i]);
      console.log(array2)
    }
  }
  return(array2)
}
console.log(duplicar([1, 2, 3, 4]))

// const usuario = {
//   nombre: "Moises",
//   apellido: "Molina",
//   edad: 40,
//   activo: true,
//   hobbies: ["natación", "futbol"],
//   cuentaBancaria: {
//     banco: "Bancolombia",
//     cuenta: 000
//   },
//   estatura: 1.80
// }

// console.log(usuario)
// console.log(usuario['nombre'] +' '+ usuario.apellido)
// console.log(usuario.hobbies[1])
// console.log(usuario.cuentaBancaria.cuenta)

// delete usuario.edad

// console.log(usuario)

// usuario.hijos=1;

// console.log(usuario)

// usuario.apellido="Sequeda";

// console.log(usuario)

// for (let key in usuario){
//   console.log(key +": "+ usuario[key])
// }