(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{146:function(t,e,o){"use strict";var n=o(0),r=o(9),c=o(13),l=o(74);r.c.add(c.e),r.c.add(c.c),r.c.add(c.i),n.a.component("font-awesome-icon",l.a)},147:function(t,e,o){"use strict";var n=o(0),r=o(110);n.a.use(r.a,{refreshOnceOnNavigation:!0})},184:function(t,e,o){var content=o(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(66).default)("5520dede",content,!0,{sourceMap:!1})},217:function(t,e,o){"use strict";o(35),o(24),o(32),o(44),o(31),o(45);var n=o(15),r=o(2),c=(o(28),o(48));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"Default",fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("".concat("https://mvmapi.webkul.com/api/v2/","sellers.json"),{headers:{Authorization:"Bearer YjZiNmRlZjE1ZGJiZWRlMTFmZGRmYzc0Njg0ZDIyMjYwYjcxMDQxZjEyNzA3ZGRhMzlhOTgzODAzNDE0NzYzYQ"}}).then((function(e){return t.setSellers(e.data.sellers)})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},fetchOnServer:!0,computed:f({},Object(c.e)(["navigationItems","checkoutInfo"])),mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.getProducts(),!t.checkoutInfo&&t.$shopify.checkout.create().then((function(e){t.setCheckoutInfo(e),t.$cookies.set("checkout_info",e)})),e.next=4,t.$shopify.product.fetchAll().then((function(e){t.shopifyProducts=e}));case 4:case"end":return e.stop()}}),e)})))()},methods:f(f({},Object(c.b)(["getProducts"])),Object(c.d)({setShopifyProducts:"SET_SHOPIFY_PRODUCTS",setSellers:"SET_SELLERS",setCheckoutInfo:"SET_CHECKOUT_INFO"}))},m=o(50),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("nav-bar",{attrs:{navigation:t.navigationItems}}),t._v(" "),o("nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{NavBar:o(334).default})},222:function(t,e,o){o(223),t.exports=o(224)},258:function(t,e,o){var content=o(259);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(66).default)("7bc66d27",content,!0,{sourceMap:!1})},259:function(t,e,o){var n=o(65),r=o(220),c=o(260),l=o(261),f=o(262),d=n(!1),m=r(c),h=r(l),v=r(f);d.push([t.i,'@font-face{font-family:"Circular";src:local("Circular"),url('+m+') format("otf")}@font-face{font-family:"Gotham-Regular";src:local("Gotham-Regular"),url('+h+') format("otf")}@font-face{font-family:"Gotham-Bold";src:local("Gotham-Bold"),url('+v+') format("otf")}html{--color-white-1:#fff;--color-black-1:#3b444b;--color-yellow-1:#fecb02;--color-yellow-2:#fbfae0;--color-pink-1:#ff1e5f;--color-pink-2:#f9adff;--color-purple-1:#6543fe;--color-purple-2:#e4ddf6;--color-orange-1:#fa480e;--color-grey-1:#545454;--color-grey-2:#d3d3d3;--color-green-1:#8cbd22;--color-blue-1:#1574f5;--color-red-1:#ed6065;background-color:#fff;background-color:var(--color-white-1);position:static;font-family:"Gotham-Regular",sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box;overflow-x:hidden;width:100%}body{margin:0}h1{font-size:60px;font-weight:600;margin:0 0 10px;font-family:"Gotham-Bold",sans-serif}h2{font-size:34px;margin:10px 0}h2,h3{color:#ff1e5f;color:var(--color-pink-1);font-family:"Gotham-Bold",sans-serif}h3{font-size:20px;margin:0 0 5px}h4{margin:0 0 10px}h4,p{color:#545454;color:var(--color-grey-1);font-size:16px}p{font-weight:300;margin:0}.container{padding:0;width:100%;position:relative;margin:0 auto;transition:all .5s cubic-bezier(.55,0,.1,1)}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}',""]),t.exports=d},260:function(t,e,o){t.exports=o.p+"fonts/CircularStd-Medium.9ffafed.otf"},261:function(t,e,o){t.exports=o.p+"fonts/Gotham-Regular.d946fc4.otf"},262:function(t,e,o){t.exports=o.p+"fonts/Gotham-Bold.eaee103.otf"},265:function(t,e,o){t.exports=o.p+"img/logo-pink.f1c600e.png"},266:function(t,e,o){t.exports=o.p+"img/logo.765bee0.png"},267:function(t,e,o){"use strict";o(184)},268:function(t,e,o){var n=o(65)(!1);n.push([t.i,'.navbar{width:80%;padding:0 10%;background-color:transparent;z-index:999;position:absolute;font-family:"Gotham-Bold",sans-serif}@media(max-width:768px){.navbar{width:90%;padding:20px 5%;background-color:var(--color-white-1)}}.navbar__logo-pink img,.navbar__logo-white img{width:110px;padding:20px 0}@media(max-width:768px){.navbar__logo-pink img,.navbar__logo-white img{width:70px;padding:0}}.navbar__logo-pink{display:none}@media(max-width:768px){.navbar__logo-pink{display:inline}}.navbar__logo-white{display:inline}@media(max-width:768px){.navbar__logo-white{display:none}}.navbar .show-nav{display:block;-webkit-animation:fadeIn .5s;animation:fadeIn .5s}.navbar__items{float:right;display:flex;list-style-type:none;padding:20px 0}@media(max-width:768px){.navbar__items{display:none;width:100%;background-color:var(--color-white-1);padding:20px}}.navbar__items--tab-wrapper{cursor:pointer;margin:0 15px}.navbar__items--tab-wrapper .tab{padding:5px;border-radius:5px;color:var(--color-pink-1)}@media(max-width:768px){.navbar__items--tab-wrapper .tab{background-color:var(--color-white-1)}}.navbar__items--tab-wrapper .tab .selected-link,.navbar__items--tab-wrapper .tab:hover{background-color:var(--color-pink-1);color:var(--color-white-1)}@media(max-width:768px){.navbar__items--tab-wrapper .tab .selected-link,.navbar__items--tab-wrapper .tab:hover{opacity:.8}}.navbar__items--tab-wrapper .link{text-decoration:none;color:var(--color-white-1);font-size:16px;font-weight:600;cursor:pointer}@media(max-width:768px){.navbar__items--tab-wrapper .link{color:var(--color-pink-1)}}.navbar__items--icons-desktop{cursor:pointer;text-align:right}@media(max-width:768px){.navbar__items--icons-desktop{display:none}}.navbar__items--icons-desktop svg{margin:0 5px;font-size:24px;color:var(--color-white-1)}@media(max-width:768px){.navbar__items--icons-desktop svg{color:var(--color-pink-1)}}.navbar__items--icons-desktop svg:hover{color:var(--color-pink-1)}@media(max-width:768px){.navbar__items--icons-desktop svg:hover{opacity:.8}}.navbar__items--icons-mobile{cursor:pointer;float:right}@media(min-width:768px){.navbar__items--icons-mobile{display:none}}.navbar__items--icons-mobile svg{margin:0 5px;font-size:24px;color:var(--color-pink-1)}.navbar__items--icons-mobile svg:hover{opacity:.8}',""]),t.exports=n},269:function(t,e,o){"use strict";o.r(e),o.d(e,"state",(function(){return r})),o.d(e,"mutations",(function(){return c})),o.d(e,"actions",(function(){return l})),o.d(e,"getters",(function(){return f}));var n=o(2),r=(o(28),o(70),o(32),function(){return{products:!1,sellers:!1,chosenSellerId:!1,navigationItems:[{id:0,name:"index",value:"",link:"/"},{id:1,name:"about",value:"ABOUT US",link:"/about"},{id:2,name:"join",value:"COOK WITH US",link:"/join",external:"https://anddine.sp-seller.webkul.com"}],checkoutInfo:!1,shopifyProducts:!1}}),c={SET_PRODUCTS:function(t,e){t.products=e},SET_SHOPIFY_PRODUCTS:function(t,e){t.shopifyProducts=e},SET_SELLERS:function(t,e){t.sellers=e},SET_CHOSEN_SELLER_ID:function(t,e){t.chosenSellerId=e},SET_CHECKOUT_INFO:function(t,e){t.checkoutInfo=e}},l={getProducts:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return n=t.commit,o.next=3,e.$axios.$get("".concat("https://mvmapi.webkul.com/api/v2/","products.json?access_token=").concat("YjZiNmRlZjE1ZGJiZWRlMTFmZGRmYzc0Njg0ZDIyMjYwYjcxMDQxZjEyNzA3ZGRhMzlhOTgzODAzNDE0NzYzYQ","&refresh_token=").concat("ZDgyMmE2NTk5NzNlZDgyMDk4MmNlMTZjNGUxODg2ZWU3ZGQzZjg1ODgyNTZiM2JjMGEyMGYzNWUzYjVkNDQ3MA",",")).then((function(t){n("SET_PRODUCTS",t.products)}));case 3:case"end":return o.stop()}}),o)})))()}},f={productsById:function(t){return t.products&&t.products.filter((function(e){return e.seller_id===parseInt(t.chosenSellerId)}))},sellerById:function(t){return t.sellers&&t.sellers.filter((function(e){return e.id===parseInt(t.chosenSellerId)}))}}},334:function(t,e,o){"use strict";o.r(e);o(19);var n={name:"NavBar",props:{navigation:{type:Array,require:!0,default:function(){return[]}}},data:function(){return{navItems:[],showMobileNav:!1}},computed:{currentPage:function(){return this.$route.name}},mounted:function(){this.navItems=this.navigation}},r=(o(267),o(50)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar"},[n("nuxt-link",{staticClass:"navbar__logo-pink",attrs:{to:"/"}},[n("img",{attrs:{src:o(265)}})]),t._v(" "),n("nuxt-link",{staticClass:"navbar__logo-white",attrs:{to:"/"}},[n("img",{attrs:{src:o(266)}})]),t._v(" "),n("div",{staticClass:"navbar__items--icons-mobile"},[n("a",{attrs:{href:"https://anddine.myshopify.com/cart"}},[n("fa",{attrs:{icon:["fas","shopping-cart"]}})],1),t._v(" "),n("a",{attrs:{href:"https://anddine.myshopify.com/account/login"}},[n("fa",{attrs:{icon:["fas","user"]}})],1),t._v(" "),n("fa",{staticClass:"burger",attrs:{icon:["fas","bars"]},on:{click:function(e){t.showMobileNav=!t.showMobileNav}}})],1),t._v(" "),n("ul",{staticClass:"navbar__items",class:t.showMobileNav&&"show-nav"},[t._l(t.navItems,(function(e,o){return n("li",{key:"tab_"+o,staticClass:"navbar__items--tab-wrapper"},[""!==e.value?n("div",{staticClass:"tab",class:e.name===t.currentPage&&"selected-link"},[e.external?n("a",{staticClass:"link",attrs:{href:e.external}},[n("span",[t._v(t._s(e.value))])]):n("nuxt-link",{staticClass:"link",attrs:{to:e.link}},[n("span",[t._v(t._s(e.value))])])],1):t._e()])})),t._v(" "),n("li",{staticClass:"navbar__items--icons-desktop"},[n("a",{attrs:{href:"https://anddine.myshopify.com/cart"}},[n("fa",{attrs:{icon:["fas","shopping-cart"]}})],1),t._v(" "),n("a",{attrs:{href:"https://anddine.myshopify.com/account/login"}},[n("fa",{attrs:{icon:["fas","user"]}})],1)])],2)],1)}),[],!1,null,null,null);e.default=component.exports}},[[222,14,1,15]]]);