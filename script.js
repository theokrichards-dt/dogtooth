// change this to whatever code you want to use
const correctCode = "hound123";  

document.getElementById("enterButton").addEventListener("click", function () {
  const enteredCode = document.getElementById("codeInput").value;
  const message = document.getElementById("message");

  if (enteredCode === correctCode) {
    // success — go to secret page
    message.textContent = "Welcome.";
    window.location.href = "secret.html";
  } else {
    // wrong code
    message.textContent = "That code doesn’t open this door.";
  }
});
