// function get_array() {
//     var arr = [];

//     for(var i = 1; i <= 255; i++){
//         arr.push(i);
//     }
 
//     return arr; 
// }



// function sum_even_numbers(){
//     var sum = 0;
    
//     for(var i = 1; i <= 1000; i++){
//         if(i % 2 === 0){
//             sum = sum + i;
//         }
//     }
    
//     return sum; 
// }



// function sum_odd_5000() {
//     var sum = 0;
    
//     for(var i = 1; i <= 5000; i++){
//         if(i % 2 !==0){
//             sum = sum + i;
//         }
//     }
     
//     return sum; 
// }



// function iterArr(arr) {
    
//     var sum = 0;

//     for(var i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//     }
        
//     return sum; 
// }



// function findMax(arr) {
    
//     var max = arr[0];
    
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
    
//     return max; 
// }



// function findAvg(arr) {
    
//     var sum = 0;
    
//     for(var i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//     }
    
//     var avg = sum / arr.length; 
//     return avg; 
// }



// function oddNumbers() {
//     var arr = [];
    
//     for(var i = 1; i < 50; i++){
//         if(i % 2 !==0){
//             arr.push(i);
//         }
//     }
     
//     return arr; 
// }



// function greaterY(arr, Y) {

//     var count = 0;
    
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] > Y){
//             count++;
//         }
//     }
 
//     return count; 
// }



// function squareVal(arr) {
    
//     for(var i = 0; i < arr.length; i ++){
//         arr[i] = arr[i] * arr[i];
//     }
     
//     return arr; 
// }



// function noNeg(arr) {
    
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] < 0){
//             arr[i] = 0;
//         }
//     }
     
//     return arr; 
// }



// function maxMinAvg(arr) {
    
//     var max = arr[0];
//     var min = arr[0];
//     var sum = 0;
    
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//         if(arr[i] < min){
//             min = arr[i];
//         }
//         sum = sum + arr[i];
//     }
    
//     var avg = sum / arr.length;
//     arr = [max,min,avg];
//     return arr; 
// }



// function swap(arr) {
    
//     var temp = arr[0];
    
//     arr[0] = arr[arr.length - 1];
//     arr[arr.length - 1] = temp;
    
//     return arr; 
// }



// function numToStr(arr) {
    
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] < 0){
//             arr[i] = 'Dojo';
//         }
//     }
     
//     return arr; 
// }



// function shiftArrayValsLeft(arr){

//     for(var i = 1; i < arr.length; i++){
//         arr[i -1] = arr[i];
//     }
//     arr[arr.length - 1] = 0;
//     console.log(arr);
// };

shiftArrayValsLeft([3,5,2,8]);