// This keyword

// This keyword refers to ther current object that's ----> name
var name = "Daniel";

let obj = {
    name: "Betty",
    getName: function(){
        console.log(this.name);
    }
}

obj.getName();

let obj2 = {
    name: "Betty",
    getName: () => {
        console.log(this.name);
    }
}

obj2.getName();

//Main diffrence is between the this keyword

var obj3 = {
    name: "Betty",
    getName: () => {
        console.log(this.name);
    }
}

obj3.getName();


var game = "Call of Duty"

let obj4 = {
    name: "Apex",
    getName: () => {
        console.log(this.name);
    }
}

obj4.getName();

let student = {
    name: "Daniel",
    college: "Toronto",
    address: {
        city: "Vancouver",
        province: "BC",
        getCity: function() {
            console.log(this.city)
        }
    }
}

student.address.getCity();

//Hoisting *******************************************************

console.log(collegeName);  // undefined

var collegeName = "VCC"

//***************************** 

var collegeName;

console.log(collegeName); // VCC

var collegeName = "VCC"

