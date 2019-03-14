const presets = [
    [
        "@babel/preset-env", //translating standard
        {
            //config object
            targets:{
                //browser settings
            },
            useBuiltIns:'usage' //polyfill
        }
    ]
];
const plugins = [
    ["@babel/plugin-proposal-pipeline-operator", {proposal:'minimal'}]
];

module.exports = {presets, plugins};