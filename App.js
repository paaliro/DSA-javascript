
// Question No.09
// let amount = Number(prompt("What is the Final Amount ?"))
// let discount = 0;

// if (amount > 0 && amount <= 5000) {
//     discount = 0;
// } else if (amount > 5000 && amount <= 7000) {
//     discount = 5;
// } else if (amount > 7000 && amount <= 9000) {
//     discount = 10;
// } else if (amount > 9000) {
//     discount = 20;
// } console.log("Payable amount:", amount - Math.floor((discount * amount) / 100));


// Question No.11

// let unit = Number(prompt("Enter electricity unit ?"))
// let amount = 0;

// if (unit > 400) {
//     amount = (unit - 400) * 13;
//     unit = 400;
// }
// if (unit > 200 && unit <= 400) {
//     amount += (unit - 200) * 8;
//     unit = 200;
// }
// if (unit > 100 && unit <= 200){
//     amount += (unit - 100) * 6;
//     unit = 100;
// }
// amount += unit * 4;
// console.log("Total amount to be paid:", amount);


// 09.05.2025

// Question No.12 

// let amount = 790;

// if (amount >= 500) {
//     console.log("500 notes :", Math.floor(amount/500));
//     amount = amount % 500;   

// }
// if (amount >= 200) {
//     console.log("200 notes :", Math.floor(amount/200));
//     amount = amount % 200;   

// }
// if (amount >= 100) {
//     console.log("100 notes :", Math.floor(amount/100));
//     amount = amount % 100;   

// }
// if (amount >= 50) {
//     console.log("50 notes :", Math.floor(amount/50));
//     amount = amount % 50;   

// }
// if (amount >= 20) {
//     console.log("20 notes :", Math.floor(amount/20));
//     amount = amount % 20;   

// }
// if (amount >= 10) {
//     console.log("10 notes :", Math.floor(amount/10));
//     amount = amount % 10;   

// }
// if (amount >= 5) {
//     console.log("5 coins :", Math.floor(amount/5));
//     amount = amount % 5;   

// }
// if (amount >= 2) {
//     console.log("2 coins :", Math.floor(amount/2));
//     amount = amount % 2;   

// }
// if (amount === 1) {
//     console.log("1 coins :", amount);
// }

// Ternary Operator
// ?(condition): true : false

// Nested ternary operator 



// (03.16.2025)
// Question No.13 : Sum of n natural numbers and factorial of numbers

var pr = prompt("kaha takk karvaoge ?");
var n = Number(pr);

if (pr === null) {
    console.log("The command is Cancelled.");
}
else {
    if (isNaN(n)) {
        console.log("Please enter a valid number.");
    } else {
        if (n > 0) {
            var fact = 0;
            for (var i = 1; i <= n; i++) {
                fact = fact + i; 
            }
            console.log("fact :", fact);
            
        } else {
            console.log("Number should be positive and greater than zero.");
        }
    }   
}
