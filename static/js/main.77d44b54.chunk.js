(this["webpackJsonpmusic-app"]=this["webpackJsonpmusic-app"]||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),r=c(10),i=c.n(r),s=c(3),o=c(6),l=c(0),d=function(e){var t=e.song,c=e.songs,n=e.setCurrentSong,a=e.id,r=e.audioRef,i=e.isPlaying,o=e.setSongs;return Object(l.jsxs)("div",{onClick:function(){var e=c.filter((function(e){return e.id===a}));n(e[0]),r.current.play();var t=c.map((function(e){return e.id===a?Object(s.a)(Object(s.a)({},e),{},{active:!0}):Object(s.a)(Object(s.a)({},e),{},{active:!1})}));if(o(t),i){var l=r.current.play();void 0!==l&&l.then((function(e){r.current.play()}))}},className:"library-song ".concat(t.active?"selected":""),children:[Object(l.jsx)("img",{alt:t.name,src:t.cover}),Object(l.jsxs)("div",{className:"song-description",children:[Object(l.jsx)("h3",{children:t.name}),Object(l.jsx)("h4",{children:t.artist})]})]})},b=function(e){var t=e.songs,c=e.setCurrentSong,n=e.audioRef,a=e.isPlaying,r=e.setSongs,i=e.library;return Object(l.jsxs)("div",{className:"library ".concat(i?"activeLibrary":""),children:[Object(l.jsx)("h2",{children:"Library"}),Object(l.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(l.jsx)(d,{songs:t,setCurrentSong:c,song:e,id:e.id,audioRef:n,isPlaying:a,setSongs:r},e.id)}))})]})},u=c(5),j=c(4),p=function(e){var t=e.setLibrary,c=e.library;return Object(l.jsxs)("nav",{children:[Object(l.jsx)("h1",{children:"Waves"}),Object(l.jsxs)("button",{onClick:function(){return t(!c)},children:["Library",Object(l.jsx)(u.a,{icon:j.c})]})]})},h=function(e){var t=e.currentSong,c=e.isPlaying,n=e.setIsPlaying,a=e.audioRef,r=e.songInfo,i=e.setSongInfo,o=e.timeUpdateHandler,d=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)};return Object(l.jsxs)("div",{className:"player",children:[Object(l.jsxs)("div",{className:"time-control",children:[Object(l.jsx)("p",{children:d(r.currentTime)}),Object(l.jsx)("input",{min:0,max:r.duration||0,value:r.currentTime,type:"range",onChange:function(e){a.current.currentTime=e.target.value,i(Object(s.a)(Object(s.a)({},r),{},{currentTime:e.target.value}))}}),Object(l.jsx)("p",{children:d(r.duration)})]}),Object(l.jsxs)("div",{className:"play-control",children:[Object(l.jsx)(u.a,{className:"skip-back",size:"2x",icon:j.a}),Object(l.jsx)(u.a,{onClick:function(){c?(a.current.pause(),n(!c)):(a.current.play(),n(!c))},className:"play",size:"2x",icon:c?j.e:j.d}),Object(l.jsx)(u.a,{className:"skip-forward",size:"2x",icon:j.b})]}),Object(l.jsx)("audio",{onTimeUpdate:o,onLoadedMetadata:o,ref:a,src:t.audio})]})},m=function(e){var t=e.currentSong;return Object(l.jsxs)("div",{className:"song-container",children:[Object(l.jsx)("img",{alt:t.name,src:t.cover}),Object(l.jsx)("h2",{children:t.name}),Object(l.jsx)("h3",{children:t.artist})]})},O=(c(21),c(24));var f=function(){return[{name:"Conflicted",artist:"Hanz",cover:"https://chillhop.com/wp-content/uploads/2021/08/b0bb2309d0c8fe0a32907ecddab689501b7de5cf-1024x1024.jpg",id:Object(O.a)(),active:!0,color:["#40556f","#9d7e8e"],audio:"https://mp3.chillhop.com/serve.php/?mp3=24642"},{name:"Falling Short",artist:"Hanz",cover:"https://chillhop.com/wp-content/uploads/2021/08/b0bb2309d0c8fe0a32907ecddab689501b7de5cf-1024x1024.jpg",id:Object(O.a)(),active:!1,color:["#40556f","#9d7e8e"],audio:"https://mp3.chillhop.com/serve.php/?mp3=24643"},{name:"From Afar",artist:"Hanz",cover:"https://chillhop.com/wp-content/uploads/2021/08/b0bb2309d0c8fe0a32907ecddab689501b7de5cf-1024x1024.jpg",id:Object(O.a)(),active:!1,color:["#40556f","#9d7e8e"],audio:"https://mp3.chillhop.com/serve.php/?mp3=24644"},{name:"Out of Place",artist:"Hanz",cover:"https://chillhop.com/wp-content/uploads/2021/08/b0bb2309d0c8fe0a32907ecddab689501b7de5cf-1024x1024.jpg",id:Object(O.a)(),active:!1,color:["#40556f","#9d7e8e"],audio:"https://mp3.chillhop.com/serve.php/?mp3=24645"},{name:"Rolling Eyes",artist:"Hanz",cover:"https://chillhop.com/wp-content/uploads/2021/08/b0bb2309d0c8fe0a32907ecddab689501b7de5cf-1024x1024.jpg",id:Object(O.a)(),active:!1,color:["#40556f","#9d7e8e"],audio:"https://mp3.chillhop.com/serve.php/?mp3=24646"}]};var g=function(){var e=Object(n.useRef)(null),t=Object(n.useState)(f()),c=Object(o.a)(t,2),a=c[0],r=c[1],i=Object(n.useState)(a[0]),d=Object(o.a)(i,2),u=d[0],j=d[1],O=Object(n.useState)(!1),g=Object(o.a)(O,2),v=g[0],x=g[1],y=Object(n.useState)({currentTime:0,duration:0}),S=Object(o.a)(y,2),C=S[0],N=S[1],P=Object(n.useState)(!1),T=Object(o.a)(P,2),k=T[0],w=T[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(p,{library:k,setLibrary:w}),Object(l.jsx)(m,{currentSong:u}),Object(l.jsx)(h,{isPlaying:v,setIsPlaying:x,currentSong:u,audioRef:e,songInfo:C,setSongInfo:N,timeUpdateHandler:function(e){var t=e.target.currentTime,c=e.target.duration;N(Object(s.a)(Object(s.a)({},C),{},{currentTime:t,duration:c}))}}),Object(l.jsx)(b,{library:k,songs:a,setCurrentSong:j,audioRef:e,isPlaying:v,setSongs:r})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,25)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),v()}},[[22,1,2]]]);
//# sourceMappingURL=main.77d44b54.chunk.js.map