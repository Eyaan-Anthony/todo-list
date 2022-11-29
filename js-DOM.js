// var button = document.getElementsByTagName("button")[0];
// // we have to add the index so that the function doesn't return an array
// button.addEventListener("click", function () {
//     // the addEventListener takes two parameters, the first is the event
//     // the second parameter is the function that will be called when the event is triggered
//     console.log("you clicked on the button");
// })

var button = document.getElementById("add");
var input = document.getElementById("userinput");
// we assing the two elements to vars, so that we can write code easily
var ul = document.querySelector("ul");
// we assign the ul element to a var so that we can append the new elements to it

function inputLength() {
    return input.value.length;
};

function createListElement() {
    var div = document.createElement("div");
    var li = document.createElement("li");
    var del = document.createElement("button");

    div.classList.add("elt-con");
    ul.appendChild(div);
    div.append(li, del);
    // append can add several nodes, appendchild appends only one node
    li.appendChild(document.createTextNode(input.value));
    del.appendChild(document.createTextNode("Delete"));
    // appendChild to add the new item, the document.createTextNode is to add the text we want to add
    del.classList.add("delete");
    input.value = "";
    // so as to clear the input form after we add an element
};

function addElementClick(){
    if (inputLength() > 0) {
        createListElement();
    }
};

function addElementKeypress(event){
    if (inputLength() > 0 && event.code === "Enter") {
        createListElement();
    }
};

function toggleClassName (task) {
    if (task.target.tagName === "li") {
        task.target.classList.add("done");
    }
};

function deleteElement (task) {
   if (task.target.className === "delete"){
    task.target.parentElement.remove();
   }
};

function handleUlClick (element) {
    deleteElement(element);
    toggleClassName(element);
}

button.addEventListener("click", addElementClick);

input.addEventListener("keypress", addElementKeypress);

ul.addEventListener("click", handleUlClick);

