const inputBtn = document.getElementById("btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("list")
let myLeads = []

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value = ""
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

