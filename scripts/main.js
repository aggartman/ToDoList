function clearPopup() {
    var subject = document.getElementById("newSubjectInput");
    var description = document.getElementById("newDescriptionInput");
    var priority = document.getElementById("newPriorityInput");
    var date = document.getElementById("newDateInput"); 

    subject.value = "";
    description.value = "";
    priority.value = "";
    date.value = "";
}

function showPopup() {
    // When the user clicks "Add Honey-do", open the popup
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    popup.classList.remove("hide");
}

function hidePopup() {
    // When user clicks on "Cancel", hide popup
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("hide");
    popup.classList.remove("show");
    clearPopup();

}

function addTask() {
    var subject = document.getElementById("newSubjectInput").value;
    var description = document.getElementById("newDescriptionInput").value;
    var priority = document.getElementById("newPriorityInput").value;
    var date = document.getElementById("newDateInput").value;
    var taskContainer = document.getElementById("taskContainer");

    var numberField = document.querySelectorAll('p.number');
    var textNumber = numberField[numberField.length - 1];
    textNumber = textNumber.value;
    var integer = parseInt(textNumber);
    var number = integer++;

    var article = document.createElement("article");
    article.classList.add("task");
    
    var p1 = document.createElement("p");
    p1.classList.add("number");
    p1.textContent = number + ". ";
    article.appendChild(p1);

    var h1 = document.createElement("h1");
    h1.classList.add("subject");
    h1.textContent = subject;
    article.appendChild(h1);

    var p2 = document.createElement("p");
    p2.classList.add("description");
    p2.textContent = description;
    article.appendChild(p2);

    var p3 = document.createElement("p");
    p3.classList.add("priority");
    p3.textContent = priority;
    article.appendChild(p3);

    var p4 = document.createElement("p");
    p4.classList.add("date");
    p4.textContent = date;
    article.appendChild(p4)
    
    taskContainer.appendChild(article);
    hidePopup();
    clearPopup();
}