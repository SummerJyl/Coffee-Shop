import '../style.css';

// When DOM is ready, set background image on your element
document.addEventListener('DOMContentLoaded', () => {
  const chooseCard = document.querySelector('.choose-card');
  if (chooseCard) {
    chooseCard.style.backgroundImage = `url(${coffeeSplash})`;
  }
});

console.log('Coffee Shop app initialized');
