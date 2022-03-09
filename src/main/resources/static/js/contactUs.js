// Count the number of character in the textarea
let charNum = document.querySelector("#charNum");
let textArea = document.querySelector("#textarea");

textArea.onkeyup = function () {
    // Max character 200 subtract numbers of keypress enter in the textarea.
    charNum.innerHTML = 200 - textArea.value.length;
};

// Store message into array of object after submit button click.
const userMessages = [];

function submitMessage() {
// Create variables to store the input value from form.
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#eMail").value;
    const enquiryType = document.querySelector("#enquiryType").value;
    const message = document.querySelector("#textarea").value;

    const offMessage = setTimeout(alertMessage, 3000);

    // if (username.length == 0 || email.length == 0 || enquiryType.length == 0 || message.length == 0) {
    //     document.querySelector("#alert").style.display = "block";
    // } else {

         // Create object to store user input data.
    const userEnquiryInfo = {
        username: username,
        email: email,
        enquiryType: enquiryType,
        message: message
    };

    userMessages.push(userEnquiryInfo);

    console.log(userMessages);

    alert("Your message had sent successfully.");

    }

// function alertMessage() {
//     document.querySelector("#alert").style.display = "none";
// }



