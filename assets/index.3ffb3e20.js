import{S as n,P as o,W as e,T as t,M as a,a as i,b as s,A as d,c as r,B as c,d as w,e as l,f as p}from"./vendor.37082f73.js";const m=new n,g=new o(75,window.innerWidth/window.innerHeight,.1,1e3),y=new e({canvas:document.querySelector("#bg"),antialias:!0});y.setPixelRatio(window.devicePixelRatio),y.setSize(window.innerWidth,window.innerHeight),g.position.setZ(30),g.position.setX(-3),y.render(m,g);const u=new t(10,3,16,100),f=new a({color:16737095}),h=new i(u,f);m.add(h);const j=new s(16777215);j.position.set(5,5,5);const z=new d(16777215);m.add(j,z),Array(200).fill().forEach((function(){const n=new l(.25,24,24),o=new a({color:16777215}),e=new i(n,o),[t,s,d]=Array(3).fill().map((()=>p.randFloatSpread(100)));e.position.set(t,s,d),m.add(e)}));const b=(new r).load("assets/space.ca17ac07.jpg");m.background=b;const x=(new r).load("assets/raj.ac1618c3.jpg"),v=new i(new c(3,3,3),new w({map:x}));m.add(v);const A=(new r).load("assets/moon.b246064f.jpg"),B=(new r).load("assets/normal.8e277ece.jpg"),E=new i(new l(3,32,32),new a({map:A,normalMap:B}));window.onclick=function(n){console.log("playing");document.getElementById("raj").play()};const S=document.getElementById("raj"),P=document.createElement("canvas");function R(){const n=document.body.getBoundingClientRect().top;v.rotation.y=.001*n,v.rotation.z=.001*n,g.position.z=-.01*n,g.position.x=-2e-4*n,g.rotation.y=-2e-4*n}S.load(),S.play(),P.width=480,P.height=204,m.add(E),E.position.z=30,E.position.setX(-10),v.position.z=-5,v.position.x=3,v.position.y=.7,v.rotateY(-.28),document.body.onscroll=R,R(),function n(){requestAnimationFrame(n),h.rotation.x+=.01,h.rotation.y+=.005,h.rotation.z+=.01,E.rotation.y+=.005,y.render(m,g)}();
