(window.webpackJsonp=window.webpackJsonp||[]).push([[13,3,6,10],{352:function(e,t,o){var content=o(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(44).default)("f61a011e",content,!0,{sourceMap:!1})},353:function(e,t,o){"use strict";o(352)},354:function(e,t,o){var r=o(43)(!1);r.push([e.i,'.text-container__input{cursor:text;position:relative;display:block;height:42px;line-height:3;border-radius:5px;background-color:var(--color-white-1);-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 10px;color:var(--color-grey-1);font-family:"Circular",sans-serif}.text-container__error,.text-container__title{display:flex}.text-container__title{margin-bottom:10px;color:var(--color-grey-1)}.text-container__error,.text-container__title p{color:var(--color-pink-1)}.text-container__error{margin-top:10px}.uppercase{text-transform:uppercase}',""]),e.exports=r},355:function(e,t,o){var content=o(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(44).default)("73297393",content,!0,{sourceMap:!1})},357:function(e,t,o){"use strict";o.r(t);o(114);var r={namme:"TextInput",props:{value:{type:String,default:"",required:!1},width:{type:String,default:"300px",required:!1},index:{type:Number,default:0,required:!1},title:{type:String,default:"",required:!1},placeHolder:{type:String,default:"Please enter some text",required:!1},isUppercase:{type:Boolean,default:!1,required:!1},showError:{type:Boolean,default:!1,required:!1},isRequired:{type:Boolean,default:!1,required:!1},showTitle:{type:Boolean,default:!0,required:!1}},data:function(){return{inputValue:""}},computed:{isTitleVisible:function(){return""!==this.title&&this.showTitle}},mounted:function(){this.inputValue=this.value},methods:{returnValue:function(){this.$emit("inputValue",this.inputValue)}}},n=(o(353),o(25)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"text-container"},[e.isTitleVisible?o("span",{staticClass:"text-container__title"},[e._v(e._s(e.title)+"\n    "),e.isRequired?o("p",[e._v("*")]):e._e()]):e._e(),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],staticClass:"text-container__input",class:e.isUppercase&&"uppercase",style:"width: "+e.width,attrs:{placeholder:e.placeHolder,type:"text"},domProps:{value:e.inputValue},on:{change:e.returnValue,input:function(t){t.target.composing||(e.inputValue=t.target.value)}}}),e._v(" "),e.showError?o("span",{staticClass:"text-container__error"},[e._v("Please enter a valid "+e._s(e.title))]):e._e()])}),[],!1,null,null,null);t.default=component.exports},358:function(e,t,o){e.exports=o.p+"img/popup-pink.a103e51.png"},359:function(e,t,o){var content=o(370);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(44).default)("f996bf66",content,!0,{sourceMap:!1})},360:function(e,t,o){"use strict";o(355)},361:function(e,t,o){var r=o(43)(!1);r.push([e.i,'.dropdown-container__select{cursor:pointer;position:relative;display:block;height:45px;line-height:3;border-radius:5px;background-color:var(--color-white-1);-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 10px;color:var(--color-grey-1);border:2px solid;font-family:"Circular",sans-serif}.dropdown-container__title{padding:10px 0;display:flex;color:var(--color-grey-1)}.dropdown-container__title p{color:var(--color-pink-1)}',""]),e.exports=r},367:function(e,t,o){"use strict";o.r(t);o(114);var r={name:"DropDown",props:{selected:{type:String,default:"",required:!1},width:{type:String,default:"320px",required:!1},index:{type:Number,default:0,required:!1},title:{type:String||Boolean,default:!1,required:!1},options:{type:Array,default:function(){return[]},required:!0},showError:{type:Boolean,default:!1,required:!1},isRequired:{type:Boolean,default:!1,required:!1}},data:function(){return{selectedValue:""}},watch:{selectedValue:function(e,t){e!==t&&this.$emit("selectedValue",e)},selected:function(e,t){this.selectedValue=e}},mounted:function(){this.selectedValue=this.selected}},n=(o(360),o(25)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"dropdown-container"},[e.title?o("span",{staticClass:"dropdown-container__title"},[e._v(e._s(e.title)+"\n    "),e.isRequired?o("p",[e._v("*")]):e._e()]):e._e(),e._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedValue,expression:"selectedValue"}],staticClass:"dropdown-container__select",style:"width: "+e.width,on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedValue=t.target.multiple?o:o[0]}}},[o("option",{attrs:{value:""}},[e._v("Please select and option")]),e._v(" "),e._l(e.options,(function(option,t){return o("option",{key:"option_"+t,domProps:{value:option}},[e._v("\n      "+e._s(option)+"\n    ")])}))],2)])}),[],!1,null,null,null);t.default=component.exports},369:function(e,t,o){"use strict";o(359)},370:function(e,t,o){var r=o(43)(!1);r.push([e.i,".join-form{background-color:var(--color-white-1);border-radius:5px;padding:30px;box-shadow:0 5px 5px 0 var(--color-grey-2)}.join-form__logo{width:200px;margin:0 auto;display:flex}.join-form__body{color:var(--color-grey-1);margin:0 0 30px}.join-form__required{color:var(--color-pink-1);margin:0 0 10px}.join-form__full--field,.join-form__half--field{margin-bottom:20px}.join-form__half{display:flex}.join-form__half--field{width:90%}.join-form__half--field:first-child{margin-right:5%}.join-form__full--field{width:100%}.join-form__error{color:var(--color-pink-1);font-weight:300;margin-top:10px}",""]),e.exports=r},378:function(e,t,o){var content=o(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(44).default)("6a85447a",content,!0,{sourceMap:!1})},383:function(e,t,o){"use strict";o.r(t);o(35),o(23),o(30),o(45),o(26),o(46);var r=o(12),n=o(34);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={name:"JoinForm",props:{productTypes:{type:Array,default:function(){return[]},required:!0}},data:function(){return{showPostcodeError:!1,firstName:"",lastName:"",email:"",phoneNumber:"",postcode:"",cuisine:"",showSuccess:!1}},computed:{isValidPostcode:function(){return/[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i.test(this.postcode)},isValidEmail:function(){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email)},isValidPhoneNumber:function(){return/^(?:(?:00)?44|0)7(?:[45789]\d{2}|624)\d{6}$/.test(this.phoneNumber)},areFieldsPopulated:function(){return""!==this.firstName&&""!==this.lastName&&""!==this.email&&""!==this.phoneNumber&&""!==this.postcode&&""!==this.cuisine},disableButton:function(){return this.areFieldsPopulated&&this.isValidPostcode&&this.isValidEmail&&this.isValidPhoneNumber}},methods:c(c({},Object(n.b)(["sendEmail"])),{},{updateFirstName:function(e){this.firstName=e},updateLastName:function(e){this.lastName=e},updateEmail:function(e){this.email=e},updatePhoneNumber:function(e){this.phoneNumber=e},updatePostcode:function(e){this.postcode=e},updateCuisine:function(e){this.cuisine=e},composeEmail:function(){var e=this,t={firstName:this.firstName,lastName:this.lastName,email:this.email,phoneNumber:this.phoneNumber,postcode:this.postcode,cuisine:this.cuisine};this.sendEmail(t).then((function(){return e.showSuccess})).catch((function(e){return console.log(e)}))}})},f=(o(369),o(25)),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"join-form"},[r("img",{staticClass:"join-form__logo",attrs:{src:o(358)}}),e._v(" "),e.showSuccess?r("h3",[e._v("Thanks for joining, we will contact you shorty")]):r("div",[r("h3",{staticClass:"join-form__title"},[e._v("About you")]),e._v(" "),r("h4",{staticClass:"join-form__body"},[e._v("\n      Please fill in the details below and our team will be in touch soon.\n    ")]),e._v(" "),r("h4",{staticClass:"join-form__required"},[e._v("All fields are required*")]),e._v(" "),r("div",{staticClass:"join-form__half"},[r("text-input",{staticClass:"join-form__half--field",attrs:{title:"First name",width:"90%","place-holder":"Enter your first name...","is-required":!0},on:{inputValue:e.updateFirstName}}),e._v(" "),r("text-input",{staticClass:"join-form__half--field",attrs:{title:"Last name",width:"90%","place-holder":"Enter your last name...","is-required":!0},on:{inputValue:e.updateLastName}})],1),e._v(" "),r("div",{staticClass:"join-form__full"}),e._v(" "),r("text-input",{staticClass:"join-form__full--field",attrs:{title:"Email",width:"95%","place-holder":"Enter your email...","show-error":!e.isValidEmail&&e.areFieldsPopulated,"is-required":!0},on:{inputValue:e.updateEmail}}),e._v(" "),r("text-input",{staticClass:"join-form__full--field",attrs:{title:"Phone number",width:"95%","place-holder":"Enter your phone number...","show-error":!e.isValidPhoneNumber&&e.areFieldsPopulated,"is-required":!0},on:{inputValue:e.updatePhoneNumber}}),e._v(" "),r("text-input",{staticClass:"join-form__full--field",attrs:{title:"Postcode",width:"95%","place-holder":"Enter your postcode...","show-error":!e.isValidPostcode&&e.areFieldsPopulated,"is-required":!0},on:{inputValue:e.updatePostcode}}),e._v(" "),r("drop-down",{staticClass:"join-form__full--field",attrs:{title:"Cuisine",width:"100%",options:e.productTypes,"is-required":!0},on:{selectedValue:e.updateCuisine}}),e._v(" "),r("dynamic-button",{staticClass:"join-form__full--button",attrs:{width:"100%",text:"Subscribe",color:"pink",height:"45px",disabled:!e.disableButton},on:{clickEvent:e.composeEmail}})],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TextInput:o(357).default,DropDown:o(367).default,DynamicButton:o(224).default})},387:function(e,t,o){"use strict";o(378)},388:function(e,t,o){var r=o(43),n=o(225),l=o(389),c=r(!1),d=n(l);c.push([e.i,".join__hero{padding:200px 5%;width:90%;background-image:url("+d+');background-size:cover;background-repeat:no-repeat;background-position:50%;display:flex;z-index:-999}@media(max-width:1024px){.join__hero{width:90%;display:block;background-position:top}}.join__hero--right{-webkit-animation:bounceIn .5s;animation:bounceIn .5s;width:50%;padding:5%}@media(max-width:1024px){.join__hero--right{-webkit-animation:fadeIn .5s;animation:fadeIn .5s;width:90%;padding:100px 5% 30px;text-align:center}.join__hero--right .main-title{font-size:46px}}.join__hero--right .main-body,.join__hero--right .main-title{color:var(--color-white-1)}.join__hero--right .main-body{font-size:24px;margin-top:15px;font-family:"Circular",sans-serif;text-shadow:2px 2px 8px var(--color-grey-1)}.join__hero--left{-webkit-animation:bounceIn .5s;animation:bounceIn .5s;width:50%;padding:0 5%}@media(max-width:1024px){.join__hero--left{-webkit-animation:fadeIn .5s;animation:fadeIn .5s;padding:5%;width:90%}}',""]),e.exports=c},389:function(e,t,o){e.exports=o.p+"img/pasta-background.add6a8c.jpg"},408:function(e,t,o){"use strict";o.r(t);var r=o(2),n=(o(27),o(53),{name:"Join",fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("".concat("https://mvmapi.webkul.com/api/v2/","products/types.json"),{headers:{Authorization:"Bearer YjZiNmRlZjE1ZGJiZWRlMTFmZGRmYzc0Njg0ZDIyMjYwYjcxMDQxZjEyNzA3ZGRhMzlhOTgzODAzNDE0NzYzYQ"}}).then((function(t){return e.productTypeNames=t.data.type.map((function(e){return e.type_name}))})).catch((function(e){return console.log(e)}));case 2:case"end":return t.stop()}}),t)})))()},fetchOnServer:!0,data:function(){return{productTypeNames:!1}}}),l=(o(387),o(25)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.productTypeNames?o("section",{staticClass:"join"},[o("div",{staticClass:"join__hero"},[o("div",{staticClass:"join__hero--left"},[o("join-form",{attrs:{"product-types":e.productTypeNames}})],1),e._v(" "),e._m(0)])]):e._e()}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"join__hero--right"},[o("h1",{staticClass:"main-title"},[e._v("Cook with us.")]),e._v(" "),o("h3",{staticClass:"main-body"},[e._v("\n        Sell from your kitchen and earn extra income, with hours that suit.\n        Partner with us today. you.\n      ")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{JoinForm:o(383).default})}}]);