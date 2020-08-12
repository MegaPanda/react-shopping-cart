(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{19:function(e,t,a){e.exports=a(41)},24:function(e,t,a){},30:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),o=a.n(l),i=(a(24),a(1)),c=a(3),s=a(2),m={items:[],total_quantity:0,total_price:0};var u=[{index:0,photo:"gsd.jpg",title:"German Shepherd",price:19.99,sizes:{S:0,M:5,L:3}},{index:4,photo:"husky.jpg",title:"Husky",price:14.99,sizes:{S:2,M:5,L:3}},{index:2,photo:"golden.jpg",title:"Golden Retriever",price:19.99,sizes:{S:2,M:0,L:3}},{index:3,photo:"border.jpg",title:"Border Collie",price:9.99,sizes:{S:2,M:5,L:3}},{index:1,photo:"pug.jpg",title:"Pug",price:6.99,sizes:{S:2,M:5,L:0}}],p={PRICE:"PRICE_ALL",SIZE:"SIZE_ALL",SORT:"NEW"};var d=Object(c.b)({CartItemReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,a=Object(s.a)(e.items),n=a.findIndex((function(e){return e.title===t.title})),r=!1;switch(t.type){case"ADD_ITEM":return-1!==n?(a[n].sizes.forEach((function(e){e.size===t.size&&(e.quantity++,r=!0)})),r||a[n].sizes.push({size:t.size,quantity:1}),r=!1,{items:Object(s.a)(a),total_quantity:e.total_quantity+1,total_price:Number((e.total_price+t.price).toFixed(2))}):{items:[].concat(Object(s.a)(e.items),[{title:t.title,photo:t.photo,price:t.price,sizes:[{size:t.size,quantity:1}]}]),total_quantity:e.total_quantity+1,total_price:Number((e.total_price+t.price).toFixed(2))};case"REMOVE_ITEM":var l=a[n].sizes.reduce((function(e,t){return e+t.quantity}),0);return{items:a.filter((function(e){return e.title!==t.title})),total_quantity:e.total_quantity-l,total_price:Number((e.total_price-t.price*l).toFixed(2))};default:return e}},DisplayProductsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:u,filters:p},t=arguments.length>1?arguments[1]:void 0;switch(t.category){case"PRICE":p.PRICE=t.type;break;case"SIZE":p.SIZE=t.type;break;case"SORT":p.SORT=t.type}var a=u;function n(e){switch(e){case"PRICE_ALL":break;case"UNDER_10":a=a.filter((function(e){return e.price<10}));break;case"SIZE_ALL":break;case"S":a=a.filter((function(e){return e.sizes.S>0}));break;case"M":a=a.filter((function(e){return e.sizes.M>0}));break;case"L":a=a.filter((function(e){return e.sizes.L>0}));break;case"NEW":a=Object(s.a)(a).sort((function(e,t){return e.index-t.index}));break;case"LOW_TO_HIGH":a=Object(s.a)(a).sort((function(e,t){return e.price-t.price}));break;case"HIGH_TO_LOW":a=Object(s.a)(a).sort((function(e,t){return t.price-e.price}))}}return Object.values(p).forEach((function(e){return n(e)})),{products:a,filters:e.filters}}}),b=Object(c.c)(d);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(30);var E=a(13),f=a(12),g=a.n(f);g.a.setAppElement("#root");var h=function(){var e=Object(i.c)((function(e){return e.DisplayProductsReducer.products})),t=Object(i.b)(),a=Object(n.useState)(null),l=Object(E.a)(a,2),o=l[0],c=l[1],s=Object(n.useState)(null),m=Object(E.a)(s,2),u=m[0],p=m[1];return r.a.createElement("div",{id:"items",className:"grid grid-cols-2 p-4 gap-4 sm:grid-cols-3 lg:grid-cols-4 max-w-screen-xl m-auto"},e.map((function(e,t){return r.a.createElement("button",{key:t,className:"m-auto cursor-pointer",onClick:function(){return c(e)}},r.a.createElement("div",{className:"py-4"},r.a.createElement("img",{src:e.photo,alt:e.title}),r.a.createElement("div",null,r.a.createElement("h3",{className:"my-3 h-8 leading-none text-gray-900 font-bold"},e.title),r.a.createElement("h3",{className:"text-orange-800 font-bold"},"$",e.price))))})),o&&r.a.createElement(g.a,{isOpen:!0,className:"w-4/5 mx-auto mt-20 bg-indigo-100 pb-10 border border-gray-500 overflow-auto",style:{content:{maxHeight:"80vh"}},onRequestClose:function(){c(null),p(null)}},r.a.createElement("div",{className:"text-right"},r.a.createElement("button",{className:"text-2xl text-gray-600 mr-2",onClick:function(){return c(null)}},"\xd7")),r.a.createElement("div",{className:"w-2/3 md:w-11/12 m-auto grid md:grid-cols-2 md:gap-8"},r.a.createElement("img",{className:"",src:o.photo,alt:o.title}),r.a.createElement("div",{className:"pt-8 text-left"},r.a.createElement("h1",{className:"text-xl text-gray-900 font-bold"},o.title),r.a.createElement("h1",{className:"text-2xl text-orange-800 font-bold my-6"},"$",o.price),r.a.createElement("div",{className:"md:pt-4"},r.a.createElement("h4",{className:"font-bold mb-2"},"SIZE:"),r.a.createElement("select",{className:"w-full border border-black rounded-sm p-1",onChange:function(e){return p(e.target.value)}},r.a.createElement("option",null,"Please select"),Object.entries(o.sizes).map((function(e,t){return 0===e[1]?r.a.createElement("option",{disabled:!0,key:t,value:e[0]},e[0]," - Out of stock"):r.a.createElement("option",{key:t,value:e[0]},e[0])}))),null===u?r.a.createElement("button",{className:"mt-4 w-full text-white font-bold bg-green-600 rounded-sm p-1 cursor-not-allowed"},"ADD TO BASKET"):r.a.createElement("button",{className:"mt-4 w-full text-white font-bold bg-green-600 hover:bg-green-700 rounded-sm p-1",onClick:function(){var e,a;t((a=u,{type:"ADD_ITEM",title:null===(e=o)||void 0===e?void 0:e.title,photo:null===e||void 0===e?void 0:e.photo,price:null===e||void 0===e?void 0:e.price,size:a})),c(null),p(null)}},"ADD TO BASKET ")))),r.a.createElement("div",{className:"modal_description"})))},x={position:"relative",width:"16px",top:"16px",right:"-18px"},v={position:"relative",right:"8px"},y={top:"61px",right:"0",width:"350px",maxHeight:"70vh",borderTop:"none"},N={width:"0",height:"0",borderLeft:"14px solid transparent",borderRight:"14px solid transparent",borderBottom:"12px solid #cbd5e0",top:"49px",right:"12px"},w=function(){var e=Object(i.c)((function(e){return e.CartItemReducer.items})),t=Object(i.c)((function(e){return e.CartItemReducer.total_quantity})),a=Object(i.c)((function(e){return e.CartItemReducer.total_price})),n=Object(i.b)();return r.a.createElement("div",{className:"self-end group pl-2 pb-5 sm:pb-4"},r.a.createElement("button",{className:"flex"},r.a.createElement("span",{style:x,className:"inline-block bg-gray-300 text-blue-900 text-sm font-bold leading-none z-10"},t),r.a.createElement("span",{style:v,className:"inline-block material-icons text-4xl z-0"},"shopping_basket")),0===t?null:r.a.createElement("div",{className:"hidden sm:group-hover:block"},r.a.createElement("div",{className:"absolute",style:N}),r.a.createElement("div",{className:"absolute border border-gray-500 bg-gray-300 text-gray-800 text-base overflow-auto",style:y},r.a.createElement("h4",{className:"px-4 py-2 bg-gray-400"},"You have ",r.a.createElement("span",{className:"font-bold"},t)," item(s) in the basket."),r.a.createElement("ul",{className:"border divide-y-2 divide-gray-400"},e.map((function(e,t){return r.a.createElement("li",{key:t,className:"p-4 flex justify-between"},r.a.createElement("img",{className:"w-32",src:e.photo,alt:e.title}),r.a.createElement("div",{className:"w-32"},r.a.createElement("p",{className:"pb-5 text-lg text-orange-800 font-bold"},"$",e.price),r.a.createElement("p",{className:"text-sm font-bold"},e.title),r.a.createElement("ul",{className:"leading-tight text-sm"},e.sizes.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("span",{className:"inline-block w-4"},e.size)," x ",e.quantity)})))),r.a.createElement("button",{className:"material-icons self-end",onClick:function(){return n({type:"REMOVE_ITEM",title:(t=e).title,photo:t.photo,price:t.price});var t}},"delete_outline"))}))),r.a.createElement("h4",{className:"px-4 py-2 font-bold",style:{borderTop:"2px solid #cbd5e0"}},"Total price: ",r.a.createElement("span",{className:"float-right"},"$",a)),r.a.createElement("div",{className:"flex justify-around p-4 bg-gray-400"},r.a.createElement("button",{className:"w-32 py-4 border border-gray-500 bg-gray-300 hover:bg-gray-400 text-sm font-bold"},"VIEW BASKET"),r.a.createElement("button",{className:"w-32 py-4 border border-gray-500 bg-green-600 hover:bg-green-700 text-sm text-white font-bold"},"CHECKOUT")))))},O={top:"3px"},_=function(){return r.a.createElement("div",{className:"fixed pt-5 px-8 sm:px-8 sm:pt-4 w-screen text-xl sm:text-3xl bg-blue-900 text-gray-300"},r.a.createElement("header",{className:"relative max-w-screen-xl m-auto flex justify-between"},r.a.createElement("h1",{className:"font-bold pb-5 sm:pb-4 cursor-pointer",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}},r.a.createElement("span",{className:"material-icons relative pr-2 sm:text-3xl",style:O},"pets"),"Fluffy T-Shirt Shop"),r.a.createElement(w,null)))},k=function(e,t){return{category:e,type:t}},S={borderBottom:"1px solid #5D6D7E"},j={width:"150px",padding:"2px",fontSize:"14px"},I=function(){var e=Object(i.b)();return r.a.createElement("div",{className:"max-w-screen-xl m-auto pb-6 pt-24 sm:pt-24 flex flex-col text-center sm:flex-row sm:justify-between sm:px-4",style:S},r.a.createElement("div",{className:"pb-3 sm:pb-0"},r.a.createElement("label",null,"Sort:\xa0\xa0",r.a.createElement("select",{style:j,onChange:function(t){return e(k("SORT",t.target.value))}},r.a.createElement("option",{value:"NEW"},"What's new"),r.a.createElement("option",{value:"HIGH_TO_LOW"},"Price high to low"),r.a.createElement("option",{value:"LOW_TO_HIGH"},"Price low to high")))),r.a.createElement("div",{className:"pb-3 sm:pb-0"},r.a.createElement("label",null,"Price:\xa0\xa0",r.a.createElement("select",{style:j,onChange:function(t){return e(k("PRICE",t.target.value))}},r.a.createElement("option",{value:"PRICE_ALL"},"All"),r.a.createElement("option",{value:"UNDER_10"},"Under $10")))),r.a.createElement("div",{id:"filter-size"},r.a.createElement("label",null,"Size:\xa0\xa0",r.a.createElement("select",{style:j,onChange:function(t){return e(k("SIZE",t.target.value))}},r.a.createElement("option",{value:"SIZE_ALL"},"All"),r.a.createElement("option",{value:"S"},"S"),r.a.createElement("option",{value:"M"},"M"),r.a.createElement("option",{value:"L"},"L")))))};function z(){return r.a.createElement("div",null,r.a.createElement(_,null),r.a.createElement("div",{id:"content"},r.a.createElement("div",{id:"products"},r.a.createElement(I,null),r.a.createElement(h,null))))}a(40);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:b},r.a.createElement(z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.cac38fc2.chunk.js.map