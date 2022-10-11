// For each loop

let array = [1,2,3,4,5];

// // For Each Loop

// Here Item -----> Array[i], and index ------> i
// array.forEach(function (item, index){

//})


array.foreach();

array.forEach((item, index) => {
    console.log(item, "Array[i] Value");
    console.log(index, "INDEX VALUE");
})

/*forIfy
array.forIfy(){

}
*/

let numArray = [1, 2, 3, 4, 5];

let newArray = numArray.map(function(item, index){
    item * 2
})

console.log(numArray, "ORIGINAL ARRAY");
console.log(newArray, "NEW ARRAY");
