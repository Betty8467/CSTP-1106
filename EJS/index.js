const express = require ('express');
const app = express();
const PORT = 5000;
const social = [
    {link: '<a href="https://login.yahoo.com/?.src=ym&pspid=159600001&activity=mail-direct&.lang=en-US&.intl=us&.done=https%3A%2F%2Fmail.yahoo.com%2Fd"><img src ="https://s.yimg.com/cv/apiv2/myc/mail/Mail_iOS_app_icon.png" alt="" width="20px"></a>'},
    {link: '<a href="https://www.instagram.com/"><img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="" width="20px"></a>'},
    {link: '<a href="https://twitter.com/?lang=en"><img src ="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="" width="20px"></a>'},
    {link: '<a href="https://ca.linkedin.com/"><img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" alt="" width="20px"></a>'}
]
const customerData = {name: "Betty", email: "betty@gmail.com", date: Date()}

app.set("view engine", "ejs");
app.get("/result", (req,res)=> {
    res.render('home.ejs',{link: social, user: customerData })
});

app.listen(PORT, ()=>{
    console.log(`Server running pn port ${PORT}`);
})