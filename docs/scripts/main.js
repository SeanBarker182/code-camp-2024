var email = prompt("Enter your email address:");

function checkEmail() {
    if (email.length < 1) {
        alert("Must include an email address.");
    } else {
        alert("Thanks! We'll spam you at" + email);
    }
}

checkEmail();