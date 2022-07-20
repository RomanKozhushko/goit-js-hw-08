const e=document.querySelector("iframe");new Vimeo.Player(e).on("timeupdate",(function(e){let t=e;localStorage.setItem("timePoint",JSON.stringify(t));const o=localStorage.getItem("timePoint"),n=JSON.parse(o).seconds;console.log(n)})),window.addEventListener("storage",(e=>{}));
//# sourceMappingURL=02-video.c8ed5f45.js.map
