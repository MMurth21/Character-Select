const cards = document.querySelectorAll('.car-card');

cards.forEach(card => {
  const hex = card.dataset.color;

  card.addEventListener('mouseenter', () => {
    const [r, g, b] = [
      parseInt(hex.slice(1, 3), 16),
      parseInt(hex.slice(3, 5), 16),
      parseInt(hex.slice(5, 7), 16),
    ];
    document.body.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.15)`;
  });

  card.addEventListener('mouseleave', () => {
    document.body.style.backgroundColor = '';
  });
});
