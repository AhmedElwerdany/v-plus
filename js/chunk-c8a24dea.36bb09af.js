(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c8a24dea"],{"0fd9":function(t,e,a){"use strict";var n=a("ade3"),i=a("5530"),s=(a("d3b7"),a("caad"),a("2532"),a("99af"),a("b64b"),a("ac1f"),a("5319"),a("4ec9"),a("3ca3"),a("ddb0"),a("159b"),a("4b85"),a("2b0e")),r=a("d9f7"),o=a("80d2"),_=["sm","md","lg","xl"],c=["start","end","center"];function l(t,e){return _.reduce((function(a,n){return a[t+Object(o["I"])(n)]=e(),a}),{})}var u=function(t){return[].concat(c,["baseline","stretch"]).includes(t)},m=l("align",(function(){return{type:String,default:null,validator:u}})),d=function(t){return[].concat(c,["space-between","space-around"]).includes(t)},p=l("justify",(function(){return{type:String,default:null,validator:d}})),f=function(t){return[].concat(c,["space-between","space-around","stretch"]).includes(t)},h=l("alignContent",(function(){return{type:String,default:null,validator:f}})),g={align:Object.keys(m),justify:Object.keys(p),alignContent:Object.keys(h)},b={align:"align",justify:"justify",alignContent:"align-content"};function v(t,e,a){var n=b[t];if(null!=a){if(e){var i=e.replace(t,"");n+="-".concat(i)}return n+="-".concat(a),n.toLowerCase()}}var w=new Map;e["a"]=s["a"].extend({name:"v-row",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u}},m),{},{justify:{type:String,default:null,validator:d}},p),{},{alignContent:{type:String,default:null,validator:f}},h),render:function(t,e){var a=e.props,i=e.data,s=e.children,o="";for(var _ in a)o+=String(a[_]);var c=w.get(o);return c||function(){var t,e;for(e in c=[],g)g[e].forEach((function(t){var n=a[t],i=v(e,t,n);i&&c.push(i)}));c.push((t={"no-gutters":a.noGutters,"row--dense":a.dense},Object(n["a"])(t,"align-".concat(a.align),a.align),Object(n["a"])(t,"justify-".concat(a.justify),a.justify),Object(n["a"])(t,"align-content-".concat(a.alignContent),a.alignContent),t)),w.set(o,c)}(),t(a.tag,Object(r["a"])(i,{staticClass:"row",class:c}),s)}})},"2c69":function(t,e,a){"use strict";a("9847")},"4a4d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"mx-0 mt-4",attrs:{justify:"space-between",align:"center"}},[a("h1",{staticClass:"font-weight-bold"},[t._v(" معاملة رقم 1920215841 ")]),a("v-chip",{staticClass:"ma-2 time-chip",attrs:{color:"blue",label:"","text-color":"white"}},[a("v-icon",{attrs:{left:""}},[t._v(" mdi-clock-time-four-outline ")]),a("span",[t._v("تاريخ المعاملة")])],1)],1),a("v-card",{staticClass:"form-container"},[a("v-container",[a("div",[a("v-form",{attrs:{disabled:!t.permissions.update&&!t.permissions.add}},[a("div",[a("h2",[t._v("المشاركون فى إعداد التقرير")]),t._l(t.data.participatingmembers,(function(e,n){return a("div",{key:"p"+n},[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[a("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("الاسم")]),a("v-select",{attrs:{label:"الاسم","single-line":"",outlined:"",items:t.usersList,loading:t.userListLoading,"item-text":"name","item-value":"id","return-object":""},on:{change:function(a){return t.changeNameInMembers(e,n)}},model:{value:e.user_id,callback:function(a){t.$set(e,"user_id",a)},expression:"p.user_id"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[a("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("فئة العضوية")]),a("v-text-field",{attrs:{label:"فئة العضوية","single-line":"",outlined:"",disabled:""},model:{value:e.user_type,callback:function(a){t.$set(e,"user_type",a)},expression:"p.user_type"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[a("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("رقم العضوية")]),a("v-text-field",{attrs:{label:"رقم العضوية","single-line":"",outlined:"",disabled:""},model:{value:e.id_number,callback:function(a){t.$set(e,"id_number",a)},expression:"p.id_number"}})],1),a("v-btn",{staticClass:"ma-2 blue-darken-btn btns",attrs:{"x-large":"",disabled:!t.permissions.update&&!t.permissions.add},on:{click:function(a){return a.preventDefault(),t.hideParticipant(e)}}},[a("v-icon",{attrs:{left:""}},[t._v(" far "+t._s(1===e.status?"fa-eye-slash":"fa-eye")+" ")]),t._v(" "+t._s(1===e.status?"إخفاء":"إظهار")+" ")],1),a("v-btn",{staticClass:"ma-2 error btns",attrs:{"x-large":""},on:{click:function(a){return a.preventDefault(),t.removeParticipant(e,n)}}},[a("v-icon",{attrs:{left:""}},[t._v(" fas fa-trash-alt ")]),t._v(" حذف ")],1)],1)],1)})),a("v-row",{staticClass:"mt-3"},[a("v-btn",{staticClass:"ma-2 orange-btn",attrs:{"x-large":"",disabled:!t.permissions.update&&!t.permissions.add},on:{click:function(e){return e.preventDefault(),t.addParticipant()}}},[a("v-icon",{attrs:{left:""}},[t._v(" fas fa-plus ")]),t._v(" اضافة مشارك جديد ")],1)],1)],2),a("v-divider",{staticClass:"my-10"}),a("div",[a("h2",[t._v("التفاصيل المالية")]),a("v-row",[a("v-col",{attrs:{cols:"12",md:"4"}},[a("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("السعر")]),a("vuetify-money",{attrs:{outlined:"","single-line":"",disabled:"",options:t.moneyInputOptions},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}})],1)],1),t._l(t.data.participantscommissions,(function(e,n){return a("v-row",{key:n,attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12",md:"3"}},[a("label",{directives:[{name:"show",rawName:"v-show",value:"0"===n,expression:"index === '0'"}],staticClass:"d-block mb-3 font-weight-bold"},[t._v("اسم المشارك فى التقرير")]),a("v-text-field",{attrs:{"single-line":"",outlined:"",disabled:""},model:{value:e.name,callback:function(a){t.$set(e,"name",a)},expression:"p.name"}})],1),a("v-col",{attrs:{cols:"5",md:"4",lg:"2"}},[a("label",{directives:[{name:"show",rawName:"v-show",value:0===n,expression:"index === 0"}],staticClass:"d-block mb-3 font-weight-bold"},[t._v("العمولات")]),a("vuetify-money",{attrs:{outlined:"","single-line":"",disabled:"",options:t.moneyInputOptions},on:{change:function(e){return t.calcTotal(n)}},model:{value:e.amount,callback:function(a){t.$set(e,"amount",a)},expression:"p.amount"}})],1),t._v(" أو "),a("v-col",{attrs:{cols:"5",md:"4",lg:"2"}},[a("label",{directives:[{name:"show",rawName:"v-show",value:0===n,expression:"index === 0"}],staticClass:"d-block mb-3 font-weight-bold"},[t._v("النسبة")]),a("v-text-field",{attrs:{"single-line":"",outlined:"",suffix:"%",disabled:""},on:{change:function(e){return t.calcTotal(n)}},model:{value:e.stage,callback:function(a){t.$set(e,"stage",a)},expression:"p.stage"}})],1),a("v-col",{attrs:{cols:"5",md:"4",lg:"2"}},[a("label",{directives:[{name:"show",rawName:"v-show",value:0===n,expression:"index === 0"}],staticClass:"d-block mb-3 font-weight-bold"},[t._v("أخرى")]),a("v-text-field",{attrs:{"single-line":"",outlined:""},on:{input:function(e){return t.calcTotal(n)}},model:{value:e.other_amount,callback:function(a){t.$set(e,"other_amount",a)},expression:"p.other_amount"}})],1),a("v-col",{attrs:{cols:"5",md:"4",lg:"2"}},[a("label",{staticClass:"d-block mb-3 font-weight-bold"},[t._v("إجمالي")]),a("v-text-field",{attrs:{"single-line":"",outlined:"",disabled:""},model:{value:e.total_amount,callback:function(a){t.$set(e,"total_amount",a)},expression:"p.total_amount"}})],1)],1)})),a("v-divider",{staticClass:"my-10"}),a("v-row",{staticClass:"mb-10"},[a("v-btn",{staticClass:"ma-2",attrs:{"x-large":"",color:"blue",disabled:!t.permissions.update&&!t.permissions.add},on:{click:t.save}},[a("v-icon",{attrs:{left:""}},[t._v(" fas fa-save ")]),t._v(" حفظ ")],1)],1)],2)],1)],1)])],1),a("v-snackbar",{attrs:{color:"success",shaped:"",bottom:"",left:"",timeout:t.timeout},model:{value:t.successSnackbar,callback:function(e){t.successSnackbar=e},expression:"successSnackbar"}},[t._v(" "+t._s(t.successMessage)+" ")]),a("v-snackbar",{attrs:{color:"red",shaped:"",bottom:"",left:"",timeout:t.timeout},model:{value:t.errorSnackbar,callback:function(e){t.errorSnackbar=e},expression:"errorSnackbar"}},[t._v(" "+t._s(t.errorMessage)+" ")])],1)},i=[],s=a("5530"),r=a("1da1"),o=(a("d81d"),a("b0c0"),a("7db0"),a("d3b7"),a("caad"),a("2532"),a("a434"),a("96cf"),a("0ad7")),_=a("9612"),c=o["a"].get("Transactions"),l=o["a"].get("Customers"),u=o["a"].get("Users"),m={name:"NewTreatment",data:function(){return{successSnackbar:!1,errorSnackbar:!1,timeout:3e3,successMessage:"",errorMessage:"",price:"",permissions:{},moneyInputOptions:{locale:"en-US",prefix:"",suffix:"",length:11,precision:2},participants:[{participant:!0}],usersList:[],userListLoading:!1,data:{participantscommissions:[{user_id:{name:"a"}}],participatingmembers:[{user_id:""}],sample_id:11,customer_id:"",appraiser_id:0,preview_id:0,coordinator_id:0,prop_street_name:"",evaluation_purpose_id:"",appraisal_fees:"",appraisal_value:"",region_id:0,city_id:0,neighborhood_id:0,prop_Albulk_num:"",prop_apartment_num:"",prop_part_num:"",transaction_id:"",trans_number:"",instrument_file:"",attached_file:"",schema_file:"",assignment_letter_file:"",resident_id:"",reviewer_id:"",approved_id:"",trans_report_name:"",trans_report_phone:"",trans_value_basis:"",value_hypothesis:"",trans_assignment_date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),trans_evaluation_date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),trans_inspection_date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),trans_Report_type:"",trans_filing_the_report:"",trans_reference_number:"",trans_deposit_code_site_num_customer_num:"",trans_street_name:"",residential_plan_name:"",residential_plan_no:"",trans_Albulk_num:"",trans_part_num:"",trans_owner_name:"",trans_owner_phone:"",property_type_id:"",property_rating_id:"",trans_instrument_num:"",trans_instrument_date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),trans_building_permit_number:"",trans_building_permit_date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),trans_construction_age:"",trans_retail_record_num:"",trans_retail_record_date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),trans_construction_condition:"",trans_occupancy_status:"",trans_general_site:"",trans_the_design:"",trans_attributable:"",trans_neighbor:"",trans_streets:"",trans_Street_lighting:"",trans_electric_current:"",trans_insulation_type:"",trans_the_type_of_yard_floor:"",trans_reception_floor_type:"",trans_entrance_floor:"",trans_room_floor_type:"",trans_bolt_the_outer_doors:"",trans_wool_interior_doors:"",trans_structural_structure:"",trans_bishop_type:"",trans_boards:"",trans_dining_rooms:"",trans_bed_room:"",trans_kitchens:"",trans_toilets:"",trans_jacuzzi:"",trans_garden:"",trans_maids_room:"",trans_guard_Room:"",trans_basement:"",trans_halls:"",trans_supplements:"",trans_elevators:"",trans_parking:"",trans_children_playground:"",trans_swimming_pool:"",trans_storehouse:"",glass_walls:"",central_conditioning:"",double_glazing:"",plaster_on_the_ceiling:"",hidden_lighting:"",arabic_bath:"",stairs:"",electric_garage:"",ordinary_garage:"",portals:"",heaters:"",french_bath:"",trans_boards_status:"",trans_dining_rooms_status:"",trans_bed_room_status:"",trans_kitchens_status:"",trans_toilets_status:"",trans_jacuzzi_status:"",trans_garden_status:"",trans_maids_room_status:"",trans_guard_Room_status:"",trans_basement_status:"",trans_halls_status:"",trans_supplements_status:"",trans_elevators_status:"",trans_parking_status:"",trans_children_playground_status:"",trans_swimming_pool_status:"",trans_storehouse_status:"",glass_walls_status:"",central_conditioning_status:"",double_glazing_status:"",plaster_on_the_ceiling_status:"",hidden_lighting_status:"",arabic_bath_status:"",stairs_status:"",electric_garage_status:"",ordinary_garage_status:"",portals_status:"",heaters_status:"",french_bath_status:"",trans_other_component:"",additional_component_1:"",additional_component_2:"",additional_component_3:"",additional_component_4:"",additional_component_value_1:"",additional_component_value_2:"",additional_component_value_3:"",additional_component_value_4:"",finishing_condition:"",latitude:"",longitude:"",coordinate_type:1,property_notes:"",property_condition:"",construction_condition:"",occupancy_status:"",northern_border:"",eastern_border:"",western_border:"",southern_border:"",tall_northern:"",tall_eastern:"",tall_western:"",tall_southern:"",north_facade:"",eastern_facade:"",western_facade:"",south_facade:"",masjid:"",masjid_note:"",masjid_distance:"",market:"",market_note:"",market_distance:"",medical_facility:"",medical_facility_note:"",medical_facility_distance:"",security_facility:"",security_facility_note:"",security_facility_distance:"",public_garden:"",public_garden_note:"",public_garden_distance:"",educational_facility:"",educational_facility_note:"",educational_facility_distance:"",government_office:"",government_office_note:"",government_office_distance:"",highway:"",highway_note:"",highway_distance:"",is_telephone:"",water_meter:"",water_meter_number:"",electric_meter:"",electric_meter_number:"",sanitation:"",resident_opinion:"",scope_research_sources_information:"",unfinished_n_maintenance:"",notes_shortcomings:"",important_notes:"",private_notes:"",reason_for_comment:"",recommendation:"",land_area:"",construction_age:"",basement_space:"",annexes_space:"",num_floors_residential_villas:"",conforms_building_permit:"",internal_preview:"",external_preview:"",review_note:"",trans_finishing_status:"",trans_finishing_internal:"",trans_finishing_external:"",cm_land_space:"",cm_land_price:"",cm_land_s_p_total:"",cm_building_space:"",cm_building_price:"",cm_building_s_p_total:"",cm_basement_space:"",cm_basement_price:"",cm_basement_s_p_total:"",cm_supplement_space:"",cm_supplement_price:"",cm_supplement_s_p_total:"",cm_fences_space:"",cm_fences_price:"",cm_fences_s_p_total:"",cm_other_title:"",cm_other_space:"",cm_other_price:"",cm_other_s_p_total:"",cm_method_total:"",cm_space_total:"",cm_space_price_average:"",cm_exchange_note:"",cm_exchange_value:"",cm_direct_costs_note:"",cm_direct_costs:"",cm_indirect_costs_note:"",cm_indirect_costs:"",cm_cost_total:"",cm_physical_deterioration_ratio:"",cm_physical_deterioration_value:"",cm_occupational_limitations_ratio:"",cm_occupational_limitations_value:"",cm_economic_obsolescence_ratio:"",cm_economic_obsolescence_value:"",cm_total_depreciation_ratio:"",cm_total_depreciation_value:"",cm_depreciation_buildings_ratio:"",cm_depreciation_buildings_value:"",cm_depreciation_s_business_ratio:"",cm_depreciation_s_business_value:"",cm_developer_earnings_ratio:"",cm_developer_earnings_value:"",cm_total_market_value:"",weights_market_value_relative_weights_roads_used:"",relative_market_value_relative_weights_roads_used:"",weights_market_value_income_capitalization:"",relative_market_value_income_capitalization:"",weights_market_value_cost:"",relative_market_value_cost:"",total_weights:"",market_value_weighting_number:"",market_value_weighting_text:"",cm_space:"",cm_operation_type:"",operation_date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),cm_price:"",cm_type:"",cm_mobile_number:"",cm_latitude:"",cm_longitude:"",cm_space_2:"",cm_operation_type_2:"",operation_date_2:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),cm_price_2:"",cm_type_2:"",cm_mobile_number_2:"",cm_latitude_2:"",cm_longitude_2:"",cm_space_3:"",cm_operation_type_3:"",operation_date_3:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),cm_price_3:"",cm_type_3:"",cm_mobile_number_3:"",cm_latitude_3:"",cm_longitude_3:"",cm_time_factor_adjustment:"",cm_time_factor_adjustment_2:"",cm_time_factor_adjustment_3:"",cm_settlement_financing_terms:"",cm_settlement_financing_terms_2:"",cm_settlement_financing_terms_3:"",cm_settling_market_conditions:"",cm_settling_market_conditions_2:"",cm_settling_market_conditions_3:"",cm_total_funding_market_adjustments:"",cm_total_funding_market_adjustments_2:"",cm_total_funding_market_adjustments_3:"",cm_price_after_settling_financing_terms:"",cm_price_after_settling_financing_terms2:"",cm_price_after_settling_financing_terms3:"",cm_space_settlement:"",cm_space_settlement2:"",cm_space_settlement3:"",cm_other_settlement:"",cm_other_settlement2:"",cm_other_settlement3:"",cm_total_settlement:"",cm_total_settlement2:"",cm_total_settlement3:"",cm_selling_p_a_settlement:"",cm_selling_p_a_settlement2:"",cm_selling_p_a_settlement3:"",cm_relative_w_comparable_p:"",cm_relative_w_comparable_p2:"",cm_relative_w_comparable_p3:"",cm_contribution_comparative_p_relative_weight:"",cm_contribution_comparative_p_relative_weight2:"",cm_contribution_comparative_p_relative_weight3:"",cm_market_v_comparative_sales_method:"",cs_settlement_table:"",unit_name:"",rent_units:"",unit_number:"",shaghayir_maintenance:"",total_rent:"",net_income:"",unit_name2:"",rent_units2:"",unit_number2:"",shaghayir_maintenance2:"",total_rent2:"",net_income2:"",unit_name3:"",rent_units3:"",unit_number3:"",shaghayir_maintenance3:"",total_rent3:"",net_income3:"",total_annual_income:"",deduction_losses:"",total_actual_income:"",m_operating_c_expenditures:"",net_operating_income:"",capitalization_rate:"",market_v_income_c_method:"",trans_report_price:"",trans_name_subscriber_in_report:"",trans_commissions_percentage:"",trans_commissions_amount:"",trans_internal_notes:"",trans_currency:"",income_valuation:[{unit_name:"",unit_number:"",unit_rent:"",maintenance:"",total_rent:"",final_income:"",id:_["b"].v4()}],images:[],achievement:{prop_current_price:"",status:"1",stages:[{id:_["b"].v4(),details:"",cost:"",pc_to_cost:"",pc_of_completion:"",achievement_value:""}]},conditioner_type:[{status:!1,name:"مركزي",non_installed:0,installed:0},{status:!1,name:"منفصل",non_installed:0,installed:0},{status:!1,name:"شباك",non_installed:0,installed:0},{status:!1,name:"كونسيلد",non_installed:0,installed:0}],trans_professional_standard:"طريقة استخراج القيمة: عن طريق دراسة المنطقة و تحليل أسعار العقارات التجارية والسكنية والعروض المشابهة للأرض و التكلفة للمباني بعد خصم نسبة الإهلاك.\nالمستندات المقدمة من طالب التقييم: هوية المالك - صك الملكية.\nنطاق البحث: أسعار البيع للأرض بالحي، مدى توفر خدمات البنية التحتية و خدمات البنية الفوقية مثل المدارس والمستشفيات والحدائق وغيرها، اكتمال العمران في المنطقة المحيطة، نظام البناء في منطقة العقار.\nطريقة اعتماد مسطحات البناء: عن طريق المستندات المقدمة من طالب التقييم.\nمدة التقرير: تقرير التقييم صالح لمدة 90 يوما من تاريخ الاعتماد ما لم يطرأ أي تغير في منطقة العقار.\nالمستخدمون الآخرون بالتقرير: العميل المذكور أعلاه.\nالمدخلات الرئيسية: البيانات المتوفرة في الصك و رخصة البناء.\nاستنتاج القيمة والأسباب الرئيسية: تم استنتاج القيمة بالطريقة المذكورة أعلاه وذلك بت…",trans_restrictions_publication:"تعد عمليات التقييم والتقارير سرية للطرف الموجه ولمن يتم إحالتها إليه لغرض محدد مع عدم تحمل أي مسؤولية من أي نوع لأي طرف ثالث، ولا يجوز نشر هذا التقرير كاملا أو أي جزء منه أو الإشارة إليه في أي وثيقة أو بيان أو نشرة دورية أو في أي وسيلة تواصل مع أي طرف ثالث دون الحصول على موافقة مسبقة مكتوبة بالشكل والسياق الذي تظهر فيه",trans_evacuation_responsibility:"يفيد فريق عمل (اسم الشركة) بأنه تم معاينة العقار و انه ليس لدينا اي مصلحة شخصية  او مادية  او  اي اهتمامات حالية او مستقبلية بالعقار موضع التقييم و ان ما تم تقديمه بالتقرير سليم وصحيح ، حي  تم رفع جميع البيانات من واقع السوق الحالي وجميع المعادلات المحددة ونتائج الاسعار المحددة والمرفقة بالتقرير مراجعة ومدققة وتم تحليلها .",trans_special_assumptions:"• نفترض بأن العقار ملكية مطلقة دون أي أعباء.\n• تم اعتماد سعر متر الأرض بناء على العروض المشابهة المحيطة بالمنطقة وأخذ في الاعتبار ظروف السوق وعمل جدول تسويات للأرض.\n• تم اعتماد القيمة السوقية للعقار بطريقة السوق ( المقارنة ).\n• مصدر الملكية: صحة صور المستندات المقدمه لنا على مسؤولية العميل وتم افتراض صحتها.\n• تم التقييم في ظل جائجة كورونا وهذة الفترة التعامل مع عدم اليقين في اوقات اضطراب حاله وظروف السوق.\n• في 11 مارس 2020 صنفت منظمة الصحة العالمية فيروس كورونا المستجد COVID-19 بأنه وباء عالمي. مما أحدث تأثيراً واضحاً على الاقتصادات والأسواق العالمية والمحلية وبناء عليه تم اتخاذ العديد من الإجراءات الرسمية محلياً وعالمياً والتي من شأنها أن تؤثر على جميع القطاعات.",acknowledgment_independence:"الشركة غير مسؤولة عن صحة الصكوك والفسوحات والمستندات المقدمة من الطرف الثاني (العميل) صحة التراخيص الخاصة بالعقار موضع التقييم وتحت مسؤوليته ."}}},watch:{"data.customer_id":{handler:function(){this.fetchPrice()},deep:!0}},mounted:function(){var t=this;Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchUsers();case 2:if(!t.$route.params.id){e.next=5;break}return e.next=5,t.fetchOneItem(t.$route.params.id);case 5:case"end":return e.stop()}}),e)})))(),this.permissions=this.can("تعديل السعر")},methods:{fetchOneItem:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var a,n,i,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.fetchOneItem(e);case 2:for(i in a=t.sent,n=a.data,n)null===n[i]?this.data[i]=this.data[i]:this.data[i]=n[i];this.data.participantscommissions=this.data.participantscommissions.map((function(t){return Object(s["a"])(Object(s["a"])({},t),{},{name:r.usersList.find((function(e){return e.id===t.user_id})).name||""})}));case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),fetchPrice:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,a,n,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.fetchOneItem(this.data.customer_id);case 2:e=t.sent,a=e.data.pricing,n=a.find((function(t){if(t.region_id.includes(i.data.region_id)&&t.city_list.includes(i.data.city_id)&&t.use_property.includes(i.data.property_rating_id)&&t.property_type.includes(i.data.property_type_id))return t})),n&&(this.price=n.custom_price);case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),fetchUsers:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.userListLoading=!0,t.next=3,u.getAllItems();case 3:e=t.sent,a=e.data.data,this.usersList=a,this.userListLoading=!1;case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),addParticipant:function(){this.data.participatingmembers.push({status:1}),this.data.participantscommissions.push({other_amount:0})},hideParticipant:function(t){t.status=1===t.status?2:1},removeParticipant:function(t,e){this.data.participatingmembers.splice(e,1),this.data.participantscommissions.splice(e,1)},changeNameInMembers:function(t,e){var a=t.user_id;this.data.participatingmembers[e].id_number=a.id_number,this.data.participatingmembers[e].user_type=a.user_type,this.data.participantscommissions[e].user_id=a.id,this.data.participantscommissions[e].name=a.name,this.data.participantscommissions[e].stage=a.commission_accreditation_stage_rate,this.data.participantscommissions[e].amount=a.commission_accreditation_stage_amount,this.calcTotal(e)},calcTotal:function(t){this.data.participantscommissions[t].total_amount=+this.data.participantscommissions[t].amount+ +this.data.participantscommissions[t].stage+ +this.data.participantscommissions[t].other_amount},save:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.data.participatingmembers=this.data.participatingmembers.map((function(t){return"number"!==typeof t.user_id?Object(s["a"])(Object(s["a"])({},t),{},{user_id:t.user_id.id}):t})),t.next=3,c.updateOneItem(this.data.id,this.data);case 3:e=t.sent,!0===e.success?(this.successMessage="تم التعديل بنجاح",this.successSnackbar=!0,setTimeout((function(){a.$router.push("/Treatments")}),1500)):(this.errorMessage="يوجد مشكلة في التعديل",this.errorSnackbar=!0);case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},d=m,p=(a("2c69"),a("2877")),f=a("6544"),h=a.n(f),g=a("8336"),b=a("b0af"),v=a("cc20"),w=a("62ad"),y=a("a523"),k=a("ce7e"),x=a("4bd4"),O=a("132d"),j=a("0fd9"),S=a("b974"),C=a("2db4"),D=a("8654"),I=Object(p["a"])(d,n,i,!1,null,"314d40c2",null);e["default"]=I.exports;h()(I,{VBtn:g["a"],VCard:b["a"],VChip:v["a"],VCol:w["a"],VContainer:y["a"],VDivider:k["a"],VForm:x["a"],VIcon:O["a"],VRow:j["a"],VSelect:S["a"],VSnackbar:C["a"],VTextField:D["a"]})},"4bd4":function(t,e,a){"use strict";var n=a("5530"),i=(a("caad"),a("2532"),a("07ac"),a("4de4"),a("d3b7"),a("159b"),a("7db0"),a("58df")),s=a("7e2b"),r=a("3206");e["a"]=Object(i["a"])(s["a"],Object(r["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(i){i&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=a(t)))})):n.valid=a(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(n["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},9847:function(t,e,a){}}]);
//# sourceMappingURL=chunk-c8a24dea.36bb09af.js.map