// const array = [2, 4, 11, 2, 4]

// let num = "";

// function singleElement(){
//     for (i = 0; i < array.length; i++){
//         let n = 0;
//         for(n = 0; n < array.length; n++)
//             if (i !=n  && array [i] == array[n]){
//                 result = array[1]
//                 break;
//             }
//         if (n == array.length)
//         return array[i]
//     }
//     return num;
// }
// console.log(singleElement())

// let array = [2, 3, 1, 2, 4, 2]

// let i = 0;
// let b = 0;
// let num = 0;

// function mostRepeated(){
//     for (i = 0; i < array.length; i++){
//         for (n = i; n < array.length; j++){
//             if (array[i] == array[n])
//             b++;
//             if (i < b){
//                 i = b;
//                 num = array[i];
//             }
//         }
//     }
//     b = 0;
//     console.log(i);
// }

// mostRepeated()



// function repeat(array)
// {
//     if(array.length == 0)
//         return null;
//     let array = {};
//     let highnum = array[0], count = 1;
//     for(let i = 0; i < array.length; i++)
//     {
//         let el = array[i];
//         if(array[el] == null)
//             array[el] = 1;
//         else
//             array[el]++;  
//         if(array[el] > count)
//         {
//             highnum = el;
//             count = array[el];
//         }
//     }
//     return highnum;
// }

// let store = ['1','2','2','3','4'];
// let frequency = {};
// let max = 0;  
// let result; 
// for(v in store) {
//         frequency[store[v]]=(frequency[store[v]] || 0)+1; 
//         if(frequency[store[v]] > max) { 
//                 max = frequency[store[v]];  
//                 result = store[v];          
//         }
// }

let array = [2, 4, 1, 2, 4, 2],
    nums = {},
    result = 0;

array.forEach(function (i) {
    nums[i] = (nums[i] || 0) + 1;
        result = i;
        return;

});

console.log(result)

