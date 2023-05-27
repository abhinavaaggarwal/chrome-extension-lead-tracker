const inputBtn = document.getElementById("btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("list")
let myLeads = ["Lead 1", "Lead 2"]

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for(let i=0;i<myLeads.length;i++){
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    
    //----create element----
    const li = document.createElement("li")
    //----set text content----
    li.textContent = myLeads[i]
    //----append to ul----
    ulEl.append(li)
}