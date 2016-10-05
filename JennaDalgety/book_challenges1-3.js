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



//   var newArr = [];
//   var add = 0;

//   for(var i = 1; i < arr.length; i++){
//     add = arr[i] + 7;
//     newArr.push(add);
//   }
//   console.log(newArr);
// }

// addSeven([1,2,3,4,5]);



// function reverseValues(array){

//   for(var i = 0; i < array.length / 2; i++){
//     var temp = array[i];
//     array[i] = array[array.length - 1 - i];
//     array[array.length - 1 - i] = temp;
//   }
//   console.log(array);
// }

// reverseValues([2,4,6,1,3]);



// var arr = [1,-3,5];

// for(var i = 0; i < arr.length; i++){
//   if(arr[i] > 0){
//     arr[i] = arr[i] - arr[i] - arr[i];
//   }
// }

// console.log(arr);



// function alwaysHungry(arr){

//   var count = 0;

//   for(var i = 0; i < arr.length; i++){
//     if(arr[i] === "food"){
//       console.log("yummy");
//       count++;
//     }
//   }
//   if(count === 0){
//     console.log("I'm hungry.");
//   }
// }
// alwaysHungry(["food", "food", "car"]);



// var arr = [1,2,3,4,5,6];

// for(var i = 0; i < arr.length; i++){
//   if(arr[i] % 2 === 0){
//     arr[i] = arr[arr.length + i];
//   }
// }

// console.log(arr);



// var arr = [1,2,3,4,5];
// var num = 5;

// for(var i = 0; i < arr.length; i++){
//   arr[i] = arr[i] * num;
// }

// console.log(arr);