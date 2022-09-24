// Plotly.newPlot("plotArea", [{x: [1, 2, 3, 4, 5, 6], y: [10, 20, 30, 40, 50, 60]}]);

//luncheon survey plot
// var trace ={
//     x:["burrito","pizza","chicken"],
//     y:[10,18,5],
//     type:"bar"
//
// };
//
// var layout = {
//     title:"Luncheon Survey",
//     xaxis:{title:"Food Option"},
//     yaxis:{title:"Number of Respondents"}
// };
// Plotly.newPlot("plotArea",[trace],layout);

// new plot
// var drinks ={
//     labels:["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea",
//         "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values:[22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type:"pie"
// };
// var data = [drinks];
// var layout={
//     title:"Pie Chart",
//
// };
// Plotly.newPlot("plotArea",data,layout);

//use map method to iterate over objects in an array

// let words=["these","words","need","capitalized"]
//
// let capWords = words.map(word => word.toUpperCase());
//
// console.log(capWords);

//map function to double numbers

// var numbers =[0,2,4,6,8,];
//
// var doubled= numbers.map(function(num){
//     return num+5;
// });
// console.log(doubled);


// example of how to map for a specific item
// var cities = [
//     {
//       "Rank": 1,
//       "City": "San Antonio ",
//       "State": "Texas",
//       "Increase_from_2016": "24208",
//       "population": "1511946"
//     },
//     {
//       "Rank": 2,
//       "City": "Phoenix ",
//       "State": "Arizona",
//       "Increase_from_2016": "24036",
//       "population": "1626078"
//     },
//     {
//       "Rank": 3,
//       "City": "Dallas",
//       "State": "Texas",
//       "Increase_from_2016": "18935",
//       "population": "1341075"
//     }
// ];
//
// var cityPop = cities.map(function(pop){
//     return pop.population
// });
// console.log(cityPop)

// filter method

let numbers =[13,22,36,54,55]

// //two ways to write the function traditional below:
// let evenNumbers= numbers.filter(function(number){
//     return number %2===0;
// });
//or fat arrow function
let evenNumbers= numbers.filter(number =>number %2==0);
console.log(evenNumbers);

//filter to show only words with the letter s using a normal filter function
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

// let sWords = words.filter(function (word){
//     return word[0] ==="s";
// });

//now with fat arrow
let sWords =words.filter(word=>word[0] ==="s");
console.log(sWords)