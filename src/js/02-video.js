import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";


      player.on('timeupdate', function (timeupdate) {
       //1. записуємо таймінг у локал сторидж!
        localStorage.setItem('LOCALSTORAGE_KEY', JSON.stringify(timeupdate));
      });   
      // 2. Забираємо дані з локат сториджа
const timePoint = localStorage.getItem('LOCALSTORAGE_KEY');
      // 3. Парсимо СТРІНГ у числові значення
const timeReload = JSON.parse(timePoint);
      // 4. Витягуємо значення часу для перезапуску плеєра.
const secondOfReload = timeReload.seconds;
      // 5. Запускаємо плеєр у визначений час
      player.setCurrentTime(secondOfReload).then(function(seconds) {
          // seconds = the actual time that the player seeked to
      }).catch(function(error) {
          switch (error.name) {
              case 'RangeError':
                  // the time was less than 0 or greater than the video’s duration
                  break;
              default:
                  // some other error occurred
                  break;
          }
      });
       
