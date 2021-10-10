let addUserFormEl = document.getElementById("addUserForm");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let passwordEl = document.getElementById("password");
let paswrdErrMsgEl = document.getElementById("paswrdErrMsg");

let errorMsg = "Required*";

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = errorMsg;
    } else {
        emailErrMsgEl.textContent = "";
    }
});

passwordEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        paswrdErrMsgEl.textContent = errorMsg;
    } else {
        paswrdErrMsgEl.textContent = "";
    }
});

addUserFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
});