const getMessages = () => {
    const passcode = document.querySelector("#passcode")
    //console.log("button pressed", passcode.value)

    const messagesRef = firebase.database().ref()
    messagesRef.on("value", (snapshot) => {
        const data = snapshot.val()
        console.log(data)

    })

}
