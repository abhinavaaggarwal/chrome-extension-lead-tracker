const inputBtn = document.getElementById("btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("list")
const deleteBtn = document.querySelector("#delete-btn")
let myLeads = []

// localStorage.setItem("myLead", "www.google.com")
// console.log(localStorage.getItem("myLead"))
// localStorage.clear()

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLead"))

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLead", JSON.stringify(myLeads))
    renderLeads()
    console.log(localStorage.getItem("myLead"))
})

function renderLeads() {
    let listItems = ""
    for(let i=0;i<myLeads.length;i++){
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"

        /*----create element----
        const li = document.createElement("li")
        ----set text content----
        li.textContent = myLeads[i]
        ----append to ul----
        ulEl.append(li)
        */
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"

        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", deleteFunction)

function deleteFunction() {
    localStorage.clear()
    myLeads = []
    renderLeads()
}

