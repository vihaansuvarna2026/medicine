const chatbox = document.getElementById('chatbox');

function sendMessage() {
  const userInput = document.getElementById('userInput');
  const userText = userInput.value.trim();
  if (userText === '') return;

  displayMessage(userText, 'user');
  respond(userText.toLowerCase());
  userInput.value = '';
}

function displayMessage(text, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.className = sender + '-message';
  messageDiv.textContent = text;
  chatbox.appendChild(messageDiv);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function respond(userText) {
  let botResponse = "I'm not sure about that. Please ask about medicine disposal.";

  if (userText.includes('hazard') || userText.includes('improper')) {
    botResponse = "Improper disposal can contaminate water, harm wildlife, and spread antibiotic resistance.";
  } else if (userText.includes('where') || userText.includes('drop') || userText.includes('location')) {
    botResponse = "You can drop medicines at local pharmacies, hospitals, or official collection events.";
  } else if (userText.includes('what to do') || userText.includes('dispose')) {
    botResponse = "Keep medicines in original containers, remove personal info, and bring them to safe disposal sites.";
  } else if (userText.includes('safe') || userText.includes('best way')) {
    botResponse = "The safest way is using a drug take-back program or a DEA-authorized collection site.";
  }

  displayMessage(botResponse, 'bot');
}
