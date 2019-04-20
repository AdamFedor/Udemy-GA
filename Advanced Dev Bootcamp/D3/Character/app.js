d3.select('#reset')
    .on('click', function(){
        d3.selectAll('.letter')
            .remove();
        d3.select('#phrase')
            .text('');
        d3.select('#count')
            .text('');
    })

d3.select('form')
    .on('submit', function() {
        d3.event.preventDefault();
        var input = d3.select('input'); // store as d3
        var text = input.property('value'); // store the value

        var letters = d3.select('#letters') // making this an update pattern instead
            .selectAll('.letter') // empty selection to add data to
            .data(getFrequencies(text), function (d) {
                // join by the character instead of the index
                return d.character;
            }) // pass in text from the form above
            
        letters
            .classed('new', false)
            .exit() // remove any divs that don't need to be there from previous input
            .remove();

        letters
            .enter()
            .append('div')
                .classed('letter', true)
                .classed('new', true)
            .merge(letters)
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
        
        d3.select('#count')
                .text('(New Characters: ' + letters.enter().nodes().length + ')');

        input.property('value', '');
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
