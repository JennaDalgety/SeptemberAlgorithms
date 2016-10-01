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



// function biggieSize(arr){

//   for(var i = arr[0]; i <= arr.length; i++){
//     if(arr[i] > 0){
//       arr[i] = "big";
//     }
//   }
//   console.log(arr);
// }

// biggieSize([-1,3,5,-5]);



// function lowHigh(arr){

//   var high = arr[0];
//   var low = arr[0];

//   for(var i = arr[0]; i <= arr.length; i++){
//     if(arr[i] < low){
//       low = arr[i];
//     }
//     if(arr[i] > high){
//       high = arr[i];
//     }
//   }
//     console.log(low);
//     return high;
// }

// console.log(lowHigh([1,3,5,7,9,11]));



// function print1(arr){
  
//   var firstOdd = [];

//   for(var i = 0; i <= arr.length; i++){
//     if(arr[i] % 2 !== 0){
//       firstOdd.push(arr[i]);
//     }
//   }
//     console.log(arr[arr.length - 2]);
//     return firstOdd[0];
// }

// console.log(print1([4,6,5,8,3]));



// function times2(arr){

//   var double = [];

//   for(var i = 0; i < arr.length; i++){
//     double.push(arr[i] * 2);
//   }
//   return double;
// }

// console.log(times2([1,2,3]));



// function countPositives(arr){
  
//   var count = 0;

//   for(var i = 0; i <= arr.length; i++){
//     if(arr[i] > 0){
//       count++;
//     }
//     arr.pop();
//     arr.push(count);
//   }
//   console.log(arr);
// }

// countPositives([-1,1,1,1]);



// function evensOdds(arr){

//   var countEven = 0;
//   var countOdd = 0;

//   for(var i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0){
//       countEven++;
//       countOdd = 0;
//     }
//     if(arr[i] % 2 !== 0){
//       countOdd++;
//       countEven = 0;
//     }
//     if(countEven >= 3){
//       console.log("Even more so!");
//     }
//     else if(countOdd >= 3){
//       console.log("That's odd!");
//     }
//   }
// }

// evensOdds([2,4,3,7,5]);



// function increment2nd(arr){

//   for(var i = 0; i < arr.length; i++){
//     if(i % 2 !== 0){
//       arr[i] = arr[i] + 1;
//     }
//   console.log(arr[i]);
//   }
//   return arr;
// }

// console.log(increment2nd([1,2,3,4,5]));



// function previousLength(arr){

//   for(var i = arr.length; i > 0; i--){
//    arr[i] = arr[i-1].length;
//   }
//   arr[0] = 0;
//   console.log(arr);
// }

// previousLength(["car", "boat", "truck"]);



