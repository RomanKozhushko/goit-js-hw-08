const e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("timeupdate",(function(e){let t=e;localStorage.setItem("LOCALSTORAGE_KEY",JSON.stringify(t))}));const n=localStorage.getItem("LOCALSTORAGE_KEY"),o=JSON.parse(n).seconds;t.setCurrentTime(o).then((function(e){})).catch((function(e){e.name}));
//# sourceMappingURL=02-video.042474e7.js.map
