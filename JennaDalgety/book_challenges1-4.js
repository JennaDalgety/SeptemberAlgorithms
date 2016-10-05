// var arr = [2,4,6,8,10];
// x = 3;
// var temp = x;
// var newArr = [];

// for(var i = 0; i < arr.length; i++){
//   arr[i] = arr[arr.length - x];
//   newArr.push(arr[i]);
//   x--;
//   if(newArr.length === temp){
//     break;
//   }
// }

// console.log(newArr);



// function soaringIQ(iq){

//   var i = 0.01;

//   while(i <= 0.98){
//     iq = iq + i;
//     i++;
//   }
//   console.log(iq);
// }

// soaringIQ(101);


// function letterGrade(score){

//   var grade = '';

//   if(score >= 90){
//     grade = 'A';  
//   } 
//   else if(score > 80 && score <= 89){
//     grade = 'B';
//   }
//   else if(score > 70 && score <= 79){
//     grade = 'C';
//   }
//   else if(score > 60 && score <= 69){
//     grade = 'D';
//   }
//   else if(score <= 59){
//     grade = 'F';
//   }

//   console.log('Score: ' + score +'.  Grade: ' + grade + '.')
// }

// letterGrade(58);



// function accurateGrade(score){

//   var grade = '';

//   if(score >= 90){
//     grade = 'A';
//     if(score === 91 || score === 92){
//       grade = 'A-';
//     }
//     if(score === 98 || score === 99){
//     grade = 'A+'
//     }  
//   } 
//   else if(score > 80 && score <= 89){
//     grade = 'B';
//     if(score === 81 || score === 82){
//       grade = 'B-';
//     }
//     if(score === 88 || score === 89){
//     grade = 'B+'
//     } 
//   }
//   else if(score > 70 && score <= 79){
//     grade = 'C';
//     if(score === 71 || score === 72){
//       grade = 'C-';
//     }
//     if(score === 78 || score === 79){
//     grade = 'C+'
//     }
//   }
//   else if(score > 60 && score <= 69){
//     grade = 'D';
//     if(score === 61 || score === 62){
//       grade = 'D-';
//     }
//     if(score === 68 || score === 69){
//     grade = 'D+'
//     }
//   }
//   else if(score <= 59){
//     grade = 'F';
//     if(score === 51 || score === 52){
//       grade = 'F-';
//     }
//     if(score === 58 || score === 59){
//     grade = 'F+'
//     }
//   }

//   console.log('Score: ' + score +'.  Grade: ' + grade + '.')
// }

// accurateGrade(78);