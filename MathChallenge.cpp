#include <iostream>
#include <cmath>
using namespace std;

void print_title(){
    cout << "MathChallenge - Python Edition" << endl;
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
    static_cast<double>(x);
    static_cast<double>(y);
    return (pow(x, y));
}

int main(){
    print_title();


    return 0;
}
