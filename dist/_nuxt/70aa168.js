(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{409:function(e,t,r){var content=r(439);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("30c9b8c0",content,!0,{sourceMap:!1})},438:function(e,t,r){"use strict";r(409)},439:function(e,t,r){var n=r(35)(!1);n.push([e.i,'.text-container__input{cursor:text;position:relative;height:47px;line-height:3;border-radius:5px;border:1px solid var(--color-grey-2);background-color:var(--color-white-1);-webkit-appearance:none;-moz-appearance:none;appearance:none;color:var(--color-grey-1);font-family:"GalanoGrotesque-Medium",sans-serif;display:block;overflow:hidden;padding:0 20% 0 10px}.text-container__error,.text-container__title{display:flex}.text-container__title{margin-bottom:10px;color:var(--color-grey-1)}.text-container__error,.text-container__title p{color:var(--color-pink-1)}.text-container__error{margin-top:10px}.uppercase{text-transform:uppercase}',""]),e.exports=n},462:function(e,t,r){"use strict";r.r(t);r(83);var n={name:"TextInput",props:{dynamicId:{type:String,default:"",required:!1},value:{type:String,default:"",required:!1},width:{type:String,default:"300px",required:!1},index:{type:Number,default:0,required:!1},title:{type:String,default:"",required:!1},placeHolder:{type:String,default:"Please enter some text",required:!1},isUppercase:{type:Boolean,default:!1,required:!1},showError:{type:Boolean,default:!1,required:!1},isRequired:{type:Boolean,default:!1,required:!1},showTitle:{type:Boolean,default:!0,required:!1},addressFinder:{type:Boolean,default:!1,required:!1}},data:function(){return{inputValue:"",autocomplete:""}},computed:{isTitleVisible:function(){return""!==this.title&&this.showTitle}},mounted:function(){this.inputValue=this.value;var input=this.$refs.searchTextField;this.autocomplete=new this.$google.maps.places.Autocomplete(input,{componentRestrictions:{country:"gb"},types:["geocode"],fields:["address_component","formatted_address"]})},methods:{returnValue:function(){this.$emit("inputValue",this.inputValue)},getAddressData:function(){var e=this;this.autocomplete.addListener("place_changed",(function(){var t=e.autocomplete.getPlace();e.inputValue=t.formatted_address,e.$emit("inputValue",t)}))}}},o=(r(438),r(12)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-container"},[e.isTitleVisible?r("span",{staticClass:"text-container__title"},[e._v(e._s(e.title)+"\n    "),e.isRequired?r("p",[e._v("*")]):e._e()]):e._e(),e._v(" "),e.addressFinder?r("input",{ref:"searchTextField",staticClass:"text-container__input",class:e.isUppercase&&"uppercase",style:"width: "+e.width,attrs:{id:e.dynamicId,placeholder:e.placeHolder},domProps:{value:e.value},on:{keydown:e.getAddressData}}):r("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],staticClass:"text-container__input",class:e.isUppercase&&"uppercase",style:"width: "+e.width,attrs:{id:e.dynamicId,placeholder:e.placeHolder,type:"text"},domProps:{value:e.inputValue},on:{change:e.returnValue,input:function(t){t.target.composing||(e.inputValue=t.target.value)}}}),e._v(" "),e.showError?r("span",{staticClass:"text-container__error"},[e._v("Please enter a valid "+e._s(e.title))]):e._e()])}),[],!1,null,null,null);t.default=component.exports}}]);