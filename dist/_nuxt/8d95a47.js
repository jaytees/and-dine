(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{339:function(e,t,l){var content=l(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(66).default)("32535ef1",content,!0,{sourceMap:!1})},342:function(e,t,l){"use strict";l(339)},343:function(e,t,l){var r=l(65)(!1);r.push([e.i,".images{position:relative;margin:0 auto;width:100%}@media(max-width:768px){.images{display:inline;padding:0}}.images__list{width:26%;cursor:pointer;float:left;position:relative;padding:0 2%}@media(max-width:1024px){.images__list{padding:0 2%;width:40%;margin:0}}@media(max-width:768px){.images__list{padding:0;width:90%;margin:0}}.images__list:hover{opacity:.8}@media(max-width:768px){.images__list{display:inline-block}}.images__list--image-title{margin:15px 0 0}.images__list--image-subtitle{margin:0 0 10px}.images__list--background-image{height:200px;width:100%;border-radius:5px;box-shadow:0 5px 5px 0 var(--color-grey-2)}.images__list--background-image,.images__list--profile-image{background-position:50%;background-size:cover;background-color:var(--color-purple-1)}.images__list--profile-image{position:relative;bottom:80px;left:75%;width:100px;height:100px;margin-bottom:-110px;border-radius:50%;border:4px solid var(--color-white-1)}@media(max-width:768px){.images__list--profile-image{left:70%}}",""]),e.exports=r},348:function(e,t,l){"use strict";l.r(t);var r={name:"ImageList",props:{imageTitle:{type:String,default:"",required:!1},imageSubtitle:{type:String,default:"",required:!1},backgroundImage:{type:String,default:"",required:!1},profileImage:{type:String,default:"",required:!1}},methods:{returnClickEvent:function(){this.$emit("clickEvent",!0)}}},o=(l(342),l(50)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"images"},[l("div",{staticClass:"images__list",on:{click:e.returnClickEvent}},[l("div",{staticClass:"images__list--background-image",style:e.backgroundImage?"background-image: url("+e.backgroundImage+")":"~/assets/images/comingsoon.png"}),e._v(" "),e.profileImage?l("div",[l("div",{staticClass:"images__list--profile-image",style:e.profileImage?"background-image: url("+e.profileImage+")":"~/assets/images/comingsoon.png"})]):e._e(),e._v(" "),l("h3",{staticClass:"images__list--image-title"},[e._v(e._s(e.imageTitle))]),e._v(" "),l("h4",{staticClass:"images__list--image-subtitle"},[e._v(e._s(e.imageSubtitle))])])])}),[],!1,null,null,null);t.default=component.exports}}]);