<!---
layout: lab
exclude: true
--->

# Session 01 | Lab

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

### 4. Advanced Data Structures
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
        
- #### Dictionaries

    Dictionaries are used to store data values in key:value pairs. A dictionary is a collection which is ordered*, changeable and does not allow duplicates. (When we say that dictionaries are ordered, it means that the items have a defined order, and that order will not change. This will become totally clear when we move on to loops). Here's an example of a dictionary.
    
    ```python
  my_dict = {
      "brand": "Ford",
      "model": "Mustang",
      "year": 1964
  }
  print(my_dict)
    ```
    
    Here's an example that shows that you'll run into bugs with duplicates. Also, notice that you can also grab the length of a dictionary by using Python's built-in function len()
    ```python
  my_dict = {
      "brand": "Ford",
      "model": "Mustang",
      "year": 1964,
      "year": 2020
  }
  print(my_dict)
  print(len(my_dict))
    ```
    
    Lastly, you can also add new key: value pairs to a dictionary. 
    
    ```python
  my_dict = {
      "brand": "VW",
      "model": "Kaefer",
      "year": 1995
  }
    
  # adding a new key:value pair to the dictionary
  my_dict['wheels'] = 4
  print(my_dict)
    ```
    
### 5. Loops

Now that you know more advanced data structures, let's move on to loops. We will particularly use the for loop in this class. A for loop is used for iterating over a sequence - e.g. a list or a dictionary. This is less like the for keyword in other programming languages, and works more like an iterator method as found in other object-orientated programming languages. With the for loop we can execute a set of statements, once for each item in a list or dict, etc.

- #### looping through a string

    even strings are iterable objects as they consist of a sequence of characters. Example:
            
    ```python
  for character in "banana":
      print(character)
    ```

- #### looping through a list

    you can do the same with a list. Notice that you can exchange the word after the for for anything you want. Just make sure it has a meaning that somewhat describes the content. Here's an example with fruits.
    
    ```python
  fruits = ['apple','banana', 'strawberry', "peach"]
  for fruit in fruits:
      print(fruit)
    ```

- #### looping through a dictionary

    you can also loop over dictionaries. Notice, however, that you'll only have access to the key initially. If you want the value, you will have to make use of the dictionary itself and lookup the value for that particular key. Check ot the example:
       
    ```python
  fruits_in_fridge = {
      'apple': 2,
      'banana': 3, 
      'strawberry':10,
      'peach': 4
  }
  for fruit in fruits_in_fridge:
      print(fruit)
      print(fruits_in_fridge[fruit])
    ```
  
  Almost done! :)

### 6. Conditions and If... Else statements

Python supports the usual logical conditions from mathematics:

- Equals: ```a == b```
- Not Equals: ```a != b```
- Less than: ```a < b```
- Less than or equal to: ```a <= b```
- Greater than: ```a > b```
- Greater than or equal to: ```a >= b```


These conditions can be used in several ways, most commonly in "if statements" and loops.

An "if statement" is written by using the if keyword. Notice that you will have to use proper indentation! Python relies on indentation (whitespace at the beginning of a line) to define scope in the code. Other programming languages often use curly-brackets for this purpose.

Check out this example:

```python
a = 33
b = 200
if b > a:
  print("b is greater than a")
```

Besides the if condition, there is also ```Else``` and ```Elif```. The elif keyword is pythons way of saying "if the previous conditions were not true, then try this condition". The else keyword catches anything which isn't caught by the preceding conditions. Feel free to play around with this example:

```python
a = 200
b = 33
if b > a:
  print("b is greater than a")
elif a == b:
  print("a and b are equal")
else:
  print("a is greater than b")
```

Almost done! We just need to cover functions, so that you can reuse your powerful code that you can write with the building blocks that we covered above.

### 7. Functions

Now that you know all the data structures, operators, if...else statements and loops,
it's time to understand functions. A function is a block of code which only runs when it is called. A function can just execute some code or it can return data. You can pass in data to a function, known as parameters/arguments. In Python a function is defined using the def keyword:

```python
def say_hello():
    print('hello!')
```

To call a function, use the function name followed by parenthesis. Notice, that you can also include parameters so that you can call the function with additional arguments and use that data within the function:


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