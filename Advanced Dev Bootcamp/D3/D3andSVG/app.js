var minYear = d3.min(birthData, function(d) {
    return d.year;
})
var maxYear = d3.max(birthData, function (d) {
    return d.year;
})
var width = 600;
var height = 600;
var numBars = 12;
var barPadding = 10;
var barWidth = width / numBars - barPadding;
var maxBirths = d3.max(birthData, function(d) {
    return d.births;
})
var yScale = d3.scaleLinear()
    .domain([0, maxBirths])
    .range([height, 0]); // this flips the Y axis so it increases up instead of down

d3.select('input')
    .property('min', minYear)
    .property('max', maxYear)
    .property('value', minYear)

d3.select('svg')
        .attr('width', width)
        .attr('height', height)
    .selectAll('rect')
    .data(birthData.filter(function(d) {
        return d.year === minYear
    }))
    .enter()
    .append('rect')
        .attr('width', barWidth)
        .attr('height', function(d) {
            return height - yScale(d.births); // since no births exceded 2.5 million, to scale the bars
        })
        .attr('y', function(d) {
            return yScale(d.births); // since no births exceded 2.5 million, to scale the bars
        })
        .attr('x', function(d,i) {
            return (barWidth + barPadding) * i;
        })
        .attr('fill', 'purple')

d3.select('input')
    .on('input', function() {
        var year = +d3.event.target.value;
        d3.selectAll('rect')
            .data(birthData.filter(function(d) {
                return d.year === year;
            }))
            .attr('height', function(d) {
                return height - yScale(d.births);
            })
            .attr('y', function(d) {
                return yScale(d.births);
            });
    });