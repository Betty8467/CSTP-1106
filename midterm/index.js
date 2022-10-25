const express = require('express');

const app = express();
const PORT = 5110;
const employee = [];


let Employees = [
    {
    id: 1,
    name: "Sam",
    employeeid: 1200,
    email: "sam@work.ca",
    department: "Upper",
    salary: 11000
    },
    {
    id: 2,
    name: "Bob",
    employeeid: 2200,
    email: "bob@work.ca",
    department: "Lower",
    salary: 5600
    },
    
]

newEmployee = [
    {
    id: 3,
    name: "Alex",
    employeeid: 3200,
    email: "alex@work.ca",
    department: "Upper",
    salary: 15000
}
]



app.use(express.json());

app.get("/", (req, res) => {

    res.redirect("/midterm/")
})


app.get("/midterm/", (req, res) => {

    res.send("ENDPOINTS");
})


//Part 1
app.get("/midterm/employees", (req, res) => {
    return res.status(200).json({
        Employees
    })
})

//Part 2
app.get("/midterm/employee/:department", (req, res) => {

    const department = req.params.department;
    
    const findEmployee = Employees.find((Employees) => Employees.department == department ? true : false);

    if (findEmployee) {
        return res.status(200).json({
            message: "Succesfully fetched the Employee",
            data: findEmployee
        })
    } else {
        return res.status(404).json({
            message: "Employee Doesn't Exist",
        })
    }


})

// Part 3 - When I try to input this into the browser nothing shows up at all, I had it wortking before but I'm not sure what I had accidenlty changed

app.get("/midterm/stuff/id/:postemployeeid", (req, res) => {

    const employeeid = req.params.postemployeeid;
    
    const findemployeeid = Employees.find((Employees) => Employees.employeeid == employeeid ? true : false);

    if (findemployeeid) {
        return res.status(205).json({
            message: "Succesfully fetched the employee with this id",
            data: findemployeeid
        })
    } else {
        return res.status(404).json({
            message: "Article Doesn't Exist",
        })
    }


})

// Part 4



// Part 5


app.put("/midterm/employee/:employeeid", (req, res) => {
    const employeeid = req.params.employeeid;
    const postToUpdate = req.body;

    if (!postToUpdate.id || !postToUpdate.name || !postToUpdate.employeeid || !postToUpdate.email || !postToUpdate.department || !postToUpdate.salary) {
        return res.status(500).json({
            message: "One of the parameters is missing"
        })
    }



    Employees = Employees.map((post) => {
        if (post.employeeid == employeeid) {
            post = postToUpdate;
        }

        return post;
    })



    return res.status(200).json({
        message: "Succesfully updated the article3",
        data: Employees
    })

})          

// Part 6

app.delete("/midterm/employees/:employeeid", (req,res) => {

    const employeeid = req.params.employeeid;

    const index = Employees.findIndex((employee) => {
        if (employee.employeeid == employeeid) {
            return true;
        }
    })

    if (index !== -1) {
        Employees.splice(index, 1);

        return res.status(206).json({
            message: "Succesfully deleted the article",
            data: Employees
        })
    
    } else {
        return res.status(404).json({
            message: "Element you are trying to delete doesn't exist"
        })
    }

})



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})


