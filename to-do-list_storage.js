function save(item) {
var todoArray = getStoreArray("to-do-list");
todoArray.push(item);
localStorage.setItem("to-do-list", JSON.stringify(todoArray));
}
function loadtoDoList() {
var todoArray = getSavedList();
var ul = document.getElementById("to-do-list");
if (todoArray != null) {
for (var i = 0; i < todoArray.length; i++) {
var li = document.createElement("li");
li.innerHTML = todoArray[i];
ul.appendChild(li);
}
}
}
function getSavedList() {
return getStoreArray("to-do-list");
}
function getStoreArray(key) {
var todoArray = localStorage.getItem(key);
if (todoArray == null || todoArray == "")
{
todoArray = new Array();
}
else {
todoArray = JSON.parse(todoArray);
}
return todoArray;
}
