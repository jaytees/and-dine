(window.webpackJsonp=window.webpackJsonp||[]).push([[13,4,10],{369:function(t,e,o){"use strict";o.r(e);o(14),o(32);var n={props:{title:{type:String,default:"",required:!0},description:{type:String,default:"",required:!0},image:{type:String,default:"https://nuxtjs.org/nuxt-card.png",required:!0}},head:function(){return{meta:[{hid:"twitter:title",name:"twitter:title",content:this.title},{hid:"twitter:description",name:"twitter:description",content:this.description},{hid:"twitter:image",name:"twitter:image",content:this.image},{hid:"twitter:image:alt",name:"twitter:image:alt",content:this.title},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:image:secure_url",property:"og:image:secure_url",content:this.image},{hid:"og:image:alt",property:"og:image:alt",content:this.title}]}}},r=o(12),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._e()}),[],!1,null,null,null);e.default=component.exports},372:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},377:function(t,e,o){var content=o(385);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("6b17420c",content,!0,{sourceMap:!1})},384:function(t,e,o){"use strict";o(377)},385:function(t,e,o){var n=o(39)(!1);n.push([t.i,".faqs{margin-top:-30px;border-radius:0 0 15px 15px}.faqs__content h2{color:var(--color-white-1);max-width:100%;padding:40px}.faqs__list{margin:0;padding:0}.faqs__list--title{display:flex;justify-content:space-between;align-items:center}.faqs__list--title svg{color:var(--color-white-1);float:right}.faqs__list li{list-style:none;background-color:var(--color-pink-1);border:1px solid var(--color-pink-1);border-radius:15px;padding:20px;margin:20px;cursor:pointer}.faqs__list li:hover{opacity:.9}.faqs__list h3,.faqs__list p{text-align:left;color:var(--color-white-1)}.faqs__list p{display:none}.faqs__list .show-faq{display:block}",""]),t.exports=n},393:function(t,e,o){var content=o(409);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("d0907b74",content,!0,{sourceMap:!1})},402:function(t,e,o){"use strict";o.r(e);var n={name:"Faqs",data:function(){return{faqs:[{title:"I have a food allergy. Should I order meals from &Dine?",body_1:"All food purchased on &Dine is prepared in kitchens where nuts, gluten and other known allergens maybe present. Please note whilst home cooks take caution to prevent cross-contamination, any product may contain traces as entire menus are produced in the same kitchen.",body_2:"Therefore, if you have a severe food allergy, we would recommend not ordering from &Dine at this time as you will be doing so at your own risk."},{title:"Can I return the &Dine delivery bags?",body_1:"Our &Dine bags are designed to be reused! Once you have collected 3 or more delivery bags, feel free to sign up for a pick-up, which can be sent to hello@anddine.co.uk and receive discount on your next order. ",body_2:"We are currently hosting bag pick-up's on a monthly basis. By emailing to arrange a pickup you will be notified when the next pick-up in your area is scheduled. You'll receive a food credit as soon as we pick up your bags. Please do not hand off bags or throw bags away. ",body_3:"To receive your recycling credit and return the bags properly, please email us. Thanks so much!"}],showFaq:!1}},methods:{toggleFaq:function(t){this.showFaq===t?this.showFaq=!1:this.showFaq=t}}},r=(o(384),o(12)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"faqs"},[o("div",{staticClass:"faqs__content"},[o("ul",{staticClass:"faqs__list"},t._l(t.faqs,(function(e,i){return o("li",{key:i,on:{click:function(e){return t.toggleFaq(i)}}},[o("div",{staticClass:"faqs__list--title"},[o("h3",[t._v(t._s(e.title))]),t._v(" "),t.showFaq===i?o("fa",{attrs:{icon:["fa","angle-down"]}}):o("fa",{attrs:{icon:["fa","angle-right"]}})],1),t._v(" "),o("p",{class:t.showFaq===i?"show-faq animate__animated animate__fadeInDown ":"animate__animated animate__fadeInUp"},[t._v("\n          "+t._s(e.body_1)+"\n        ")]),t._v(" "),o("p",{class:t.showFaq===i?"show-faq animate__animated animate__fadeInDown ":"animate__animated animate__fadeInUp"},[t._v("\n          "+t._s(e.body_2)+"\n        ")]),t._v(" "),o("p",{class:t.showFaq===i?"show-faq animate__animated animate__fadeInDown ":"animate__animated animate__fadeInUp"},[t._v("\n          "+t._s(e.body_3)+"\n        ")])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},406:function(t,e,o){t.exports=o.p+"img/woman-about.a47c790.png"},407:function(t,e,o){t.exports=o.p+"img/couple-about.be32a93.png"},408:function(t,e,o){"use strict";o(393)},409:function(t,e,o){var n=o(39),r=o(372),l=o(410),c=n(!1),d=r(l);c.push([t.i,".about{margin-bottom:200px}@media(max-width:768px){.about{margin-bottom:300px}}.about__hero{margin-top:70px;width:100%;background-image:url("+d+");background-size:cover;background-repeat:no-repeat;background-position:50%;display:flex;z-index:-999;height:500px}@media(max-width:768px){.about__hero{height:300px}}.about__title{color:var(--color-pink-1);margin:40px auto 0;text-align:center}.about__column{display:flex;padding:20px 5%;width:90%;align-items:center}@media(max-width:768px){.about__column{display:-webkit-box;display:-moz-box;display:box;-webkit-box-orient:vertical;box-orient:vertical;width:100%;padding:0}}.about__column--image,.about__column--text{width:50%;padding:50px}@media(max-width:768px){.about__column--image,.about__column--text{padding:20px 5%;width:90%}}.about__column--image span,.about__column--text span{font-weight:900}.about__column--image img,.about__column--text img{width:80%;border-radius:15px}@media(max-width:768px){.about__column--image img,.about__column--image p,.about__column--text img,.about__column--text p{width:100%}}@media(max-width:768px){.about__column--text{-webkit-box-ordinal-group:2}}.about__faqs{padding:20px 5%;width:90%}",""]),t.exports=c},410:function(t,e,o){t.exports=o.p+"img/hero-about.292d4db.png"},446:function(t,e,o){"use strict";o.r(e);var n={name:"About"},r=(o(408),o(12)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"about"},[n("social-head",{attrs:{title:"Real People, Real Food.",description:"&Dine is a marketplace platform connecting talented home chefs with customers to process and deliver orders of authentic home made meals.",image:"~/assets/images/logo-pink.png"}}),t._v(" "),n("div",{staticClass:"about__hero animate__animated animate__fadeIn"}),t._v(" "),n("h1",{staticClass:"about__title"},[t._v("Real People, Real Food.")]),t._v(" "),n("div",{staticClass:"about__column"},[t._m(0),t._v(" "),n("div",{staticClass:"about__column--image",attrs:{"data-aos":"fade-left"}},[n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"box-shadow",attrs:{"data-src":o(406)}})])]),t._v(" "),n("div",{staticClass:"about__column"},[n("div",{staticClass:"about__column--image",attrs:{"data-aos":"fade-right"}},[n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"box-shadow",attrs:{"data-src":o(407)}})]),t._v(" "),t._m(1)]),t._v(" "),n("h2",{staticClass:"about__title"},[t._v("FAQs")]),t._v(" "),n("faqs",{staticClass:"about__faqs"})],1)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"about__column--text"},[o("p",[o("span",[t._v("&Dine")]),t._v(" is a marketplace platform connecting talented home\n        chefs with customers to process and deliver orders of authentic home\n        made meals. All of our home chefs are trained and certified to provide\n        a safe and trusted method of ordering.\n      ")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"about__column--text"},[o("p",[t._v("\n        Anyone who is passionate about cooking can apply to sell through\n        &Dine. Whether you are an eager home cook with no professional kitchen\n        experience or a trained chef looking for a new challenge, our team can\n        help you access the tools and resources needed to prepare food safely\n        and share your passion for cooking food with your community.\n      ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SocialHead:o(369).default,Faqs:o(402).default})}}]);