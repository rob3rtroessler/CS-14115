
# Session 09 | Lab

### Learning Objectives

- Understand the concept of D3 layouts and be able to use D3 layouts for advanced visualizations
- Know how to work with the GeoJSON and TopoJSON file format
- Have a basic understanding of geographical projections
- Know how to load multiple files sequential and parallel
- Know how to convert geodata to screen coordinates with D3 in order to create interactive maps


### Summary

In this lab, you will learn how to use D3 layout methods to implement more complex svg shape elements (in contrast to rect or circle elements). 
After drawing an interactive pie-chart as a warm-up, the main task of the lab will be to create an interactive choropleth map.

### Useful links for this week's lab

- Comprehensive overview for [SVG Elements and Attributes](https://oreillymedia.github.io/Using_SVG/guide/markup.html)
- https://github.com/d3/d3-geo


----

## JS Classes

JavaScript Classes are templates for JavaScript Objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.
The constructor method is a special method:

It has to have the exact name "constructor"
It is executed automatically when a new object is created
It is used to initialize object properties
If you do not define a constructor method, JavaScript will add an empty constructor method.

**Syntax:**


```javascript


class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}

```

**Example:**

```html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Class Method</h2>

<p>How to define and use a Class method.</p>

<p id="demo"></p>

<script>
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;

  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
"My car is " + myCar.age() + " years old.";
</script>

</body>
</html>
```


## D3 Shapes

> The D3 shape methods have no direct visual output. Rather, D3 shapes take data that you provide and re-map or otherwise transform it, thereby generating new data that is more convenient for a specific task. (Scott Murray)

Visualizations typically consist of discrete graphical marks, such as symbols, arcs, lines and areas. While the rectangles 
of a bar chart may be easy enough to generate directly using SVG or Canvas, other shapes are complex, such as rounded annular 
sectors and centripetal Catmull–Rom splines. The D3 shape module provides a variety of shape generators for your convenience.

![D3 Shapes](cs171-d3-layouts.png?raw=true "D3 Shapes")
 
Each shape may have distinct features not shared by others, so make sure to consult the D3 documentation([https://github.com/d3/d3-shape/blob/master/README.md](https://github.com/d3/d3-shape/blob/master/README.md)) for implementation details. You will learn more about a few selected shapes in this lab.

&nbsp;

### Pie Shape

In this week's lab, we will introduce you to D3 shapes by creating a simple pie chart. We will
 make use of the pie shape generator, i.e. the ***d3.pie()*** method, which computes
  the start and end angles of arcs that comprise a pie or donut chart.

*Example:*

```javascript
// Initialize data
let data = [45,30,10];

// Define a default pie layout
let pie = d3.pie();

// Call the pie function
pie(data);
```

*Console Output:*

![D3 Pie Shape Generator](cs171-d3-pie-console-output.png?raw=true "D3 Pie Shape Generator")

The D3 pie shape takes a dataset and creates an array of objects. Each of those objects contains
 a value from the original dataset, along with additional data, like *startAngle* and *endAngle*. 
 That's all there is to the D3 pie shape. It has no visual output, but transforms the input
  data in a way that it is much more convenient for drawing a pie chart. 

&nbsp;

Now that we understood how the pie generator works, let's draw the actual pie chart. We'll use an
 arc generator ***d3.arc()*** to generate the paths for the pie segments. Take a few minutes to
  look through the following code example:

```javascript

// SVG drawing area
let width = 300,
    height = 300;

// Position the pie chart (currently only a placeholder) in the middle of the SVG area
let svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")

// pie chart setup
let pieChartGroup = svg
    .append('g')
    .attr('class', 'pie-chart')
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// Initialize the data
let data = [45,30,10];

// Define a default pie layout
let pie = d3.pie();

// Ordinal color scale (10 default colors)
let color = d3.scaleOrdinal(d3.schemeCategory10);

// Pie chart settings
let outerRadius = width / 2;
let innerRadius = 0;      // Relevant for donut charts

// Path generator for the pie segments
let arc = d3.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);

// Bind data
let arcs = pieChartGroup.selectAll(".arc")
    .data(pie(data))

// Append paths
arcs.enter()
    .append("path")
    .attr("d", arc)
    .style("fill", function(d, index) { return color(index); });
```

&nbsp;

## Activity I

![Preview Activity I](cs171_w8_lab_activity1.png?raw=true "D3 Projections")


#### Activities & Walkthrough

1. **Check out the template for this week's lab**

    The provided template includes:
        
    - a css folder with a very basic ```styles.css``` file that styles your tooltips
    - a data folder with files that we will need for Activity II.
    - a js folder with 
        - ```main.js``` that takes care of loading the data and initializing all the visualizations.
        - ```pieChart.js``` defining the class ```PieChart``` (already containing some code)
        - ```mapVis.js``` that contains some code for class ```MapVis``` that you will create
             in Activity II.  
    - the HTML file ```index.html``` with a basic document structure
    
    &nbsp;

2. **Familiarize yourself with the template**
    
    Run ```index.html``` and inspect the DOM. Notice that you already created instances of the
     class PieChart and MapVis. These instances are named ```myPieChart``` and ```myMapVis```; 
     
   Next, explore the class ```PieChart```. By now, you should be familiar with the constructor
    method as well as our method pipeline initVis() -> wrangleData() -> updateVis() that allows
     us to trigger e.g the wrangleData() method externally, manipulate the data, and update the
      visualization.
      
3. **Complete the class PieChart and its methods**
    
    Using the sample code for a pie chart that we provided, finish writing the class PieChart
    . Notice, that the code we provided works fine if you would copy-paste it in a plain js file
     and embed it in your website (feel free to try it out!) However, we want to do something
      more sophisticated by using classes. Thus, you might want to go through the sample code
       line by line and adapt the code snippets in the appropriate methods, i.e. ```initVis
       ()```   vs. ```updateVis()```. Make sure that you are using the keyword ```this/vis
       ``` properly
       , i.e. that you store your key variables in properties so that your object can access them
        across methods.
        
    In short, these are the steps that you probably want to do in initVis():
    
    - margin conventions are already defined, so 
    - start by creating a pieChart group
    - define inner and outer radius
    - define pie layout
    - set up your path generator
    
    Next up is wrangleData(). Here, you don't need to do anything except to understand what's
     going on. We are creating a very simple data structure for you. It is an array of objects. Each object has a random value (between 0-100) and a fixed color. This should help you
      when defining the fill attribute for the arcs.
      
      Lastly, let's look at updateVis(). Here, you want to draw the arcs that make up the actual
       pieChart. 
       
4. **Create a tooltip**

    When hovering over an arc, a tooltip should appear. First, add a ```div``` container for your
     tooltip to the DOM. Ideally, you do this in ```initVis()``` method of the class itself rather
      than in your ```index.html``` document. (odds are you want a tooltip for each instance).
      
   ```javascript
   // append tooltip
   vis.tooltip = d3.select("body").append('div')
       .attr('class', "tooltip")
       .attr('id', 'pieTooltip')
    ```

    Next, add an event listener to your arcs.

    ```javascript
    .on('mouseover', function(event, d){})
    ```
   
   Make sure to use a regular ```function(){}``` rather than an arrow function so that the
        keyword ```this``` is bound to the actual arc, i.e. the selection. This will help you to
         manipulate the color of the selection on hover easily.  
   
   ```javascript
   d3.select(this)
        .attr('stroke-width', '2px')
        .attr('stroke', 'black')
        .attr('fill', 'rgba(173,222,255,0.62)')
    ```
    
    Inside your ```.on()``` event listener, change the attributes of your tooltip so that it
     moves to the current mouse position and displays the proper information. Here's a tooltip
      that should display all the information that you have access to:
      
   ```javascript
   vis.tooltip
        .style("opacity", 1)
        .style("left", event.pageX + 20 + "px")
        .style("top", event.pageY + "px")
        .html(`
            <div style="border: thin solid grey; border-radius: 5px; background: lightgrey; padding: 20px">
                <h3>Arc with index #${d.index}<h3>
                <h4> value: ${d.value}</h4>      
                <h4> startAngle: ${d.startAngle}</h4> 
                <h4> endAngle: ${d.endAngle}</h4>   
                <h4> data: ${JSON.stringify(d.data)}</h4>                         
            </div>`);
    ```
    
    Now, the only thing that is missing is to define the ```mouseout``` behavior. It's just
     resetting everything:
     
   ```javascript
   .on('mouseout', function(event, d){
                   d3.select(this)
                       .attr('stroke-width', '0px')
                       .attr("fill", d => d.data.color)
   
                   vis.tooltip
                       .style("opacity", 0)
                       .style("left", 0)
                       .style("top", 0)
                       .html(``);
               })
    ``` 

5. **Update pieChart when new data comes in**

    You might have noticed the little ```update``` button on the website. Check out 
    ```main.js``` to understand its behaviour. 

    --

    Yes, you're right :) Clicking on it ```triggers``` the ```wrangleData()``` method of
     ```myPieChart```. Thus, ```displayData``` has changed. Make sure to include ```.merge
     ()``` when binding the data so that your pieChart updates accodingly.
     
    &nbsp;
    
#### Congrats! You've finished Activity I!

> **Important Notice**
> 
> We have used a pie chart as an example because it is one of the most popular chart types, and
> it demonstrates the concept of D3 shapes very well. However, it is also very important to
> mention that pie charts are often not the best way to represent data! Humans are not very good
> at comparing slices of a circle, and pie charts easily lead to misunderstandings or give false
> impressions of the data. Usually, other visualization methods are more effective, so most of
> the time you shouldn't use pie charts. If you do, make sure to compare only a very low number
> of elements within these charts. 

&nbsp;

Now that you have been introduced to
[D3 shapes](https://github.com/d3/d3-shape/blob/master/README.md), feel free to explore the
 different layouts, their features, and their differences to each other! Pie charts are just the
  beginning!


-----

&nbsp;


## Geomapping

In the second part of this lab we will focus on a different topic: We want to show you how to convert geographical data to screen coordinates, in order to create interactive maps. These maps can show specific regions, countries or whole continents. You will learn how to render geographic data as paths, how to assign colors and how to draw data points on top of the map.


### GeoJSON

GeoJSON is a JSON-based standard for encoding a variety of geographic data structures. We need the data (e.g., country boundaries, points of interests) in a proper format to generate visualizations of geographic data. Web browsers and especially D3 are not able to render traditional shapefiles, which are used by experts in geographic information systems (GIS). Therefore, GeoJSON has been established as a common way to store this information for use in web browsers.

The sub-units in GeoJSON files are called ***Features***. They contain the geodata (points, polygons, lines, ...) and very often additional information about the objects, for example, the names and the ISO codes of countries. All the features are part of the main object, the ***FeatureCollection***.

*Example:*

```javascript
{
	"type" : "FeatureCollection",
	"features" : [
		{
		  "type": "Feature",
		  "geometry": {
		    "type": "Point",
		    "coordinates": [51.507351, -0.127758]
		  },
		  "properties": {
		    "name": "London"
		  }
		},
		{
			...
		}
	]
}
```

In this example we have a feature which represents a single geographical point. The coordinates of the point are specified as an array with longitude and latitude values (```[-0.127758, 51.507351]```). In GeoJSON the first element indicates the longitude, the second element the latitude value.

In many more cases, GeoJSON files contain complex polygon data that represent the boundaries of multiple regions or countries instead of a plain list of points:

```javascript
"geometry": {
	"type": "MultiPolygon",
	"coordinates": [[[[-131.602021,55.117982],
		[-131.569159,55.28229],[-131.355558,55.183705],
		[-131.38842,55.01392],[-131.645836,55.035827], ...
    ]]]
}
```

Depending on the resolution of the dataset, each feature will include more or less longitude/latitude pairs. As you can imagine, the size of a GeoJSON file becomes tremendously high if you store the boundaries of a whole continent in high resolution.


### TopoJSON

TopoJSON is an extension of GeoJSON that encodes topology. The generated geographical data is substantially more compact than GeoJSON and results in a file size reduction of roughly 80%.

Depending on your needs, you will probably find appropriate TopoJSON files online. You can also generate custom TopoJSON files from various formats with the TopoJSON command-line tool.

→ ***Whenever you want to use a TopoJSON file in D3, you will need the TopoJSON JavaScript library to convert the data to GeoJSON for display in a web browser:*** [http://d3js.org/topojson.v1.min.js](http://d3js.org/topojson.v1.min.js)

In addition to the GeoJSON conversion, the JS library provides further methods, for example, to get the neighbors of objects or to combine multiple regions (*topojson.mesh()*).

### Workflow to implement a map with D3

***Create projection ⇒ Create D3 geo path ⇒ Map TopoJSON data to the screen***

#### D3 projections

Drawing a geographical map in D3 requires the mapping of geographical coordinates (longitude, latitude) to screen coordinates (x, y). The functions to process the mapping are called projection methods. D3 already includes a set of the most common geo projections.

*This image shows four different projections in D3:*

![D3 Projections](cs171-d3-projections.png?raw=true "D3 Projections")

*(You can take a look at the [documentation](https://github.com/d3/d3-geo/blob/master/README.md) to see more examples of geo projections.)*

When projecting positions from a sphere (i.e., the world) to a 2D plane, these different projection methods can have very different results. Different projection methods have different characteristics (e.g., distance, direction, shape, area) and show different levels of distortion.


#### D3 geo path

The path generator takes the projected 2D geometry from the last step and formats it appropriately for SVG. Or in other words, the generator maps the GeoJSON coordinates to SVG paths by using the projection function.

```javascript
let path = d3.geoPath()
    .projection(projection);
```


#### Map TopoJSON data to geo path elements

After defining the SVG area, the projection and the path generator, we can load the TopoJSON
 data, convert it to GeoJSON and finally map it to SVG paths. Here's a one-liner converting
  TopoJSON data for the US to GeoJSON. The data structure you end up with will allow you to draw a
   path for each state in the US.

```javascript
// Convert TopoJSON to GeoJSON (target object = 'states')
let usa = topojson.feature(data, data.objects.states).features
```

-----

## Activity II

![Preview Activity II](cs171_w8_lab_activity2.png?raw=true "D3 Projections")

In the second part of the lab, you will create a choropleth (world) map. You will implement a
 feature that updates the colors of the countries as well as a feature that allows users to
  rotate the globe. Lastly, you'll also implement a tooltip that appears when a user hovers over a 
   country.
   
&nbsp;

#### Activities & Walkthrough

1. **Familiarize yourself with the constructor of the class MapVis**

    First, notice that we've already created an instance of MapVis for you. In fact, margin
     conventions are already set up for you and even a heading is included. Also, the constructor
      method has been predefined.

	So, let's check out the constructor of class MapVis: Notice, that it has three parameters, i.e
	. expects three arguments. In addition to the parent element in which the visualization should sit in, it
	  also wants both data to display as well as geogaphical data. This leads us to the question
	  : how do we load more than one csv file in JS? We were leveraging the idea of promises using
	    e.g. d3.csv(), but how would this be done with multiple files? Check out ```main.js``` to
	     find out.
	     
	Since functions are first class objects, we can store them in an array and then use Promise
	.all to execute all of them. Very similar to our ```d3.csv()``` method, we have access to
	 all the data inside ```.then()```. Notice, that since we are loading two data sets, the data
	  structure is an array with two elements. You have to access them by index if you want to
	   pass on only one as an argument. 
	
	```javascript
    let promises = [
        d3.json("data/airports.json"),
        d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json")
    ];
    
    Promise.all(promises)
        .then( function(data){ initMainPage(data) })
        .catch( function (err){console.log(err)} );
    ```
	 
	&nbsp;
	
2. **Think about the MapVis architecture**

    Now that you're familiar with ```class MapVis```, think about your pipeline and
     where to do what. What part of the map drawing can you 'outsource' into the ```initVis
     ()``` method? 
     
    Start by assuming that, eventually, you want to be able to update the color of each country
    . Of course, you could append paths for each country every time you call updateVis() and make
     use of ```merge()``` but this is probably overkill. After all, the number of countries won't
      change. Thus, you should consider drawing
      the map already in initVis() with a transparent fill. In updateVis() you could then just
       grab that selection and change the fill attribute according to the data.
       
    &nbsp;
       
3. **Write and complete initVis method**

    So, what to do in ```initVis()```. Here's a list of all the tasks:
    
    1. create a projection.
    
        ```javascript
        vis.projection = d3.geoOrthographic() // d3.geoStereographic()
            .translate([vis.width / 2, vis.height / 2])
        ```
   
    2. define a geo generator and pass your projection to it
    
        ```javascript
        vis.path = d3.geoPath()
                .projection(vis.projection);
        ```
       
    3. convert your TopoJSON data into GeoJSON data structure
    
        ```javascript
       vis.world = topojson.feature(vis.geoData, vis.geoData.objects.countries).features
        ```
       
        &nbsp;
    
    4. draw countries
    
        ```javascript
        vis.countries = vis.svg.selectAll(".country")
            .data(vis.world)
            .enter().append("path")
            .attr('class', 'country')
            .attr("d", vis.path)
        ```
    
    &nbsp;       

4. **Define scale and include a zoom factor**

    Hopefully, you just had a 'wow'-moment. But you're not done, yet. Depending on your browser
     window size, the map/globe might be a little too big. So, we ask you to scale your
      projection. ```d3.geoOrthographic()``` has a default scale value of 249.5. Thus, you could
       just manipulate that by setting ```.scale(230)```. Or, you could calculate a zoom variable
        based on your ```vis.height``` and multiply the default value 249.5 by that. Solve this
         task however you want, but keep in mind that you want to make sure that a user on
          another machine and screen sees the same proportions as you.  
          
    &nbsp;

5. **Understand what's going on in wrangleData**

    Just like in the pieChart, we use wrangleData to create some random data. in this case, we
     create a dictionary with all countries as keys and random colors from an array of 4 colours
      that we defined in the constructor. We will use this dictionary as lookup table when
       assigning colors to the countries in ```updateVis()```, which is your next task.
       
    &nbsp;

6. **Update the fill attribute of all countries in updateVis()**

    Select all countries (or grab the selection if you already stored it as a property) and change
     the fill attribute of each country. Use the lookup table that is stored in the property
      ```countryInfo```.
      
    The colors of the countries should now update. Also, when clicking on the ```update``` button
    , you should see the colors of the map update. Can you explain why?
    
    &nbsp;

7. **Add a tooltip and hover effects**

    Similar to the pieChart, add a tooltip when hovering over a country path. Also, change the
     color while hovering to have a nice hover effect. If you don't know the code by heart, just
      look it up in Activity I. (Don't forget to append an actual tooltip div!)
      
    &nbsp;
          
8. **Add sphere and graticule to mimic the ocean and the globe**

    You might have been playing around with the fill attribute and maybe you have wondered how to
     change the color of the ocean. Well, that is actually not that easy because we only have the
      paths for the countries. Of course, one could try to reverse/inverse-engineer the paths for the
       ocean but there's an easier way out. Let's just put a sphere behind the map. Here's the
        code for it:
        
    ```javascript
   vis.svg.append("path")
        .datum({type: "Sphere"})
        .attr("class", "graticule")
        .attr('fill', '#ADDEFF')
        .attr("stroke","rgba(129,129,129,0.35)")
        .attr("d", vis.path);
    ```
   
   &nbsp;
        
9. **Add legend**

    The map/globe looks nice now, but you are missing one important piece - a legend. For now, we
     would like you to implement a legend with four steps reflecting the four different colors in
      the color array in the constructor. Think of this task as producing a very small barchart
       with less complex data.
       
    These are the steps to complete the task:
    - start by creating a legend group. translate it to wherever you want it to be.
    
    ```javascript
    vis.legend = vis.svg.append("g")
        .attr('class', 'legend')
        .attr('transform', `translate(${vis.width * 2.8 / 4}, ${vis.height - 20})`)
    ```
   
    - draw rectangles inside the legend group (they will already be translated!)
    
    ```javascript
   vis.legend.selectAll().data(vis.colors)
        .enter()
        ...
    ```
    - create a legendScale (linear, band, time - whatever you need)
    - create a legend axis group
    - create a legend axis
    - call the legend axis inside the legend axis group
 
   &nbsp;
 
10. **Make the map draggable / rotatable** 

    You made it this far! Now you've earned some free code. The following lines allow you to
     drag your map which will result in the globe to rotate. In short, what the code does is to
      get the values of where you started dragging and where you ended dragging. It then computes the change in
       pixel values. Together with the information from the projection, we can then update the
        path for each country accordingly. We do that both for the countries as well as for the
         graticule. This code can sit in initVis().

    ```javascript
    let m0,
    o0;
    
    vis.svg.call(
        d3.drag()
        .on("start", function (event) {
        
            let lastRotationParams = vis.projection.rotate();
            m0 = [event.x, event.y];
            o0 = [-lastRotationParams[0], -lastRotationParams[1]];
        })
        .on("drag", function (event) {
            if (m0) {
                let m1 = [event.x, event.y],
                    o1 = [o0[0] + (m0[0] - m1[0]) / 4, o0[1] + (m1[1] - m0[1]) / 4];
                vis.projection.rotate([-o1[0], -o1[1]]);
            }
        
            // Update the map
            vis.path = d3.geoPath().projection(vis.projection);
            d3.selectAll(".country").attr("d", vis.path)
            d3.selectAll(".graticule").attr("d", vis.path)
        })
    )
    ```
    
    &nbsp;
    
11. **Play with other layouts**    

    OK, time for more fun with maps. Play around with other projections. Follow this [link](https://github.com/d3/d3-geo)
    and scroll down to the various projections. Swap out ```d3.geoOrthographic()``` for e.g. ```d3
    .geoStereographic()```, etc.

    &nbsp;
 
12. **BONUS: Draw airports and connections** 
    
    In case you haven't had enough, we challenge you to also display the airports in the map
    . Remember that your object ```myMapVis``` already has access to the airport data. Including
     the airports as circles shouldn't be too hard for you. The only thing new for you is how to
      set up the coordinates for both the airports as well as the connections. Here are some
       useful lines of code.
      
    ```javascript
    
    // airports
    .attr('cx', d => vis.projection([d.longitude, d.latitude])[0])
    .attr('cy', d => vis.projection([d.longitude, d.latitude])[1]
    
    // connections
    .attr("x1", function(d) { return vis.projection([vis.airportData.nodes[d.source].longitude, vis.airportData.nodes[d.source].latitude])[0]; })
    .attr("y1", function(d) { return vis.projection([vis.airportData.nodes[d.source].longitude, vis.airportData.nodes[d.source].latitude])[1]; })
    .attr("x2", function(d) { return vis.projection([vis.airportData.nodes[d.target].longitude, vis.airportData.nodes[d.target].latitude])[0]; })
    .attr("y2", function(d) { return vis.projection([vis.airportData.nodes[d.target].longitude, vis.airportData.nodes[d.target].latitude])[1]; });
        
    ```
     Almost done! Now you just need to make sure that the dragging behavior is fine. Check out
      how we handled updating the country and graticule paths in ```d3.drag().on('drag', function
      (){....})``` and combine that with your knowledge of setting up the x & y coordinates using
       longitude & latitude values.

-----

### Congratulations! You've completed the final lab!

&nbsp;

### Resource

- [http://bost.ocks.org/mike/map/](http://bost.ocks.org/mike/map/)
- [https://github.com/d3/d3-geo/blob/master/README.mdd](https://github.com/d3/d3-geo/blob/master/README.md)
- [https://github.com/mbostock/topojson](https://github.com/mbostock/topojson)
- [https://www.jasondavies.com/maps/rotate/](https://www.jasondavies.com/maps/rotate/)
- [https://codeasart.com/globe/](https://codeasart.com/globe/)
