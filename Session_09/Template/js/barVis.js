/* * * * * * * * * * * * * *
*      class BarVis        *
* * * * * * * * * * * * * */


class BarVis {

    constructor(){

        this.initVis()
    }

    initVis(){
        let vis = this;

        vis.margin = {top: 20, right: 20, bottom: 20, left: 40};
        vis.width = $("#" + vis.parentElement).width() - vis.margin.left - vis.margin.right;
        vis.height = $("#" + vis.parentElement).height() - vis.margin.top - vis.margin.bottom;

        // init drawing area
        vis.svg = d3.select("#" + vis.parentElement).append("svg")
            .attr("width", vis.width + vis.margin.left + vis.margin.right)
            .attr("height", vis.height + vis.margin.top + vis.margin.bottom)
            .append('g')
            .attr('transform', `translate (${vis.margin.left}, ${vis.margin.top})`);

        // add title
        vis.svg.append('g')
            .attr('class', 'title bar-title')
            .append('text')
            .text('Title for Barchart')
            .attr('transform', `translate(${vis.width / 2}, 10)`)
            .attr('text-anchor', 'middle');

        this.wrangleData();
    }

    wrangleData(){
        let vis = this

        // I think one could use a lot of the dataWrangling from dataTable.js here...

        // maybe a boolean in the constructor could come in handy ?
        /*
        if (vis.descending){
            vis.displayData.sort((a,b) => {return b[selectedCategory] - a[selectedCategory]})
        } else {
            vis.displayData.sort((a,b) => {return a[selectedCategory] - b[selectedCategory]})
        }

        console.log('final data structure', vis.displayData);

        vis.topTenData = vis.displayData.slice(0, 10)

        console.log('final data structure', vis.topTenData);
        */


        vis.updateVis()

    }

    updateVis(){
        let vis = this;

        console.log('here')

    }



}