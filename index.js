const main = document.getElementById('root');

const externalHTML = `<img src='1' onerror='alert("Error loading image")'>`;
// shows the alert
main.innerHTML = externalHTML;
