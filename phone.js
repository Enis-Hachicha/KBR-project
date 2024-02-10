FUNCTION(MODULE){
    var EXPORTS = MODULE.EXPORTS = {};

    var greetings = 'Ahoy-Ahoy';
    var myNumber = '658-5488';

    var answer = function(){
        console.log(greetings);
    };

    var dial = function (number){
        console.log('calling' + number);
    };

    module.exports.myNumber = myNumber;
    module.exports.answer= answer;
    module.exports.dial = dial;

    return MODULE.EXPORTS;

}