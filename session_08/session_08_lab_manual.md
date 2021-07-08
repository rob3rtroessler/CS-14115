
&nbsp;

# Session 08 | Lab


### Learning Objectives

- Understanding the basic idea of interactive DOM manipulation that JS allowed which was so
 groundbreaking.
- Reviewing JavaScript fundamentals: 
    * Variables
    * Data Structures (Arrays, Objects, JSON)
    * Control Structures & Loops
    * Functions
    * Debugging (Web Console)
    * Filter, Sort, and Map
- Understanding and getting started with D3 visualisations


### Prerequisites

- You have downloaded and installed JetBrains WebStorm.

### Useful links

- https://getbootstrap.com/docs/4.5/  (bootstrap documentation)
- https://www.w3schools.com/ (great html, css and JS tutorials for beginners and intermediate web
 developers)
- https://css-tricks.com/ (great website to learn about the power of CSS - which everybody tends
 to underestimate)


----


## 1)  Review: Data Structures & Array Methods

We learned about the basics of data structures and array methods in JS yesterday. For today, have
yesterday's lab manual ready. While we will not go over the basics of JS again, we prepared a lab that
will allow you to review some of yesterday's basics. In today's lab, you will create basic visualisations based on
the Covid data we worked with last week. In the template folder, you can find a css folder,
a js folder including "main.js" and "barchart_population.js" and "index.html". If you open "index.html" in your browswer,
you cam see that we already provided the basic grid for the visualisations you create today. Similarly, "barchart_population.js"
is already finished and will create a barchart of the "TOP 5 US states by population", once you have completed this first
step of the assignment.
Your task in this first step is to work on "main.js". At the end of this first step, you will call the function "renderBarChartLeft()", which
is defined in "barchart_population.js" and will draw a barchart in the left column of the grid.

```javascript
renderBarChartLeft(largest_states)
```

As you can see, the argument we want to pass to "renderBarChartLeft()" is called "largest_states". At this point "largest_states"
does not yet exist. It will be your job to create "largest_states", a list of state objects. Using yesterday's solution
as a guide, take the data provided at the beginning of "main.js" and follow the TODO's outlined there. You will need to 
take the following steps to get from your raw data to the list "largest_states":
1. Create an array "data_final" that contains all the states, population, absCases, absDeaths, as well as relCases and relDeaths.
To do so, take the values you find in the list "data", iterate through them, add them to "data_final" and on each iteration
calculate and add the relative cases and relative deaths for this state.
2. Sort all the states by population, using the filter method. Take a look at yesterday's solution for help.
3. Filter the sorted data, by using the sort method. Take a look at yesterday's solution for help.
4. Call the function "renderBarChartLeft(largest_states)".
 
## 2) Your own Visualization
Now that you successfully worked with arrays, let's move on to visualisations. For this second task, you will create a 
barchart of the "Top 5 states by cases" in the middle column.
1. Follow the steps above (in slight variation) in order to create an array called "cases_states" that includes 
the top 5 states by cases.
2. Create a js file called "barchart_cases.js" and copy the code from "barchart_population.js". Rather than creating 
a barchart from scratch, rework the copied code in "barchart_cases.js" so that it creates a barchart of the
"Top 5 states by cases" in the middle column. Rather than giving you specific advice, we want you to tinker around here
and work with what you have. Go through your copied code line by line and makes changes where needed.
3. The most important things you will need to do is a) Make sure that "barchart_cases.js" includes code that allows "index.html"
to know that it needs to look at "barchart_cases.js" to know what to present in the middle column. b) Write the function
"renderBarChartMiddle" and include it in main.js. In order to write "renderBarChartMiddle", take "renderBarChartLeft" 
as the basis and change it as needed.
4. Have some fun with the colors and play around with some of the measures to see how this d3 visualisation works.
5. Add your new visualisation to index.html. Look at how the left visualisation lives in "index.html" for help.

## 3) Code along: Scatter Plot
...
&nbsp;


**Congratulations for finishing lab #8! See you tomorrow!**
