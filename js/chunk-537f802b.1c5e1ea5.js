(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-537f802b"],{2665:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("div",{staticClass:"custom-table_wrapper"},[n("div",{staticClass:"table_title",staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[n("span",[t._v(" تقرير المصروفات ")]),n("v-form",{on:{submit:function(e){return e.preventDefault(),t.filterExpenses.apply(null,arguments)}}},[n("v-text-field",{staticStyle:{display:"inline-flex",width:"300px"},attrs:{type:"number",label:"السنة",outlined:"","single-line":"","hide-details":"",dense:"",disabled:t.loading.list},model:{value:t.filterForm.year,callback:function(e){t.$set(t.filterForm,"year",e)},expression:"filterForm.year"}}),n("v-btn",{staticClass:"time-chip",attrs:{color:"primary",label:"","text-color":"white",type:"submit",disabled:t.loading.list}},[t._v(" اذهب ")])],1)],1),n("div",{staticClass:"custom-table"},[n("table",[n("thead",[n("tr",[n("th",{staticClass:"sticky-first"},[t._v(" المصروفات ")]),t._l(t.listHeader,(function(e,i){return n("th",{key:i},[t._v(" "+t._s(e.month_name)+" ")])}))],2)]),n("tbody",[t.loading.list?n("tr",[n("td",{staticClass:"progress-linear-table",attrs:{colspan:"14"}},[n("v-progress-linear",{attrs:{indeterminate:""}})],1)]):t._e(),t.no_items?n("tr",[n("td",[t._v(" لا يوجد عناصر ")])]):t._e(),n("tr",[n("td",[t._v(" المصاريف الثابتة ")]),t._l(t.list.expenses_fixed,(function(e,i){return n("td",{key:i,attrs:{"data-prefix":t.listHeader[i].month_name}},[t._v(" "+t._s(e||0)+" ")])}))],2),n("tr",[n("td",[t._v(" المصاريف المتغيرة ")]),t._l(t.list.expenses_static,(function(e,i){return n("td",{key:i,attrs:{"data-prefix":t.listHeader[i].month_name}},[t._v(" "+t._s(e||0)+" ")])}))],2),n("tr",[n("td",[t._v(" الإجمالي ")]),t._l(t.list.expenses_static,(function(e,i){return n("td",{key:i,attrs:{"data-prefix":"إجمالي "+t.listHeader[i].month_name}},[t._v(" "+t._s(e+t.list.expenses_fixed[i]||0)+" ")])}))],2),!t.no_items&&t.totalOfEveryMonth.length>0?n("tr",[n("td",{staticClass:"total-in-mobile"},[t._v(" الإجمالي ")]),t._l(t.totalOfEveryMonth.slice(0,12),(function(e,i){return n("td",{key:i,attrs:{"data-prefix":"إجمالي شهر "+t.listHeader[i].month_name}},[t._v(" "+t._s(e)+" ")])})),n("td",{attrs:{"data-prefix":"إجمالي كل الشهور"}},[t._v(" "+t._s(t.totalOfEveryMonth[12])+" ")])],2):t._e()])])])])])},a=[],r=n("1da1"),s=(n("96cf"),n("dca8"),n("a15b"),n("d3b7"),n("159b"),n("07ac"),n("0ad7")),o=s["a"].get("expensesReport"),l={name:"ExpensesReports",data:function(){return{loading:{list:!1},list:[],totalOfEveryMonth:[],page:{current:1,total:0,items:0,next_page:1},filterForm:{year:""},listHeader:Object.freeze([{month_name:"يناير"},{month_name:"فبراير"},{month_name:"مارس"},{month_name:"إبريل"},{month_name:"مايو"},{month_name:"يونيو"},{month_name:"يوليو"},{month_name:"أغسطس"},{month_name:"سبتمبر"},{month_name:"أكتوبر"},{month_name:"نوافمبر"},{month_name:"ديسمبر"},{month_name:"الإجمالي"}])}},computed:{page_number_text:function(){return this.page.items>0?[this.page.current,"-",this.page.items," من ",this.page.total].join(""):""},no_items:function(){return!this.loading.list&&0===this.list.length}},mounted:function(){this.fetchAll()},methods:{fetchAll:function(){var t=arguments,e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var i,a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=t.length>0&&void 0!==t[0]?t[0]:{},e.loading.list=!0,n.next=4,o.getAllItems(i);case 4:a=n.sent,r=a.data,e.list=e.formatList(r),e.loading.list=!1;case 8:case"end":return n.stop()}}),n)})))()},formatList:function(t){var e={},n=0,i=0;return e.expenses_static=[],e.expenses_fixed=[],t.expenses_static.forEach((function(t){var i=Object.values(t)[0]||0;e.expenses_static.push(i),n+=i})),e.expenses_static.push(n),t.expenses_fixed.forEach((function(t){var n=Object.values(t)[0]||0;e.expenses_fixed.push(n),i+=n})),e.expenses_fixed.push(i),e},filterExpenses:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.fetchAll({year:t.filterForm.year}),t.filterForm.year="";case 2:case"end":return e.stop()}}),e)})))()}}},u=l,c=(n("c4f9"),n("2877")),d=n("6544"),f=n.n(d),h=n("8336"),m=n("a523"),p=n("4bd4"),_=n("8e36"),v=n("8654"),b=Object(c["a"])(u,i,a,!1,null,"2281bf38",null);e["default"]=b.exports;f()(b,{VBtn:h["a"],VContainer:m["a"],VForm:p["a"],VProgressLinear:_["a"],VTextField:v["a"]})},"4bd4":function(t,e,n){"use strict";var i=n("5530"),a=(n("caad"),n("2532"),n("07ac"),n("4de4"),n("d3b7"),n("159b"),n("7db0"),n("58df")),r=n("7e2b"),s=n("3206");e["a"]=Object(a["a"])(r["a"],Object(s["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,n=function(t){return t.$watch("hasError",(function(n){e.$set(e.errorBag,t._uid,n)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(a){a&&(e.errorBag.hasOwnProperty(t._uid)||(i.valid=n(t)))})):i.valid=n(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var n=this.watchers.find((function(t){return t._uid===e._uid}));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(i["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"747d":function(t,e,n){},c4f9:function(t,e,n){"use strict";n("747d")}}]);
//# sourceMappingURL=chunk-537f802b.1c5e1ea5.js.map