
const brain = require('brain.js');
const {trainingData} = require('./Datas/TrainingsData2.js');
//const {trainingData} = require('./Datas/TrainingData.js');
//const {allTweet} = require('./Datas/allDatas.js');

let res;
let trainedNet;

function encode(arg) {
    return arg.split('').map(x => (x.charCodeAt(0) / 256));
}

function processTrainingData(data) {
    return data.map(d => {
        return {
            input: encode(d.input),
            output: d.output
        }
    })
}

function train(data) {
    let net = new brain.NeuralNetwork();
    net.train(processTrainingData(data));
    trainedNet = net.toFunction();
}

function execute(input) {
    let results = trainedNet(encode(input));
    console.log(results);
    let output;
    let certainty;
    let text;

    if (results.trump > results.obama && results.trump > results.musk && results.trump > results.jobs && results.trump > results.expanse && results.trump > results.robot) {
        output = 'Donald Trump';
        certainty = Math.floor(results.trump * 100);
        text = "% sure that tweet would be written by ";
    } else if (results.obama > results.trump && results.obama > results.musk && results.obama > results.jobs && results.obama > results.expanse && results.obama > results.robot){
        output = 'Barack Obama';
        certainty = Math.floor(results.obama * 100);
        text = "% sure that tweet would be written by ";
    } else if (results.jobs > results.trump && results.jobs > results.musk && results.jobs > results.obama && results.jobs > results.expanse && results.jobs > results.robot){
        output = 'Steve Jobs';
        certainty = Math.floor(results.jobs * 100);
        text = "% sure that tweet would be written by ";
    } else if(results.musk > results.trump && results.musk > results.jobs && results.musk > results.obama && results.musk > results.expanse && results.musk > results.robot){
        output = 'Elon Musk';
        certainty = Math.floor(results.musk * 100);
        text = "% sure that tweet would be written by ";
    } else if(results.expanse > results.trump && results.expanse > results.jobs && results.expanse > results.obama && results.expanse > results.musk && results.expanse > results.robot){
        output = 'The Expanse';
        certainty = Math.floor(results.expanse * 100);
        text = "% sure that sentence would came from the movie ";
    } else if(results.robot > results.trump && results.robot > results.jobs && results.robot > results.obama && results.robot > results.musk && results.robot > results.expanse){
        output = 'Mr. Robot';
        certainty = Math.floor(results.robot * 100);
        text = "% sure that sentence would came from the movie ";
    }else{
        output = 'unknown Person';
        certainty =  '100';
        text = "% sure that tweet would be written by ";
    }

    const str = "I'm " + certainty + "% sure that tweet would be written by " + output;
    res = str.match(/[^ ]* [^ ]*$/g).toString();
    console.log(res);
    return  "I'm " + certainty + text + output;
}

function picture(data) {
    //console.log(res);
    if (res === "Steve Jobs"){
        return "pictures/SteveJobs.png";
    } else if (res === "Donald Trump"){
        return "pictures/donaldTrump.png";
    } else if (res === "Elon Musk"){
        return "pictures/elonMusk.png";
    } else if (res === "Barack Obama"){
        return  "pictures/barackObama.png";
    } else if (res === "The Expanse"){
        return  "pictures/Expanse.png";
    } else if (res === "Mr. Robot"){
        return  "pictures/mrRobot.png";
    } else {
        return "pictures/what@2x.png"
    }
}
train(trainingData);

/*****************For testing - Run script**************************/
//console.log(execute("being the smartest person is not everything in life"));

module.exports.res = res;
module.exports.picture = picture;
module.exports.execute = execute;

