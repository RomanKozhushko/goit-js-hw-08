!function(){var e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("timeupdate",(function(e){var t=e;localStorage.setItem("LOCALSTORAGE_KEY",JSON.stringify(t))}));var n=localStorage.getItem("LOCALSTORAGE_KEY"),a=JSON.parse(n).seconds;t.setCurrentTime(a).then((function(e){})).catch((function(e){e.name}))}();
//# sourceMappingURL=02-video.094f72a9.js.map
