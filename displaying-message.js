let Name;
let age;
let email;
let phone;
 
document.getElementById("myButton").onclick = function(){
    Name = document.getElementById("name").value;
    age = document.getElementById("age").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;

    document.getElementById("p1").innerHTML = "Hello " + Name;
    document.getElementById("p2").innerHTML = Name + " you are " + age + " years old";
    document.getElementById("p3").innerHTML = "Your Email: " + email;
    document.getElementById("p4").innerHTML = "Your Phone: " + phone;
}
