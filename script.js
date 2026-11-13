function add() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    if (name == "" || id == "") {
        alert("Enter all details");
        return;
    }
    document.getElementById("result").innerText =
    "Employee: " + name + ", + id;
}