
    const iframe = document.querySelector('iframe');
      const player = new Vimeo.Player(iframe);

      player.on('timeupdate', function (timeupdate) {
        const timeControl = timeupdate;

        console.log(timeControl );
      });

        player.getVideoTitle().then(function (title) {
        console.log('title:', title);
      });
