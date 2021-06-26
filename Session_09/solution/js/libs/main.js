
drawAreaChart();
drawBarChart();

let parseTest = d3.timeParse("%Y-%m-%d");
console.log(parseTest('2013-01-14'));

function drawAreaChart() {

	// Margin object with properties for the four directions
	let margin = {top: 40, right: 10, bottom: 40, left: 60};

	// Chart size
	let width = 620 - margin.left - margin.right,
	    height = 400 - margin.top - margin.bottom;

	// Formatting function to convert strings to date objects 
	let parseDate = d3.timeParse("%Y-%m-%d");

	// Formatting function display a date object as a string
	let formatDate = d3.timeFormat("%Y-%m-%d");

	// Once we have the xValue (mouse pointer event), we can use 'array bisector' to find the index of the value in the array
	let bisectDate = d3.bisector(d=>d.date).left;

	// SVG drawing area (corresponds to the D3 margin convention)
	let svg = d3.select("#area-chart").append("svg")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	  .append("g")
	    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	// Load CSV file
	let url = "data/zaatari-refugee-camp-population.csv"
	d3.csv(url, (row) => {
		// convert
		row.population = +row.population;
		row.date = parseDate(row.date);
		return row
	}).then( (data) => {

		// Create scale and axis functions

		let x = d3.scaleTime()
				.range([0, width])
				.domain(d3.extent(data, d=> d.date));

		let y = d3.scaleLinear()
				.range([height, 0])
				.domain([0, d3.max(data, d=> d.population)]);

		let xAxis = d3.axisBottom()
				.scale(x)
				.tickFormat(d3.timeFormat("%b %Y"));

		let yAxis = d3.axisLeft()
				.scale(y);


		// The area function transforms data points into a shape
		let area = d3.area()
				.x(d=> x(d.date))
				.y0(height)
				.y1(d=>y(d.population));

		// Append a path and call the area function
		// D3 uses each data point and passes it to the area function. The area function translates the data into positions on the path in the SVG.
		let timePath = svg.append("path")
	      .datum(data)
	      .attr("class", "area")
	      .attr("d", area);


	  // Draw axes and chart title

		let xAxisGroup = svg.append("g")
	      .attr("class", "x-axis axis")
	      .attr("transform", "translate(0," + height + ")")
	      .call(xAxis);

	  let yAxisGroup = svg.append("g")
	      .attr("class", "y-axis axis")
	      .call(yAxis)

	  let chartTitle = svg.append("text")
	    	.attr("class", "chart-title")
	      .attr("y", -30)
	      .attr("x", width/2)
	      .attr("dy", ".71em")
	      .style("text-anchor", "middle")
	      .text("Camp Population");


	  // Create a group for all the tooltip elements and hide it 
	  let focus = svg.append("g")
      .attr("class", "focus")
      .style("display", "none");

    // Append a vertical tooltip line
	  focus.append("line")
	      .attr("stroke", "#824C2A")
	      .attr("y1", 0)
	      .attr("y2", height)
	      .attr("x1", 0)
	      .attr("x2", 0);

	  // Append an empty SVG text element for the tooltip population value
	  focus.append("text")
	  		.attr("class", "focus-population")
	      .attr("x", 10)
	      .attr("y", 10)
	      .attr("dy", ".35em");

	  // Append an empty SVG text element for the tooltip date value
	  focus.append("text")
	  		.attr("class", "focus-date")
	  		.attr("x", 10)
	      .attr("y", 30)
	      .attr("dy", ".35em");

	  // Append a rectangle over the whole chart to capture 'mouse events'
	  svg.append("rect")
	      .attr("class", "overlay")
	      .attr("width", width)
	      .attr("height", height)
	      .on("mouseover", ()=> focus.style("display", null))
	      .on("mouseout", ()=>focus.style("display", "none"))
	      .on("mousemove", mousemove);

	  // Get the actual data of the current mouse position, update the coordinates and set the tooltip values
	  function mousemove(event) {

	  	// Use scale.invert function to get the actual value from the mousex value
	    let x0 = x.invert(d3.pointer(event)[0]);
	    console.log(d3.pointer(event)[0], x0, event)

	    // Call the previsously declared bisector function to get the index of the value in the dataset
      let i = bisectDate(data, x0, 1);

      // Find the closest date and population combination to the current cursor position
      let d0 = data[i - 1];
      let d1 = data[i];
	  let d = x0 - d0.date > d1.date - x0 ? d1 : d0;
	  
	  //   let d= data[i];

      	// Shift the whole tooltip group on the x-axis
		// focus.attr("transform", "translate(" + x(d.date) + ",0)");
		
		focus.attr("transform", "translate(" + d3.pointer(event)[0] + ",0)");

	    // Update the tooltip text properties
	    focus.select(".focus-date").text(formatDate(d.date));
	    focus.select(".focus-population").text(d3.format(',')(d.population));
	  }
	});
	// drawBarChart(data);

}



function drawBarChart() {

	// Create an array with JSON objects
	let data = [
		{ "shelter":"Caravans", "value":0.7968 },
		{ "shelter":"Combination*", "value":0.1081 },
		{ "shelter":"Tents", "value":0.0951 }
	];


	// Specify the SVG drawing area

	let margin = {top: 40, right: 10, bottom: 40, left: 40};

	let width = 400 - margin.left - margin.right,
	    height = 400 - margin.top - margin.bottom;

	let svg = d3.select("#bar-chart").append("svg")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	  .append("g")
	    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


	// Create an ordinal scale for the three shelter types
	let x = d3.scaleBand()
		.domain(data.map(d=> d.shelter))
		.rangeRound([0, width])
		.paddingInner(0.1);

	// Create a linear scale for the percentage values (domain: 0 - 1)
	let y = d3.scaleLinear()
		.domain([0, 1])
		.range([height, 0]);


	// Draw axes
	let xAxis = d3.axisBottom()
		.scale(x);

	let yAxis = d3.axisLeft()
		.scale(y)
		.tickFormat(d3.format(".0%"));

	let xAxisGroup = svg.append("g")
      .attr("class", "x-axis axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  let yAxisGroup = svg.append("g")
      .attr("class", "y-axis axis")
      .call(yAxis);

  // Draw the actual bars/columns of the bar chart
  let bar = svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", d=> x(d.shelter))
      .attr("y", d=> y(d.value))
      .attr("height", d=> height - y(d.value))
      .attr("width", x.bandwidth());

  // Append labels at the top of the bars
  let barLabel = svg.selectAll(".bar-label")
      .data(data)
    .enter().append("text")
      .attr("class", "bar-label")
      .attr("x", d=> x(d.shelter) + (x.bandwidth()/2))
      .attr("y", d=> y(d.value)-10)
      .style("text-anchor", "middle")
      .text(d=> (d.value * 100).toFixed(2) + " %" );

  // Append a chart title
  let chartTitle = svg.append("text")
    	.attr("class", "chart-title")
      .attr("y", -30)
      .attr("x", width/2)
      .attr("dy", ".71em")
      .style("text-anchor", "middle")
      .text("Type of Shelter");
}
