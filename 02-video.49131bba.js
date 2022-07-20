const e=document.querySelector("iframe");new Vimeo.Player(e).on("timeupdate",(function(e){let t=e;localStorage.setItem("timePoint",JSON.stringify(t));const o=localStorage.getItem("timePoint"),n=JSON.parse(o).seconds;console.log(n)}));
//# sourceMappingURL=02-video.49131bba.js.map
