// console.log(hello)
// function hello() {
//   console.log("Hola Mundo");
// }

// hello();


// (function (name, surName) {
//   console.log(`${name} ${surName}`)
// }("Jessica", "Martinez"))

// const getCompleteName = function(name, surName) {
//   console.log(`${name} ${surName}`)
// }("Jessica", "Martinez")

// const fullName = (firstName, lastName) => firstName + " " +lastName
// console.log(fullName("Jessica", "Martinez"))

// const saludar = name => "hola " + name;
// console.log(saludar("Lucía"))

let person1 = {
  name: "jess",
  surname: "martinez",
  getFullName: function() {
    return `${this.name} ${this.surname}`
  }
}
console.log(person1.getFullName());

let person2 = {
  name: "jess",
  surname: "martinez",
  getFullName: () => {
    return `${this.name} ${this.surname}`
    console.log(this)
  }
}
console.log(person2.getFullName())

