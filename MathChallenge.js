"use strict";

function print_title(){
    console.log('MathChallenge - JavaScript Edition');
    console.log('----------------------------------');
    console.log('');
}

function print_div(){
    console.log('------------------------------');
}

function addition(x,y){
    return x + y;
}

function subtraction(x,y){
    return x - y;
}

function multiplication(x,y){
    return x * y;
}

function division(x,y){
    return x / y;
}

print_title();
console.log('ADDITION: 12+37 = 49');
console.log('Addition: 12+37 =', addition(12,37),'*');
print_div();
console.log('SUBTRACTION: 219-89 = 130');
console.log('Subtraction: 219-89 =', subtraction(219,89),'*');
print_div();
console.log('MULTIPLICATION: 23 * 45 = 1035');
console.log('Multiplication: 23 * 45 =', multiplication(23,45),'*');
print_div();
console.log('DIVISION: 152400 / 20 = 7620');
console.log('Division: 152400 / 20 =', division(152400,20),'*');
print_div();