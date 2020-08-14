window.addEventListener('load', contact, false);

function contact() {
    function orderNumber() {
        var orderDiv = document.getElementById("orderDiv");
        orderDiv.style.display = "inline";
    }
    function noOrderNumber() {
        var orderDiv = document.getElementById("orderDiv");
        orderDiv.style.display = "none";
    }
    var orderProblem = document.getElementById("orderProblem");
    orderProblem.addEventListener('click', orderNumber);
    var comment = document.getElementById("comment");
    comment.addEventListener('click', noOrderNumber);
    var question = document.getElementById("question");
    question.addEventListener('click', noOrderNumber);
}

function validateForm() {
    var elem;
    var inputValue;
    var errors = "";
    let checkedValue = false;
    elem = document.getElementById("firstName");
    inputValue = elem.value.trim();
    inputValue = inputValue.toUpperCase();
    var allAlpha = true;
    for (var i = 0; i < inputValue.length; i++) {
        // check all characters are letters​ 
        if (inputValue.charAt(i) < "A" || inputValue.charAt(i) > "Z") { allAlpha = false; }
    }
    if (!allAlpha || inputValue.length < 3) {
        errors += "First Name : Please enter a meaningful First Name with all alphabet letters. ";
        elem.focus();
    }
    elem = document.getElementById("lastName");
    inputValue = elem.value.trim();
    inputValue = inputValue.toUpperCase();
    allAlpha = true;
    for (var i = 0; i < inputValue.length; i++) {
        // check all characters are letters​ 
        if (inputValue.charAt(i) < "A" || inputValue.charAt(i) > "Z") { allAlpha = false; }
    }
    if (!allAlpha || inputValue.length < 3) {
        errors += " Last Name : Please enter a meaningful Last Name with all alphabet letters. ";
        elem.focus();
    }
    elem = document.getElementById("address");
    if (elem.value == "") {
        errors += " Address : Please choose a address. ";
    }
    elem = document.getElementById("cityInput");
    if (elem.value == "" || elem.value.length < 4) {
        errors += " City : Please choose a valid city. ";
    }    for (let i = 0; i < 3; i++) {
        if (document.contactUs.option[i].checked) {
            checkedValue = true;
        }
    }
    if (checkedValue == false) {
        errors += " Option : Please select a contact option. ";
    }
    if(document.contactUs.option[2].checked){
        elem = document.getElementById("orderNumber");
        if(elem.value == "" || isNaN(elem.value)){
            errors += " Order Number : Please type only numbers for Order Number. ";     
        }
    }
    elem = document.getElementById("textComment");
    if (elem.value == "") {
        errors += " Message : Please type a meaningful message. ";
    }
    if (errors != "") {
        alert(errors);
        return false;
    } else {
        return true;
    }
}
