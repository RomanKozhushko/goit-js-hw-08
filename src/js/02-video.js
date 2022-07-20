import throttle from "lodash.throttle";

      const iframe = document.querySelector('iframe');
      const player = new Vimeo.Player(iframe);
      const LOCALSTORAGE_KEY = "videoplayer-current-time";


      player.on('timeupdate', function (timeupdate) {
          let timeControl = timeupdate;
        localStorage.setItem('LOCALSTORAGE_KEY', JSON.stringify(timeControl));
      });      
        const timePoint = localStorage.getItem('LOCALSTORAGE_KEY')
        const timeReload = JSON.parse(timePoint);
          
const secondOfReload = timeReload.seconds;
        
player.setCurrentTime(secondOfReload).then(function(secondOfReload) {
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
       
//         document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     console.log("Scroll handler call every 300ms");
//   }, 300)
// );
