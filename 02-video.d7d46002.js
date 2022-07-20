!function(){var e=document.querySelector("iframe");new Vimeo.Player(e).on("timeupdate",(function(e){var t=e;localStorage.setItem("timePoint",JSON.stringify(t));var o=localStorage.getItem("timePoint"),n=JSON.parse(o).seconds;console.log(n)})),window.addEventListener("storage",(function(e){}))}();
//# sourceMappingURL=02-video.d7d46002.js.map
