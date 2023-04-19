const addBtn = document.querySelector(".addListButton");
const addTxt = document.querySelector("#addListText");
const myList = document.querySelector(".myList"); 

addBtn.addEventListener("click", function(){
    let storedList = [];
    if (localStorage.getItem('myList')) {
		storedList = JSON.parse(localStorage.getItem('myList'));
	}

    if(addTxt.value == ""){
        alert("Please Input a value on the Textbox");
    }
    else{
        myList.innerHTML += 
        `
        <div class="listItem">
            <p>${addTxt.value}</p>
            <input type="checkbox" name="" id="">
        </div>
        `
        storedList.push(addTxt.value);
        localStorage.setItem("myList", JSON.stringify(storedList));
        console.log(storedList);
        addTxt.value="";
    }
})

// Load tasks from local storage on page load
window.addEventListener('load', function() {
	let storedList = [];

	// Check if tasks exist in local storage
	if (localStorage.getItem('myList')) {
		storedList = JSON.parse(localStorage.getItem('myList'));
	}

	// Add tasks to task list
	for (let i = 0; i < storedList.length; i++) {
		myList.innerHTML += 
        `
        <div class="listItem">
            <p>${storedList[i]}</p>
            <input type="checkbox" name="" id="">
        </div>
        `
	}
});