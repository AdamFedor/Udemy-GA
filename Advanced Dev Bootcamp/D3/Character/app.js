

d3.select('form')
    .on('submit', function() {
        d3.event.preventDefault();
        var input = d3.select('input'); // store as d3
        var text = input.property('value'); // store the value

        d3.select('#letters')
            .selectAll('.letter') // empty selection to add data to
            .data(getFrequencies(text)) // pass in text from the form above
            .enter()
            .append('div')
                .classed('letter', true)
                .style('width', '20px')
                .style('line-height', '20px')
                .style('margin-right', '5px')
                .style('height', function(d) {
                    return d.count * 20 + 'px'; // height depends on quantity of characters
                })
                .text(function(d) {
                    return d.character;
                });
        
        d3.select('#phrase')
            .text('Analysis of: ' + text);
    })

function getFrequencies(str) {
    // object of count of letters
    var sorted = str.split('').sort();
    var data = [];
    for (var i = 0; i < sorted.length; i++) {
        var last = data[data.length - 1];
        if (last && last.character === sorted[i]) last.count++;
        else data.push({ character: sorted[i], count: 1});
    }
    return data;
}
