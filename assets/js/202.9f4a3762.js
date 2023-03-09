(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{537:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue-router-重复点击报错"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-router-重复点击报错"}},[t._v("#")]),t._v(" vue-router 重复点击报错")]),t._v(" "),s("h2",{attrs:{id:"📖-前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#📖-前言"}},[t._v("#")]),t._v(" 📖. 前言")]),t._v(" "),s("p",[t._v("总结一下，在项目中遇到的一个小问题，使用 Vue 构建的项目里，有时候会存在 "),s("strong",[t._v("重复点击路由")]),t._v(" 报错的问题，"),s("code",[t._v("Uncaught (in promise) NavigationDuplicated:Avoided redundant navigation to current location")]),t._v("。")]),t._v(" "),s("p",[t._v("虽然这个报错并不影响程序的正常运行，但是依然让人感到很不爽，这段代码也差不多是我在构建项目时用的挺多的一段代码。")]),t._v(" "),s("p",[t._v("而且诶，应该也有很多萌新遇到过这个问题，但是不知道如何解决，所以在这边记录一下。")]),t._v(" "),s("p",[t._v("造成这个报错的原因，大多是说，因为 Vue-Router 版本的问题，所以我尝试更换了不同版本，但是并没有得到解决，还是这段代码好使！")]),t._v(" "),s("h2",{attrs:{id:"一-解决方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-解决方法"}},[t._v("#")]),t._v(" 一. 解决方法")]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("router/index.js")]),t._v(" 文件中添加一段代码即可：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 解决重复点击路由报错的 Bug")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" originalPush "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("push\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("push")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("location")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("originalPush")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("当然你也可以添加在 "),s("code",[t._v("main.js")]),t._v(" 中，我更习惯于添加在 "),s("code",[t._v("router/index.js")]),t._v("。")])])}),[],!1,null,null,null);s.default=e.exports}}]);