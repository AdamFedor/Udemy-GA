d3.json('./sample_geo.json', function(error, data) {
    if (error) throw error;
    var path = d3.geoPath();
        // results in path(data.features[0]) // M0, 0L0...
    var width = 600;
    var height = 600;
    d3.select('svg')
            .attr('width', width)
            .attr('height', height)
        .selectAll('path')
        .data(data.features)
        .enter()
        .append('path')
            .attr('d', path)
            .attr('fill', d => d.properties.color);
})