(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{100:function(e,t,n){e.exports=n.p+"static/media/rock.864b5a2a.png"},101:function(e,t,n){e.exports=n.p+"static/media/paper.cffb3100.png"},102:function(e,t,n){e.exports=n.p+"static/media/scissors.48d238a6.png"},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var a=n(39),r=n.n(a),o=n(66),c=n(1),i=n.n(c),s=n(2),u=n(22),l=n(5),f=n(47),m=n(88),p=n(100),g=n(101),b=n(102),d=["#2ecc71","#9b59b6","#2c3e50"],E=function(){var e=[p,g,b],t=Math.floor(3*Math.random());return console.log(t),e[t]};E();var h=s.a.create({container:{alignItems:"center",justifyContent:"center",flex:1},counter:{fontSize:200,color:"white"},sign:{width:220,height:220},button:{position:"absolute",bottom:30}}),v=function(){var e=Object(c.useState)(3),t=r()(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){if(console.log(n),!(n<1)){var e=setTimeout((function(){a((function(e){return e-1}))}),500);return function(){clearTimeout(e)}}}),[n]),i.a.createElement(l.a,{style:s.a.compose({backgroundColor:d[n-1]},h.container)},n<1?i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,{style:h.sign,source:E()}),i.a.createElement(l.a,{style:h.button},i.a.createElement(f.a,{onPress:function(){return a(3)},title:"Playagain"}))):i.a.createElement(u.a,{style:h.counter},n))};function y(){var e=Object(c.useState)(!1),t=r()(e,2),n=t[0],a=t[1];return n?i.a.createElement(v,null):i.a.createElement(l.a,{style:k.container},i.a.createElement(u.a,{style:k.header},"Rock Paper Scissors"),i.a.createElement(u.a,{style:{fontSize:80}},"\u270a \u270b \u270c\ufe0f"),i.a.createElement(l.a,{style:k.button},i.a.createElement(f.a,{title:"Play",onPress:function(){return a(!0)}})),i.a.createElement(o.StatusBar,{style:"auto"}))}var k=s.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},header:{fontSize:60,marginBottom:10},button:{fontSize:60,marginTop:20,width:400}})},92:function(e,t,n){n(93),e.exports=n(129)},93:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[92,1,2]]]);
//# sourceMappingURL=app.675d98c8.chunk.js.map