// Store our API endpoint as queryUrl.
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";


// Perform a GET request to the query URL.
d3.json(url).then(function (data) {
  //console.log(data);
  let sample = data.samples
  //console.log(sample);
  let otu = sample.filter(row =>row.id=='940');
  console.log(otu);
  let result = otu[0]
  let otu_label = result.otu_labels
  let otu_id = result.otu_ids
  let values = result.sample_values
  console.log(otu_id);
  console.log(values);
  //console.log(otu_label);
  
});

let trace1 = {
  x: values,
  y: otu_id,
  type: 'bar'
};

let trace2 = {
  x: values,
  y: otu_id,
  type: 'bubble'
};

let data = [trace1, trace2];

Plotly.newPlot("bar", data);

//<script src="./static/js/bonus.js"></script>