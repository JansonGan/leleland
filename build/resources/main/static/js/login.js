// Below function Executes on click of login button.
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "admin" && password == "nimda"){
        alert ("Login successfully");
        window.location.href = "form-upload-product.html"; // Redirecting to other page.
        return false;
    }
    else{
        
        alert("Oops! Please make sure you enter the correct Username and Password.");
        return false;
        
    }
}