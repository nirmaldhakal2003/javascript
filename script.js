// a variable is a container to store data
// a variable as if it was the value that it contains.

let name = "Nirmal Dhakal";
let age = 21;
let student = true;


// console ma print garni tarika
console.log("Hello ", name);
console.log("you are ",age , " years old" );
console.log("Enrolled:", student)


// website ko page ma print garni tarika 
document.getElementById("p1").innerHTML = "Hello " + name;
document.getElementById("p2").innerHTML = "you are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled:" + student;