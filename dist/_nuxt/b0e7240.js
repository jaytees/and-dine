(window.webpackJsonp=window.webpackJsonp||[]).push([[13,4,6,7,10],{335:function(t,e,o){var content=o(337);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(66).default)("c9b5f51e",content,!0,{sourceMap:!1})},336:function(t,e,o){"use strict";o(335)},337:function(t,e,o){var r=o(65)(!1);r.push([t.i,".dynamic-button{padding:14px 10px;color:#fff;font-weight:600;font-size:18px;border-radius:5px;border:none;text-align:center;cursor:pointer}.dynamic-button:hover{opacity:.8}.green{background-color:var(--color-green-1)}.blue{background-color:var(--color-blue-1)}.red{background-color:var(--color-red-1)}.orange{background-color:var(--color-orange-1)}.white{color:var(--color-black-1);background-color:#fff}.purple{background-color:var(--color-purple-1)}.pink{background-color:var(--color-pink-1)}.dynamic-slot{background:transparent;border:none}",""]),t.exports=r},338:function(t,e,o){"use strict";o.r(e);var r={name:"DynamicButton",props:{isSlot:{type:Boolean,default:!1,required:!1},width:{type:String,default:"250px",required:!1},height:{type:String,default:"50px",required:!1},href:{type:String,default:"/",required:!1},text:{type:String,default:"",required:!1},icon:{type:String,default:"",required:!1},color:{type:String,default:"green",required:!1}},computed:{iconUsed:function(){return""!==this.icon}},methods:{returnClick:function(){this.$emit("clickEvent")}}},n=(o(336),o(50)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.isSlot?o("button",{staticClass:"dynamic-slot",class:t.color,attrs:{href:t.href},on:{click:t.returnClick}},[t._t("button-body")],2):o("button",{staticClass:"dynamic-button",class:t.color,style:"width: "+t.width+"; height:"+t.height,attrs:{href:t.href},on:{click:t.returnClick}},[t._v("\n  "+t._s(t.text)+"\n  "),t.iconUsed?o("fa",{attrs:{icon:["fas",t.icon]}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},339:function(t,e,o){var content=o(344);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(66).default)("f61a011e",content,!0,{sourceMap:!1})},340:function(t,e,o){t.exports=o.p+"img/comingsoon.cf2cae4.png"},341:function(t,e,o){var content=o(346);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(66).default)("32535ef1",content,!0,{sourceMap:!1})},342:function(t,e,o){var content=o(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(66).default)("3d294391",content,!0,{sourceMap:!1})},343:function(t,e,o){"use strict";o(339)},344:function(t,e,o){var r=o(65)(!1);r.push([t.i,".text-container__input{cursor:text;position:relative;display:block;height:43px;border:1px solid var(--color-black-1);line-height:3;border-radius:5px;background-color:#fff;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 10px;color:var(--color-black-1);font-weight:600}.text-container__title{min-height:50px;padding:10px;font-weight:600}.uppercase{text-transform:uppercase}",""]),t.exports=r},345:function(t,e,o){"use strict";o(341)},346:function(t,e,o){var r=o(65)(!1);r.push([t.i,".images{position:relative;margin:0 auto;width:100%}@media(max-width:768px){.images{display:inline;padding:0}}.images__list{width:26%;cursor:pointer;float:left;position:relative;padding:0 2%}@media(max-width:1024px){.images__list{padding:0 2%;width:40%;margin:0}}@media(max-width:768px){.images__list{padding:0;width:90%;margin:0}}.images__list:hover{opacity:.8}@media(max-width:768px){.images__list{display:inline-block}}.images__list--image-title{margin:5px 0}.images__list--image-subtitle{margin:0 0 10px}.images__list--background-image{height:250px;width:100%;background-position:50%;background-color:var(--color-purple-1);border-radius:5px;box-shadow:0 5px 5px 0 var(--color-grey-2)}.images__list--profile-image{position:relative;bottom:80px;left:75%;background-color:var(--color-purple-1);width:100px;height:100px;margin-bottom:-110px;border-radius:50%;border:4px solid var(--color-white-1)}@media(max-width:768px){.images__list--profile-image{left:70%}}",""]),t.exports=r},349:function(t,e,o){"use strict";o.r(e);o(219);var r={namme:"TextInput",props:{value:{type:String,default:"",required:!1},width:{type:String,default:"300px",required:!1},index:{type:Number,default:0,required:!1},title:{type:String,default:"",required:!1},placeHolder:{type:String,default:"Please enter some text",required:!1},isUppercase:{type:Boolean,default:!1,required:!1}},data:function(){return{inputValue:""}},computed:{showTitle:function(){return""!==this.title}},mounted:function(){this.inputValue=this.value},methods:{returnValue:function(){this.$emit("inputValue",this.inputValue)}}},n=(o(343),o(50)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"text-container"},[t.showTitle?o("span",{staticClass:"text-container__title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"text-container__input",class:t.isUppercase&&"uppercase",style:"min-width: "+t.width,attrs:{placeholder:t.placeHolder,type:"text"},domProps:{value:t.inputValue},on:{change:t.returnValue,input:function(e){e.target.composing||(t.inputValue=e.target.value)}}})])}),[],!1,null,null,null);e.default=component.exports},350:function(t,e,o){"use strict";o.r(e);var r={name:"ImageList",props:{imageTitle:{type:String,default:"",required:!1},imageSubtitle:{type:String,default:"",required:!1},backgroundImage:{type:String,default:"",required:!1},profileImage:{type:String,default:"",required:!1}},methods:{returnClickEvent:function(){this.$emit("clickEvent",!0)}}},n=(o(345),o(50)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"images"},[r("div",{staticClass:"images__list",on:{click:t.returnClickEvent}},[""!==t.backgroundImage?r("img",{staticClass:"images__list--background-image",attrs:{src:t.backgroundImage}}):r("img",{staticClass:"images__list--background-image",attrs:{src:o(340)}}),t._v(" "),t.profileImage?r("div",[t.profileImage?r("img",{staticClass:"images__list--profile-image",attrs:{src:t.profileImage}}):r("img",{staticClass:"images__list--profile-image",attrs:{src:o(340)}})]):t._e(),t._v(" "),r("h3",{staticClass:"images__list--image-title"},[t._v(t._s(t.imageTitle))]),t._v(" "),r("h4",{staticClass:"images__list--image-subtitle"},[t._v(t._s(t.imageSubtitle))])])])}),[],!1,null,null,null);e.default=component.exports},351:function(t,e,o){t.exports=o.p+"img/hero.b182f56.jpg"},352:function(t,e,o){t.exports=o.p+"img/popup-pink.a103e51.png"},353:function(t,e,o){"use strict";o(342)},354:function(t,e,o){var r=o(65)(!1);r.push([t.i,".location-box{background-color:var(--color-white-1);border-radius:5px;padding:30px;box-shadow:0 5px 5px 0 var(--color-grey-2)}.location-box__logo{width:200px;margin:0 auto;display:flex}.location-box__body{color:var(--color-black-1);margin:30px 0;font-size:18px}.location-box__search{display:flex;margin-bottom:20px}.location-box__search--button{margin-left:15px}.location-box__error{color:var(--color-pink-1);font-weight:300;margin-top:10px}",""]),t.exports=r},359:function(t,e,o){var content=o(368);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(66).default)("28f1127f",content,!0,{sourceMap:!1})},364:function(t,e,o){"use strict";o.r(e);var r={name:"LocationBox",data:function(){return{showPostcodeError:!1,postcodeValue:""}},computed:{isValidPostcode:function(){return/[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i.test(this.postcodeValue)&&""!==this.postcodeValue}},methods:{updatePostcode:function(t){this.postcodeValue=t},validatePostcode:function(){this.isValidPostcode?(this.showPostcodeError=!1,this.$cookies.set("dine-location",this.postcodeValue)):this.showPostcodeError=!0}}},n=(o(353),o(50)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"location-box"},[r("img",{staticClass:"location-box__logo",attrs:{src:o(352)}}),t._v(" "),r("p",{staticClass:"location-box__body"},[t._v("\n    We're delivering London's best home cook's food straight to you door.\n  ")]),t._v(" "),r("div",{staticClass:"location-box__search"},[r("text-input",{staticClass:"location-box__search--field",attrs:{width:t.$device.isMobile?"150px":"300px","place-holder":"Enter your postcode...","is-uppercase":!0},on:{inputValue:t.updatePostcode}}),t._v(" "),r("dynamic-button",{staticClass:"location-box__search--button",attrs:{width:"50px",icon:"search",color:"pink",height:"45px"},on:{clickEvent:t.validatePostcode}})],1),t._v(" "),t.showPostcodeError?r("span",{staticClass:"location-box__error"},[t._v("Please enter a valid UK postcode")]):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TextInput:o(349).default,DynamicButton:o(338).default})},367:function(t,e,o){"use strict";o(359)},368:function(t,e,o){var r=o(65),n=o(220),l=o(351),c=r(!1),d=n(l);c.push([t.i,".home__hero{width:100%;padding:0;background-image:url("+d+");background-size:cover;background-repeat:no-repeat;background-position:50%;height:600px;display:flex;z-index:-999}@media(max-width:768px){.home__hero{display:block;height:800px;width:100%;background-position:top}}.home__hero--left,.home__hero--right{width:50%}@media(max-width:768px){.home__hero--left,.home__hero--right{width:90%}}.home__hero--left{padding:180px 5% 180px 10%}@media(max-width:768px){.home__hero--left{padding:5%;text-align:center}.home__hero--left .main-title{font-size:46px;margin-top:100px}}.home__hero--left .main-body,.home__hero--left .main-title{color:var(--color-white-1)}.home__hero--left .main-body{font-size:26px;margin-top:15px}.home__hero--right{padding:150px 10%}@media(max-width:768px){.home__hero--right{padding:5%}}.home__sellers{padding:50px 5%;position:relative;margin:0 auto;width:100%}",""]),t.exports=c},387:function(t,e,o){"use strict";o.r(e);o(35),o(24),o(32),o(44),o(31),o(45);var r=o(15),n=(o(10),o(76),o(48));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"Home",transition:"fade-enter",data:function(){return{showPostcodeError:!1,postcodeValue:""}},computed:c(c({},Object(n.e)(["sellers"])),{},{isValidPostcode:function(){return/[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i.test(this.postcodeValue)&&""!==this.postcodeValue}}),methods:{updatePostcode:function(t){this.postcodeValue=t},validatePostcode:function(){this.isValidPostcode?(this.showPostcodeError=!1,this.$cookies.set("dine-location",this.postcodeValue)):this.showPostcodeError=!0},goToPage:function(link){this.$router.push("/".concat(link.toString()))}}},h=(o(367),o(50)),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"container home"},[o("div",{staticClass:"home__hero"},[t._m(0),t._v(" "),o("div",{staticClass:"home__hero--right"},[o("location-box")],1)]),t._v(" "),o("div",{staticClass:"home__sellers"},t._l(t.sellers,(function(e,r){return o("image-list",{key:"seller__"+r,attrs:{"image-title":e.sp_store_name,"image-subtitle":e.city,"profile-image":e.store_logo,"background-image":e.shop_logo},on:{clickEvent:function(o){return t.goToPage(e.id)}}})})),1)])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home__hero--left"},[o("h1",{staticClass:"main-title"},[t._v("Real people, real food.")]),t._v(" "),o("p",{staticClass:"main-body"},[t._v("A new way to experience authentic home cooking.")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{LocationBox:o(364).default,ImageList:o(350).default})}}]);