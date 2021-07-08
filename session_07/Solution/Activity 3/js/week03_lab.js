
// Global variable with 60 attractions (JSON format)
// console.log(attractions);

dataManipulation();

function dataFiltering() {
	let attractions = attractionData;

	// ---- PART 2: FILTER BY ATTRACTION CATEGORY ----

	// Get selected attraction category
	let attractionCategoryElement = document.getElementById("attraction-category");
	let attractionCategory = attractionCategoryElement.options[attractionCategoryElement.selectedIndex].value;

	if(attractionCategory !== "all") {
		attractions = attractions.filter(function (element, index){
			return element.Category === attractionCategory
		});
	}
	// ---- PART 1: TOP 5 ATTRACTIONS ----

	// If compareFunction is supplied, the array elements are sorted according to the return value of the compare function. If a and b are two elements being compared, then:

	let sortedAttractions = attractions.sort( (a,b) => {
		return b.Visitors - a.Visitors;
	});

	let topAttractions = sortedAttractions.filter( (row, index) => {
		return index < 5;
	});

	// Call function to draw bar chart
	renderBarChart(topAttractions);
}

function dataManipulation() {
    dataFiltering();
}
