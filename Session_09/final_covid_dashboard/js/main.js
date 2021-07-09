/* * * * * * * * * * * * * *
*           MAIN           *
* * * * * * * * * * * * * */

// init global variables & switches
let myDataTable,
    myMapVis,
    myBarVisOne,
    myBarVisTwo,
    myBrushVis;

let selectedTimeRange = [];
let selectedState = '';
let selectedCategory = $('#categorySelector').val();

function categoryChange() {
    selectedCategory = $('#categorySelector').val();
    myMapVis.wrangleData();
    myBarVisOne.wrangleData();
    myBarVisTwo.wrangleData();

    changeTitles(selectedCategory)
}

function changeTitles(title){
    console.log(title)
    // update MapTitle
    $(".title.map-title").html(title)
    // updae Barchart
}

// define carousel behaviour
let carousel = $('#stateCarousel');

// prevent rotating
carousel.carousel({
    interval: false
})

// on button click switch view
function switchView(){
    carousel.carousel('next')
    $('#switchView').html() === 'map view'  ? $('#switchView').html('table view') : $('#switchView').html('map view');
}



// load data using promises
let promises = [

    d3.json("https://cdn.jsdelivr.net/npm/us-atlas@3/states-albers-10m.json"), // already projected -> you can just scale it to ft your browser window
    //d3.json("https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"),  // not projected -> you need to do it

    d3.csv("data/covid_data.csv"),
    d3.csv("data/census_usa.csv")
    // usa data
];

Promise.all(promises)
    .then( function(data){ initMainPage(data) })
    .catch( function (err){console.log(err)} );

// initMainPage
function initMainPage(dataArray) {

    // log data
    console.log(dataArray);

    // init table
    myDataTable = new DataTable('tableDiv', dataArray[1], dataArray[2]);

    // init map
    myMapVis = new MapVis('mapDiv', dataArray[0], dataArray[1], dataArray[2]);

    // init scatter
    myBarVisOne = new BarVis('barDiv', dataArray[1], dataArray[2], true);
    myBarVisTwo = new BarVis('barTwoDiv', dataArray[1], dataArray[2], false);

    // init brush
    myBrushVis = new BrushVis('brushDiv', dataArray[1]);
}


