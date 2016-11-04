// 1 get string
// 2 iterate through string
// 3   Math.floor/2
// 4     if index !== -index
// 5       return false
// 6     else true

// function palindrome(str){

//   var newStr = [];
//   var index = 0;

//   for(var y = 0; y < str.length; y++){
//     if(str[y] !== " "){
//       newStr[index] = str[y];
//       index++;
//     } 
//   }
//   for(i = 0; i < newStr.length / 2; i++){
//     if(newStr[i] !== newStr[(newStr.length -1) - i]){
//       return false;
//     }
//   }
//   return true;
// }
// console.log(palindrome(""));
// palindrome("");


function swap(someArray){

  var len = someArray.length / 2;
  var lastEle = someArray.length - 1;


  for(var i = 0; i < len / 2; i++){
    if(i % 2 === 0){
      temp = someArray[i];
      someArray[i] = someArray[lastEle - i];
      someArray[lastEle - i] = temp;
    };
  };
  return someArray;
};

console.log(swap([1,2,3,4,5,6]));