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

### 2. Variables

- #### strings

    Rather than writing the entire string into a print statement, we could store the string in a variable and then just print whatever is stored in the variable. 
    ```python
    hello = 'Hello, world!'
    print(hello)
    
    # output:>> Hello, World!
    ```
    
    Storing strings or other values in a variable is especially useful if you want to reuse the information:
    ```python
    hello = 'Hello, world!'
    print(hello, hello)
    
    # output: >> Hello, World! Hello World!
    ```
    
- #### numerical values

    Of course, you can also store numerical values in variables and you can do basic operations
     with these values (check out 3. Basic Operations)
     
     ```python
     number = 2
     print(number)
  ```
  
- #### lists
    Besides strings and numbers, there are also some more complex (data) structures that you
     might want to store in a variable. One of the most useful ones is a list. The list could
      contain numbers, strings, a mix of numbers and strings, or even more lists (so that you
       could end up with a list of lists). List items are indexed, the first item has index [0], 
        the second item has index [1] etc. Furthermore, lists are ordered, meaning that they have 
         defined order, and that order will not change. If you add new items to a list, the new
          items will be placed at the end of the list. You can append new elements to a list with the .append() method. Here are  a few examples. Feel free to play around with the code and manipulate the lines.
          
     ```python
      my_list_numbers = [10,21,33,14,5]
      my_list_strings = [ten, twenty, dog, cat]
      my_list_mixed = [10, ten, dog, 5, cat]
      my_list_of_lists =[[1,2,3],[dog,cat], [1,cat,2]]
 
      print(my_list_numbers[0])
      print(my_list_strings[1], my_list_mixed[2])
      print(my_list_of_lists[0])
        
      my_list_numbers.append(5)
      print(my_list_numbers)
  ```
       
    

### 3. Basic Operations

check out the following lines - these following operations should be pretty intuitive.

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

however, what's happening when you do the same while dealing with a string rather than a number? And what's happening when you're dealing with mixed variables. Play around with these settings and discuss your findings.

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

#### congratulations! 

you've finished the lab section of today's session. Now let's apply your skills to write a small
 program.

## Part B: Assignment


### Congratulations! You've completed this week's lab!

submit your folder structure as part of your homework submission. 

&nbsp;