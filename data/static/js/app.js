// Read in samples.json from website using D3

const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Make the dropdown menu to switch between subjects

// let objectValue  = "";
let selector = d3.select("#selDataset");

d3.json(url).then(function(data){
    // Create an HTML object line for each ID number, create <object> tags and add them to HTML with D3
    for (let j = 0; j < data.names.length; j++){
        let objectValue = data.names[j]
        console.log(`objectValue = ${objectValue}`);
        selector.append("option").property("value", objectValue).text(objectValue);
    }
});

// Create horizontal bar chart

// Create bubble chart

// Display metadata/demographic info
