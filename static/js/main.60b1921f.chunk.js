(this["webpackJsonpbreaking-bad"]=this["webpackJsonpbreaking-bad"]||[]).push([[0],{15:function(n,e,t){},21:function(n,e,t){"use strict";t.r(e);var r,a,i,o=t(0),c=t.n(o),s=t(6),d=t.n(s),f=(t(15),t(5)),l=t.n(f),u=t(7),b=t(9),p=t(2),m=t(3),g=t(1),h=m.a.div(r||(r=Object(p.a)(["\n    padding: 3rem;\n    border-radius: .5rem;\n    background-color: #fff;\n    position: absolute;\n    max-width:800px;\n    bottom:0.5rem;\n    \n    @media (min-width: 992px) {\n        margin-top: 10rem;\n    }\n    h1 {\n        font-family: Arial, Helvetica, sans-serif;\n        text-align: center;\n        font-size: 1.4rem;\n        position: relative;\n        padding-left: 4rem;\n        &::before {\n            content: open-quote;\n            font-size: 7rem;\n            color: black;\n            position: absolute;\n            left: -1rem;\n            top: -2rem;\n        }\n    }\n    p {\n        font-family: Verdana, Geneva, Tahoma, sans-serif;\n        font-size: 1rem;\n        font-weight:bold;\n        text-align: right;\n        color: #666;\n        margin-top: 2rem;\n    }\n"]))),j=function(n){var e=n.frase;return 0===Object.keys(e).length?null:Object(g.jsxs)(h,{children:[Object(g.jsx)("h1",{children:e.quote}),Object(g.jsx)("p",{children:e.author})]})},x=m.a.div(a||(a=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  padding-top: 5rem;\n  flex-direction: column;\n"]))),O=m.a.button(i||(i=Object(p.a)(["\n  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);\n  background-size: 300px;\n  font-family:  Arial, Helvetica, sans-serif;\n  color: #fff;\n  margin-top: 1rem;\n  padding: 0.5rem 1.5rem;\n  font-size: 1.4rem;\n  z-index:1000;\n  border: 2px solid black;\n  transition: background-size .8s ease;\n  :hover {\n    cursor:pointer;\n    background-size: 400px;\n  }\n"])));var k=function(){var n=Object(o.useState)({}),e=Object(b.a)(n,2),t=e[0],r=e[1],a=function(){var n=Object(u.a)(l.a.mark((function n(){var e,t;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,r(t[0]);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(o.useEffect)((function(){a()}),[]),Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)(x,{children:[Object(g.jsx)(j,{frase:t}),Object(g.jsx)(O,{onClick:a,children:"Obtener Frase"})]})})},v=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,22)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,i=e.getLCP,o=e.getTTFB;t(n),r(n),a(n),i(n),o(n)}))};d.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(k,{})}),document.getElementById("root")),v()}},[[21,1,2]]]);
//# sourceMappingURL=main.60b1921f.chunk.js.map