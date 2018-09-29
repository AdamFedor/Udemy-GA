const fs = require("fs");

const amps = `Yamaha    A-S301    Integrated Amplifier    $349.99     60    65    70    99    4    0.019%
Yamaha    A-S501    Integrated Amplifier    $549.99     85    100        99    4    0.019%
Yamaha    A-S701    Integrated Amplifier    $799.99     100    120        99    4    0.019%
Yamaha    A-S2000    Integrated Amplifier    $1,999.99     90    120    150    98    4    0.020%
Yamaha    A-S3000    Integrated Amplifier    $6,999.99     100    125    150    103    4    0.007%
NAD    C 338    Integrated Amplifier    $649.99     50    50    50    98    4    0.030%
NAD    C 388    Integrated Amplifier    $1,599.99     150    150    150    95    4    0.009%
NAD    M32    Integrated Amplifier    $3,999.99     180    180    180    91    4    0.030%
NAD    M2    Integrated Amplifier    $5,999.99     250    250    250    119    4    0.004%
McIntosh    MA5200    Integrated Amplifier    $4,500     100            110    8    0.005%
Rotel    RA-1572    Integrated Amplifier    $1,699.00     120    120    120    100    4    0.030%
Rotel    RA-1592    Integrated Amplifier    $2,499.00     200    200    200    102    4    0.030%
Rotel    RB-1590    Amplifier    $3,000.00     350    350    350        4    0.030%
Rotel    RB-1572    Amplifier    $1,295.00     250    375    500    109        0.030%
Rotel    RB-1582 MKII    Amplifier    $1,595.00     200    200    200    116    4    0.030%
McIntosh    MC152    Amplifier    $4,500.00     150    150    150    118        0.005%
McIntosh    MC301    Amplifier    $5,000.00     300    300    300    120        0.005%
NAD    M22    Amplifier    $2,999.99     250    250    250    100        0.003%
Outlaw    Model 2200    Amplifier    $759.98     200    250    300    100    4    0.050%
Emotiva    XPA Gen3    Amplifier    $999.00     300    395    490    115        0.005%
Emotiva    A-300    Amplifier    $399.00     150    225    300    120    4    0.020%`;

const headings = [
    "brand",
    "model",
    "type",
    "cost",
    "8_ohm",
    "6_ohm",
    "4_ohm",
    "signal_to_noise",
    "impedence",
    "thd"
];

const ampObjects = [];

const rows = amps.split("\n");

rows.forEach(function(row){
    let ampObject = {};
    const columns = row.split("    ");
    headings.forEach(function(heading, index){
       ampObject[heading] =  columns[index];
    });
    ampObjects.push(ampObject);
});

const ampsJSON = JSON.stringify(ampObjects);

fs.writeFile("amps.json", ampsJSON, function(err){
    if(!err){
        console.log("done");
    }
});
