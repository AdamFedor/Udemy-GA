const fs = require("fs");

const speakerData = `McIntosh    XR100    Tower    $10,000.00    8    4    75    600    30    45000    87    68.5
Klipsch    Forte III    Tower    $3,599.98    8            100    38    20000    99    72
Klipsch    RP-280F    Tower    $1,199.98    8            150    32    25000    98    62.5
Klipsch    R-24F    Tower    $999.96    8            75    45    24000    95    25
Sonus Faber    Venere S    Tower    $4,999.98    4        40    300    40    25000    90    63.5
Sonus Faber    Venere 3.0    Tower    $3,498.00    6        40    300    38    25000    90    47
Sonus Faber    Chameleon    Tower    $1,999.98    4        40    300    38    25000    90    54.013
Bowers & Wilkins    CM10 S2    Tower    $4,000.00    8    3.1    30    300    45    28000    90    73.7
Martin Logan    ESL X    Tower    $4,499.98    4        20    200    46    25000    90    37
Martin Logan    ESL    Tower    $2,999.98    6        20    300    42    22000    91    35.5
Martin Logan    Motion 20    Tower    $1,599.98    6        20    300    42    22000    91    37
Focal    Chorus 726    Tower    $1,899.98    8        40    250    49    28000    91    51.7
Focal    Chorus 714    Tower    $1,298.00    8        30    150    52    28000    91    35.6
Bowers & Wilkins    CM8 S2    Tower    $2,399.96    8    3    30    150    48    28000    88    43
Bowers & Wilkins    CM6 S2    Bookshelf    $1,999.98    8    3.7    30    120    50    28000    88    19.6
Bowers & Wilkins    CM1 S2    Bookshelf    $1,099.98    8    4    30    100    50    28000    84    14.7
Bowers & Wilkins    800    Tower    $30,000.00    8    3    50    1000    13    35000    90    212
Bowers & Wilkins    804    Tower    $9,000.00    8    3    50    200    24    28000    89    73
Bowers & Wilkins    805    Bookshelf    $6,000.00    8    4.6    50    120    34    35000    88    28
McIntosh    LCR80    Bookshelf    $5,000.00    8        75    300    80    45000    81    24
McIntosh    XR50    Bookshelf    $4,000.00    8        75    300    40    45000    81    19.5
Sonus Faber    Venere 2.0    Bookshelf    $3,999.98    6        50    200    45    25000    88    15.5
Sonus Faber    Venere 1.5    Bookshelf    $2,399.98    6        30    150    50    25000    85    13.3
Sonus Faber    Chameleon    Bookshelf    $1,799.98    4        30    150    50    25000    87    14.77
Focal    706    Bookshelf    $749.00    8        25    120    55    28000    90    18
Martin Logan    35XT    Bookshelf    $1,249.98    4        20    250    50    25000    92    18.5
Focal    705    Bookshelf    $549.99    8        25    100    65    28000    89    12.5
Klipsch    RP-160M    Bookshelf    $549.99    8            100    45    25000    95    19.9
Focal    Dome Flax    Bookshelf    $799.98    8        25    100    80    28000    88    4.2
Klipsch    R-15M    Bookshelf    $199.99    8            50    64    24000    90    7.13`

const headings = [
    "brand",
    "model",
    "type",
    "cost_per_pair",
    "ohm_nominal",
    "ohm_minimal",
    "recommended_min_power",
    "recommended_max_power",
    "frequency_min",
    "frequency_max",
    "sensitivity_db",
    "weight_lbs"
];

const speakerObjects = [];

const rows = speakerData.split("\n");

rows.forEach(function(row){
    let speakerObject = {};
    const columns = row.split("    ");
    headings.forEach(function(heading, index){
       speakerObject[heading] =  columns[index];
    });
    speakerObjects.push(speakerObject);
});

const speakerJSON = JSON.stringify(speakerObjects);

fs.writeFile("speakers.json", speakerJSON, function(err){
    if(!err){
        console.log("done");
    }
});