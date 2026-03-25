import confetti from 'canvas-confetti';

document.getElementById('confetti-btn').addEventListener('click', () => {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
  });
});
