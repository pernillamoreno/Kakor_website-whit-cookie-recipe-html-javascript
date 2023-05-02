const clickBtn = document.querySelector('.send-btn');
const messageField = document.querySelector('.message-field');
const messageHistory = document.querySelector('.message-history');
const typingStatus = document.querySelector('.typing-status');

const removeTypingStatus = () => typingStatus.classList.remove('typing-status--typing');

function createMessageElement(content) {
  const li = document.createElement("li");
  li.textContent = content;

  return li;
}

function appendMessage() {
  const msgContent = messageField.value;
  const msgElement = createMessageElement(msgContent);

  messageHistory.append(msgElement);

  messageField.value = '';

  removeTypingStatus();
}
clickBtn.addEventListener("click", appendMessage);
function handleKey(event) {


  if (event.key != "Enter") {

    if (!typingStatus.classList.contains('typing-status--typing')) {
      setTimeout(removeTypingStatus, 3000); // After three seconds, remove typing class modifier
    }

    typingStatus.classList.add('typing-status--typing');

    return false;
  }
  appendMessage();
}
messageField.addEventListener("keydown", handleKey);


const portionsSelect = document.querySelector('.portions');
const butterAmount = document.querySelector('.butter-amount');
const vanillaAmount = document.querySelector('.vanilla-amount');
const sugarAmount = document.querySelector('.sugar-amount');
const flourAmount = document.querySelector('.flour-amount');
const jamAmount = document.querySelector('.jam-amount');

function calculateIngredients() {
  const portions = portionsSelect.value;
  if (portions === '50') {
    butterAmount.textContent = ' 200 gram';
    vanillaAmount.textContent = ' 5 gram';
    sugarAmount.textContent = ' 1 dl';
    flourAmount.textContent = ' 400 gram';
    jamAmount.textContent = ' 2 dl';
  } else if (portions === '100') {
    butterAmount.textContent = ' 400 gram';
    vanillaAmount.textContent = ' 10 gram';
    sugarAmount.textContent = ' 2 dl';
    flourAmount.textContent = ' 800 gram';
    jamAmount.textContent = ' 4 dl';
  } else if (portions === '200') {
    butterAmount.textContent = ' 800 gram';
    vanillaAmount.textContent = ' 20 gram';
    sugarAmount.textContent = ' 4 dl';
    flourAmount.textContent = ' 1600 gram';
    jamAmount.textContent = ' 8 dl';

  }
}

portionsSelect.addEventListener('change', calculateIngredients);