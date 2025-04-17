var names = []
document.getElementById("saveBtn").addEventListener("click", function() {
    var addname = document.getElementById("nameInput").value;
    document.getElementById("nameInput").value = "";
    names.push(addname);
    document.getElementById("nameList").innerHTML = names;
});
//////
document.getElementById("deleteBtn").addEventListener("click", function() {
    names.pop();
    document.getElementById("nameList").innerHTML = names;
});