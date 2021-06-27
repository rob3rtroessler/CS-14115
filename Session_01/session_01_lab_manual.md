<!---
layout: lab
exclude: true
--->

<img src="cs171-logo.png" width="200">

# Session 01 | Lab

![Preview](session_01_preview.png?raw=true "D3 Projections")

### Learning Objectives

- Get familiar with some Python fundamentals such as declaring variables, understanding basic data
 structures, using loops and if statements.


### Prerequisites

- You have downloaded and installed anaconda and set up your python environment (needed for the
 Python portion of the course, i.e. week #1).
- You have downloaded and installed JetBrains WebStorm (needed for the JavaScript portion of the
 course, i.e. week #2). 

### Summary

In this lab, you will get familiar wih some basic structures of computer programming n Python and
 apply your new skills to write a small program that wil help Harvard House administrators to
  manage personal information of incoming students.
  
### Useful links

- youtube link how to set up anaconda & jupyter notebook
- python documentation
- Codecademy intro to Python


----



## Part A: Python Basics

### 1. Hello, world!

Let's start with the most famous lines of code that every coder had to write at some point - so let's get it out of our way and print the famous words 'Hello, world!'. Type the following line into a Jupyter Notebook cell:

```python
print('Hello, world!')
```

Now you know how to print words - in coding terminology we wouldn't call it a word, or a sentence, but a 'string'.

### 2. Basic Data Types - Strings and Integers

- #### strings

    Rather than writing the entire string into a print statement, we could store the string in a variable and then just print whatever is stored in the variable. 
    ```python
  hello = 'Hello, world!'
  print(hello)
    ```
    
    Storing strings or other values in a variable is especially useful if you want to reuse the information:
    ```python
  hello = 'Hello, world!'
  print(hello, hello)
    ```
    
- #### numeric variables

    Of course, you can also store numerical values in variables and you can do basic operations
     with these values (check out 3. Basic Operations)
     
     ```python
  number = 2
  print(number)
  ```
  

### 3. Basic Operations

Operators are used to perform operations on variables and values. In Python, there are a few groups of operators. Below, you can see a few examples of arithmetic operators. 

```python

number = 2
print(number)

# output: >> 2

print(number+number)
print(number-number) 
print(number*3)
print(number/2)
print(number**2)
```

Arithmetic operators, however, are not the only useful operators. There are also assignment operators, comparison operators, logical operators, identity operators and membership operators. All of them are very intuitive. Check out a full list here: https://www.w3schools.com/python/python_operators.asp. Here are also a few examples of comparision and logical operators that will come in handy during the next two weeks. 

```python

# comparision operators
print(2==2)
print(1==0)
print(1!=0)

# logical operators
print(True and True)
print(False and True)
print(False or True)
print(not True)

```
however, what's happening when you do the same while dealing with a string rather than a number? And what's happening when you're dealing with mixed variables. Play around with these settings and discuss your findings.

### Advanced Data Structures
- #### lists
    Besides strings and numbers, there are also some more complex (data) structures that you
     might want to store in a variable. One of the most useful ones is a list. The list could
      contain numbers, strings, a mix of numbers and strings, or even more lists (so that you
       could end up with a list of lists). List items are indexed, the first item has index [0], 
        the second item has index [1] etc. 
        
     ```python
  my_list_numbers = [10,21,33,14,5]
  my_list_strings = ['ten', 'twenty', 'dog', 'cat']
  my_list_mixed = [10, 'ten', 'dog', 5, 'cat']
  my_list_of_lists =[[1,2,3],['dog','cat'], [1,'cat','2']]
 
  print(my_list_numbers[0])
  print(my_list_strings[1], my_list_mixed[2])
  print(my_list_of_lists[0])
  ```
       
  Now that you probably have at least an intuitional understanding of lists, let's get a bit more into detail: 
   List items are ordered, changeable, and allow duplicate values. 'ordered' means that the list has a defined order, 
    and that order will not change. If you add new items to a list, the new items will be placed at the end of the list. 
     You can append new elements to a list with the .append() method. Here is an example. Feel free to play around with the code and manipulate the lines.
    
  ```python
  my_list_numbers = [10,21,33,14,5]
  my_list_numbers.append(20)
  print(my_list_numbers)
  ```      
        
    
### 4. Loops

Now that you know how to store information in variables and how to use basic math operations, le's try to automatize things a bit. Rather than 


```python

number = 0
print(number)


word = 'world'

# output: >> 2

```

rather than looping over numbers or through a 'list of numbers', you can also loop over existing data structures. You already came across a data structure A string

```python
for character in word:
    print(character)

my_list = [1,2,3,4]
sum = 0
for element in my_list:
    print(element)
    sum += element
```



### 6. Funtions

In Python a function is defined using the def keyword:

```python
def say_hello():
    print('hello!')
```

To call a function, use the function name followed by parenthesis. Notice, that you can also add arguments and use them within the function:


```python
def say_hello_to(name):
  print("hello, " + name)

say_hello_to("Emil")
```

#### congratulations! 

you've finished the first part of the session and are now well equipped to solve the tasks ahead in the lap section.
## Part B: Assignment

Now it's time to start the actual lab assignment. Today, you'll help out Harvard College to automatize their housing lottery system. Follow all the intstructions provided in the lab notebook.

### Congratulations! You've completed Session 1!

&nbsp;