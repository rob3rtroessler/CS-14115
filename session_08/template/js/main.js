let data = [{state: "Colorado", population: 5758736, absCases: 73537, absDeaths: 2069},
    {state: "Florida", population: 21477737, absCases: 709156, absDeaths: 14712},
    {state: "Arizona", population: 7278717, absCases: 221070, absDeaths: 5707},
    {state: "South Carolina", population: 5148714, absCases: 152159, absDeaths: 3456},
    {state: "Connecticut", population: 3565287, absCases: 59120, absDeaths: 4517},
    {state: "Nebraska", population: 1934408, absCases: 48259, absDeaths: 503},
    {state: "Iowa", population: 3155070, absCases: 92989, absDeaths: 1389},
    {state: "New Mexico", population: 2096829, absCases: 30632, absDeaths: 894},
    {state: "Kentucky", population: 4467673, absCases: 73158, absDeaths: 1214},
    {state: "Wyoming", population: 578759, absCases: 6629, absDeaths: 53},
    {state: "North Dakota", population: 762062, absCases: 24364, absDeaths: 280},
    {state: "Washington", population: 7614893, absCases: 90276, absDeaths: 2158},
    {state: "Tennessee", population: 6829174, absCases: 203699, absDeaths: 2597},
    {state: "Massachusetts", population: 6892503, absCases: 142801, absDeaths: 9523},
    {state: "Pennsylvania", population: 12801989, absCases: 164207, absDeaths: 8227},
    {state: "New York", population: 19453561, absCases: 466863, absDeaths: 32939},
    {state: "Ohio", population: 11689100, absCases: 159964, absDeaths: 4931},
    {state: "Alabama", population: 4903185, absCases: 159713, absDeaths: 2559},
    {state: "Virginia", population: 8535519, absCases: 153182, absDeaths: 3291},
    {state: "Michigan", population: 9986857, absCases: 142726, absDeaths: 7139},
    {state: "Mississippi", population: 2976149, absCases: 100703, absDeaths: 3013},
    {state: "California", population: 39512223, absCases: 826784, absDeaths: 16149},
    {state: "Illinois", population: 12671821, absCases: 306133, absDeaths: 9054},
    {state: "Texas", population: 28995881, absCases: 769303, absDeaths: 16033},
    {state: "Wisconsin", population: 5822434, absCases: 141655, absDeaths: 1392},
    {state: "New Jersey", population: 8882190, absCases: 208713, absDeaths: 16138},
    {state: "Louisiana", population: 4648794, absCases: 169937, absDeaths: 5586},
    {state: "Nevada", population: 3080156, absCases: 82529, absDeaths: 1663},
    {state: "Georgia", population: 10617423, absCases: 323714, absDeaths: 7192},
    {state: "Oklahoma", population: 3956971, absCases: 98244, absDeaths: 1061},
    {state: "Puerto Rico", population: 3193694, absCases: 51737, absDeaths: 696},
    {state: "Indiana", population: 6732219, absCases: 125976, absDeaths: 3681},
    {state: "North Carolina", population: 10488084, absCases: 219754, absDeaths: 3637},
    {state: "Maryland", population: 6045680, absCases: 128204, absDeaths: 3967},
    {state: "Idaho", population: 1787065, absCases: 44422, absDeaths: 487},
    {state: "Oregon", population: 4217737, absCases: 35049, absDeaths: 572},
    {state: "Arkansas", population: 3017804, absCases: 87430, absDeaths: 1446},
    {state: "Utah", population: 3205958, absCases: 78723, absDeaths: 482},
    {state: "Missouri", population: 6137428, absCases: 133418, absDeaths: 2174},
    {state: "Minnesota", population: 5639632, absCases: 105740, absDeaths: 2140},
    {state: "Delaware", population: 973764, absCases: 21363, absDeaths: 645},
    {state: "West Virginia", population: 1792147, absCases: 16742, absDeaths: 361},
    {state: "Rhode Island", population: 1059361, absCases: 25419, absDeaths: 1121},
    {state: "District of Columbia", population: 705749, absCases: 15547, absDeaths: 631},
    {state: "South Dakota", population: 884659, absCases: 24598, absDeaths: 248},
    {state: "Kansas", population: 2913314, absCases: 62708, absDeaths: 706},
    {state: "Maine", population: 1344212, absCases: 5565, absDeaths: 142},
    {state: "New Hampshire", population: 1359711, absCases: 8680, absDeaths: 444},
    {state: "Montana", population: 1068778, absCases: 15298, absDeaths: 191},
    {state: "Hawaii", population: 1415872, absCases: 13041, absDeaths: 157},
    {state: "Alaska", population: 731545, absCases: 8613, absDeaths: 58},
    {state: "Vermont", population: 623989, absCases: 1817, absDeaths: 58}]

// TODO: create an array 'data_final' that contains all the states, population, absCases, absDeaths, as well as relCases and relDeaths

// use an array method to solve this task

let data_final = []

data.forEach((state, index)=>{

    // start by logging state and index
   // TODO

    // state is a dictionary/object - add key value pairs for relCases and relDeaths
    // TODO
    state['relCases'] = ...


    // push each state into data_final
    // TODO
})

// TODO: log data_final and check whether the data now contains relCases and relDeaths



// TODO: sort all the states by population!
let sorted_states = ...

// TODO: Filter the sorted data!
let largest_states = ...

// TODO: Log the top five states
console.log()

// TODO: Create barchart with population by calling the renderBarChartLeft function. You will need to provide largest_states as arguments
