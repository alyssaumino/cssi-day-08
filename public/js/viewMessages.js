let count = 0;

const getMessages = () => {
    const passcode = document.querySelector("#passcode");
    //console.log("button pressed", passcode.value);

    const messagesRef = firebase.database().ref();
    messagesRef.on("value", (snapshot) => {
        const data = snapshot.val();
        //console.log(data);
        let matchFound = false;

        for(let key in data) {
            console.log(key, data[key]);
            if(data[key].passcode === passcode.value) {
                console.log("match");
                const message = document.querySelector("#message");
                message.innerHTML = data[key].message;

                matchFound = true;
                count = 0;
            }
            if(count === 2) {
                const enterButton = document.querySelector("#viewMsg");
                enterButton.disabled = true;
                message.innerHTML = "**Too many failed attempts**";
                passcode.value = "";

                secondsDelay = 4;
                setTimeout(unlock, secondsDelay * 1000);
            }
        }
        if(!matchFound) {
            alert("Passcode not found in database");
            count++;
        }
    })
}

const resetPasscode = () => {
    const passcode = document.querySelector("#passcode");
    passcode.value = "";
    passcode.placeholder="What's the passcode?";

    const message = document.querySelector("#message");
    message.innerHTML = "";
}

const unlock = () => {
    const enterButton = document.querySelector("#viewMsg");
    enterButton.disabled = false;
    const message = document.querySelector("#message");
    message.innerHTML = "Try again";
    count = 0;
}
