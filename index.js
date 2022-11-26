// code your solution here
// **LAB**: Implement a function called `saturdayFun`. It should return a `String`
// like `"This Saturday, I want to ....!"` Fill in the `...` with the activity
// that's passed in as the first parameter. If nothing is passed in, default to
// `"roller-skate"`. Run `learn test` to verify you've gotten the first set of
// tests passing before continuing with the lesson.

function saturdayFun(activity='roller-skate') {
    return "This Saturday, I want to " + activity+ "!"
}
function mondayWork(activity='go to the office') {
    return "This Monday, I will " + activity+ "."
}
// function wrapAdjective(highlight) {
//         // return function(adjective) {
//         //     "You are "+ highlight + adjective + highlight + "!"
//         // }(
       
        
//         return function (adjective) {
//                 "You are "+ highlight + adjective + highlight + "!"
//         }
//         }

// function wrapAdjective(highlight) {
//     return function (adjective) {
//     return function () {
//     'You are ' + highlight+adjective+highlight + '!'
//               };
//             };
//           }
function wrapAdjective(x) {
    function inside(y) {
        return `You are ${x}${y}${x}!`;
    }
    return inside;
}

    

