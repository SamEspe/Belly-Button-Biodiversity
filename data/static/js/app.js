// Read in samples.json from website using D3

const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Make the dropdown menu to switch between subjects

// let objectValue  = "";
let selector = d3.select("#selDataset");

// Declare functions

// Make Bar Graph Function
function makeBarGraph(sampleID){
    console.log(`Make bar graph of sampleID ${sampleID}`)   
    // Get data for selected sampleID
    d3.json(url).then(function(data){
        let samples = data.samples;
        let sampleData = samples.filter(samples => samples.id == sampleID);
        console.log(sampleData);

        let sampleValues = sampleData[0].sample_values.slice(0,10).reverse();
        let otuIDs = sampleData[0].otu_ids.slice(0,10).reverse();
        let otuLabels = sampleData[0].otu_labels.slice(0,10).reverse();
        let yticks = otuIDs.slice(0,10).map(otuID => `OTU ${otuID}`);

        // Draw graph with Plotly
        let barChartData = {
            type: "bar",
            x: sampleValues,
            y: yticks,
            text: otuLabels,
            orientation: "h"
        };
        
        let barLayout = {
            title: "Top 10 OTUs Found in Individual"
        };

        let barTraceData = [barChartData];

        Plotly.newPlot("bar", barTraceData, barLayout);
    });
    };

    
// Make Bubble Chart Function
function makeBubbleChart(sampleID){
    console.log(`Make bubble chart of sampleID ${sampleID}`)  

    d3.json(url).then(function(data){
    // Get data for selected sampleID
        let samples = data.samples;
        let sampleData = samples.filter(samples => samples.id == sampleID);
        console.log(sampleData);
        
        let sampleValues = sampleData[0].sample_values;
        let otuIDs = sampleData[0].otu_ids;
        let otuLabels = sampleData[0].otu_labels;
        
    // Make Bubble Chart with Plotly
        let bubbleChartData = {
            x: otuIDs,
            y: sampleValues,
            text: otuLabels,
            mode: 'markers',
            marker: {
                color: otuIDs,
                size: sampleValues,
                colorscale: 'Electric'
            }
        };

        let bubbleTraceData = [bubbleChartData];

        let bubbleLayout = {
            title: 'All OTU Groups Found in Individual'
        }

        Plotly.newPlot("bubble", bubbleTraceData, bubbleLayout);
    });
};
// Show Metadata Function
function showMetadata(sampleID){
    console.log(`Display metadata of sampleID ${sampleID}`)  
};

// Handle Changes - Update graphs
function optionChanged(sampleID) {
    console.log(`value is: ${sampleID}`);
    makeBarGraph(sampleID);
    makeBubbleChart(sampleID);
    showMetadata(sampleID);
};

//Create the dashboard
d3.json(url).then(function(data){
    // Create an HTML object line for each ID number, create <object> tags and add them to HTML with D3
    for (let j = 0; j < data.names.length; j++){
        let objectValue = data.names[j]
        //console.log(`objectValue = ${objectValue}`);
        selector.append("option").property("value", objectValue).text(objectValue);
    }
    
    // Find the value of the dropdown
        let sampleID = selector.property("value");
        console.log(`SampleID is: ${sampleID}`);
        optionChanged(sampleID);

       
});
