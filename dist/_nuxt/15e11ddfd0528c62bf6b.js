(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{197:function(t,e,o){var content=o(234);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(51).default)("5db11919",content,!0,{sourceMap:!1})},198:function(t,e,o){var content=o(236);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(51).default)("5b4687c8",content,!0,{sourceMap:!1})},233:function(t,e,o){"use strict";var r=o(197);o.n(r).a},234:function(t,e,o){(e=o(50)(!1)).push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{transform:rotateX(0deg)}}@keyframes turn{to{transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""]),t.exports=e},235:function(t,e,o){"use strict";var r=o(198);o.n(r).a},236:function(t,e,o){(e=o(50)(!1)).push([t.i,"a[data-v-6c2f0670]{text-decoration:none;color:#fff}img[data-v-6c2f0670]{max-width:100%}.label[data-v-6c2f0670]{position:relative;text-align:center;color:#fff}.top-right[data-v-6c2f0670]{position:absolute;top:8px;right:16px;background-color:rgba(0,0,0,.25);padding:1rem}",""]),t.exports=e},238:function(t,e,o){"use strict";o.r(e);o(1),o(233);var r=o(31),n=(Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"VueToNuxtLogo"},[e("div",{staticClass:"Triangle Triangle--two"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--one"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--three"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null).exports,o(191)),l=o.n(n),d={data:function(){return{loading:!0,photos:[],errored:!1}},mounted:function(){var t=this;l.a.get("https://api.unsplash.com/search/photos/?client_id=t0h1DkcGnN1lh2DgD5fUKS_KQc1hXln8SCBcQWmqPbk&query=seattle-city").then((function(e){return t.photos=e.data.results})).catch((function(e){console.log(e),t.errored=!0})).finally((function(){return t.loading=!1}))}},c=(o(235),Object(r.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._m(0),t._v(" "),o("section",t._l(t.photos,(function(e){return o("div",{key:e.id,staticClass:"container-fluid",attrs:{photo:e}},[o("div",{staticClass:"label col-md-auto"},[o("img",{attrs:{src:e.urls.regular,alt:e.alt_description}}),t._v(" "),o("div",{staticClass:"top-right"},[o("a",{attrs:{href:e.links.html}},[t._v(t._s(e.user.name))])])])])})),0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt-5 mb-5"},[e("h1",[this._v("We Love Seattle!")]),this._v(" "),e("p",{staticClass:"lead pl-5 pr-5"},[this._v('Come with us as we explore the beauty of our city, Seattle!\n      "Seattle Loves" was created as a portfolio piece for my front-end web development course through the University of Washington.\n      The images on this site are provided through the unSplash.com API.')]),this._v(" "),e("p",[this._v("Click on the photo label to learn more about the photo and photographer. Link will take you to Unsplash.com")]),this._v(" "),e("h4",{staticClass:"pt-3"},[this._v("Check Out Our Beautiful City Below!")])])}],!1,null,"6c2f0670",null));e.default=c.exports}}]);