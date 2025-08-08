const clock = document.getElementById('clock');
const tabs = document.querySelectorAll('.tab');
const themeToggle = document.getElementById('themeToggle');
const emoji = document.getElementById('emoji');

function getEmojiByTime(hour) {
  
  if (hour >= 5 && hour < 12) {
    return '🌅'; // Morning
  } else if (hour >= 12 && hour < 17) {
    return '🌞'; // Afternoon
  } else if (hour >= 17 && hour < 20) {
    return '🌞'; // Evening
  } else {
    return '🌙'; // Night
  }
}

let currentZone = 'Asia/Kolkata';

function updateClock() {
  const now = new Date();
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: currentZone,
    hour12: false
  };
  clock.textContent = new Intl.DateTimeFormat('en-US', options).format(now);
  emoji.textContent = getEmojiByTime(now.getHours());
}

setInterval(updateClock, 1000);
updateClock();


tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentZone = tab.dataset.zone;
    updateClock();
  });
});


themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
