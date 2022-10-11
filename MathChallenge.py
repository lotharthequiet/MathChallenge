#!/bin/python3

from tkinter import W
from sympy import symbols, Eq, solve

def print_title():
    print("MathChallenge - Python Edition")
    print("------------------------------")
    print("")

def print_div():
    print("------------------------------")

def addition(x,y):
    return x + y

def subtraction(x,y):
    return x - y

def multiplication(x,y):
    z = x * y
    return z

def division(x,y):
    return x / y
    
def exponent(x,y):
    return x**y

def orderofops(u,v,w,x,y):
    return u-v*(w/x)*y+x/x

def simpequation():
    x = symbols('x')
    eq1 = Eq(2*x-3, 0)
    return solve(eq1)
    

def lineareq():
    x,y,z = symbols('x,y,z')
    eq1 = Eq(3*x-y+z,3)
    return solve(eq1)

def quadeq():
    x = symbols('x')
    eq1 = Eq(2*x**2-4*x-2,0)
    return solve(eq1)

def main():
    print_title()
    print("ADDITION: 12+37 = 49")
    print("Addition: 12+37 =", addition(12,37),"*")
    print_div()
    print("SUBTRACTION: 219-89 = 130")
    print("Subtraction: 219-89 =", subtraction(219,89),"*")
    print_div()
    print("MULTIPLICATION: 23 * 45 = 1035")
    print("Multiplication: 23 * 45 =", multiplication(23,45),"*")
    print_div()
    print("DIVISION: 152400 / 20 = 7620")
    print("Division: 152400 / 20 =", division(152400,20),"*")
    print_div()
    print("EXPONENT: 152^3 = 3511808")
    print("Exponent: 152^3 =", exponent(152,3),"*")
    print_div()
    print("ORDER OF OPERATIONS: 500-4(6/3)*17+3/3 = 365")
    print("Order of Operations: 500-4(6/3)*17+3/3 =", orderofops(500,4,6,3,17),"*")
    print_div()
    print("Simple Equation")
    print("2x - 3 = 0")
    print("Solve for x:")
    print("x =", simpequation(),"*")
    print_div()
    print("Linear Equation")
    print("3x - y + z = 3")
    print("Solve for x,y,z:")
    print(lineareq())
    print_div()
    print("Quadratic Equation")
    print("2x^2 - 4x -2 = 0")
    print("Solve for x:")
    print(quadeq())

if __name__  == "__main__":
    main()
