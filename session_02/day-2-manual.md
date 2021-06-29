# Session 02 | Lab

### Learning Objectives
- Learn how to parse HTML documents
- Learn how to create clean datasets for exploration and visualization

### Useful links
- Regular Expression cheat sheet: https://pythex.org
- Beautiful soup documentation: https://www.crummy.com/software/BeautifulSoup/bs4/doc/

## Part A: Parsing Data with Regular Expressions
We often encounter and have to work with datasets that include errors or extraneous information or miss data.
In order to create workable datasets, we need to "clean" this raw data. For example, we might want to
replace special characters such as commas from text data or remove extra spaces. Regular Expressions (RegEx) is a tiny, specialized
programming language that helps us do just that. RegEx allows us to define search patterns and replace the pattern
or return the contents  that match the pattern. Python includes a module called *re* that makes Regular Expressions available.

### 1. Finding Patterns
Let's begin with finding individual characters. Type the following into a jupyter notebook cell:
```python
import re

sentence = 'This is CSCI14115 at Harvard Summer School.'

pattern = '[a]'
re.findall(pattern, sentence)

# output:>> ['a', 'a', 'a']
```
The brackets [] denotes "matches any of these chars". This means that you can simply list all characters that you want to
find. 

```python
import re

sentence = 'This is CSCI14115 at Harvard Summer School.'

pattern = '[ast-vC]'
re.findall(pattern, sentence)

# output:>> ['s', 's', 'C', 'C', 'a', 't', 'a', 'v', 'a', 'u']
```

Instead of looking for individual characters, RegEx also allows you to look for special sequences and let's you quantify
your pattern through the use of special characters. For example, \d matches any digit and + means "1 or more occurences".

```python
import re

sentence = 'This is CSCI14115 at Harvard Summer School.'

pattern = '[a-zA-Z]+'
re.findall(pattern, sentence)

# output:>> ['This', 'is', 'CSCI', 'at', 'Harvard', 'Summer', 'School']
```

Now it's your turn. Change the below (fill in the blank), so that you will get the following output:
```python
import re

sentence = 'This is CSCI14115 at Harvard Summer School.'

pattern = '_____'
re.findall(pattern, sentence)

# output:>> ['This', 'is', 'CSCI14115', 'at', 'Harvard', 'Summer', 'School']
```
Now write a RegEx that only extracts words that start with a capital letter.
```python
import re

sentence = 'This is CSCI14115 at Harvard Summer School.'

pattern = '_____'
re.findall(pattern, sentence)

# output:>> ['This', 'CSCI14115', 'Harvard', 'Summer', 'School']
```

### 2. Replacing Text
Let's now get to substituting characters and start with straightforward example, in which we define a pattern that we then
substitute. 
```python
import re

sentence = "Harvard was established in 1636! In 1638, it acquired British North America's first known printing press?"

pattern = '[?!]'
sentence = re.sub(pattern, '.', sentence)

print(sentence)

# output:>> Harvard was established in 1636. In 1638, it acquired British North America's first known printing press.
```
Let's look at a more complicated search pattern. In a group, look at the below search pattern and explain what it does 
and what the output is. This [cheat sheet](https://pythex.org) might prove useful.

```python
import re

sentence = "Harvard was established in 1636??!! In 1638, it acquired British North America's first known printing press ..."

pattern = '[?!]+|\s*\.+'
sentence = re.sub(pattern, '.', sentence)

print(sentence)

# output:>> 
```

## Part B: Requests and Beautiful Soup
In data science, it is very common that you want to work with data that is not available in a csv or txt file and that can
only be found on the web. In order to access this data, we need to build a web scraper that extracts content from a
webpage which in turn will allow you to perform searches on and manipulate that data.

### 1. Requests
The Python library Requests allows you to fetch a webpage.

```python
import requests

wiki_url = "https://en.wikipedia.org/wiki/Nobel_Peace_Prize"
wiki_page = requests.get(wiki_url)
wiki_page.status_code

```
It is always helpful to check whether your request was successful. status_code does this for you. 200 means success. 404 means page not found.

### 2. Beautiful Soup
While Requests gets a webpage for you, Beautiful Soup helps you parse a webpage. This means that Beautiful Soup will help you
extract the information from the requested webpage that you actually need. In order to construct a HTML-parsed Beautiful Soup object,
run the following code:

```python
from bs4 import BeautifulSoup

soup = BeautifulSoup(wiki_page.content, "html.parser")

```

The prettify() function in BeautifulSoup will enable us to view how the tags are nested in the document, which will help you in the next step, i.e.
extracting the information that you actually care about.

```python
print(soup.prettify())
```

Once you know what you are looking for, Beautiful Soup allows you to extract this data. Here are a few helpful functions. Find()
returns the first element matching your specifications, while find_all returns a list of all elements matching your specifications.
```python
soup.find("h2")
soup.find_all("div", class_="thumb tright")
```
Adding text returns the in an html element.

```python
headings = soup.find_all("h2")
for element in headings:
    print(element.text)
```

Get allows you to extract content from attributes.
```python
headings = soup.find_all("a")
for element in headings:
    print(element.get('href'))
```

## Part C: Assignment

### Congratulations! You've completed  today's lab!