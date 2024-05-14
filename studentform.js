// S electing Elements
var namee = document.getElementById("name")
var age = document.getElementById("age")
var email = document.getElementById("email")
var btnsave = document.getElementById("btnsave")
var select = document.getElementById("select")
var tabletwo = document.querySelector(".tabletwo")
var gendercheck = document.querySelectorAll(".gender")

// console.log(gendercheck.length)


// Save Btn function 
btnsave.addEventListener("click",function () {
    console.log(namee.value)
    console.log(age.value)
    console.log(email.value)
    console.log(select.value)
    var tr = document.createElement("tr")
    var tdname = document.createElement("td")
    var tdage = document.createElement("td")
    var tdemail = document.createElement("td")
    var tdselect = document.createElement("td")
    var tdgender = document.createElement("td")
    var tdbutton = document.createElement("td")
    // gender 
    for (let i = 0; i < gendercheck.length; i++) {
        var elementvalue = gendercheck[i].value
        const element = gendercheck[i].checked;
        if(element == true){
           var genderresult = elementvalue
           console.log(genderresult);
        }
        else{
            console.log("no")
        }
    }
    tdname.textContent=namee.value
    tdage.textContent=age.value
    tdselect.textContent=select.value
    tdgender.textContent=genderresult
    tdemail.textContent=email.value
    tdbutton.innerHTML="<button class='del' onclick='delelement(event)'>Delete</button>"


    tabletwo.append(tr)
    tr.append(tdname)
    tr.append(tdage)
    tr.append(tdselect)
    tr.append(tdgender)
    tr.append(tdemail)
    tr.append(tdbutton)
    console.log(tabletwo)
    // value empty 
    namee.value=""
    age.value=""
    email.value=""
    select.value="Html"
})

// delete function 

function delelement(event){
    event.target.closest("tr").remove()
}