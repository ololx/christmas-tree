function init() {
    var url = new URL(window.location.href);

    appendMessages(url.searchParams.getAll("message"));
}

function appendMessages(messages) {
    let messageBox = document.getElementById("message_container");
    messageBox.innerHTML = `Happy New Year`;
    
    if (!Array.isArray(messages) || messages.length == 0) return;
    if (messageBox == null || messageBox == 'undefined') return;
    
    messageBox.innerHTML = `${messages.join("<br />")}`;
}
