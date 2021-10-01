(this["webpackJsonpgreen-world"]=this["webpackJsonpgreen-world"]||[]).push([[0],{68:function(e,n,t){"use strict";t.r(n);var i,r,a,c,o,d,l=t(2),s=t.n(l),p=t(30),b=t.n(p),m=t(3),j=t(4),g=t(17),h=t(5),u="500px",f="720px",x="1020px",O="1440px",w="1920px",k={mobileS:"(min-width: ".concat("320px",")"),mobileM:"(min-width: ".concat(u,")"),tablet:"(min-width: ".concat(f,")"),laptop:"(min-width: ".concat(x,")"),laptopL:"(min-width: ".concat(O,")"),desktop:"(min-width: ".concat(w,")")},y=t(1),v=j.b.div(i||(i=Object(m.a)(["\n  place-self: center;\n  height: 25rem;\n  width: 100%;\n  position: relative;\n  display: flex;\n  justify-content: center;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n\n  }\n\n@media"," {\n  height: 35rem;\n} @media"," {\n  height: 40rem;\n  width: 90%;\n  max-width: 160rem;\n}\n"])),k.tablet,k.laptop),P=j.b.h3(r||(r=Object(m.a)(["\n  position: absolute;\n  top: 23%;\n  left: 2%;\n  font-size: 3rem;\n  text-transform: uppercase;\n  color: white;\n\n@media"," {\n  left: 30%;\n}\n"])),k.laptop),z=j.b.p(a||(a=Object(m.a)(["\n  position: absolute;\n  top: 40%;\n  left: 7%;\n  background-color: rgba(0, 0, 0, .9);\n  color: white;\n  padding: 1rem;\n  border-radius: 10rem;\n  text-transform: capitalize;\n  font-size: 1.5rem;\n\n@media"," {\n  left: 35%;\n}\n"])),k.laptop),C=j.b.p(c||(c=Object(m.a)(["\n  position: absolute;\n  bottom: 2%;\n  left: 2%;\n  font-size: 1.5rem;\n  color: white;\n\n@media"," {\n  bottom: 40%;\n  left: 45%;\n}\n"])),k.laptop),A=function(){return Object(y.jsxs)(v,{children:[Object(y.jsx)("img",{loading:"lazy",src:"https://ik.imagekit.io/kacper/green-world/main_9IC6k3TYy1.jpg?updatedAt=1629317073547",alt:"grocery store"}),Object(y.jsx)(P,{children:"Exclusive prices"}),Object(y.jsx)(z,{children:"Buy local products with code #EatBetter"}),Object(y.jsx)(C,{children:"From 1st August to 30th September"})]})},S=j.b.div(o||(o=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  min-height: 30rem;\n"]))),_=function(){return Object(y.jsx)(S,{children:Object(y.jsx)(A,{})})},T=t(36),D=t(20);!function(e){e.Add="ADD_PRODUCT",e.Subtract="SUBTRACT_PRODUCT",e.Delete="DELETE_PRODUCT",e.Increase="INCREASE_PRODUCT"}(d||(d={}));var B,E,I,F,R,M,U,J,X,L,$,G,Y,N,H,Q,q,V,Z,K,W,ee,ne,te,ie,re,ae,ce,oe,de,le,se,pe,be,me,je,ge,he,ue,fe=function(e,n){var t=Object(D.a)(e),i=t.findIndex((function(e){return e.id===n.payload.id}));switch(n.type){case d.Add:return i<0?t.push(n.payload):(t[i].amount=t[i].amount+1,t[i].finalPrice=t[i].finalPrice+t[i].price),t;case d.Subtract:return t[i].amount>1?(t[i].amount--,t):Object(D.a)(e.filter((function(e){return e.id!==n.payload.id})));case d.Delete:return Object(D.a)(e.filter((function(e){return e.id!==n.payload.id})));case d.Increase:return t[i].amount=t[i].amount+1,t[i].finalPrice=t[i].finalPrice+t[i].price,t;default:return e}},xe={products:[]},Oe=Object(l.createContext)({state:xe,dispatch:function(){return null}}),we=function(e,n){var t=e.products;return{products:fe(t,n)}},ke=function(e){var n=e.children,t=Object(l.useReducer)(we,xe),i=Object(T.a)(t,2),r=i[0],a=i[1];return Object(y.jsx)(Oe.Provider,{value:{state:r,dispatch:a},children:n})},ye=j.b.div(B||(B=Object(m.a)(['\n  width: 23rem;\n  height: 35rem;\n  margin: 2rem 1rem;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 60% 6rem 1fr 4rem  4rem;\n  grid-template-areas: \n  "img img img"\n  "name name name"\n  "line line line"\n  "price newPrice ."\n  "btn btn btn";\n  place-items: center;\n  transition: .2s all;\n  background-color: white;\n\n  img {\n    grid-area: img;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  h3 {\n    grid-area: name;\n    justify-self: start;\n    font-size: 1.6rem;\n    margin: 1.5rem 2rem 1rem;\n    white-space: nowrap;\n  }\n  \n  :active{\n    transform: scale(.95);\n  }\n']))),ve=j.b.div(E||(E=Object(m.a)(["\n  grid-area: line;\n  width: 95%;\n  height: .2rem;\n  border-bottom: 1px solid #C5C5C5;\n"]))),Pe=j.b.button(I||(I=Object(m.a)(["\n  grid-area: btn;\n  width: 100%;\n  height: 4rem;\n  background-color: var(--color-primary);\n  margin-top: auto;\n  border: none;\n  color: white;\n  font-weight: bold;\n"]))),ze=j.b.p(F||(F=Object(m.a)(["\n  place-self: start;\n  font-size: 1.5rem;\n  margin: 1rem 2rem;\n\n  span {\n    font-weight: bold;\n  }\n"]))),Ce=Object(j.b)(ze)(R||(R=Object(m.a)(["\n  grid-area: price;\n  justify-self: start;\n  text-decoration: ",";\n"])),(function(e){return e.discount&&"line-through"})),Ae=Object(j.b)(ze)(M||(M=Object(m.a)(["\n  grid-area: newPrice;\n  justify-self: start;\n  color: ",";\n"])),(function(e){return e.discount&&"green"})),Se=function(e){var n=Object(l.useContext)(Oe).dispatch;return Object(y.jsxs)(ye,{children:[Object(y.jsx)("img",{loading:"lazy",src:e.img,alt:e.alt}),Object(y.jsx)("h3",{children:e.name}),Object(y.jsx)(ve,{}),Object(y.jsxs)(Ce,{discount:e.newPrice,children:[Object(y.jsxs)("span",{children:[e.price,"$"]}),"/",e.per]}),e.newPrice&&Object(y.jsxs)(Ae,{discount:e.newPrice,children:[Object(y.jsxs)("span",{children:[e.newPrice,"$"]}),"/",e.per]}),Object(y.jsx)(Pe,{onClick:function(){var t;t=e.newPrice?e.newPrice:e.price,n({type:d.Add,payload:{id:e.id,name:e.name,amount:1,price:t,newPrice:e.newPrice,img:e.img,alt:e.alt,per:e.per,finalPrice:t}})},children:"Add to cart"})]},e.id)},_e=[{id:0,name:"Tomatoes",price:3,per:"kg",img:"https://ik.imagekit.io/kacper/green-world/tomatoes_4t2p_FNe5.jpg?updatedAt=1628805672740",alt:"tomatoes"},{id:1,name:"Giant Tomatoes",price:5,per:"kg",img:"https://ik.imagekit.io/kacper/green-world/giantTomatoes_Ms4eYLXhu.jpg?updatedAt=1628805613687",alt:"tomatoes",newPrice:3},{id:2,name:"Raspberry Tomatoes",price:4,per:"kg",img:"https://ik.imagekit.io/kacper/green-world/raspberryTomatoes_1qJwd5HSz.jpg?updatedAt=1628805613724",alt:"tomatoes",newPrice:2},{id:3,name:"Dark Sweet Grapes",price:5,per:"kg",img:"https://ik.imagekit.io/kacper/green-world/darkSweetGrapes_Y7lOoFetxI.jpg?updatedAt=1628794762905",alt:"grapes",newPrice:4},{id:3,name:"Potato",price:1,per:"kg",img:"https://ik.imagekit.io/kacper/green-world/potato_nOvZRsPU1cR.jpg?updatedAt=1628802628089",alt:"potatoes in hands"},{id:4,name:"Onion",price:1,per:"kg",img:"https://ik.imagekit.io/kacper/green-world/onions_FdXeItT5ukI.jpg?updatedAt=1628802627750",alt:"onions on table"},{id:5,name:"Blackberries",price:7,per:"kg",img:"https://ik.imagekit.io/kacper/green-world/blackberries_S4I_5BAzcq.jpg?updatedAt=1628802627237",alt:"Blackberry on hands",newPrice:4},{id:6,name:"Strawberries",price:5,per:"kg",img:"https://ik.imagekit.io/kacper/green-world/strawberry_5iHA1XfrD.jpg?updatedAt=1628802627323",alt:"Strawberries on hands",newPrice:4},{id:7,name:"Cherries",price:7,per:"kg",img:"https://ik.imagekit.io/kacper/green-world/cherry_h9ONJsBL0Y.jpg?updatedAt=1628802627309",alt:"Cherries on hands"},{id:8,name:"Cucumber",price:1,per:"1",img:"https://ik.imagekit.io/kacper/green-world/cucumber_hlbfiXfPms.jpg?updatedAt=1628802627969",alt:"cucumbers in in the basket"},{id:9,name:"Radishes",price:2,per:"bunch",img:"https://ik.imagekit.io/kacper/green-world/radish_Nzu-Bafxm.jpg?updatedAt=1628802627246",alt:"radish on black background",newPrice:1},{id:10,name:"Peas",price:5,per:"kg",img:"https://ik.imagekit.io/kacper/green-world/peas_1YSOO64Xzx.jpg?updatedAt=1628803781319",alt:"Peas on hands"},{id:11,name:"Spinach",price:4,per:"kg",img:"https://ik.imagekit.io/kacper/green-world/spinach_IcX6ggrjIt.jpg?updatedAt=1628803781185",alt:"a bunch of spinach"},{id:12,name:"Avocado",price:3,per:"1",img:"https://ik.imagekit.io/kacper/green-world/avocado_QuOsInSJc_F.jpg?updatedAt=1628803780799",alt:"Avocados in the plate"},{id:13,name:"Cabbage",price:3,per:"kg",img:"https://ik.imagekit.io/kacper/green-world/cabbage_v-MaRyTXDS.jpg?updatedAt=1628803780629",alt:"Cabbage on the desk"},{id:14,name:"Cauliflower",price:4,per:"kg",img:"https://ik.imagekit.io/kacper/green-world/cauliflower_5wCv-MQ8O.jpg?updatedAt=1628803780745",alt:"Cauliflower on the desk",newPrice:3},{id:15,name:"Beetroot",price:3,per:"kg",img:"https://ik.imagekit.io/kacper/green-world/beetroot_vUmyACaJAJ.jpg?updatedAt=1628803780848",alt:"Beetroots on the desk"},{id:16,name:"Lettuce",price:3,per:"kg",img:"https://ik.imagekit.io/kacper/green-world/lettuce_-b8bbE0gJ.jpg?updatedAt=1628803780500",alt:"Lettuce on dark background",newPrice:2}],Te=j.b.div(U||(U=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 3rem;\n  row-gap: 3rem;\n\n  h2 {\n    color: black;\n    font-size: 4rem;\n  }\n"]))),De=t(28),Be=(t(46),t(47),t(34)),Ee=t.n(Be),Ie=j.b.div(J||(J=Object(m.a)(["\n  width: 90%;\n  height: 100%;\n  max-width: 130rem;\n"]))),Fe=Object(j.b)(Ee.a)(X||(X=Object(m.a)(["\n  .slick-slide {\n    display: grid;\n    place-items: center;\n    margin: auto;\n    overflow: hidden;\n  }\n\n  .slick-track {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .slick-prev {\n    left: -5px;\n    z-index: 1000;\n\n  }\n\n  .slick-next {\n    right: -5px;\n    z-index: 1000;\n  }\n\n  .slick-prev:before,\n  .slick-next:before {\n    color: black;\n    font-size: 2.5rem;\n  }\n"]))),Re=function(e){var n=e.children,t=e.autoplay,i={speed:3e3,slidesToShow:4,slidesToScroll:e.slidesToScroll,initialSlide:0,autoplay:t,infinite:!0,autoplaySpeed:3e3,dots:!0,responsive:[{breakpoint:1440,settings:{slidesToShow:3}},{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:720,settings:{slidesToShow:1,slidesToScroll:1,dots:!1,autoplay:!1,speed:500}}]};return Object(y.jsx)(Ie,{children:Object(y.jsx)(Fe,Object(De.a)(Object(De.a)({},i),{},{children:n}))})},Me=Object(j.b)(Te)(L||(L=Object(m.a)(["\n  h2 {\n    color: black;\n    font-size: 4rem;\n  }\n"]))),Ue=function(){return Object(y.jsxs)(Me,{children:[Object(y.jsx)("h2",{children:"Best Buys"}),Object(y.jsx)(Re,{autoplay:!0,slidesToScroll:1,children:_e.map((function(e){return e.newPrice?null:Object(y.jsx)(Se,{id:e.id,name:e.name,alt:e.alt,img:e.img,price:e.price,per:e.per,newPrice:e.newPrice},e.id)}))})]})},Je=Object(j.b)(Te)($||($=Object(m.a)(["\n  margin: 2rem 0;\n\n  h2 {\n    color: black;\n    font-size: 4rem;\n  }\n"]))),Xe=function(){return Object(y.jsxs)(Je,{children:[Object(y.jsx)("h2",{children:"Discounts"}),Object(y.jsx)(Re,{autoplay:!1,slidesToScroll:2,children:_e.map((function(e){return e.newPrice?Object(y.jsx)(Se,{id:e.id,name:e.name,alt:e.alt,img:e.img,price:e.price,per:e.per,newPrice:e.newPrice},e.id):null}))})]})},Le=j.b.button(G||(G=Object(m.a)(["\n  width: 100%;\n  height: 4rem;\n  border: none;\n  color: white;\n  font-weight: bold;\n  font-size: ",";\n  background-color: ",";\n"])),(function(e){return e.size?e.size:"inherit"}),(function(e){return e.backgroundColor?e.backgroundColor:"var(--color-primary)"})),$e=function(e){return Object(y.jsx)(Le,{size:e.size,onClick:e.onClick,backgroundColor:e.backgroundColor,children:e.children})},Ge=Object(j.b)(Te)(Y||(Y=Object(m.a)(["\n  width: 100%;\n  height: 18rem;\n  flex-direction: row;\n  margin-bottom: 5rem;\n  align-self: center;\n  max-width: 100rem;\n@media"," {\n  width: 80%;\n}\n"])),k.mobileM),Ye=j.b.p(N||(N=Object(m.a)(["\n  width: 45%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  line-height: 1.5;\n  background-color: var(--color-primary);\n  color: white;\n  font-size: 1.5rem;\n\n@media"," {\n  width: 30%;\n  font-size: 2rem;\n}\n"])),k.mobileM),Ne=j.b.div(H||(H=Object(m.a)(["\n  width: 55%;\n  height: 100%;\n  position: relative;\n  display: flex;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  button {\n    position: absolute;\n    bottom: 10%;\n    right: 5%;\n    width: 40%;\n    height: 3rem;\n    max-width: 20rem;\n  }\n\n@media"," {\n  width: 70%;\n}\n"])),k.mobileM),He=function(){return Object(y.jsxs)(Ge,{children:[Object(y.jsx)(Ye,{children:"Vegetables and Fruits from proven farmers"}),Object(y.jsxs)(Ne,{children:[Object(y.jsx)("img",{src:"https://ik.imagekit.io/kacper/green-world/fruitsAndVegetables_gDaEXxPQ5.jpg?updatedAt=1629317073540",alt:"Fruits and vegetables on table",loading:"lazy"}),Object(y.jsx)($e,{backgroundColor:"#A62940",children:"See All"})]})]})},Qe=j.b.div(Q||(Q=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),qe=function(){return Object(y.jsxs)(Qe,{children:[Object(y.jsx)(_,{}),Object(y.jsx)(Ue,{}),Object(y.jsx)(Xe,{}),Object(y.jsx)(He,{})]})},Ve=t(11),Ze=j.b.footer(q||(q=Object(m.a)(["\n  width: 100%;\n  height: 10rem;\n  display: flex;\n  flex-flow: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: space-evenly;\n  background-color: #574659;\n  margin-top: auto;\n"]))),Ke=j.b.div(V||(V=Object(m.a)(["\n  display: flex;\n  flex-direction: row;\n\n  p {\n    margin: 0 .5rem;\n    font-size: 1.5rem;\n    color: white;\n    white-space: nowrap;\n  }\n"]))),We=j.b.div(Z||(Z=Object(m.a)(["\n  width: 95%;\n  height: .2rem;\n  border-bottom: 1px solid #C5C5C5;\n"]))),en=j.b.div(K||(K=Object(m.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n\n  svg {\n    font-size: 3rem;\n    margin: 0 1rem;\n    color: white;\n  }\n"]))),nn=function(){return Object(y.jsxs)(Ze,{children:[Object(y.jsxs)(Ke,{children:[Object(y.jsx)("p",{children:"About Us"}),Object(y.jsx)("p",{children:"Blog"}),Object(y.jsx)("p",{children:"Contact"}),Object(y.jsx)("p",{children:"Help"})]}),Object(y.jsx)(We,{}),Object(y.jsxs)(en,{children:[Object(y.jsx)("p",{children:Object(y.jsx)(Ve.b,{})}),Object(y.jsx)("p",{children:Object(y.jsx)(Ve.c,{})}),Object(y.jsx)("p",{children:Object(y.jsx)(Ve.d,{})})]})]})},tn=j.b.div(W||(W=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  margin: 2rem 0;\n  background-color: #e2e2e2;\n  \n  h2 {\n    margin-bottom: 2rem;\n    text-align: center;\n    font-size: 2.5rem;\n    width: 100%;\n    padding: 2rem;\n    background-color: #d5d5d5;\n  }\n\n@media"," {\n  flex-flow: row wrap;\n}\n@media"," {\n  width: 80%;\n  align-self: center;\n}\n"])),k.tablet,k.laptop),rn=function(){return Object(y.jsxs)(tn,{children:[Object(y.jsx)("h2",{children:"Market"}),_e.map((function(e){return Object(y.jsx)(Se,{id:e.id,name:e.name,img:e.img,alt:e.alt,price:e.price,per:e.per,newPrice:e.newPrice},e.id)}))]})},an=t(35),cn=j.b.form(ee||(ee=Object(m.a)(["\n  width: 15rem;\n  height: 3rem;\n  display: flex;\n  flex-direction: row;\n  cursor: pointer;\n  margin-left: auto;\n\n@media"," {\nwidth: 25rem;\n}\n"])),k.tablet),on=j.b.input(ne||(ne=Object(m.a)(["\n  width: 100%;\n  padding: 1rem 3.5rem 1rem 1.5rem;\n  border: none;\n  border-radius: 10rem;\n  outline: none;\n"]))),dn=j.b.button(te||(te=Object(m.a)(["\n  background: transparent;\n  border: none;\n  outline: none;\n  margin-left: -3.3rem;\n"]))),ln=function(){return Object(y.jsxs)(cn,{children:[Object(y.jsx)(on,{type:"text"}),Object(y.jsx)(dn,{children:Object(y.jsx)(an.a,{})})]})},sn=j.b.div(ie||(ie=Object(m.a)(['\n  width: 80%;\n  max-width: 40rem;\n  display: grid;\n  margin: 2.5rem 0;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 5rem 5rem 3rem 1rem;\n  grid-template-areas: \n  "img name name"\n  "img price newPrice"\n  "val  remove total"\n  "line line line";\n  place-items: center;\n\n@media',' {\n  max-width: 70rem;\n  grid-template-columns: repeat(7, 1fr);\n  grid-template-rows: 6rem 1rem;\n  grid-template-areas: \n          "img name price newPrice val remove total"\n          "line line line line line line line";\n  grid-column-gap: 1rem;\n  margin: 1.5rem 0;\n}\n'])),k.tablet),pn=j.b.img(re||(re=Object(m.a)(["\n  grid-area: img;\n  width: 100%;\n  height: 80%;\n  overflow: hidden;\n  place-self: start;\n\n@media"," {\n  place-self: center;\n  height: 100%;\n}\n"])),k.tablet),bn=j.b.p(ae||(ae=Object(m.a)(["\n  font-weight: bold;\n  font-size: 1.4rem;\n  white-space: nowrap;\n  letter-spacing: 1.2px;\n  text-decoration: ",";\n\n  :first-of-type {\n    grid-area: name;\n  }\n\n  :nth-of-type(2) {\n    grid-area: price;\n    align-self: start;\n    justify-self: end;\n  }\n\n  :nth-of-type(3) {\n    grid-area: newPrice;\n    align-self: start;\n  }\n\n  :nth-of-type(4) {\n    grid-area: total;\n    justify-self: end;\n  }\n\n@media"," {\n  :first-of-type {\n    white-space: normal;\n  }\n\n  :nth-of-type(2) {\n    align-self: center;\n    justify-self: center;\n  }\n\n  :nth-of-type(3) {\n    align-self: center;\n  }\n}\n"])),(function(e){return e.discount&&"line-through"}),k.tablet),mn=j.b.div(ce||(ce=Object(m.a)(["\n  grid-area: val;\n  display: flex;\n  align-items: center;\n\n  button {\n    margin: 0 .5rem;\n    width: 3rem;\n    height: 3rem;\n    border-radius: 20%;\n    outline: none;\n    border: 2px solid green;\n    text-align: center;\n    font-size: 2.2rem;\n    background-color: transparent;\n  }\n"]))),jn=j.b.button(oe||(oe=Object(m.a)(["\n  grid-area: remove;\n  background-color: transparent;\n  outline: none;\n  border: none;\n  font-size: 2.5rem;\n"]))),gn=j.b.div(de||(de=Object(m.a)(["\n  grid-area: line;\n  width: 100%;\n  height: .2rem;\n  margin-top: .7rem;\n  border-bottom: .1rem solid black;\n"]))),hn=function(e){var n=Object(l.useContext)(Oe).dispatch;return Object(y.jsxs)(sn,{children:[Object(y.jsx)(pn,{src:e.img,alt:e.alt,loading:"lazy"}),Object(y.jsx)(bn,{children:e.name}),Object(y.jsxs)(bn,{discount:e.newPrice,children:[e.price,"$/",e.per]}),Object(y.jsx)(bn,{children:e.newPrice&&"".concat(e.newPrice,"$/").concat(e.per)}),Object(y.jsxs)(mn,{children:[Object(y.jsx)("button",{onClick:function(){return n({type:d.Increase,payload:{id:e.id}})},children:"+"}),Object(y.jsx)(bn,{children:e.amount}),Object(y.jsx)("button",{onClick:function(){return n({type:d.Subtract,payload:{id:e.id}})},children:"-"})]}),Object(y.jsxs)(bn,{children:["Total: ",e.finalPrice," $"]}),Object(y.jsx)(jn,{onClick:function(){return n({type:d.Delete,payload:{id:e.id}})},children:Object(y.jsx)(Ve.a,{})}),Object(y.jsx)(gn,{})]},e.id)},un=j.b.div(le||(le=Object(m.a)(["\n  width: 100%;\n  max-width: 60rem;\n  padding: 2rem 0 0;\n  display: flex;\n  flex-flow: row wrap;\n  background-color: var(--color-background);\n\n  p {\n    flex: 1 40%;\n    margin: 1rem;\n    font-size: 1.5rem;\n\n    :nth-of-type(2), :nth-of-type(4) {\n      text-align: end;\n    }\n  }\n\n@media"," {\n    margin: 2rem 0;\n    max-width: 50rem;\n}\n"])),k.tablet),fn=function(e){return Object(y.jsxs)(un,{children:[Object(y.jsx)("p",{children:"Total Products:"}),Object(y.jsx)("p",{children:e.totalProducts}),Object(y.jsx)("p",{children:"Total Price: "}),Object(y.jsxs)("p",{children:[e.totalPrice,"$"]}),Object(y.jsx)($e,{size:"1.5rem",children:"Pay"})]})},xn=j.b.div(se||(se=Object(m.a)(["\n  min-height: 90vh;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  h2 {\n    font-size: 2rem;\n    padding: 1rem;\n  }\n"]))),On=function(){var e=Object(l.useContext)(Oe).state;return Object(y.jsxs)(xn,{children:[Object(y.jsx)("h2",{children:"Shopping Cart"}),e.products.map((function(e){return Object(y.jsx)(hn,{finalPrice:e.finalPrice,id:e.id,name:e.name,alt:e.alt,img:e.img,price:e.price,per:e.per,newPrice:e.newPrice,amount:e.amount},e.id)})),Object(y.jsx)(fn,{totalPrice:0,totalProducts:0})]})},wn=t(19),kn=j.b.div(pe||(pe=Object(m.a)(["\n  height: 15rem;\n  width: 90%;\n  margin-top: 5rem;\n  place-self: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  column-gap: 2rem;\n"]))),yn=j.b.div(be||(be=Object(m.a)(["\n  height: 10rem;\n  width: 8rem;\n  background-color: #574659;\n  border: 2px solid white;\n  border-radius: 1rem;\n\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  :first-of-type {\n    background-image: \n            url('https://ik.imagekit.io/kacper/green-world/vegetables_OFGFc3M14y.jpg?updatedAt=1629317073574');\n  }\n\n  :nth-of-type(2) {\n    background-image: \n            url('https://ik.imagekit.io/kacper/green-world/fruits_8PGEyUses.jpg?updatedAt=1629317072982');\n  }\n\n  :nth-of-type(3) {\n    background-image:\n            url('https://ik.imagekit.io/kacper/green-world/sale_DBv3o_ygr.jpg?updatedAt=1629317073220');\n  }\n"]))),vn=function(){var e=Object(h.f)();return Object(y.jsxs)(kn,{children:[Object(y.jsx)(yn,{onClick:function(){return e.push("/market")}}),Object(y.jsx)(yn,{onClick:function(){return e.push("/market")}}),Object(y.jsx)(yn,{onClick:function(){return e.push("/market")}})]})},Pn=j.b.div(me||(me=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),zn=j.b.div(je||(je=Object(m.a)(["\n  position: fixed;\n  width: 100%;\n  height: 5rem;\n  display: flex;\n  z-index: 10000;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--color-primary);\n"]))),Cn=j.b.span(ge||(ge=Object(m.a)(["\n  font-size: 2.7rem;\n  margin-left: auto;\n\n  svg {\n    margin-right: 2rem;\n    cursor: pointer;\n  }\n"]))),An=function(){var e=Object(h.f)();return Object(y.jsxs)(Pn,{children:[Object(y.jsxs)(zn,{children:[Object(y.jsx)(ln,{}),Object(y.jsxs)(Cn,{children:[Object(y.jsx)(wn.b,{onClick:function(){return e.push("/")}}),Object(y.jsx)(wn.a,{onClick:function(){return e.push("/cart")}}),Object(y.jsx)(wn.c,{})]})]}),Object(y.jsx)(vn,{})]})},Sn=Object(j.a)(he||(he=Object(m.a)(["\n  *,\n  *::after,\n  *::before {\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n  }\n\n  html {\n    box-sizing: border-box;\n    font-size: 62.5%;\n    width: 100%;\n    height: 100%;\n    background: var(--color-background);\n\n  @media"," {\n    font-size: 71.25%;\n  } @media"," {\n    font-size: 81.25%;\n  } @media"," {\n    font-size: 81.25%;\n  }\n  }\n\n  :root {\n    --color-text: black;\n    --color-background: #EFEFEF;\n    --color-primary: #87A668;\n    --color-secondary: #5E7348;\n  }\n"])),k.tablet,k.laptop,k.desktop),_n=j.b.div(ue||(ue=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n"])));var Tn=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(Sn,{}),Object(y.jsx)(_n,{children:Object(y.jsxs)(ke,{children:[Object(y.jsxs)(g.a,{children:[Object(y.jsx)(An,{}),Object(y.jsxs)(h.c,{children:[Object(y.jsx)(h.a,{path:"/cart",children:Object(y.jsx)(On,{})}),Object(y.jsx)(h.a,{path:"/market",children:Object(y.jsx)(rn,{})}),Object(y.jsx)(h.a,{path:"/",children:Object(y.jsx)(qe,{})})]})]}),Object(y.jsx)(nn,{})]})})]})};b.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(Tn,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.105334e7.chunk.js.map