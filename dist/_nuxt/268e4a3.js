(window.webpackJsonp=window.webpackJsonp||[]).push([[12,5,7,10],{366:function(e,t,o){var content=o(372);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(50).default)("43abcf80",content,!0,{sourceMap:!1})},367:function(e,t,o){var content=o(376);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(50).default)("30c9b8c0",content,!0,{sourceMap:!1})},368:function(e,t,o){e.exports=o.p+"img/popup-pink.a103e51.png"},371:function(e,t,o){"use strict";o(366)},372:function(e,t,o){var r=o(49)(!1);r.push([e.i,".images{position:relative;margin:0 auto;width:100%}@media(max-width:768px){.images{display:inline;padding:0}}.images__list{cursor:pointer;float:left;position:relative;padding:0 2%;width:26%;margin:0;transition:transform .2s}@media(max-width:1024px){.images__list{padding:0 2%;width:40%;margin:0}}@media(max-width:768px){.images__list{padding:0;width:90%;margin:0}}.images__list:hover{opacity:.9;transform:scale(1.02)}@media(max-width:768px){.images__list{display:inline-block}}.images__list--image-title{margin:15px 0 0}.images__list--image-subtitle{margin:0 0 10px}.images__list--background-image{height:300px;width:100%;background-position:50%;background-size:cover;background-color:var(--color-purple-1);border-radius:15px;box-shadow:0 5px 5px 0 var(--color-grey-2)}@media(max-width:1024px){.images__list--background-image{height:300px}}@media(max-width:768px){.images__list--background-image{height:350px}}.images__list--profile-image{position:relative;background-position:50%;background-size:cover;bottom:60px;left:75%;background-color:var(--color-purple-1);width:100px;height:100px;margin-bottom:-110px;border-radius:50%;border:4px solid var(--color-white-1)}@media(max-width:1024px){.images__list--profile-image{left:70%}}@media(max-width:768px){.images__list--profile-image{left:75%}}",""]),e.exports=r},374:function(e,t,o){var content=o(387);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(50).default)("4154bd60",content,!0,{sourceMap:!1})},375:function(e,t,o){"use strict";o(367)},376:function(e,t,o){var r=o(49)(!1);r.push([e.i,'.text-container__input{cursor:text;position:relative;display:block;height:47px;line-height:3;border-radius:5px;background-color:var(--color-white-1);-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 10px;color:var(--color-grey-1);font-family:"Poppins",sans-serif}.text-container__error,.text-container__title{display:flex}.text-container__title{margin-bottom:10px;color:var(--color-grey-1)}.text-container__error,.text-container__title p{color:var(--color-pink-1)}.text-container__error{margin-top:10px}.uppercase{text-transform:uppercase}',""]),e.exports=r},377:function(e,t,o){"use strict";o.r(t);var r={name:"ImageList",props:{imageTitle:{type:String,default:"",required:!1},imageSubtitle:{type:String,default:"",required:!1},backgroundImage:{type:String,default:"",required:!1},profileImage:{type:String,default:"",required:!1}},methods:{returnClickEvent:function(){this.$emit("clickEvent",!0)}}},n=(o(371),o(8)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"images"},[o("div",{staticClass:"images__list",on:{click:e.returnClickEvent}},[o("div",{staticClass:"images__list--background-image",style:e.backgroundImage?"background-image: url("+e.backgroundImage+")":"~/assets/images/comingsoon.png"}),e._v(" "),e.profileImage?o("div",[o("div",{staticClass:"images__list--profile-image",style:e.profileImage?"background-image: url("+e.profileImage+")":"~/assets/images/comingsoon.png"})]):e._e(),e._v(" "),o("h3",{staticClass:"images__list--image-title"},[e._v(e._s(e.imageTitle))]),e._v(" "),o("h4",{staticClass:"images__list--image-subtitle"},[e._v(e._s(e.imageSubtitle))])])])}),[],!1,null,null,null);t.default=component.exports},378:function(e,t,o){"use strict";o.r(t);o(75);var r={name:"TextInput",props:{dynamicId:{type:String,default:"",required:!1},value:{type:String,default:"",required:!1},width:{type:String,default:"300px",required:!1},index:{type:Number,default:0,required:!1},title:{type:String,default:"",required:!1},placeHolder:{type:String,default:"Please enter some text",required:!1},isUppercase:{type:Boolean,default:!1,required:!1},showError:{type:Boolean,default:!1,required:!1},isRequired:{type:Boolean,default:!1,required:!1},showTitle:{type:Boolean,default:!0,required:!1},autocomplete:{type:Boolean,default:!1,required:!1}},data:function(){return{inputValue:"",addressData:""}},computed:{isTitleVisible:function(){return""!==this.title&&this.showTitle}},watch:{value:function(e,t){this.inputValue=e,this.returnValue()}},mounted:function(){this.inputValue=this.value},methods:{returnValue:function(){this.$emit("inputValue",this.inputValue)},getAddressData:function(e,t,o){this.$emit("inputValue",{lat:e.latitude,long:e.longitude})}}},n=(o(375),o(8)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"text-container"},[e.isTitleVisible?o("span",{staticClass:"text-container__title"},[e._v(e._s(e.title)+"\n    "),e.isRequired?o("p",[e._v("*")]):e._e()]):e._e(),e._v(" "),e.autocomplete?o("vue-google-autocomplete",{ref:"address",class:e.isUppercase&&"uppercase",style:"width: "+e.width,attrs:{id:"map",value:e.inputValue,classname:"form-control text-container__input",placeholder:e.placeHolder,country:"gb"},on:{placechanged:e.getAddressData}}):o("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],staticClass:"text-container__input",class:e.isUppercase&&"uppercase",style:"width: "+e.width,attrs:{id:e.dynamicId,placeholder:e.placeHolder,type:"text"},domProps:{value:e.inputValue},on:{change:e.returnValue,input:function(t){t.target.composing||(e.inputValue=t.target.value)}}}),e._v(" "),e.showError?o("span",{staticClass:"text-container__error"},[e._v("Please enter a valid "+e._s(e.title))]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},379:function(e,t,o){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},386:function(e,t,o){"use strict";o(374)},387:function(e,t,o){var r=o(49)(!1);r.push([e.i,".location-box{background-color:var(--color-white-1);border-radius:15px;padding:30px;box-shadow:0 5px 5px 0 var(--color-grey-2)}.location-box__logo{width:200px;margin:0 auto;display:flex}.location-box__body{color:var(--color-black-1);margin:30px 0;font-size:18px}.location-box__search{display:flex;margin-bottom:20px}.location-box__search--field{width:100%}.location-box__search--button{margin-left:15px}.location-box__error{color:var(--color-pink-1);font-weight:300;margin-top:10px}",""]),e.exports=r},390:function(e,t,o){var content=o(408);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(50).default)("40bc64d0",content,!0,{sourceMap:!1})},397:function(e,t,o){"use strict";o.r(t);var r=o(2),n=(o(28),o(39),{name:"LocationBox",data:function(){return{addressValue:""}},mounted:function(){this.$cookies.get("customer_location")&&(this.addressValue=this.$cookies.get("customer_location"))},methods:{updateAddress:function(e){this.getStreetAddressFrom(e.lat,e.long)},locatorButtonPressed:function(){var e=this;navigator.geolocation.getCurrentPosition((function(t){e.getStreetAddressFrom(t.coords.latitude,t.coords.longitude)}),(function(e){console.log(e.message)}))},getStreetAddressFrom:function(e,t){var o=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var n,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.$axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(e,",").concat(t,"&key=").concat("AIzaSyC_gWbzZHOo1xpc9eOgzgqUa44PGdGY4Pg"));case 3:n=r.sent,data=n.data,o.addressValue=data.results[0].formatted_address,o.$cookies.set("customer_location",o.addressValue),o.$emit("addressAdded",!0),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(0),console.log(r.t0.message);case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()}}}),l=(o(386),o(8)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"location-box"},[r("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"location-box__logo",attrs:{"data-src":o(368)}}),e._v(" "),r("p",{staticClass:"location-box__body"},[e._v("\n    We're delivering London's best home cook's food straight to you door.\n  ")]),e._v(" "),r("div",{staticClass:"location-box__search"},[r("text-input",{staticClass:"location-box__search--field",attrs:{width:"95%",title:"Postcode",value:e.addressValue,"show-title":!1,autocomplete:!0,"place-holder":"Start typing your address..."},on:{inputValue:e.updateAddress}}),e._v(" "),r("dynamic-button",{staticClass:"location-box__search--button",attrs:{width:"70px",icon:"location-arrow",color:"pink",height:"50px"},on:{clickEvent:e.locatorButtonPressed}})],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TextInput:o(378).default,DynamicButton:o(237).default})},407:function(e,t,o){"use strict";o(390)},408:function(e,t,o){var r=o(49),n=o(379),l=o(409),c=r(!1),d=n(l);c.push([e.i,".home__hero{-webkit-animation:fadeIn .5s;animation:fadeIn .5s;padding:200px 5%;width:90%;background-image:url("+d+');background-size:cover;background-repeat:no-repeat;background-position:50%;display:flex;z-index:-999}@media(max-width:1024px){.home__hero{padding:50px 5%;width:90%;display:block;height:800px;background-position:top}}.home__hero--left{-webkit-animation:fadeIn .5s;animation:fadeIn .5s;width:50%;padding:0 5%}@media(max-width:1024px){.home__hero--left{width:90%;padding:100px 5% 30px;text-align:center}.home__hero--left .main-title{font-size:46px}}.home__hero--left .main-body,.home__hero--left .main-title{color:var(--color-white-1)}.home__hero--left .main-body{font-size:24px;margin-top:15px;font-family:"Poppins",sans-serif;text-shadow:2px 2px 8px var(--color-grey-1)}.home__hero--right{-webkit-animation:fadeIn .5s;animation:fadeIn .5s;width:50%;padding:0 5%}@media(max-width:1024px){.home__hero--right{padding:0 5%;width:90%}}.home__hero--right .highlight{-webkit-animation:bounce 1s;animation:bounce 1s}.home__sellers{-webkit-animation:fadeIn .5s;animation:fadeIn .5s;padding:50px 5%;position:relative;margin:0 auto;width:100%}',""]),e.exports=c},409:function(e,t,o){e.exports=o.p+"img/hero.b182f56.jpg"},433:function(e,t,o){"use strict";o.r(t);o(17),o(9),o(14),o(22),o(12),o(23);var r=o(3),n=(o(7),o(61),o(41));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}var c={name:"Home",data:function(){return{addressValue:!1,cuisine:"12485",poscodeHighlight:!1}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(n.e)(["sellers"])),mounted:function(){this.addressValue=this.$cookies.get("customer_location")},methods:{goToPage:function(link){this.$router.push("sellers/".concat(link.toString()))},getObjVal:function(e){var t=JSON.parse(e);return e&&t[12485].value},scrollToTop:function(){this.poscodeHighlight=!0,window.scrollTo({top:0,left:0,behavior:"smooth"})},removeHighlight:function(){this.$cookies.get("customer_location")&&(this.poscodeHighlight=!1,this.addressValue=this.$cookies.get("customer_location"))}}},d=(o(407),o(8)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"home"},[o("div",{staticClass:"home__hero"},[e._m(0),e._v(" "),o("div",{staticClass:"home__hero--right"},[o("location-box",{class:e.poscodeHighlight&&"highlight",on:{addressAdded:e.removeHighlight}})],1)]),e._v(" "),o("div",{staticClass:"home__sellers"},e._l(e.sellers,(function(t,r){return o("div",{key:"seller__"+r},[e.addressValue?o("nuxt-link",{attrs:{to:t.active?"/sellers/"+t.id:""}},[o("image-list",{attrs:{"image-title":t.sp_store_name,"image-subtitle":e.getObjVal(t.custom_fields),"profile-image":t.active?t.store_logo:"","background-image":t.active?t.shop_logo:""}})],1):o("div",{on:{click:e.scrollToTop}},[o("image-list",{attrs:{"image-title":t.sp_store_name,"image-subtitle":e.getObjVal(t.custom_fields),"profile-image":t.active?t.store_logo:"","background-image":t.active?t.shop_logo:""}})],1)],1)})),0)])}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home__hero--left"},[o("h1",{staticClass:"main-title"},[e._v("Real people, real food.")]),e._v(" "),o("h3",{staticClass:"main-body"},[e._v("\n        A new way to experience authentic home cooking.\n      ")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{LocationBox:o(397).default,ImageList:o(377).default})}}]);