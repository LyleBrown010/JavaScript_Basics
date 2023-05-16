function myFunction(){
    alert ("Hello! My name is Lyle !!")
};

// exercise 1.3 and 1.4 
console.log ('Hello World'); 

// exercise 2.1 

let name1; 

console.log(name1); 

let name2 = 'Lyle'; 

console.log(name2); 

// exercise 2.2 

const interestRate = 0.3; 
console.log(interestRate) 

// exercise 2.2 / second part 

const person = {
    name: 'timothy',  
    surname: 'Barry', 
    occupation: 'Idiot',
    age:12, 
    gender: 'ask jesus'

}; 
let{name, surname, occupation, age, gender} = person; 

console.log(name);
console.log(surname);
console.log(occupation);
console.log(age);
console.log(gender); 

// exercise 2.3 / third part 
let a, b, c; a=b=c=0; 
c--; 
document.write("The value of a is :", a + "<br/>"); 
document.write("The value of a is :", b + "<br/>"); 
document.write("The value of a is :", c + "<br/>"); 
