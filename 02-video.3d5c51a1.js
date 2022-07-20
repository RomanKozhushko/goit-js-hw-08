!function(){var e=document.querySelector("iframe");new Vimeo.Player(e).on("timeupdate",(function(e){var t=e;localStorage.setItem("timePoint",JSON.stringify(t));var o=localStorage.getItem("timePoint"),n=JSON.parse(o).seconds;console.log(n)}))}();
//# sourceMappingURL=02-video.3d5c51a1.js.map
