
// TODO: create an array 'data_final' that contains all the states, population, absCases, absDeaths, as well as relCases and relDeaths

// use an array method to solve this task

let data_final = []

data.forEach((state, index)=>{

    // state is a dictionary/object - add key value pairs for relCases and relDeaths
    state['relCases'] = state.absCases/state.population*100
    state['relDeaths'] = state.absDeaths/state.population*100

    // push each state into data_final
    data_final.push(state)
})

// TODO: log data_final and check whether the data now contains relCases and relDeaths
//console.log(data_final)


// TODO: sort all the states by population!
let sorted_states = data_final.sort( (a,b) => {
    return b.population - a.population;
});

// TODO: Filter the sorted data!
let largest_states = sorted_states.filter( (row, index) => {
    return index < 5;
});

// TODO: Log the top five states
//console.log(largest_states)

// TODO: Create barchart with population
renderBarChartLeft(largest_states)



renderBarChartCenter(largest_states)
