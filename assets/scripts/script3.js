let addBtn = document.getElementById("addBtn");
let textInput  = document.getElementById("textInput");
let itemmList = document.getElementById("itemList");
let removeBtn = document.getElementById("removeBtn");

addBtn.addEventListener("click", function(){
    let value = textInput.value;
    if(value == ""){
        alert("bosh qoyma")
        return;
        
    }
    itemmList.innerHTML = ""
    for (let i = 1; i <= value; i++) {
        let li = document.createElement("li");
        li.innerText = i;
        li.classList.add("list-group-item", "hover"); // add classes to li
        li.style.cursor = "pointer"; // change cursor style
        itemmList.appendChild(li);  
    }
    textInput.value = "";  
})


removeBtn.addEventListener("click", function(){
    itemmList.innerHTML = ""
})


