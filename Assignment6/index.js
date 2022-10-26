// Question 1 Done
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
let student = [
    {
    name: "Daniel",
    email: "daniel@gmail.com",
    marks: [80, 60, 50, 70, 95]
    },
    {
    name: "Mark",
    email: "mark@gmail.com",
    marks: [99, 40, 84, 72, 60]
    },
    {
    name: "Stacy",
    email: "stacy@gmail.com",
    marks: [8, 30, 11, 0, 20]
    },
    {
    name: "Geri",
    email: "geri@gmail.com",
    marks: [100, 99, 95, 85, 99]
    }
    ];

    
// CHANGE THIS TO PRINT STUDENT,  NOT THE MARKS

    // function studentWithHighestMarks(array) {
    //     let high = [];
    //     let sum = 0;
    //     for (i = 0; i < array.length; i++) {
    //         let sum = (array[i].marks).reduce((partialSum, a) => partialSum + a, 0);
    //         high.push(sum)
            
    //     }
    //     const max = high.reduce((a, b) => Math.max(a, b), -Infinity);
        

    //     let beststudent = function() {
    //     for (i = 0; i < array.length; i++){
    //     if (max == high[i] ){
    //         console.log(array[i]);
    //         }
    //     }
    // }
    // return beststudent()
    
    // }

    // studentWithHighestMarks(student)

    // function bestStudent(array){
    //     let high = [];
    //     let sum = 0;
    //     for (i = 0; i < array.length; i++) {
    //         let sum = (array[i].marks).reduce((partialSum, a) => partialSum + a, 0);
    //         high.push(sum)
            
    //     }
    //     const max = high.reduce((a, b) => Math.max(a, b), -Infinity);
        

        
    //     for (i = 0; i < array.length; i++){
    //     if (max == high[i] ){
    //         console.log(array[i]);
    //         }
    //     }
    // }
    // function studentWithHighestMarks(array) {
        
    // bestStudent(array)
    
    // }

    // studentWithHighestMarks(student)
    function bestStudent(array){
        let high = [];
        let sum = 0;
        Object.keys(array).forEach(key => {
            let sum = (array[key].marks).reduce((partialSum, a) => partialSum + a, 0);
            high.push(sum)
            
        })
        
        const max = high.reduce((a, b) => Math.max(a, b), -Infinity);
        
        Object.keys(array).forEach(key => {
        if (max == high[key] ){
            console.log(array[key]);
            }
        })
    }

        
    bestStudent(student)
    

    


    // var studentmarks = function () {
    //     high = [];
    //     for (i = 0; i < student.length; i++) {
    //         let sum = (student[i].marks).reduce((partialSum, a) => partialSum + a, 0);
    //         high.push(sum)
            
    //     }
    //     console.log(high);
    //     const max = high.reduce((a, b) => Math.max(a, b), -Infinity);
    //     console.log(max);
    // }
    
    // studentmarks();
    


// var studentmarks = function () {
//     for (i = 0; i < student.length; i++) {
//         const sum = (student[i].marks).reduce((partialSum, a) => partialSum + a, 0);
//         console.log(sum)
//     }
// }

// studentmarks();

// const sum = (student[i].marks).reduce((partialSum, a) => partialSum + a, 0);
// console.log(sum)

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 2



// function findMissing(arr,N){
//     let i;
//     let temp = [];
//     for (i = 0; i <= N; i++) {
//               temp[i] = 0;
//           }
   
//           for (i = 0; i < N; i++) {
//               temp[arr[i] - 1] = 1;
//           }
   
//           let ans = 0;
//           for (i = 0; i <= N; i++) {
//               if (temp[i] == 0)
//                   ans = i + 1;
//           }
//           console.log(ans);
//   }
   

// let arr = [ 1, 3, 7, 5, 6, 2 ];
// let n = arr.length;
   
     
// findMissing(arr,n);


// function findMissing(arr,N){
//     let i;
//     let temp = [];
//     for (i = 0; i <= N; i++) {
//               temp[i] = 0;
//           }
   
//           for (i = 0; i < N; i++) {
//               temp[arr[i] - 1] = 1;
//           }
   
//           let ans = 0;
//           for (i = 0; i <= N; i++) {
//               if (temp[i] == 0)
//                   ans = i + 1;
//           }
//           console.log(ans);
//   }
   

// let arr = [ 1, 3, 7, 5, 6, 2 ];
// let N = arr.length;
   
     
// findMissing(arr,N);

// Question 2
function missingNumber(array, n) {
    let missing = [];

    for (i = 0; i <= n; i++) {
        if (array.indexOf(i) == -1) {
          missing.push(i);
          
        }
        
      }
      console.log(missing)
}

missingNumber([4, 5, 2, 1, 0], 5);
missingNumber([2, 1, 0, 3, 7, 6, 4, 5, 10, 9], 10);

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 3

// const express = require('express');

// const app = express();
// const PORT = 9000;
// const employee = [];

// employeelist = [
// {
//     Name : "Daniel",
//     EmployeeId: 100,
//     Email : "daniel@gmail.com",
//     Department :"IT"
//     }
// ]  



// app.use(express.json());

// app.get("/", (req, res) => {

//     res.redirect("/ASS7/")
// })


// app.get("/ASS7/", (req, res) => {

//     res.send("ENDPOINTS");
// })


// //Part 1
// app.get("/ASS7/employeelist", (req, res) => {
//     return res.status(200).json({
//         employeelist
//     })
// })


// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// })





const express = require("express");
const app = express();
const PORT = 8000;



let employees = [
    {
        Name : "Daniel",
        EmployeeId: 100,
        Email : "daniel@gmail.com",
        Department :"IT"
    }
]


app.use(express.json());

app.get("/", (req, res) => {

  
    res.redirect("/ASS7/")
})


app.get("/ASS7/", (req, res) => {

    res.send("ENDPOINTS");
})



app.get("/ASS7/posts", (req, res) => {
    return res.status(200).json({
        employees
    })
})


app.post("/ASS7/posts", (req, res) => {
    const data = req.body;
    employees.push(data);

    return res.status(201).json(employees);

})

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})


