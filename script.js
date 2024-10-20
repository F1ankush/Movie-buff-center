// Quote of the Day Section
const quotes = [
    "May the Force be with you.",
    "I'll be back.",
    "I am Iron Man.",
    "Here's looking at you, kid.",
    "Why so serious?"
  ];
  
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
  }
  
  window.onload = getRandomQuote;
  
  // Trivia Quiz Section
  let score = 0;
  
  function checkAnswer(button, answer) {
    if (answer === 'right') {
      score++;
      button.style.backgroundColor = 'green';
    } else {
  
  