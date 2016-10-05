// function countdown(start){

//   var arr =[];
//   for(var i = start; i >= 0; i--){
//     arr.push(i);
//   }
//   console.log(arr);
// };
// countdown(10);



// function printReturn(arr){
//  console.log(arr[0]);
//  return arr[1];
// };
// printReturn([1,2]);



// function firstPlusLength(arr){

//   var sum = arr[0] + arr.length;
//   console.log(sum);

// };
// firstPlusLength([true,2,3]);



// var arr = [1,3,5,7,9,13];
// var count = 0;

// for(var i = arr[0]; i <= arr.length; i++){
//   if(arr[i] > arr[1]){
//     console.log(arr[i]);
//     count++;
//   }
// }
// console.log(count);



// function generalized(arr){

//   var count = 0;
//   var newArr = [];

//   for(var i = arr[0]; i <= arr.length; i++){
//     if(arr[i] > arr[1]){
//       newArr.push(arr[i]);
//       count++;
//     }
//   }
// console.log(newArr);
// console.log(count);
// };

// generalized([1,3,5,7,9]);



// function thisThat(arr){

//   var num1 = 0;

//   for(var num2 = 1; num2 < arr.length; num2++){
//     if(arr[num1] = arr[num2])
//   }
// }

// thisThat(1,2);



// function threeBears(arr){

//   if(arr[0] > arr.length){
//     console.log("Too big!");
//   }
//   else if(arr[0] < arr.length){
//     console.log("Too small!");
//   }
//   else{
//     console.log("Just right!")
//   }
// }
// threeBears([6,2,3,4,5,8]);



// function fahrenheitToCelsius(fDegrees){
//   var celsius = (fDegrees - 32) * 5/9;
//   console.log(celsius);
// }
// fahrenheitToCelsius(100);



// function celsiusToFahrenheit(cDegrees){
//   var fahrenheit = (9/5 * cDegrees) + 32;
//   console.log(fahrenheit);
// }
// celsiusToFahrenheit(32);



// function cAndFMatch(temp){
  
//   var celsius = (temp - 32) * 5/9;
//   var fahrenheit = (9/5 * temp) + 32;

//   for(var i = 200; i > temp; i--){
//     if(temp === (celsius === fahrenheit)){
//       console.log("It's a match!");
//       console.log(temp);
//     }
//   }
// }
// cAndFMatch(3);