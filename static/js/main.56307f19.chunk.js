(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{25:function(e,t,i){},32:function(e,t,i){},33:function(e,t,i){},34:function(e,t,i){},35:function(e,t,i){},36:function(e,t,i){},37:function(e,t,i){},38:function(e,t,i){},39:function(e,t,i){"use strict";i.r(t);var c=i(2),n=i.n(c),s=i(17),a=i.n(s),r=i(9),l=i(5),o=i(3),d=i(19),j=(i(25),i(1)),m=function(e){return Object(j.jsx)("header",{className:"navbar",children:Object(j.jsxs)("nav",{children:[Object(j.jsx)(l.b,{to:"/",children:"ORIOLE"}),Object(j.jsxs)("ul",{className:"menu",children:[Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/shop",children:"Shop"})}),Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/cart",children:Object(j.jsxs)("span",{children:[e.number>0?e.number:null,Object(j.jsx)(d.a,{})]})})})]})]})})},b=(i(32),function(){return Object(c.useEffect)((function(){document.title="Oriole - Home"})),Object(j.jsx)("div",{className:"home",children:Object(j.jsx)("main",{children:Object(j.jsxs)("section",{className:"home__container",children:[Object(j.jsx)("h1",{children:"Make yourself special gift with our seasonal offer! "}),Object(j.jsxs)("p",{children:["Each month we take care to provide you carefully selected unusual house plants! ",Object(j.jsx)("br",{}),"Check what we prepared this month and make your home unique!"]}),Object(j.jsx)(l.b,{className:"home-bttn",to:"/shop",children:"SHOP NOW"})]})})})}),h=[{id:"001",name:"Nerve Plant",descripiton:"The nerve plant, or Fittonia argyroneura, from the Acanthaceae (Acanthus) family, is a tropically found plant with striking leaves of green and red. Growing nerve plants is easy and so is nerve plant care.",category:"small",image:i.p+"static/media/001.8deacf3f.jpg",stock:20,price:23.99},{id:"002",name:"Desert Rose",descripiton:"The desert rose (Adenium obesum) is a slow-growing plant (gaining less than 12 inches per year) that boasts a thick, succulent stem and deep pink flowers. It's best planted in the spring and is deciduous in cooler winters, but can be kept in leaf if it receives warm enough temperatures and a bit of water. Overall, this varietal is fairly easy to care for and pays off big time with its blooming beauty. ",category:"small",image:i.p+"static/media/002.355a745f.jpg",stock:8,price:29.99},{id:"003",name:"Corkscrew Albuca",descripiton:"Corkscrew Albuca is a small geophyte, up to 8 inches tall, recognizable by its distincive leaves, which are narrow and spiral tipped with glandular hairs. The leaves are green and up to 8 inches long.In late winter to early spring one central flower spike appear, bearing green flower with pale yellow margins",category:"small",image:i.p+"static/media/003.03855b9b.jpg",stock:0,price:39.99},{id:"004",name:"Variegated Monstera Deliciosa",descripiton:"A species of flowering plant native to southern Mexico and Panama, Monstera deliciosa is a hardy and easy to care for plant known by many names. The Variegated Monstera requires similar care to that of the solid green Monstera deliciosa. The main difference is the white portion of the variegated Monstera leaves cannot absorb light, so the plant needs to work twice as hard to photosynthesize. Therefore, low light conditions are not ideal and you should keep your variegated Monstera in bright ambient light to make it happy.",category:"medium",image:i.p+"static/media/004.b04a5bbe.jpg",stock:4,price:239.99}],u=(i(33),function(e){var t=Object(c.useState)(h),i=Object(r.a)(t,2),n=i[0],s=i[1],a=Object(c.useState)("All"),o=Object(r.a)(a,2),d=o[0],m=o[1],b=function(e){if("all"===e)s(h);else{var t=h.filter((function(t){return t.category===e}));s(t)}m(e[0].toUpperCase()+e.slice(1))};return Object(c.useEffect)((function(){document.title="Oriole - Shop"})),Object(j.jsx)("div",{className:"shop_container",children:Object(j.jsxs)("div",{className:"shop_wrapper",children:[Object(j.jsxs)("aside",{className:"shop_side",children:[Object(j.jsxs)("h2",{className:"shop_side-title",children:["Products/",Object(j.jsx)("span",{children:d})]}),Object(j.jsxs)("ul",{className:"side_list",children:[Object(j.jsx)("li",{className:"side_list-element",children:Object(j.jsx)("button",{className:"navi-bttn",type:"button",onClick:function(){return b("all")},children:"All"})}),Object(j.jsx)("li",{className:"side_list-element",children:Object(j.jsx)("button",{className:"navi-bttn",type:"button",onClick:function(){return b("small")},children:"Small"})}),Object(j.jsx)("li",{className:"side_list-element",children:Object(j.jsx)("button",{className:"navi-bttn",type:"button",onClick:function(){return b("medium")},children:"Medium"})}),Object(j.jsx)("li",{className:"side_list-element",children:Object(j.jsx)("button",{className:"navi-bttn",type:"button",onClick:function(){return b("big")},children:"Big"})})]})]}),Object(j.jsx)("main",{className:"shop_main",children:Object(j.jsx)("ul",{className:"items_list",children:n.length?n.map((function(t){return Object(j.jsx)("li",{className:"items_list-element",onClick:function(){return e.setSelectedItem(t)},children:Object(j.jsx)(l.b,{to:"/shop/".concat(t.id),className:"element-link",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{className:"element-image",src:t.image,alt:t.name}),Object(j.jsx)("div",{className:"element-name",children:t.name}),Object(j.jsx)("div",{className:"element-price",children:t.price})]})})},t.id)})):Object(j.jsxs)("div",{className:"empty",children:["There is no Plants in this category. ",Object(j.jsx)("br",{})," Check again in a few days!"]})})})]})})}),p=(i(34),i(20)),O=(i(35),function(e){var t=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;0===i?e.deleteItem(t):e.deleteItem(t,i)};return Object(j.jsxs)("div",{className:"cart-list-item",children:[Object(j.jsx)("button",{className:"cart-list-item-delete",type:"button",onClick:function(){return t(e.item.id)},children:Object(j.jsx)(p.a,{})}),Object(j.jsx)("div",{className:"cart-list-item-image",children:Object(j.jsx)("img",{src:e.item.image,alt:e.item.name})}),Object(j.jsx)("div",{className:"cart-list-item-name",children:e.item.name}),Object(j.jsxs)("div",{className:"cart-list-item-quantity",children:[Object(j.jsx)("button",{onClick:function(){return t=e.item.id,void e.addItemToCart(t,1);var t},children:"+"}),Object(j.jsx)("input",{type:"number",value:e.item.stock,readOnly:!0}),Object(j.jsx)("button",{onClick:function(){return t(e.item.id,1)},children:"-"})]}),Object(j.jsxs)("span",{className:"cart-list-info",children:[(e.item.price*e.item.stock).toFixed(2),"$"]})]})}),f=function(e){return Object(j.jsx)("div",{className:"cart_container",children:Object(j.jsxs)("div",{className:"cart_wrapper",children:[Object(j.jsxs)("div",{className:"cart-list",children:[Object(j.jsx)("div",{className:"cart-list-header",children:Object(j.jsx)("h2",{children:"Shipping Bag"})}),e.items.map((function(t){return Object(j.jsx)(O,{item:t,addItemToCart:e.addItemToCart,deleteItem:e.deleteItem})}))]}),Object(j.jsxs)("div",{className:"cart-summary",children:[Object(j.jsx)(l.b,{className:"home-bttn",to:"/cart",children:"Checkout"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Total: "}),Object(j.jsx)("h3",{children:0!==e.totalPrice?e.totalPrice+"$":null})]})]})]})})},x=(i(36),Object(j.jsx)("span",{className:"out-of-stock",children:" Sorry, already gone!"})),g=function(e){var t=Object(c.useState)(1),i=Object(r.a)(t,2),n=i[0],s=i[1];return Object(j.jsx)("div",{className:"item_container",children:Object(j.jsx)("div",{className:"item_wrapper",children:Object(j.jsx)("main",{className:"item_main",children:Object(j.jsxs)("div",{className:"item-background",children:[Object(j.jsx)("header",{className:"header",children:Object(j.jsx)("div",{className:"item-name",children:e.item.name})}),Object(j.jsxs)("div",{className:"item-info-container",children:[Object(j.jsx)("img",{className:"item-image",src:e.item.image,alt:e.item.name}),Object(j.jsxs)("div",{className:"item-text",children:[Object(j.jsx)("div",{className:"item-desc",children:e.item.descripiton}),Object(j.jsxs)("div",{className:"item-stock",children:["Stock:"," ",e.item.stock>7?Object(j.jsx)("span",{className:"in-stock",children:e.item.stock}):e.item.stock>0?Object(j.jsx)("span",{className:"low-stock",children:e.item.stock}):x]}),Object(j.jsxs)("div",{className:"item-price",children:[e.item.price,"$"]}),Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{type:"number",value:n,id:"qty",className:"qty-input",onChange:function(e){return s(e.target.value)}}),Object(j.jsx)("button",{type:"button",className:"buy-bttn",onClick:function(){return e.addItemToCart(e.item.id,n)},children:"Add To Cart"})]})]})]})]})})})})},v=(i(37),function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),i=t[0],n=t[1],s=Object(c.useState)(0),a=Object(r.a)(s,2),d=a[0],p=a[1],O=Object(c.useState)(0),x=Object(r.a)(O,2),v=x[0],k=x[1],N=Object(c.useState)("000"),y=Object(r.a)(N,2),w=y[0],C=y[1],I=function(e,t){var c=Object.assign({},h.find((function(t){return t.id===e})));if(t<=c.stock){h.find((function(t){return t.id===e})).stock-=t;var s=i.find((function(e){return e.id===c.id}));s?(s.stock+=t,p(d+parseInt(t)),S()):(c.stock=t,p(d+parseInt(t)),n(i.concat(c)))}else alert("We don't have enough of it in stock")},_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,c=i.find((function(t){return t.id===e}));t>0&&t!==c.stock?(p(d-t),h.find((function(t){return t.id===e})).stock+=t,c.stock-=t,S()):(p(d-c.stock),h.find((function(t){return t.id===e})).stock+=c.stock,n(i.filter((function(t){return t.id!==e}))))},S=function(){var e=0;i.forEach((function(t){return e+=t.stock*t.price})),k(e.toFixed(2))};return Object(c.useEffect)((function(){S()}),[i]),Object(j.jsx)(l.a,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(m,{number:d}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/shop",render:function(){return Object(j.jsx)(u,{setSelectedItem:C})}}),Object(j.jsx)(o.a,{path:"/cart",render:function(){return Object(j.jsx)(f,{items:i,deleteItem:_,addItemToCart:I,totalPrice:v})}}),Object(j.jsx)(o.a,{path:"/shop/:id",render:function(){return Object(j.jsx)(g,{item:w,addItemToCart:I,input:!0})}}),Object(j.jsx)(o.a,{path:"/",component:b})]})]})})});i(38);a.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.56307f19.chunk.js.map