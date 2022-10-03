# Belly-Button-Biodiversity
## Contributor: Sam Espe

### Overview
This is my submission for Homework 14 for Data Analytics & Visualization Bootcamp. In this challenge, I was tasked to create a visualization dashboard for data on the occurence and abundance of microbial species in samples taken from peoples' belly buttons. I used Plotly in JavaScript and D3 to build the visualizations, and Bootstrap CSS to style the page. 

#### The Repo
This repo contains a JSON file, an HTML file, and a JavaScript file. The file `samples.json` contains the data on the belly button samples in a JSON format. This was provided to us by the Bootcamp. The file `index.html` contains the HTML scripts that set up the basic structure of the website. This was also provided. The JavaScript file `app.js` is contained within the folder structure `static/js`, and it contains the JavaScript code used to generate the visualizations and insert them into the website using D3 and Plotly. 

#### The Visualizations
I created three ways of interacting with the data. The first visualization is a bar graph that displays the top ten operational taxonomic units (OTUs) present in the sample, along with their relative abundance. The second visualization is a bubble chart that displays the relative abundance of all OTUs detected in the sample, in numerical order of the OTU number. The third visualization is a display of the sample's metadata: data about the person from whom the microbes were taken. This metadata includes demographic data (age, gender, location, ethnicity), the person's belly button type, and how often they wash their belly button. There is a dropdown menu that lists all of the samples available in the data set that allows the user to change between samples so they can be compared. 

This dashboard is deployed on GitHub Pages at this address: https://samespe.github.io/Belly-Button-Biodiversity/
