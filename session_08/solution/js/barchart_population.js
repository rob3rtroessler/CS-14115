
/*****************************************/
/*   DRAW BAR CHART - ALREADY COMPLETE   */
/*****************************************/

// CHART AREA
let margin = {top: 40, right: 20, bottom: 40, left: 90},
    width = document.querySelector('#svg_container_left').offsetWidth - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;


let svg = d3.select("#svg_container_left").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


// AXIS
let x = d3.scaleBand()
    .range([0, width])
    .paddingInner(0.1);

let y = d3.scaleLinear()
    .range([height, 0]);

let xAxis = d3.axisBottom()
    .scale(x)

let yAxis = d3.axisLeft()
    .scale(y);

let xAxisGroup = svg.append("g")
    .attr("class", "x-axis axis");

let yAxisGroup = svg.append("g")
    .attr("class", "y-axis axis");

// tooltip
let tooltip = d3.select("body").append('div')
    .attr('class', "tooltip")
    .attr('id', 'barchartLeftTooltip')



function renderBarChartLeft(data) {

    x.domain(data.map( d => d.state));
    y.domain([0, d3.max(data, d => d.population)]);

    // ---- DRAW BARS ----
    let bars = svg.selectAll(".bar")
        .remove()
        .exit()
        .data(data)

    console.log(bars)

    bars.enter()
        .append("rect")
        .attr("class", "bar")
        .attr('id', function (data, index) {
            console.log(data, index)
        })
        .attr("x", d => x(d.state))
        .attr("y", d => y(d["population"]))
        .attr("height", d => (height - y(d.population)))
        .attr("width", x.bandwidth())
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
    xAxisGroup = svg.select(".x-axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    yAxisGroup = svg.select(".y-axis")
        .call(yAxis);

}
