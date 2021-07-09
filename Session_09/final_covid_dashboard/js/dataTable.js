
class DataTable {

    // constructor method to initialize Timeline object
    constructor(parentElement, covidData, usaData) {
        this.parentElement = parentElement;
        this.covidData = covidData;
        this.usaData = usaData;
        this.displayData = [];

        // parse date method
        this.parseDate = d3.timeParse("%m/%d/%Y");

        this.initTable()
    }

    initTable(){
        let tableObject = this
        tableObject.table = d3.select(`#${tableObject.parentElement}`)
            .append("table")
            .attr("class", "table table-hover")

        // append table head
        tableObject.thead = tableObject.table.append("thead")
        tableObject.thead.html(
            `<tr>
                <th scope="col">State</th>
                <th scope="col">Population</th>
                <th scope="col">New Cases (abs)</th>
                <th scope="col">New Cases (rel)</th>
                <th scope="col">New Deaths (abs)</th>
                <th scope="col">New Deaths (rel)</th>
            </tr>`
        )



        // append table body
        tableObject.tbody = tableObject.table.append("tbody")

        // wrangleData
        tableObject.wrangleData()
    }

    wrangleData(){
        let tableObject = this

        // check out the data
        // console.log(tableObject.covidData)
        // console.log(tableObject.usaData)

        // first, filter according to selectedTimeRange, init empty array
        let filteredData = [];

        // if there is a region selected
        if (selectedTimeRange.length !== 0){
            //console.log('region selected', vis.selectedTimeRange, vis.selectedTimeRange[0].getTime() )

            // iterate over all rows the csv (dataFill)
            tableObject.covidData.forEach( row => {
                // and push rows with proper dates into filteredData
                if (selectedTimeRange[0].getTime() <= tableObject.parseDate(row.submission_date).getTime() && tableObject.parseDate(row.submission_date).getTime() <= selectedTimeRange[1].getTime() ){
                    filteredData.push(row);
                }
            });
        } else {
            filteredData = tableObject.covidData;
        }

        // prepare covid data by grouping all rows by state
        let covidDataByState = Array.from(d3.group(filteredData, d =>d.state), ([key, value]) => ({key, value}))

        // have a look
        // console.log(covidDataByState)

        // init final data structure in which both data sets will be merged into
        tableObject.stateInfo = []

        // merge
        covidDataByState.forEach( state => {

            // get full state name
            let stateName = nameConverter.getFullName(state.key)

            // init counters
            let newCasesSum = 0;
            let newDeathsSum = 0;
            let population = 0;

            // look up population for the state in the census data set
            tableObject.usaData.forEach( row => {
                if(row.state === stateName){
                    population += +row["2019"].replaceAll(',', '');
                }
            })

            // calculate new cases by summing up all the entries for each state
            state.value.forEach( entry => {
                newCasesSum += +entry['new_case'];
                newDeathsSum += +entry['new_death'];
            });

            // populate the final data structure
            tableObject.stateInfo.push(
                {
                    state: stateName,
                    population: population,
                    absCases: newCasesSum,
                    absDeaths: newDeathsSum,
                    relCases: (newCasesSum/population*100),
                    relDeaths: (newDeathsSum/population*100)
                }
            )
        })

        console.log('final data structure', tableObject.stateInfo);

        tableObject.updateTable()

    }

    updateTable(){
        let tableObject = this;

        // reset tbody
        tableObject.tbody.html('')

        // loop over all states
        tableObject.stateInfo.forEach(state =>{
            let row = tableObject.tbody.append("tr")
                row.html(
                `<td>${state.state}</td>
                <td>${state.population}</td>
                <td>${state.absCases}</td>
                <td>${state.absDeaths}</td>
                <td>${state.relCases}</td>
                <td>${state.relDeaths}</td>`
            )
            row.on('mouseover', function(){
                console.log(state.state)
                selectedState = state.state;
                myBrushVis.wrangleDataResponsive();
            })
        })
    }
}