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

function exponent(x,y){
    return x**y
}

function orderofops(u,v,w,x,y){
    return u-v*(w/x)*y+x/x
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
console.log('EXPONENT - 152^3 = 3,511,808');
console.log('Exponent - 152^3 =', exponent(152,3),'*');
print_div();
console.log('ORDER OF OPERATIONS: 500-4(6/3)*17+3/3 = 365');
console.log('Order of Operations: 500-4(6/3)*17+3/3 =', orderofops(500,4,6,3,17),'*');
print_div();