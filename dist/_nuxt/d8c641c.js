(window.webpackJsonp=window.webpackJsonp||[]).push([[7,11],{361:function(e,t,o){e.exports=o.p+"img/popup-pink.a103e51.png"},365:function(e,t,o){var content=o(377);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(49).default)("30c9b8c0",content,!0,{sourceMap:!1})},375:function(e,t,o){var content=o(386);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(49).default)("4154bd60",content,!0,{sourceMap:!1})},376:function(e,t,o){"use strict";o(365)},377:function(e,t,o){var r=o(48)(!1);r.push([e.i,'.text-container__input{cursor:text;position:relative;display:block;height:47px;line-height:3;border-radius:5px;border:1px solid var(--color-grey-2);background-color:var(--color-white-1);-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 10px;color:var(--color-grey-1);font-family:"GalanoGrotesque-Medium",sans-serif}.text-container__error,.text-container__title{display:flex}.text-container__title{margin-bottom:10px;color:var(--color-grey-1)}.text-container__error,.text-container__title p{color:var(--color-pink-1)}.text-container__error{margin-top:10px}.uppercase{text-transform:uppercase}',""]),e.exports=r},382:function(e,t,o){"use strict";o.r(t);o(80);var r={name:"TextInput",props:{dynamicId:{type:String,default:"",required:!1},value:{type:String,default:"",required:!1},width:{type:String,default:"300px",required:!1},index:{type:Number,default:0,required:!1},title:{type:String,default:"",required:!1},placeHolder:{type:String,default:"Please enter some text",required:!1},isUppercase:{type:Boolean,default:!1,required:!1},showError:{type:Boolean,default:!1,required:!1},isRequired:{type:Boolean,default:!1,required:!1},showTitle:{type:Boolean,default:!0,required:!1},addressFinder:{type:Boolean,default:!1,required:!1}},data:function(){return{inputValue:"",autocomplete:""}},computed:{isTitleVisible:function(){return""!==this.title&&this.showTitle}},mounted:function(){this.inputValue=this.value;var input=this.$refs.searchTextField;this.autocomplete=new this.$google.maps.places.Autocomplete(input,{componentRestrictions:{country:"gb"},types:["geocode"],fields:["address_component","formatted_address"]})},methods:{returnValue:function(){this.$emit("inputValue",this.inputValue)},getAddressData:function(){var e=this;this.autocomplete.addListener("place_changed",(function(){var t=e.autocomplete.getPlace();e.inputValue=t.formatted_address,e.$emit("inputValue",t)}))}}},n=(o(376),o(17)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"text-container"},[e.isTitleVisible?o("span",{staticClass:"text-container__title"},[e._v(e._s(e.title)+"\n    "),e.isRequired?o("p",[e._v("*")]):e._e()]):e._e(),e._v(" "),e.addressFinder?o("input",{ref:"searchTextField",staticClass:"text-container__input box-shadow",class:e.isUppercase&&"uppercase",style:"width: "+e.width,attrs:{id:e.dynamicId,placeholder:e.placeHolder},domProps:{value:e.value},on:{change:e.getAddressData}}):o("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],staticClass:"text-container__input box-shadow",class:e.isUppercase&&"uppercase",style:"width: "+e.width,attrs:{id:e.dynamicId,placeholder:e.placeHolder,type:"text"},domProps:{value:e.inputValue},on:{change:e.returnValue,input:function(t){t.target.composing||(e.inputValue=t.target.value)}}}),e._v(" "),e.showError?o("span",{staticClass:"text-container__error"},[e._v("Please enter a valid "+e._s(e.title))]):e._e()])}),[],!1,null,null,null);t.default=component.exports},385:function(e,t,o){"use strict";o(375)},386:function(e,t,o){var r=o(48)(!1);r.push([e.i,".location-box{background-color:var(--color-white-1);border-radius:15px;padding:30px}.location-box__logo{width:200px;margin:0 auto;display:flex}.location-box__body{color:var(--color-black-1);margin:30px 0;font-size:18px}@media(max-width:1024px){.location-box__body{text-align:center}}.location-box__search{display:flex;margin-bottom:20px}.location-box__search--field{width:100%}.location-box__search--button{margin-left:15px}.location-box__error{color:var(--color-pink-1);font-weight:300;margin-top:10px}",""]),e.exports=r},397:function(e,t,o){"use strict";o.r(t);var r=o(2),n=(o(27),o(39),{name:"LocationBox",props:{formattedAddress:{type:String,default:"",required:!1}},data:function(){return{loading:!1}},methods:{updateAddress:function(address){this.setLocation(address)},locatorButtonPressed:function(){var e=this;this.loading=!0,navigator.geolocation.getCurrentPosition((function(t){e.getStreetAddressFrom(t.coords.latitude,t.coords.longitude)}),(function(t){e.loading=!1,console.log(t.message)}))},getStreetAddressFrom:function(e,t){var o=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var n,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.$axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(e,",").concat(t,"&key=").concat("AIzaSyC_gWbzZHOo1xpc9eOgzgqUa44PGdGY4Pg"));case 3:n=r.sent,data=n.data,o.addressValue=data.results[0].formatted_address,o.setLocation(data.results[0]),o.loading=!1,r.next=13;break;case 10:r.prev=10,r.t0=r.catch(0),console.log(r.t0.message);case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()},setLocation:function(e){this.$cookies.set("customer_location",e),this.$emit("addressChanged",e)}}}),l=(o(385),o(17)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"location-box box-shadow"},[r("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"location-box__logo",attrs:{"data-src":o(361)}}),e._v(" "),r("p",{staticClass:"location-box__body"},[e._v("\n    We're delivering London's best home cook's food straight to you door.\n  ")]),e._v(" "),r("div",{staticClass:"location-box__search"},[r("text-input",{staticClass:"location-box__search--field",attrs:{width:"95%",title:"Postcode",value:e.formattedAddress,"show-title":!1,"address-finder":!0,"place-holder":"Start typing your address..."},on:{inputValue:e.updateAddress}}),e._v(" "),r("dynamic-button",{staticClass:"location-box__search--button",attrs:{width:"70px",icon:e.loading?"spinner":"location-arrow",spinning:e.loading,color:"pink",height:"48px"},on:{clickEvent:e.locatorButtonPressed}})],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TextInput:o(382).default,DynamicButton:o(234).default})}}]);