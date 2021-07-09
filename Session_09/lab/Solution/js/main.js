/* * * * * * * * * * * * * *
*           MAIN           *
* * * * * * * * * * * * * */

// init global variables, switches, helper functions
let myPieChart,
    myMapVis;

function updateAllVisualizations(){
    myPieChart.wrangleData()
    myMapVis.wrangleData()
}

// load data using promises
let promises = [
    d3.json("data/airports.json"),
    d3.json("data/world-110m.json"),
    d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json"),
    d3.json("https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json")
    // usa data
];

Promise.all(promises)
    .then( function(data){ initMainPage(data) })
    .catch( function (err){console.log(err)} );

// initMainPage
function initMainPage(allDataArray) {

    // log data
    console.log(allDataArray);

    // activity 1, pie chart
    myPieChart = new PieChart('pieDivRight')

    // activity 2, force layout
    myMapVis = new MapVis('mapDiv', allDataArray[0], allDataArray[2])

}


