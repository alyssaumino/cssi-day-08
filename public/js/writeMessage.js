const onSubmit = () => {
    //console.log("submit button clicked");
    const passcodeInput = document.querySelector("#passcode").value;
    const messageInput = document.querySelector("#message").value;
    //console.log(passcodeInput, messageInput);

    const payload = {
        passcode: passcodeInput,
        message: messageInput
    }

    firebase.database().ref().push(payload);
}