window.onload=init;

function init(){
var btn = document.getElementById("btnSubmit");
btn.onclick=handleButtonClick;
loadtoDoList();
}

function handleButtonClick(){
    var textInput=document.getElementById("todoText");
    var todo=textInput.value;
    
    var li=document.createElement("li");
    li.innerHTML=todo;

    var ul=document.getElementById("to-do-list");
    ul.appendChild(li);
    save(todo);

}