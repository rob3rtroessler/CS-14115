// DATA WRANGLING

let scatter_data = data

// CHART AREA
let margin_scatter = {top: 50, right: 50, bottom: 50, left: 50},
    width_scatter = document.querySelector('#svg_container_right').offsetWidth - margin_scatter.left - margin_scatter.right,
    height_scatter = 400 - margin_scatter.top - margin_scatter.bottom;


let svg_right = d3.select("#svg_container_right").append("svg")
    .attr("width", width_scatter + margin_scatter.left + margin_scatter.right)
    .attr("height", height_scatter + margin_scatter.top + margin_scatter.bottom)
    .append("g")
    .attr("transform", "translate(" + margin_scatter.left + "," + margin_scatter.top + ")");


// tooltip
let tooltip_scatter = d3.select("body").append('div')
    .attr('class', "tooltip")
    .attr('id', 'scatterTooltip')

// SCALES

// population_scale for radius size
let population_scale = d3.scaleLinear()
    .range([0, 40])
    .domain([d3.min(scatter_data, d => d.population), d3.max(scatter_data, d => d.population)]);

// x-axis: deaths
let x_scale_scatter = d3.scaleLinear()
    .range([0, width_scatter])
    .domain([d3.min(scatter_data, d => d.absDeaths), d3.max(scatter_data, d => d.absDeaths)]);

// x-axis: cases
let y_scale_scatter = d3.scaleLinear()
    .range([height_scatter,0])
    .domain([d3.min(scatter_data, d => d.absCases), d3.max(scatter_data, d => d.absCases)]);



// AXIS
let xAxis_scatter= d3.axisBottom()
    .scale(x_scale_scatter)

let yAxis_scatter = d3.axisLeft()
    .scale(y_scale_scatter);

let xAxisGroup_scatter = svg_right.append("g")
    .attr("class", "x-axis axis");

let yAxisGroup_scatter = svg_right.append("g")
    .attr("class", "y-axis axis");


// DRAWING THE BUBBLES
let bubbles = svg_right.selectAll(".bubble")
    .remove()
    .exit()
    .data(scatter_data)


bubbles.enter()
    .append("circle")
    .attr("class", "bubble")
    .attr("cx", d => x_scale_scatter(d.absDeaths))
    .attr("cy", d => y_scale_scatter(d.absCases))
    .attr("r", d => population_scale(d.population))
    .attr("fill", '#136D70')
    .attr('stroke', '#093637')
    .on('mouseover', function(event, d){

        // mouseover effect
        d3.select(this).attr('fill', '#199599')

        // update tooltip
        tooltip
            .style("opacity", 1)
            .style("left", event.pageX + 20 + "px")
            .style("top", event.pageY + "px")
            .html(`
                        <div style="border: thin solid grey; border-radius: 5px; background: lightgrey; padding: 20px">
                            <h3>${d.state}<h3>
                            <h4> Population: ${d.population}</h4>
                            <h4> Cases (absolute): ${d.absCases}</h4>
                            <h4> Deaths (absolute): ${d.absDeaths}</h4>
                            <h4> Cases (relative): ${d.relCases.toFixed(2)}%</h4>
                            <h4> Deaths (relative): ${d.relDeaths.toFixed(2)}%</h4>
                        </div>`);
    })
    .on('mouseout', function (event, d) {
        d3.select(this).attr('fill', '#136D70')

        // hide tooltip
        tooltip
            .style("opacity", 0)
            .style("left", 0+ "px")
            .style("top", 0+ "px")
    })


// ---- DRAW AXIS	----
xAxisGroup_scatter = svg_right.select(".x-axis")
    .attr("transform", "translate(0," + height_scatter + ")")
    .call(xAxis_scatter);

yAxisGroup_scatter = svg_right.select(".y-axis")
    .call(yAxis_scatter);

