// Read in samples.json from website using D3

const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Make the dropdown menu to switch between subjects

// let objectValue  = "";
let selector = d3.select("#selDataset");

// Declare functions

// Handle Changes - Update graphs
function optionChanged(sampleID) {
    console.log(`value is: ${sampleID}`);
    makeBarGraph(sampleID);
    makeBubbleChart(sampleID);
    showMetadata(sampleID);
};

// Make Bar Graph Function
function makeBarGraph(sampleID){
  console.log(`Make bar graph of sampleID ${sampleID}`)      
};
// Make Bubble Chart Function
function makeBubbleChart(sampleID){
    console.log(`Make bubble chart of sampleID ${sampleID}`)  
};
// Show Metadata Function
function showMetadata(sampleID){
    console.log(`Display metadata of sampleID ${sampleID}`)  
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

       
});
