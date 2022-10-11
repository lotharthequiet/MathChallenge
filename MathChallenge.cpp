#include <iostream>
#include <cmath>
using namespace std;

void print_title(){
    cout << "MathChallenge - C++ Edition" << endl;
    cout << "------------------------------" << endl;
    cout << "" << endl;
}

void print_div(){
    cout << "------------------------------" << endl;
}

int addition(int x, int y){
    return (x + y);
}

int subtraction(int x, int y){
    return (x - y);
}

int multiplication(int x, int y){
    return (x * y);
}

int division(int x, int y){
    return (x / y);
}

double exponent(int x, int y){
    return (pow(static_cast<double>(x), static_cast<double>(y)));
}

int main(){
    print_title(); 
    cout << "ADDITION: 12+37 = 49" << endl;
    cout << "Addtion: 12+37 = " << addition(12,37) << "*" << endl;
    print_div();
    cout << "SUBTRACTION: 219-89 = 130" << endl;
    cout << "Subtraction: 219-89 = " << subtraction(219,89) << "*" << endl;
    print_div(); 
    cout << "MULTIPLICATION: 23 * 45 = 1035" << endl;
    cout << "Multiplication: 23 * 45 = " << multiplication(23,45) << "*" << endl;
    print_div();
    cout << "DIVISION: 152400 / 20 = 7620" << endl;
    cout << "Division: 152400 / 20 = " << division(152400,20) << "*" << endl;
    print_div();
    cout << "EXPONENT: 152^3 = 3511808" << endl;
    cout << "Exponent: 152^3 = " << exponent(152,3) << "*" << endl;
    print_div();

    return 0;
}
