function showMessage(message, type = "success") {
    const messageBox = document.getElementById("message-box");
    messageBox.textContent = message;
    messageBox.className = `message ${type}`;
    messageBox.style.display = "block";
    setTimeout(() => {
        messageBox.style.display = "none";
    }, 3000);
}

export { showMessage };