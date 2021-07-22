const onSubmit = () => {
    //console.log("submit button clicked");
    const passcodeInput = document.querySelector("#passcode").value;
    const messageInput = document.querySelector("#message").value;
    //console.log(passcodeInput, messageInput);

    if(messageInput.length > 20) {
        alert("Message too long, keep it under 20 characters");
    }
    else {
        const payload = {
            passcode: hex(passcodeInput),
            message: messageInput
        }

        firebase.database().ref().push(payload);
    }
    const passcodeField = document.querySelector("#passcode");
    passcodeField.value = ""
    const messageField = document.querySelector("#message");
    messageField.value = ""
}