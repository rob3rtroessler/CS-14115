
<img src="cs171-logo.png" width="200">

&nbsp;

# Session 06 | Lab

![Preview](img/final_result.png?raw=true "D3 Projections")


### Learning Objectives

- Get familiar with HTML, CSS, and basic JavaScript. 

### Prerequisites

- You have downloaded and installed JetBrains WebStorm.
- You are excited about creating your first website and ultimately an advanced COVID dashboard. 

### Summary

In this lab, you will create your first website with an elaborate grid of div container that you
 will populate over the course of the next four sessions. Furthermore, you will use some basic
  DOM manipulation to develop a fundamental understanding of how to create an interactive website/dashboard.
  
### Useful links

- https://getbootstrap.com/docs/4.5/  (bootstrap documentation)
- https://www.w3schools.com/ (great html, css and JS tutorials for beginners and intermediate web
 developers)
- https://css-tricks.com/ (great website to learn about the power of CSS - which everybody tends
 to underestimate)


----


## 1) Creating a Website




### a) Boilerplate HTML 

As some of you might already know, HTML is not a real coding language. It is a markup language
 that our browsers such as Chrome, Mozilla or Safari are reading, interpreting, and rendering. The 
  HTML elements - marked with ```<..>``` - are the fundamental building blocks of a website. 
  When a web page is loaded, the browser creates a Document Object Model of the page.
  
  The HTML DOM model is constructed as a tree of Objects:
  
  
![Preview](img/DOM.GIF?raw=true "D3 Projections")

As you can see on this basic diagram (which is a basic website with just one link), there are
 some basic tags that will always be part of your html file. For that reason, it is common
  practice to have some boilerplate code prepared that you can copy-paste whenever you create a new
   html file. WebStorm pre-populates each html file with some basic tags, but feel free to
    include more than just that. This could be a grid of a standard website design that you like
     as well as some CSS and JavaScript libraries that are commonly used. 
  
  ```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

</body>
</html>

```

Now, create a new HTML file and just write the magic words "hello, world" in between the body
 tags. If you've never written any HTML before you should feel a bit proud because you've just
  created your first own website.

### b) basic HTML elements

Of course, you want to do a little better than just writing some words into the body of a
 website. We're sure that you already know quite a few elements that you could put into the body
  but you might not know the exact syntax, yet. So let's get you up to speed:
  
- hyperlink
  
  To include a link, the only think you have to do is to put some ```<a>``` tags around the text
   that should appear and function as a link.         
  
    ```html
        <a href="www.google.de">hello, world</a>
    
    ```
    
    Notice that you can style html elements using css. There are various ways how to apply styling but
 the most intuitive way might be to do it in the html file itself right inside the html element's
  tag. You can simply include the ```style``` attribute and write css code. Here's an example
   with some (horrific) styling:
  
  ```html

    <a href="www.google.de" style="font-size: 10px; background-color: red">hello, world</a>
  ```

- image

  To include an image, you will need to use simple ```<img>``` tag and include the path to the
   source where the image is stored - this could be locally on your machine or on a server in the
    world wide web (in that case, just include an url).

  
  
- other elements

you get the idea - you just need to know what tag to use and what nuances you need to look out
 for when using this tag. Try to add a button to your website - use google, stack overflow, the w3
  schools' website or  the bootstrap documentation if you don't know where to start.
 
### c) Structuring the DOM with Bootstrap Grid
   
   As of now, you probably have a very unstructured website with a bunch of HTML elements sitting
    in the body and you might be wondering how to place them a more systematically on the website
    . In oder to do that, you will need to divide your body into segments using ```<div>``` containers. Together with the bootstrap grid system that relies on columns and
     rows you will be able to design powerful and effective grids that will serve as the starting
      point for any dashboard. In order to get started with Bootstrap you will need to include the
       respective Bootstrap files (css, js, and dependencies) into the DOM as described in the
        bootstrap documentation.
      
   After including the files, let's start with a basic example. First, we'll have a fluid
    container that is basically as big as our entire body. It has a height of 100 vh
     (viewpoint height), which is equivalent with the  height of the browser. Since we give it
      the bootstrap class ```container-fluid``` it will automatically expand to the full width.
   
      
 ```html

<div class="container-fluid" style="background: lightskyblue; height: 100vh">
</div>      
```
   
  Inside this big parent div container, you can use further div containers with different bootstrap
   classes to create a grid of columns and rows. The class names are quite intuitive: ```col``` and
    ```row```. Notice, that rows live in the parent container and columns live inside rows. While
     a row has no pre-defined height and you have to provide a specific height using CSS, a
      column doesn't have a width initially. Thus, you will have to define the width of a column
      . In Bootstrap however, you're not defining the width in pixels or an equivalent measure
      . Instead, underneath the hood, the Bootstrap grid divides each row into 12 segments and a
       column can occupy any number of there 'width-segments'. To define a width, you simply add
        ```-(any number betwenn 1-12)``` to the ```col``` class, i.e. ```<div class='col-3
        '>```. Ultimately, your columns should add up to 12. Let's check out an example with some
         additional CSS for better readability:
   
 ```html

<div class="container-fluid" style="height: 100vh">
    <div class="row" style="height: 20vh; background: #3ba08c"></div>
    <div class="row" style="height: 70vh;">
        <div class="col-6" style="background: lightseagreen"></div>
        <div class="col-6" style="background: #63c3bd"></div>
    </div>
    <div class="row" style="height: 10vh; background: rgba(32,178,170,0.85)"></div>
</div>    
```

Congratulations, you've just finished writing your first Bootstrap grid. Try to make your grid a
 bit more complex and add some of the elements you've learned about in the section above.
 
 While experimenting with the grid and various elements you might start to wonder how to position
  elements in the center of a parent element. There is a best practice for such a task with
   Bootstrap and it maks use of some of the classes 'justify-content-center' and 'align-self
   -center':  

```html


<div class="container-fluid" style="height: 100vh">
    <div class="row" style="height: 20vh; background: #3ba08c"></div>
    <div class="row" style="height: 70vh;">
        <div class="col-6" style="background: lightseagreen">
            <div class="row justify-content-center" style="height: 100%">
                <div class="align-self-center" style="text-align: center; padding: 10px">
                    this text is in the center because it's using the CSS style 'text-aling: center' 
                    and the html element in which the text resides in uses the class 'align-self-center'
                    and it's parent is a row of height 100% with the class 'justify-content-center'
                </div>
            </div>
        </div>
        <div class="col-6" style="background: #63c3bd"></div>
    </div>
    <div class="row" style="height: 10vh; background: rgba(32,178,170,0.85)"></div>
</div>

```
------

## Implementation Task

### Overview

1. **Download the resources**

	Download the template: [Template.zip](Template.zip)
	
	&nbsp;
	
2.  **Familiarize yourself with the provided framework and the dataset**

    Familiarize yourself with the datasets. Then, check out ```main.js``` and make sure to
     understand how we load the data. Then, examine the classes ```BrushVis``` and ```DataTable```. We created two instances of these classes. How are they linked? Can you identify the
     code where the two link to one another?   
     
    &nbsp; 

3. **Write the class MapVis from scratch**

    (see ***Task: MapVis*** for more information)
    
    &nbsp;

4. **Write class BarVis from scratch**

    (see ***Task: BarVis*** for more information)
    
    &nbsp;

5. **Prettify**

    link views, add titles, axis, legends, hover effects, etc.
    
    &nbsp; 

### Tasks 

----

![Preview](cs171_w8_hw_map.png?raw=true "D3 Projections")	

#### Task MapVis

1. **Create class MapVis**

	Check out dataTable.js and examine closely how the former developer has structured the code. Since your map is 
	basically just a nicer way to display the data, the ```class DataTable``` should at least provide some 
	inspiration and orientation. In terms of the code architecture and the class structure, ```DataTable``` could 
	even serve as blueprint for your ```class MapVis```. Make sure that MapVis contains a
	 comprehensive ```constructor()``` method with all the parameters needed as well as the pipeline
	  methods ```initVis()```, ```wrangleData()```, and ```updateVis()``` method.
	  
    &nbsp; 
    	  
2. **Define Constructor**

    As mentioned in #1, make sure to include all the data you need. In addition to the data included in ```class
     DataTable```, you will also need to account for geographical data. Also, make sure to start
      your pipeline in your constructor by calling the ```initVis()``` method.
     
    &nbsp;
 
3. **Define initVis() method**

    Use the knowledge and insights you've accumulated over the past weeks and this week's lab to set
     up a proper initVis() method. Include your margin conventions, title, tooltip, legend, and scales. 
	
	Hint: In order to draw a map, D3 basically just draws paths. The number of paths will not
	 change with any kind of ```updateVis()``` function because you will not change the number of countries in your selection. Thus, you can
	   draw your map already in ```initVis()``` and store the selection, i.e. all the states as a
	    property. You can access that property, i.e. the selection, in other methods (e.g
	    . ```updateVis()```) and can simply change and update the fill attribute.
	    
	&nbsp;     
	   
4. **Set up the map**

    In this homework, we ask you to draw a map of the US using D3. In this week's lab, you've already 
     created a world map using projections and a geo path generator to then draw
     the countries. When drawing the US state paths, there are a few geometries available that you can use. Check out this [github repo](https://github.com/topojson/us-atlas) and the
       documentation. Also, [this](https://github.com/d3/d3-geo) is the link to the d3.geo() documentation that might come in handy for this task.
      
    In short, there are two different routes you can choose: 1) you can use a geometry
     that has not been projected (e.g. 'states-10m.json'), and you do the projection
      yourself and play around with ```scale``` and ```transform()```, and 2) alternatively, you can use
       a map that has already been projected (e.g. 'states-albers-10m.json') to a specific viewpoint
        (976 on 610) to then just do some basic math to create the perfect fit for your website. You've seen the code for projections in the lab, here's the code for geometries that
         have been projected to exact viewpoints.

    ```javascript
    vis.viewpoint = {'width': 975, 'height': 610};
        vis.zoom = vis.width / vis.viewpoint.width;
    
    // adjust map position
    vis.map = vis.svg.append("g") // group will contain all state paths
        .attr("class", "states") 
        .attr('transform', `scale(${vis.zoom} ${vis.zoom})`);
    ```

    You should now be able to draw all the states. Do so in initVis.
    
    &nbsp; 
    
5. **Define wrangleData() method**  

    Check out how ```wrangleData()``` was implemented for ```class DataTable```. Use it as a
     blueprint. Make sure to log all the data by the end of ```wrangleData()``` to ensure that you have
      the data structures you need.
    
    &nbsp; 
              
6. **Define updateVis() method**

	You should have your pipeline set up in such a way that ```wrangleData()``` calls ```updateVis()```. As
     soon as the final COVID data structure has been prepared, you should grab the state paths
      and update their fill attribute.

    &nbsp; 
          
7. **Add tooltip**

    Just like you did in the lab, add a tooltip when you hover over a state and provide all
     information, i.e. absolute and relative covid cases and deaths.

    &nbsp; 
         
8. **Connect your map to the brush**

    On brush, call the ```wrangleData()``` method of your MapVis instance. The map should update when
     you brush.
    
    &nbsp; 
         	
9. **Enable category selection via bootstrap select**

    Find a good place for a bootstrap select element in your html grid and add the following
     lines of code:
    
    ```html
    <select id='categorySelector' class="custom-select align-self-center" style="width: 50%" onchange="categoryChange()">
        <option value="absCases" selected>Cases (absolute)</option>
        <option value="absDeaths">Deaths (absolute)</option>
        <option value="relCases">Cases (relative to population)</option>
        <option value="relDeaths">Deaths (relative to population)</option>
    </select>
    
    ```
   
   Also, here's some useful js that goes together with the HTML above.
   
    ```javascript
    let selectedCategory = $('#categorySelector').val();
    
    function categoryChange() {
       selectedCategory = $('#categorySelector').val();
       myMapVis.wrangleData(); // maybe you need to change this slightly depending on the name of your MapVis instance
    }
    ``` 
 
    Whenever you select a category, the map should now update.
    
    &nbsp; 
     
10. **Add legend to your map**

    Add a legend - you can utilize a continuous color scale or discrete color steps. 
   
    &nbsp; 


----



![Preview](cs171_w8_hw_bars.png?raw=true "D3 Projections")

#### Task BarVis

1. **Create class BarVis & create two instances**

	Besides the choropleth map, Helmuth Wiesel was also hoping that you could implement a class
	 that takes care of creating bar charts so that you can include two instances of that class
	  in the dashboard. Since you have plenty of bar chart code lying around on your computer
	   from former projects, this shouldn't be too hard. However, Wiesel has a special request
	   : He wants one bar chart to show the top 10 states for a filtered category, and the other
	    to show the lowest 10 states for that category. 
	       
    &nbsp; 
    	  
2. **Prepare class architecture and the constructor method**

    Set up your standard methods for your new class and define a constructor. Luckily, Fraya has
     already included some code as well as some comments. One thing she tried to solve was how to
      use only one class for both ascending and descending bar chart instances. She left some
       comments in the ```wrangleData()``` method.
       
    If you haven't done so already, this is the time to create two instances of the ```class
     BarVis```. The screenshot should give you an idea of where to position them. 
    	  
3. **Complete initVis()**
    
    Thankfully, the margin conventions are already set up. Now, make sure you also set up your
     axis and scales before moving on to ```wrangleData()```.
     
4. **Complete wrangleData()**

    As mentioned above, there are some helpful comments in the ```wrangleData()``` method. As long as
     you understand what's going on in the ```wrangleData()``` method of ```DataTable```, you should
      be able to reuse almost all the code. In addition, include Fraya's ideas, and you should
       be golden. Console.log your way through the data structure creation if you don't know what
       's going on. 

5. **Draw the bars and axis in updateVis()**

    Once you finished ```wrangleData()```, call ```updateVis()``` and draw the bars. Use
     enter(), merge(), exit(). 
    
6. **React to brushing and category change**

    As you've done already successfully for the map, have your bar charts react to the user input
     (brush and category selection). Also, make sure to include transitions!
     
7. **Add a tooltip**

    Add a tooltip when hovering over a bar.

----

&nbsp;

### Final Tasks

1. Prettify your project. No fancy CSS needed but make sure that your design reflects the
 dashboard nature of the project.
 
2. Comment your code.

&nbsp;

### Design Critique (2 points):

For the coding portion, you had to write a legend for the map. As mentioned in the lab, there are
 two routes you can choose: You can either choose a continuous color scale or discrete color steps
 . There's a big debate in the field when to use one color solution over the other. Read the
  following two articles ([Article one](https://www.axismaps.com/guide/univariate/choropleth/#:~:text=You%20can%20use%20a%20choropleth,could%20conceptually%20measure%20the%20phenomena
), [Article Two](https://policyviz.com/2017/11/02/choosing-map-bins/)) and reflect what scale would
 work best in the case of your dashboard. 
 
 If you think that you should change your legend after these readings, feel free to do so. Since
    there are arguments on both sides, however, we do not expect one and only one solution. That
     said, we do expect you to critique and reflect your design choices and explain why you chose 
     a particular scale in the first place.
      
In addition, please reflect on the issue of displaying absolute values in a choropleth map. Here
's a good [article](https://blog.datawrapper.de/choroplethmaps/). What would be your solution to
 deal with the absolute values?

&nbsp;

### Bonus (3 points)

#### graduate students do not need to complete the bonus to receive full credit for this homework!

* Now that you've critiqued your implementation, it is time to improve your dashboard. Implement
 your solution when a user selects absolute values. Leave the initial choropleth style for relative
  value selections. (2 points)

* Link the state in the map to the states in the bar charts. When hovering over a bar rect the
 according state path should be highlighted and vice versa.

&nbsp;

---

## Submit Homework in Canvas

Submission instructions:

1. Use the following recommended folder structure:

    ``` markdown
    /submission_FirstnameLastname	
        hw/
            implementation/ ...folder for your code
                index.html
                css/ 		...folder with all CSS files
                js/ 		...folder with all JavaScript files
            design/         ...folder for your reflection/critique
        lab/ 
    
            ...
    ```

2. Make sure to keep the overall size of your submission under 5MB!
3. Upload a single .zip file.

**Congratulations for finishing this week's homework! See you in class!**
