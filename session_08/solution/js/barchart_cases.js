
/*****************************************/
/*   DRAW BAR CHART - ALREADY COMPLETE   */
/*****************************************/

// CHART AREA
let margin_center = {top: 40, right: 20, bottom: 40, left: 90},
    width_center = document.querySelector('#svg_container_center').offsetWidth - margin_center.left - margin_center.right,
    height_center = 400 - margin_center.top - margin_center.bottom;


let svg_center = d3.select("#svg_container_center").append("svg")
    .attr("width", width_center + margin_center.left + margin_center.right)
    .attr("height", height_center + margin_center.top + margin_center.bottom)
    .append("g")
    .attr("transform", "translate(" + margin_center.left + "," + margin_center.top + ")");



// AXIS
let x_center = d3.scaleBand()
    .range([0, width_center])
    .paddingInner(0.1);

let y_center = d3.scaleLinear()
    .range([height_center, 0]);

let xAxis_center = d3.axisBottom()
    .scale(x_center)

let yAxis_center = d3.axisLeft()
    .scale(y_center);

let xAxisGroup_center = svg_center.append("g")
    .attr("class", "x-axis axis");

let yAxisGroup_center = svg_center.append("g")
    .attr("class", "y-axis axis");

// tooltip
let tooltip_center = d3.select("body").append('div')
    .attr('class', "tooltip")
    .attr('id', 'barchartLeftTooltip')



function renderBarChartCenter(data) {

    x_center.domain(data.map( d => d.state));
    y_center.domain([0, d3.max(data, d => d.absCases)]);

    console.log(d3.max(data, d => d.absCases))
    // ---- DRAW BARS ----
    let bars = svg_center.selectAll(".bar_center")
        .remove()
        .exit()
        .data(data)

    bars.enter()
        .append("rect")
        .attr("class", "bar_center")
        .attr("x", d => x_center(d.state))
        .attr("y", d => y_center(d.absCases))
        .attr("height", d => (height_center - y_center(d.absCases)))
        .attr("width", x_center.bandwidth())
        .attr("fill", '#136D70')
        .attr('stroke', '#093637')
        .on('mouseover', function(event, d){

            // mouseover effect
            d3.select(this).attr('fill', '#199599')

            // update tooltip
            tooltip_center
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
            tooltip_center
                .style("opacity", 0)
                .style("left", 0+ "px")
                .style("top", 0+ "px")
        })



    // ---- DRAW AXIS	----
    xAxisGroup_center = svg_center.select(".x-axis")
        .attr("transform", "translate(0," + height_center + ")")
        .call(xAxis_center);

    yAxisGroup_center = svg_center.select(".y-axis")
        .call(yAxis_center);

}
