let userList = [];

function submitForm() { 

    let data = {
        name: document.getElementById('name').value,
        email:  document.getElementById('email').value,
        studentid:  document.getElementById('studentid').value
    }

    // Saving new form submit data
    userList.push(data);

    localStorage.setItem("userList", JSON.stringify(userList));


}


// You can get the userlist using

let tr = document.createElement("tr", "td");
let td = document.createElement("td");

let updatedUserList = JSON.parse(localStorage.getItem("userList"));

for (let i = 0 ; i < updatedUserList.length ; i++) {
   td.innerHTML = `<prev>
    ${updatedUserList[i].name};
    ${updatedUserList[i].email};
    ${updatedUserList[i].studentid}
   </prev>`
}
newRow.append(td);
document.getElementById("rows".appendChild(tr))

