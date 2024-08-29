document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const cards = carousel.querySelectorAll('.card');
    
    // Clone the cards and append them to create the illusion of infinity
    cards.forEach(card => {
      const clone = card.cloneNode(true);
      carousel.appendChild(clone);
    });
  
    let cardIndex = 0;
    const cardWidth = cards[0].offsetWidth + 20; // 20px for margin-right
  
    function moveCarousel() {
      cardIndex++;
      carousel.style.transition = 'transform 0.5s ease';
      carousel.style.transform = `translateX(-${cardIndex * cardWidth}px)`;
  
      if (cardIndex === cards.length) {
        setTimeout(() => {
          carousel.style.transition = 'none';
          cardIndex = 0;
          carousel.style.transform = 'translateX(0)';
        }, 500);
      }
    }
  
    // Move the carousel every 3 seconds
    setInterval(moveCarousel, 1000);
});

document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const faqAnswer = button.nextElementSibling;
    button.classList.toggle('active');
    faqAnswer.classList.toggle('show');
  });
});