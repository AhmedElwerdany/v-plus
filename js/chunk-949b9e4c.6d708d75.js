(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-949b9e4c"],{"0fd9":function(t,a,e){"use strict";var l=e("ade3"),o=e("5530"),s=(e("d3b7"),e("caad"),e("2532"),e("99af"),e("b64b"),e("ac1f"),e("5319"),e("4ec9"),e("3ca3"),e("ddb0"),e("159b"),e("4b85"),e("2b0e")),i=e("d9f7"),n=e("80d2"),d=["sm","md","lg","xl"],r=["start","end","center"];function c(t,a){return d.reduce((function(e,l){return e[t+Object(n["I"])(l)]=a(),e}),{})}var _=function(t){return[].concat(r,["baseline","stretch"]).includes(t)},u=c("align",(function(){return{type:String,default:null,validator:_}})),f=function(t){return[].concat(r,["space-between","space-around"]).includes(t)},b=c("justify",(function(){return{type:String,default:null,validator:f}})),m=function(t){return[].concat(r,["space-between","space-around","stretch"]).includes(t)},v=c("alignContent",(function(){return{type:String,default:null,validator:m}})),h={align:Object.keys(u),justify:Object.keys(b),alignContent:Object.keys(v)},p={align:"align",justify:"justify",alignContent:"align-content"};function g(t,a,e){var l=p[t];if(null!=e){if(a){var o=a.replace(t,"");l+="-".concat(o)}return l+="-".concat(e),l.toLowerCase()}}var x=new Map;a["a"]=s["a"].extend({name:"v-row",functional:!0,props:Object(o["a"])(Object(o["a"])(Object(o["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:_}},u),{},{justify:{type:String,default:null,validator:f}},b),{},{alignContent:{type:String,default:null,validator:m}},v),render:function(t,a){var e=a.props,o=a.data,s=a.children,n="";for(var d in e)n+=String(e[d]);var r=x.get(n);return r||function(){var t,a;for(a in r=[],h)h[a].forEach((function(t){var l=e[t],o=g(a,t,l);o&&r.push(o)}));r.push((t={"no-gutters":e.noGutters,"row--dense":e.dense},Object(l["a"])(t,"align-".concat(e.align),e.align),Object(l["a"])(t,"justify-".concat(e.justify),e.justify),Object(l["a"])(t,"align-content-".concat(e.alignContent),e.alignContent),t)),x.set(n,r)}(),t(e.tag,Object(i["a"])(o,{staticClass:"row",class:r}),s)}})},1681:function(t,a,e){},"4bd4":function(t,a,e){"use strict";var l=e("5530"),o=(e("caad"),e("2532"),e("07ac"),e("4de4"),e("d3b7"),e("159b"),e("7db0"),e("58df")),s=e("7e2b"),i=e("3206");a["a"]=Object(o["a"])(s["a"],Object(i["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var a=Object.values(t).includes(!0);this.$emit("input",!a)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var a=this,e=function(t){return t.$watch("hasError",(function(e){a.$set(a.errorBag,t._uid,e)}),{immediate:!0})},l={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?l.shouldValidate=t.$watch("shouldValidate",(function(o){o&&(a.errorBag.hasOwnProperty(t._uid)||(l.valid=e(t)))})):l.valid=e(t),l},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var a=this.inputs.find((function(a){return a._uid===t._uid}));if(a){var e=this.watchers.find((function(t){return t._uid===a._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==a._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==a._uid})),this.$delete(this.errorBag,a._uid)}}},render:function(t){var a=this;return t("form",{staticClass:"v-form",attrs:Object(l["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return a.$emit("submit",t)}}},this.$slots.default)}})},a844:function(t,a,e){"use strict";var l=e("5530"),o=(e("a9e3"),e("1681"),e("8654")),s=e("58df"),i=Object(s["a"])(o["a"]);a["a"]=i.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(l["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},o["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(t){var a=this;this.$nextTick((function(){var e;t?a.calculateInputHeight():null==(e=a.$refs.input)||e.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var a=t.scrollHeight,e=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(e,a)+"px"}},genInput:function(){var t=o["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){o["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},d3a5:function(t,a,e){"use strict";e.r(a);var l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-card",[e("v-form",{attrs:{disabled:!t.permissions.update||!t.permissions.add},on:{submit:function(a){return a.preventDefault(),t.submitForm()}}},[e("v-row",{staticClass:"px-10 pt-4",attrs:{justify:"space-between",align:"center"}},[e("span",[t._v("مصاريف سنة")])]),e("v-row",{staticClass:"px-7 pt-4",attrs:{justify:"space-between",align:"center"}},[e("v-col",{staticClass:"pb-0 pb-0 pl-1",attrs:{cols:"12",md:"3"}},[e("v-text-field",{staticClass:"mb-0",attrs:{type:"number",label:"ادخل السنة",dense:"",outlined:""},model:{value:t.year,callback:function(a){t.year=a},expression:"year"}})],1),e("v-col",{staticClass:"mb-0 mt-0 pt-0 pr-0",attrs:{cols:"6",md:"5"}},[e("v-btn",{staticClass:"time-chip",attrs:{color:"primary",label:"","text-color":"white"},on:{click:function(a){return t.fetchAllItems(t.year)}}},[e("span",[t._v("أذهب")])])],1),e("v-col",{staticClass:"text-left mt-0 pt-0",attrs:{cols:"6",md:"4"}},[e("v-btn",{staticClass:"time-chip",attrs:{color:"primary",label:"","text-color":"white",type:"submit",disabled:t.disabled||!t.permissions.update||!t.permissions.add}},[e("v-icon",{attrs:{left:"",small:""}},[t._v(" mdi-content-save ")]),e("span",[t._v("حفظ التعديلات")])],1)],1)],1),e("div",{staticClass:"mt-10 mx-10"},[e("h2",[t._v("شهر يناير")]),e("v-row",{staticClass:"mt-2"},[e("v-col",{attrs:{cols:"12",lg:"3",md:"4"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("اجمالي المصاريف الثابتة")]),e("v-text-field",{attrs:{disabled:t.disabled,type:"number",label:"إجمالي المصاريف الثابتة","single-line":"",outlined:""},model:{value:t.dataOfYear.total_fixed_Jan,callback:function(a){t.$set(t.dataOfYear,"total_fixed_Jan",a)},expression:"dataOfYear.total_fixed_Jan"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("إجمالي المصاريف المتغيرة")]),e("v-text-field",{attrs:{disabled:t.disabled,type:"number",label:"إجمالي المصاريف المتغيرة","single-line":"",outlined:""},model:{value:t.dataOfYear.total_static_Jan,callback:function(a){t.$set(t.dataOfYear,"total_static_Jan",a)},expression:"dataOfYear.total_static_Jan"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("أجمالي مصاريف الشهر")]),e("v-text-field",{attrs:{type:"number",label:"أجمالي المصاريف الشهر","single-line":"",outlined:"",disabled:""},model:{value:t.total_month_Jan,callback:function(a){t.total_month_Jan=a},expression:"total_month_Jan"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("ملاحظات")]),e("v-textarea",{attrs:{disabled:t.disabled,label:"ملاحظات",rows:"3","single-line":"",outlined:""},model:{value:t.dataOfYear.note_Jan,callback:function(a){t.$set(t.dataOfYear,"note_Jan",a)},expression:"dataOfYear.note_Jan"}})],1)],1),e("v-divider",{staticClass:"my-3"})],1),e("div",{staticClass:"mt-10 mx-10"},[e("h2",[t._v("شهر فبراير")]),e("v-row",{staticClass:"mt-2"},[e("v-col",{attrs:{cols:"12",lg:"3",md:"4"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("اجمالي المصاريف الثابتة")]),e("v-text-field",{attrs:{disabled:t.disabled,type:"number",label:"إجمالي المصاريف الثابتة","single-line":"",outlined:""},model:{value:t.dataOfYear.total_fixed_Feb,callback:function(a){t.$set(t.dataOfYear,"total_fixed_Feb",a)},expression:"dataOfYear.total_fixed_Feb"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("إجمالي المصاريف المتغيرة")]),e("v-text-field",{attrs:{disabled:t.disabled,type:"number",label:"إجمالي المصاريف المتغيرة","single-line":"",outlined:""},model:{value:t.dataOfYear.total_static_Feb,callback:function(a){t.$set(t.dataOfYear,"total_static_Feb",a)},expression:"dataOfYear.total_static_Feb"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("أجمالي مصاريف الشهر")]),e("v-text-field",{attrs:{disabled:"",type:"number",label:"أجمالي المصاريف الشهر","single-line":"",outlined:""},model:{value:t.total_month_Feb,callback:function(a){t.total_month_Feb=a},expression:"total_month_Feb"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("ملاحظات")]),e("v-textarea",{attrs:{disabled:t.disabled,label:"ملاحظات",rows:"3","single-line":"",outlined:""},model:{value:t.dataOfYear.note_Feb,callback:function(a){t.$set(t.dataOfYear,"note_Feb",a)},expression:"dataOfYear.note_Feb"}})],1)],1),e("v-divider",{staticClass:"my-3"})],1),e("div",{staticClass:"mt-10 mx-10"},[e("h2",[t._v("شهر مارس")]),e("v-row",{staticClass:"mt-2"},[e("v-col",{attrs:{cols:"12",lg:"3",md:"4"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("اجمالي المصاريف الثابتة")]),e("v-text-field",{attrs:{disabled:t.disabled,type:"number",label:"إجمالي المصاريف الثابتة","single-line":"",outlined:""},model:{value:t.dataOfYear.total_fixed_Mar,callback:function(a){t.$set(t.dataOfYear,"total_fixed_Mar",a)},expression:"dataOfYear.total_fixed_Mar"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("إجمالي المصاريف المتغيرة")]),e("v-text-field",{attrs:{disabled:t.disabled,type:"number",label:"إجمالي المصاريف المتغيرة","single-line":"",outlined:""},model:{value:t.dataOfYear.total_static_Mar,callback:function(a){t.$set(t.dataOfYear,"total_static_Mar",a)},expression:"dataOfYear.total_static_Mar"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("أجمالي مصاريف الشهر")]),e("v-text-field",{attrs:{disabled:"",type:"number",label:"أجمالي المصاريف الشهر","single-line":"",outlined:""},model:{value:t.total_month_Mar,callback:function(a){t.total_month_Mar=a},expression:"total_month_Mar"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("ملاحظات")]),e("v-textarea",{attrs:{disabled:t.disabled,label:"ملاحظات",rows:"3","single-line":"",outlined:""},model:{value:t.dataOfYear.note_Mar,callback:function(a){t.$set(t.dataOfYear,"note_Mar",a)},expression:"dataOfYear.note_Mar"}})],1)],1),e("v-divider",{staticClass:"my-3"})],1),e("div",{staticClass:"mt-10 mx-10"},[e("h2",[t._v("شهر ابريل")]),e("v-row",{staticClass:"mt-2"},[e("v-col",{attrs:{cols:"12",lg:"3",md:"4"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("اجمالي المصاريف الثابتة")]),e("v-text-field",{attrs:{disabled:t.disabled,type:"number",label:"إجمالي المصاريف الثابتة","single-line":"",outlined:""},model:{value:t.dataOfYear.total_fixed_Apr,callback:function(a){t.$set(t.dataOfYear,"total_fixed_Apr",a)},expression:"dataOfYear.total_fixed_Apr"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("إجمالي المصاريف المتغيرة")]),e("v-text-field",{attrs:{disabled:t.disabled,type:"number",label:"إجمالي المصاريف المتغيرة","single-line":"",outlined:""},model:{value:t.dataOfYear.total_static_Apr,callback:function(a){t.$set(t.dataOfYear,"total_static_Apr",a)},expression:"dataOfYear.total_static_Apr"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("أجمالي مصاريف الشهر")]),e("v-text-field",{attrs:{disabled:"",type:"number",label:"أجمالي المصاريف الشهر","single-line":"",outlined:""},model:{value:t.total_month_Apr,callback:function(a){t.total_month_Apr=a},expression:"total_month_Apr"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("ملاحظات")]),e("v-textarea",{attrs:{disabled:t.disabled,label:"ملاحظات",rows:"3","single-line":"",outlined:""},model:{value:t.dataOfYear.note_Apr,callback:function(a){t.$set(t.dataOfYear,"note_Apr",a)},expression:"dataOfYear.note_Apr"}})],1)],1),e("v-divider",{staticClass:"my-3"})],1),e("div",{staticClass:"mt-10 mx-10"},[e("h2",[t._v("شهر مايو")]),e("v-row",{staticClass:"mt-2"},[e("v-col",{attrs:{cols:"12",lg:"3",md:"4"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("اجمالي المصاريف الثابتة")]),e("v-text-field",{attrs:{disabled:t.disabled,type:"number",label:"إجمالي المصاريف الثابتة","single-line":"",outlined:""},model:{value:t.dataOfYear.total_fixed_May,callback:function(a){t.$set(t.dataOfYear,"total_fixed_May",a)},expression:"dataOfYear.total_fixed_May"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("إجمالي المصاريف المتغيرة")]),e("v-text-field",{attrs:{disabled:t.disabled,type:"number",label:"إجمالي المصاريف المتغيرة","single-line":"",outlined:""},model:{value:t.dataOfYear.total_static_May,callback:function(a){t.$set(t.dataOfYear,"total_static_May",a)},expression:"dataOfYear.total_static_May"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("أجمالي مصاريف الشهر")]),e("v-text-field",{attrs:{disabled:"",type:"number",label:"أجمالي المصاريف الشهر","single-line":"",outlined:""},model:{value:t.total_month_May,callback:function(a){t.total_month_May=a},expression:"total_month_May"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("ملاحظات")]),e("v-textarea",{attrs:{disabled:t.disabled,label:"ملاحظات",rows:"3","single-line":"",outlined:""},model:{value:t.dataOfYear.note_May,callback:function(a){t.$set(t.dataOfYear,"note_May",a)},expression:"dataOfYear.note_May"}})],1)],1),e("v-divider",{staticClass:"my-3"})],1),e("div",{staticClass:"mt-10 mx-10"},[e("h2",[t._v("شهر يونيو")]),e("v-row",{staticClass:"mt-2"},[e("v-col",{attrs:{cols:"12",lg:"3",md:"4"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("اجمالي المصاريف الثابتة")]),e("v-text-field",{attrs:{disabled:t.disabled,type:"number",label:"إجمالي المصاريف الثابتة","single-line":"",outlined:""},model:{value:t.dataOfYear.total_fixed_Jun,callback:function(a){t.$set(t.dataOfYear,"total_fixed_Jun",a)},expression:"dataOfYear.total_fixed_Jun"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("إجمالي المصاريف المتغيرة")]),e("v-text-field",{attrs:{disabled:t.disabled,type:"number",label:"إجمالي المصاريف المتغيرة","single-line":"",outlined:""},model:{value:t.dataOfYear.total_static_Jun,callback:function(a){t.$set(t.dataOfYear,"total_static_Jun",a)},expression:"dataOfYear.total_static_Jun"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("أجمالي مصاريف الشهر")]),e("v-text-field",{attrs:{disabled:"",type:"number",label:"أجمالي المصاريف الشهر","single-line":"",outlined:""},model:{value:t.total_month_Jun,callback:function(a){t.total_month_Jun=a},expression:"total_month_Jun"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("ملاحظات")]),e("v-textarea",{attrs:{disabled:t.disabled,label:"ملاحظات",rows:"3","single-line":"",outlined:""},model:{value:t.dataOfYear.note_Jun,callback:function(a){t.$set(t.dataOfYear,"note_Jun",a)},expression:"dataOfYear.note_Jun"}})],1)],1),e("v-divider",{staticClass:"my-3"})],1),e("div",{staticClass:"mt-10 mx-10"},[e("h2",[t._v("شهر يوليو")]),e("v-row",{staticClass:"mt-2"},[e("v-col",{attrs:{cols:"12",lg:"3",md:"4"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("اجمالي المصاريف الثابتة")]),e("v-text-field",{attrs:{disabled:t.disabled,type:"number",label:"إجمالي المصاريف الثابتة","single-line":"",outlined:""},model:{value:t.dataOfYear.total_fixed_Jul,callback:function(a){t.$set(t.dataOfYear,"total_fixed_Jul",a)},expression:"dataOfYear.total_fixed_Jul"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("إجمالي المصاريف المتغيرة")]),e("v-text-field",{attrs:{disabled:t.disabled,type:"number",label:"إجمالي المصاريف المتغيرة","single-line":"",outlined:""},model:{value:t.dataOfYear.total_static_Jul,callback:function(a){t.$set(t.dataOfYear,"total_static_Jul",a)},expression:"dataOfYear.total_static_Jul"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("أجمالي مصاريف الشهر")]),e("v-text-field",{attrs:{disabled:"",type:"number",label:"أجمالي المصاريف الشهر","single-line":"",outlined:""},model:{value:t.total_month_Jul,callback:function(a){t.total_month_Jul=a},expression:"total_month_Jul"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("ملاحظات")]),e("v-textarea",{attrs:{disabled:t.disabled,label:"ملاحظات",rows:"3","single-line":"",outlined:""},model:{value:t.dataOfYear.note_Jul,callback:function(a){t.$set(t.dataOfYear,"note_Jul",a)},expression:"dataOfYear.note_Jul"}})],1)],1),e("v-divider",{staticClass:"my-3"})],1),e("div",{staticClass:"mt-10 mx-10"},[e("h2",[t._v("شهر اغسطس")]),e("v-row",{staticClass:"mt-2"},[e("v-col",{attrs:{cols:"12",lg:"3",md:"4"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("اجمالي المصاريف الثابتة")]),e("v-text-field",{attrs:{disabled:t.disabled,type:"number",label:"إجمالي المصاريف الثابتة","single-line":"",outlined:""},model:{value:t.dataOfYear.total_fixed_Aug,callback:function(a){t.$set(t.dataOfYear,"total_fixed_Aug",a)},expression:"dataOfYear.total_fixed_Aug"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("إجمالي المصاريف المتغيرة")]),e("v-text-field",{attrs:{disabled:t.disabled,type:"number",label:"إجمالي المصاريف المتغيرة","single-line":"",outlined:""},model:{value:t.dataOfYear.total_static_Aug,callback:function(a){t.$set(t.dataOfYear,"total_static_Aug",a)},expression:"dataOfYear.total_static_Aug"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("أجمالي مصاريف الشهر")]),e("v-text-field",{attrs:{disabled:"",type:"number",label:"أجمالي المصاريف الشهر","single-line":"",outlined:""},model:{value:t.total_month_Aug,callback:function(a){t.total_month_Aug=a},expression:"total_month_Aug"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("ملاحظات")]),e("v-textarea",{attrs:{disabled:t.disabled,label:"ملاحظات",rows:"3","single-line":"",outlined:""},model:{value:t.dataOfYear.note_Aug,callback:function(a){t.$set(t.dataOfYear,"note_Aug",a)},expression:"dataOfYear.note_Aug"}})],1)],1),e("v-divider",{staticClass:"my-3"})],1),e("div",{staticClass:"mt-10 mx-10"},[e("h2",[t._v("شهر سبتمبر")]),e("v-row",{staticClass:"mt-2"},[e("v-col",{attrs:{cols:"12",lg:"3",md:"4"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("اجمالي المصاريف الثابتة")]),e("v-text-field",{attrs:{disabled:t.disabled,type:"number",label:"إجمالي المصاريف الثابتة","single-line":"",outlined:""},model:{value:t.dataOfYear.total_fixed_Sept,callback:function(a){t.$set(t.dataOfYear,"total_fixed_Sept",a)},expression:"dataOfYear.total_fixed_Sept"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("إجمالي المصاريف المتغيرة")]),e("v-text-field",{attrs:{disabled:t.disabled,type:"number",label:"إجمالي المصاريف المتغيرة","single-line":"",outlined:""},model:{value:t.dataOfYear.total_static_Sept,callback:function(a){t.$set(t.dataOfYear,"total_static_Sept",a)},expression:"dataOfYear.total_static_Sept"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("أجمالي مصاريف الشهر")]),e("v-text-field",{attrs:{disabled:"",type:"number",label:"أجمالي المصاريف الشهر","single-line":"",outlined:""},model:{value:t.total_month_Sept,callback:function(a){t.total_month_Sept=a},expression:"total_month_Sept"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("ملاحظات")]),e("v-textarea",{attrs:{disabled:t.disabled,label:"ملاحظات",rows:"3","single-line":"",outlined:""},model:{value:t.dataOfYear.note_Sept,callback:function(a){t.$set(t.dataOfYear,"note_Sept",a)},expression:"dataOfYear.note_Sept"}})],1)],1),e("v-divider",{staticClass:"my-3"})],1),e("div",{staticClass:"mt-10 mx-10"},[e("h2",[t._v("شهر اكتوبر")]),e("v-row",{staticClass:"mt-2"},[e("v-col",{attrs:{cols:"12",lg:"3",md:"4"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("اجمالي المصاريف الثابتة")]),e("v-text-field",{attrs:{disabled:t.disabled,type:"number",label:"إجمالي المصاريف الثابتة","single-line":"",outlined:""},model:{value:t.dataOfYear.total_fixed_Oct,callback:function(a){t.$set(t.dataOfYear,"total_fixed_Oct",a)},expression:"dataOfYear.total_fixed_Oct"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("إجمالي المصاريف المتغيرة")]),e("v-text-field",{attrs:{disabled:t.disabled,type:"number",label:"إجمالي المصاريف المتغيرة","single-line":"",outlined:""},model:{value:t.dataOfYear.total_static_Oct,callback:function(a){t.$set(t.dataOfYear,"total_static_Oct",a)},expression:"dataOfYear.total_static_Oct"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("أجمالي مصاريف الشهر")]),e("v-text-field",{attrs:{disabled:"",type:"number",label:"أجمالي المصاريف الشهر","single-line":"",outlined:""},model:{value:t.total_month_Oct,callback:function(a){t.total_month_Oct=a},expression:"total_month_Oct"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("ملاحظات")]),e("v-textarea",{attrs:{disabled:t.disabled,label:"ملاحظات",rows:"3","single-line":"",outlined:""},model:{value:t.dataOfYear.note_Oct,callback:function(a){t.$set(t.dataOfYear,"note_Oct",a)},expression:"dataOfYear.note_Oct"}})],1)],1),e("v-divider",{staticClass:"my-3"})],1),e("div",{staticClass:"mt-10 mx-10"},[e("h2",[t._v("شهر نوفمبر")]),e("v-row",{staticClass:"mt-2"},[e("v-col",{attrs:{cols:"12",lg:"3",md:"4"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("اجمالي المصاريف الثابتة")]),e("v-text-field",{attrs:{disabled:t.disabled,type:"number",label:"إجمالي المصاريف الثابتة","single-line":"",outlined:""},model:{value:t.dataOfYear.total_fixed_Nov,callback:function(a){t.$set(t.dataOfYear,"total_fixed_Nov",a)},expression:"dataOfYear.total_fixed_Nov"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("إجمالي المصاريف المتغيرة")]),e("v-text-field",{attrs:{disabled:t.disabled,type:"number",label:"إجمالي المصاريف المتغيرة","single-line":"",outlined:""},model:{value:t.dataOfYear.total_static_Nov,callback:function(a){t.$set(t.dataOfYear,"total_static_Nov",a)},expression:"dataOfYear.total_static_Nov"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("أجمالي مصاريف الشهر")]),e("v-text-field",{attrs:{disabled:"",type:"number",label:"أجمالي المصاريف الشهر","single-line":"",outlined:""},model:{value:t.total_month_Nov,callback:function(a){t.total_month_Nov=a},expression:"total_month_Nov"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("ملاحظات")]),e("v-textarea",{attrs:{disabled:t.disabled,label:"ملاحظات",rows:"3","single-line":"",outlined:""},model:{value:t.dataOfYear.note_Nov,callback:function(a){t.$set(t.dataOfYear,"note_Nov",a)},expression:"dataOfYear.note_Nov"}})],1)],1),e("v-divider",{staticClass:"my-3"})],1),e("div",{staticClass:"mt-10 mx-10"},[e("h2",[t._v("شهر ديسمبر")]),e("v-row",{staticClass:"mt-2"},[e("v-col",{attrs:{cols:"12",lg:"3",md:"4"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("اجمالي المصاريف الثابتة")]),e("v-text-field",{attrs:{disabled:t.disabled,type:"number",label:"إجمالي المصاريف الثابتة","single-line":"",outlined:""},model:{value:t.dataOfYear.total_fixed_Dec,callback:function(a){t.$set(t.dataOfYear,"total_fixed_Dec",a)},expression:"dataOfYear.total_fixed_Dec"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("إجمالي المصاريف المتغيرة")]),e("v-text-field",{attrs:{disabled:t.disabled,type:"number",label:"إجمالي المصاريف المتغيرة","single-line":"",outlined:""},model:{value:t.dataOfYear.total_static_Dec,callback:function(a){t.$set(t.dataOfYear,"total_static_Dec",a)},expression:"dataOfYear.total_static_Dec"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("أجمالي مصاريف الشهر")]),e("v-text-field",{attrs:{disabled:"",type:"number",label:"أجمالي المصاريف الشهر","single-line":"",outlined:""},model:{value:t.total_month_Dec,callback:function(a){t.total_month_Dec=a},expression:"total_month_Dec"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("ملاحظات")]),e("v-textarea",{attrs:{disabled:t.disabled,label:"ملاحظات",rows:"3","single-line":"",outlined:""},model:{value:t.dataOfYear.note_Dec,callback:function(a){t.$set(t.dataOfYear,"note_Dec",a)},expression:"dataOfYear.note_Dec"}})],1)],1),e("v-divider",{staticClass:"my-3"})],1),e("h2",{staticClass:"mx-9 primary--text"},[t._v(" أجمالي مصاريف السنة ")]),e("v-row",{staticClass:"mx-6 mt-4"},[e("v-col",{attrs:{cols:"12",lg:"3",md:"4"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("اجمالي مصاريف الثابتة")]),e("v-text-field",{attrs:{type:"number",disabled:"",label:"إجمالي المصاريف الثابتة","single-line":"",outlined:""},model:{value:t.totalFixed,callback:function(a){t.totalFixed=a},expression:"totalFixed"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("إجمالي مصاريف المتغيرة")]),e("v-text-field",{attrs:{type:"number",disabled:"",label:"إجمالي المصاريف المتغيرة","single-line":"",outlined:""},model:{value:t.totalStatic,callback:function(a){t.totalStatic=a},expression:"totalStatic"}})],1),e("v-col",{attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("أجمالي مصاريف السنة")]),e("v-text-field",{attrs:{type:"number",disabled:"",label:"أجمالي مصاريف السنة","single-line":"",outlined:""},model:{value:t.totalYear,callback:function(a){t.totalYear=a},expression:"totalYear"}})],1),e("v-col",{staticClass:"d-flex align-center",attrs:{cols:"12",lg:"3",md:"4",sm:"6"}},[e("v-btn",{staticClass:"time-chip mr-auto",attrs:{color:"primary",label:"","text-color":"white",type:"submit",disabled:t.disabled||!t.permissions.update||!t.permissions.add}},[e("v-icon",{attrs:{left:"",small:""}},[t._v(" mdi-content-save ")]),e("span",[t._v("حفظ التعديلات")])],1)],1)],1)],1)],1),e("v-snackbar",{attrs:{color:"success",shaped:"",bottom:"",left:"",timeout:t.timeout},model:{value:t.successSnackbar,callback:function(a){t.successSnackbar=a},expression:"successSnackbar"}},[t._v(" "+t._s(t.successMessage)+" ")]),e("v-snackbar",{attrs:{color:"red",shaped:"",bottom:"",left:"",timeout:t.timeout},model:{value:t.errorSnackbar,callback:function(a){t.errorSnackbar=a},expression:"errorSnackbar"}},[t._v(" "+t._s(t.errorMessage)+" ")])],1)},o=[],s=e("1da1"),i=(e("96cf"),e("0ad7")),n=i["a"].get("Expense"),d={data:function(){return{permissions:{},loading:!1,disabled:!0,year:null,dataOfYear:{total_static_Jan:null,total_fixed_Jan:null,total_month_Jan:null,note_Jan:"",total_static_Feb:null,total_fixed_Feb:null,total_month_Feb:null,note_Feb:"",total_static_Mar:null,total_fixed_Mar:null,total_month_Mar:null,note_Mar:"",total_static_Apr:null,total_fixed_Apr:null,total_month_Apr:null,note_Apr:"",total_static_May:null,total_fixed_May:null,total_month_May:null,note_May:"",total_static_Jun:null,total_fixed_Jun:null,total_month_Jun:null,note_Jun:"",total_static_Jul:null,total_fixed_Jul:null,total_month_Jul:null,note_Jul:"",total_static_Aug:null,total_fixed_Aug:null,total_month_Aug:null,note_Aug:"",total_static_Sept:null,total_fixed_Sept:null,total_month_Sept:null,note_Sept:"",total_static_Oct:null,total_fixed_Oct:null,total_month_Oct:null,note_Oct:"",total_static_Nov:null,total_fixed_Nov:null,total_month_Nov:null,note_Nov:"",total_static_Dec:null,total_fixed_Dec:null,total_month_Dec:null,note_Dec:"",year:"",id:0},successSnackbar:!1,errorSnackbar:!1,timeout:3e3,successMessage:"",errorMessage:""}},computed:{total_month_Jan:function(){return+this.dataOfYear.total_static_Jan+ +this.dataOfYear.total_fixed_Jan},total_month_Feb:function(){return+this.dataOfYear.total_static_Feb+ +this.dataOfYear.total_fixed_Feb},total_month_Mar:function(){return+this.dataOfYear.total_static_Mar+ +this.dataOfYear.total_fixed_Mar},total_month_Apr:function(){return+this.dataOfYear.total_static_Apr+ +this.dataOfYear.total_fixed_Apr},total_month_May:function(){return+this.dataOfYear.total_static_May+ +this.dataOfYear.total_fixed_May},total_month_Jun:function(){return+this.dataOfYear.total_static_Jun+ +this.dataOfYear.total_fixed_Jun},total_month_Jul:function(){return+this.dataOfYear.total_static_Jul+ +this.dataOfYear.total_fixed_Jul},total_month_Aug:function(){return+this.dataOfYear.total_static_Aug+ +this.dataOfYear.total_fixed_Aug},total_month_Sept:function(){return+this.dataOfYear.total_static_Sept+ +this.dataOfYear.total_fixed_Sept},total_month_Oct:function(){return+this.dataOfYear.total_static_Oct+ +this.dataOfYear.total_fixed_Oct},total_month_Nov:function(){return+this.dataOfYear.total_static_Nov+ +this.dataOfYear.total_fixed_Nov},total_month_Dec:function(){return+this.dataOfYear.total_static_Dec+ +this.dataOfYear.total_fixed_Dec},totalStatic:function(){return+this.dataOfYear.total_static_Jan+ +this.dataOfYear.total_static_Feb+ +this.dataOfYear.total_static_Mar+ +this.dataOfYear.total_static_Apr+ +this.dataOfYear.total_static_May+ +this.dataOfYear.total_static_Jun+ +this.dataOfYear.total_static_Jul+ +this.dataOfYear.total_static_Aug+ +this.dataOfYear.total_static_Sept+ +this.dataOfYear.total_static_Oct+ +this.dataOfYear.total_static_Nov+ +this.dataOfYear.total_static_Dec},totalFixed:function(){return+this.dataOfYear.total_fixed_Jan+ +this.dataOfYear.total_fixed_Feb+ +this.dataOfYear.total_fixed_Mar+ +this.dataOfYear.total_fixed_Apr+ +this.dataOfYear.total_fixed_May+ +this.dataOfYear.total_fixed_Jun+ +this.dataOfYear.total_fixed_Jul+ +this.dataOfYear.total_fixed_Aug+ +this.dataOfYear.total_fixed_Sept+ +this.dataOfYear.total_fixed_Oct+ +this.dataOfYear.total_fixed_Nov+ +this.dataOfYear.total_fixed_Dec},totalYear:function(){return+this.totalStatic+ +this.totalFixed}},mounted:function(){this.permissions=this.can("المصروفات")},methods:{submitForm:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.loading=!0,t.disabled=!0,e={total_static_Jan:t.dataOfYear.total_static_Jan,total_fixed_Jan:t.dataOfYear.total_fixed_Jan,total_month_Jan:t.total_month_Jan,note_Jan:t.dataOfYear.note_Jan,total_static_Feb:t.dataOfYear.total_static_Feb,total_fixed_Feb:t.dataOfYear.total_fixed_Feb,total_month_Feb:t.total_month_Feb,note_Feb:t.dataOfYear.note_Feb,total_static_Mar:t.dataOfYear.total_static_Mar,total_fixed_Mar:t.dataOfYear.total_fixed_Mar,total_month_Mar:t.total_month_Mar,note_Mar:t.dataOfYear.note_Mar,total_static_Apr:t.dataOfYear.total_static_Apr,total_fixed_Apr:t.dataOfYear.total_fixed_Apr,total_month_Apr:t.total_month_Apr,note_Apr:t.dataOfYear.note_Apr,total_static_May:t.dataOfYear.total_static_May,total_fixed_May:t.dataOfYear.total_fixed_May,total_month_May:t.total_month_May,note_May:t.dataOfYear.note_May,total_static_Jun:t.dataOfYear.total_static_Jun,total_fixed_Jun:t.dataOfYear.total_fixed_Jun,total_month_Jun:t.total_month_Jun,note_Jun:t.dataOfYear.note_Jun,total_static_Jul:t.dataOfYear.total_static_Jul,total_fixed_Jul:t.dataOfYear.total_fixed_Jul,total_month_Jul:t.total_month_Jul,note_Jul:t.dataOfYear.note_Jul,total_static_Aug:t.dataOfYear.total_static_Aug,total_fixed_Aug:t.dataOfYear.total_fixed_Aug,total_month_Aug:t.total_month_Aug,note_Aug:t.dataOfYear.note_Aug,total_static_Sept:t.dataOfYear.total_static_Sept,total_fixed_Sept:t.dataOfYear.total_fixed_Sept,total_month_Sept:t.total_month_Sept,note_Sept:t.dataOfYear.note_Sept,total_static_Oct:t.dataOfYear.total_static_Oct,total_fixed_Oct:t.dataOfYear.total_fixed_Oct,total_month_Oct:t.total_month_Oct,note_Oct:t.dataOfYear.note_Oct,total_static_Nov:t.dataOfYear.total_static_Nov,total_fixed_Nov:t.dataOfYear.total_fixed_Nov,total_month_Nov:t.total_month_Nov,note_Nov:t.dataOfYear.note_Nov,total_static_Dec:t.dataOfYear.total_static_Dec,total_fixed_Dec:t.dataOfYear.total_fixed_Dec,total_month_Dec:t.total_month_Dec,note_Dec:t.dataOfYear.note_Dec,year:t.dataOfYear.year,id:t.dataOfYear.id},t.dataOfYear.id>0?t.updateContent(t.year,e):(delete e.id,e.year=t.year,t.newItem(e));case 4:case"end":return a.stop()}}),a)})))()},newItem:function(t){var a=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.addExpense(t);case 2:l=e.sent,!0===l.success?(a.successMessage="تمت الاضافة بنجاح",a.successSnackbar=!0,setTimeout((function(){a.$router.go("/expenses")}),1500)):(a.errorMessage=l.message,a.errorSnackbar=!0),a.disabled=!1,a.loading=!1;case 6:case"end":return e.stop()}}),e)})))()},updateContent:function(t,a){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function l(){var o;return regeneratorRuntime.wrap((function(l){while(1)switch(l.prev=l.next){case 0:return e.disabled=!1,e.loading=!1,l.next=4,n.updateExpense(t,a);case 4:o=l.sent,!0===o.success?(e.successMessage="تم التعديل بنجاح",e.successSnackbar=!0,setTimeout((function(){e.$router.go("/expenses")}),1500)):(e.errorMessage("يوجد مشكلة في التعديل"),e.errorSnackbar=!0),e.disabled=!1,e.loading=!1;case 8:case"end":return l.stop()}}),l)})))()},fetchAllItems:function(t){var a=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a.dataLoading=!0,e.next=3,n.fetchOneItem(t);case 3:l=e.sent,console.log("items.data",l),!0===l.success?(a.dataOfYear=l.data,a.disabled=!1):!1===l.status&&(a.disabled=!1),a.dataLoading=!1;case 7:case"end":return e.stop()}}),e)})))()}}},r=d,c=e("2877"),_=e("6544"),u=e.n(_),f=e("8336"),b=e("b0af"),m=e("62ad"),v=e("a523"),h=e("ce7e"),p=e("4bd4"),g=e("132d"),x=e("0fd9"),O=e("2db4"),Y=e("8654"),w=e("a844"),k=Object(c["a"])(r,l,o,!1,null,null,null);a["default"]=k.exports;u()(k,{VBtn:f["a"],VCard:b["a"],VCol:m["a"],VContainer:v["a"],VDivider:h["a"],VForm:p["a"],VIcon:g["a"],VRow:x["a"],VSnackbar:O["a"],VTextField:Y["a"],VTextarea:w["a"]})}}]);
//# sourceMappingURL=chunk-949b9e4c.6d708d75.js.map