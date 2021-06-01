// countdown.js
// Таймер-счётчик ⏳

function startCountdown(seconds) {
  let remaining = seconds;

  const interval = setInterval(() => {
    if (remaining > 0) {
      console.log(`⏳ Осталось: ${remaining} сек.`);
      remaining--;
    } else {
      console.log("💥 Время вышло!");
      clearInterval(interval);
    }
  }, 1000);
}

// Пример: отсчёт с 5 секунд
startCountdown(5);
