const AUDIO_BASE = './car-hero-selector/public/audio/';
const FADE_MS    = 150;

// Preload one Audio object per card
const audioPool = {};
document.querySelectorAll('.car-card[data-audio]').forEach(card => {
  const id  = card.dataset.audio;
  const src = `${AUDIO_BASE}${id}.mp3`;
  const a   = new Audio(src);
  a.preload  = 'auto';
  a.volume   = 0.72;
  audioPool[id] = a;
});

let activeAudio = null;

function fadeOut(audio, onDone) {
  const startVol = audio.volume;
  const step     = startVol / (FADE_MS / 16);
  const tick = setInterval(() => {
    audio.volume = Math.max(0, audio.volume - step);
    if (audio.volume <= 0) {
      clearInterval(tick);
      audio.pause();
      audio.currentTime = 0;
      audio.volume      = startVol;
      if (onDone) onDone();
    }
  }, 16);
}

function playAudio(id) {
  const next = audioPool[id];
  if (!next) return;

  if (activeAudio && activeAudio !== next) {
    fadeOut(activeAudio);
  }

  next.currentTime = 0;
  next.volume      = 0.72;
  next.play().catch(() => {});
  activeAudio = next;
}

function stopAudio() {
  if (activeAudio) {
    fadeOut(activeAudio);
    activeAudio = null;
  }
}

// ── Wire up each card ───────────────────────────────────────────────────
document.querySelectorAll('.car-card').forEach(card => {
  const hex     = card.dataset.color;
  const audioId = card.dataset.audio;
  const [r, g, b] = [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ];

  // Hover — update body bg + play audio
  card.addEventListener('mouseenter', () => {
    document.body.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.15)`;
    playAudio(audioId);
  });

  card.addEventListener('mouseleave', () => {
    document.body.style.backgroundColor = '';
    stopAudio();
  });

  // Click — toggle specs panel (stop propagation inside panel so close click works)
  card.addEventListener('click', e => {
    if (e.target.closest('.specs-panel')) {
      card.classList.remove('show-specs');
    } else {
      const alreadyOpen = card.classList.contains('show-specs');
      // Close any other open panels first
      document.querySelectorAll('.car-card.show-specs').forEach(c => c.classList.remove('show-specs'));
      if (!alreadyOpen) card.classList.add('show-specs');
    }
  });
});
