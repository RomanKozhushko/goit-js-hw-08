
    const iframe = document.querySelector('iframe');
      const player = new Vimeo.Player(iframe);

      player.on('timeupdate', function (timeupdate) {
          let timeControl = timeupdate;
          localStorage.setItem('timePoint', JSON.stringify(timeControl))

          const timePoint = localStorage.getItem('timePoint')
          const timeReload = JSON.parse(timePoint);
          
         const secondOfReload = timeReload.seconds;
          console.log(secondOfReload);

         document.addEventListener("DOMContentLoaded", () => {
          window.addEventListener("DOMContentLoaded", reload)
          const reload = player.setCurrentTime(secondOfReload);
  });
        
        
})


