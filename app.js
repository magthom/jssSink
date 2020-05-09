const amount = 50;
// this amount will not change

var num1 = 5;
var num2 = 4;
var sum = num1 + num2;
// computed 5 and 4

function sayHello() {
    alert("Hello World!");
}


// checkAge("Charles", 21);
// checkAge("Abby", 27);
// checkAge("James", 18);
// checkAge("John", 17);
        

var veggies = ['corn', 'carrots', 'squash'];
for (let x = 0; x < veggies.length; x++) {
console.log(veggies[x])
};

var pet = {
    name: 'bobie',
    breed: 'cat',
};
console.log(pet);

let friends = [ 
    {
        name: "maggie",
        age: 27
    },
    {
        name: "madelyn",
        age: 20
    },
    {   name: "lucie",
        age: 26
    },
    {
        name: "sophie",
        age: 9
    },
    {
        name: "anna",
        age: 20
    }
];
console.log(friends.length);

function checkAge(name, age) {
    if (age < 21) {
        console.log( name + " is not old enough to view this page.");
        alert("Sorry, " + name + " you are not old enough to view this page!");
    } else {
        console.log( name + " is old enough to view this page.");
    }}
checkAge(friends[0].name, friends[0].age);
checkAge(friends[1].name, friends[1].age);
checkAge(friends[2].name, friends[2].age);
checkAge(friends[3].name, friends[3].age);
checkAge(friends[4].name, friends[4].age);


