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
        const myItem = document.createElement('div');
        myItem.classList.add("listItem");
        myItem.classList.add("animate__bounceIn");
        myItem.innerHTML = 
        `
            <p>${addTxt.value}</p>
            <button>Remove</button>
        `;

        myList.appendChild(myItem);
        storedList.push(addTxt.value);
        localStorage.setItem("myList", JSON.stringify(storedList));
        console.log(storedList);
        addTxt.value="";
    }
})

window.addEventListener('load', function() {
	let storedList = [];

	if (localStorage.getItem('myList')) {
		storedList = JSON.parse(localStorage.getItem('myList'));
	}

    if(storedList.length == 0){
        myList.innerHTML = `<h3>Add new Task</h3>`
    }
    else{
        for (let i = 0; i < storedList.length; i++) {
            const myItem = document.createElement('div');
            myItem.classList.add("listItem");
            myItem.innerHTML = 
            `
                <p>${storedList[i]}</p>
                <button>Remove</button>
            `;
            myList.appendChild(myItem);
        }
    }
});