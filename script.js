const wholesomePhrases = [
    "You are an amazing person, and you make the world brighter! 🌟",
    "Your smile has the power to change someone's day for the better! 😊",
    "Believe in yourself; you're capable of incredible things! 💪",
    "You are loved, appreciated, and valued just as you are! ❤️",
    "Kindness radiates from you, making the world a better place! 🌸"
  ];
  
  const prankPhrases = [
    "tari mani bhosh",
    "alya lund hu bakchodi kare bhan ne",
    "tame sodu copy karva ma j rai javana cho",
    "sodu hu time waste kare",
    "tari bun ni bhosh"
  ];
  
  const randomWholesomeIndex = Math.floor(Math.random() * wholesomePhrases.length);
  const randomPrankIndex = Math.floor(Math.random() * prankPhrases.length);
  const displayedText = wholesomePhrases[randomWholesomeIndex];
  const copiedText = prankPhrases[randomPrankIndex];
  
  document.getElementById("text").textContent = displayedText;
  
  function copyText() {
    navigator.clipboard.writeText(copiedText).then(() => {
      alert("Copied text will surprise your friend!");
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  }
  
