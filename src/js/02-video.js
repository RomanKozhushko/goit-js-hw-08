import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";


player.on('timeupdate', throttle(function (timeupdate) {
let timeControl = timeupdate;
            //1. записуємо таймінг у локал сторидж!
    localStorage.setItem('LOCALSTORAGE_KEY', JSON.stringify(timeControl));
      }, 1000));
        
      // 2. Забираємо дані з локат сториджа
const timePoint = localStorage.getItem('LOCALSTORAGE_KEY');
      // 3. Парсимо СТРІНГ у числові значення
const timeReload = JSON.parse(timePoint);
      // 4. Витягуємо значення часу для перезапуску плеєра.
const secondOfReload = timeReload.seconds;
      // 5. Запускаємо плеєр у визначений час
player.setCurrentTime(secondOfReload);
