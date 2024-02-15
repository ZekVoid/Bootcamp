import { ref } from 'vue';
import axios from 'axios';
import { RouterLink } from 'vue-router';
import { onMounted } from 'vue';

export default await (async () => {
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const firstName = ref('');
const lastName = ref('');
const birthday = ref('');
const address = ref('');

// const fetchData = async () => {
//   try {
//     const response = await axios.get('http://127.0.0.1:8000/api/Student'); 
//     const student = response.data;
//     if (student) {
//       firstName.value = student.first_name;
//       lastName.value = student.last_name; 
//       +      birthday.value = student.birthday;
//       address.value = student.address;
//     }
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };
const itemId = $route.params.id;
const item = ref(null);

const fetchItem = async () => {
try {
const response = await axios.get(`http://127.0.0.1:8000/api/Student/${itemId}`);
item.value = response.data;
} catch (error) {
console.error('Error fetching item details:', error);
}
};

onMounted(() => {
fetchItem();
});

const updateItem = async () => {
try {
} catch (error) {
console.error('Error updating item:', error);
}
};

const submitForm = () => {
axios.post('http://127.0.0.1:8000/api/Student', {
FirstName: firstName.value,
LastName: lastName.value,
Birthday: birthday.value,
Address: address.value
})
.then(response => {
console.log(response.data);

firstName.value = '';
lastName.value = '';
birthday.value = '';
address.value = '';

showAlert('Success', 'Form submitted successfully!');
})
.catch(error => {
console.error(error.response.data);
showAlert('Error', 'Form submission failed. Please try again later.');
});
};

const showAlert = (title, message) => {
alert(`${title}: ${message}`);
};


const __VLS_componentsOption = {};

const __VLS_name = "AddView" as const;
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'form-control'?: boolean; } &
{ 'form-row'?: boolean; } &
{ 'button'?: boolean; } &
{ 'button'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'RouterLink', typeof __VLS_localComponents, "RouterLink", "routerLink", "router-link"> &
__VLS_WithComponent<'RouterView', typeof __VLS_localComponents, "RouterView", "RouterView", "RouterView">;
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_components.RouterLink; __VLS_components.RouterLink; __VLS_components.RouterLink; __VLS_components.RouterLink; __VLS_components.routerLink; __VLS_components.routerLink; __VLS_components.routerLink; __VLS_components.routerLink; __VLS_components["router-link"]; __VLS_components["router-link"]; __VLS_components["router-link"]; __VLS_components["router-link"];
// @ts-ignore
[RouterLink, RouterLink, RouterLink, RouterLink,];
__VLS_intrinsicElements.form; __VLS_intrinsicElements.form;
__VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input; __VLS_intrinsicElements.input;
__VLS_intrinsicElements.br; __VLS_intrinsicElements.br; __VLS_intrinsicElements.br; __VLS_intrinsicElements.br;
__VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button;
__VLS_components.RouterView;
// @ts-ignore
[RouterView,];
{
const __VLS_0 = __VLS_intrinsicElements["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, class: ("form-addview"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, class: ("form-addview"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = ({} as 'RouterLink' extends keyof typeof __VLS_ctx ? { 'RouterLink': typeof __VLS_ctx.RouterLink; } : 'routerLink' extends keyof typeof __VLS_ctx ? { 'RouterLink': typeof __VLS_ctx.routerLink; } : 'router-link' extends keyof typeof __VLS_ctx ? { 'RouterLink': (typeof __VLS_ctx)["router-link"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).RouterLink;
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, id: ("btnAdd"), class: ("button"), to: ("/form-addview"), }));
({} as { RouterLink: typeof __VLS_5; }).RouterLink;
({} as { RouterLink: typeof __VLS_5; }).RouterLink;
const __VLS_7 = __VLS_6({ ...{}, id: ("btnAdd"), class: ("button"), to: ("/form-addview"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, id: ("btnAdd"), class: ("button"), to: ("/form-addview"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
(__VLS_8.slots!).default;
}
{
const __VLS_10 = ({} as 'RouterLink' extends keyof typeof __VLS_ctx ? { 'RouterLink': typeof __VLS_ctx.RouterLink; } : 'routerLink' extends keyof typeof __VLS_ctx ? { 'RouterLink': typeof __VLS_ctx.routerLink; } : 'router-link' extends keyof typeof __VLS_ctx ? { 'RouterLink': (typeof __VLS_ctx)["router-link"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).RouterLink;
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, id: ("btnView"), class: ("button"), to: ("/form-viewdetails"), }));
({} as { RouterLink: typeof __VLS_10; }).RouterLink;
({} as { RouterLink: typeof __VLS_10; }).RouterLink;
const __VLS_12 = __VLS_11({ ...{}, id: ("btnView"), class: ("button"), to: ("/form-viewdetails"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, id: ("btnView"), class: ("button"), to: ("/form-viewdetails"), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
(__VLS_13.slots!).default;
}
{
const __VLS_15 = __VLS_intrinsicElements["form"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
const __VLS_17 = __VLS_16({ ...{ onSubmit: {} as any, }, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{ onSubmit: {} as any, }, });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
let __VLS_20 = { 'submit': __VLS_pickEvent(__VLS_19['submit'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_16, typeof __VLS_17>).onSubmit) };
__VLS_20 = { submit: (__VLS_ctx.submitForm) };
{
const __VLS_21 = __VLS_intrinsicElements["div"];
const __VLS_22 = __VLS_elementAsFunctionalComponent(__VLS_21);
const __VLS_23 = __VLS_22({ ...{}, class: ("form-row"), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_21, typeof __VLS_23> & Record<string, unknown>) => void)({ ...{}, class: ("form-row"), });
const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23)!;
let __VLS_25!: __VLS_NormalizeEmits<typeof __VLS_24.emit>;
{
const __VLS_26 = __VLS_intrinsicElements["div"];
const __VLS_27 = __VLS_elementAsFunctionalComponent(__VLS_26);
const __VLS_28 = __VLS_27({ ...{}, class: ("col"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_26, typeof __VLS_28> & Record<string, unknown>) => void)({ ...{}, class: ("col"), });
const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28)!;
let __VLS_30!: __VLS_NormalizeEmits<typeof __VLS_29.emit>;
{
const __VLS_31 = __VLS_intrinsicElements["input"];
const __VLS_32 = __VLS_elementAsFunctionalComponent(__VLS_31);
const __VLS_33 = __VLS_32({ ...{}, value: ((__VLS_ctx.firstName)), type: ("text"), class: ("form-control"), placeholder: ("First name"), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_31, typeof __VLS_33> & Record<string, unknown>) => void)({ ...{}, value: ((__VLS_ctx.firstName)), type: ("text"), class: ("form-control"), placeholder: ("First name"), });
const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33)!;
let __VLS_35!: __VLS_NormalizeEmits<typeof __VLS_34.emit>;
}
(__VLS_29.slots!).default;
}
{
const __VLS_36 = __VLS_intrinsicElements["br"];
const __VLS_37 = __VLS_elementAsFunctionalComponent(__VLS_36);
const __VLS_38 = __VLS_37({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_37));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_36, typeof __VLS_38> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38)!;
let __VLS_40!: __VLS_NormalizeEmits<typeof __VLS_39.emit>;
}
{
const __VLS_41 = __VLS_intrinsicElements["div"];
const __VLS_42 = __VLS_elementAsFunctionalComponent(__VLS_41);
const __VLS_43 = __VLS_42({ ...{}, class: ("col"), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_41, typeof __VLS_43> & Record<string, unknown>) => void)({ ...{}, class: ("col"), });
const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43)!;
let __VLS_45!: __VLS_NormalizeEmits<typeof __VLS_44.emit>;
{
const __VLS_46 = __VLS_intrinsicElements["input"];
const __VLS_47 = __VLS_elementAsFunctionalComponent(__VLS_46);
const __VLS_48 = __VLS_47({ ...{}, value: ((__VLS_ctx.lastName)), type: ("text"), class: ("form-control"), placeholder: ("Last name"), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_46, typeof __VLS_48> & Record<string, unknown>) => void)({ ...{}, value: ((__VLS_ctx.lastName)), type: ("text"), class: ("form-control"), placeholder: ("Last name"), });
const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48)!;
let __VLS_50!: __VLS_NormalizeEmits<typeof __VLS_49.emit>;
}
(__VLS_44.slots!).default;
}
{
const __VLS_51 = __VLS_intrinsicElements["br"];
const __VLS_52 = __VLS_elementAsFunctionalComponent(__VLS_51);
const __VLS_53 = __VLS_52({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_52));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_51, typeof __VLS_53> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53)!;
let __VLS_55!: __VLS_NormalizeEmits<typeof __VLS_54.emit>;
}
{
const __VLS_56 = __VLS_intrinsicElements["div"];
const __VLS_57 = __VLS_elementAsFunctionalComponent(__VLS_56);
const __VLS_58 = __VLS_57({ ...{}, class: ("col"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_56, typeof __VLS_58> & Record<string, unknown>) => void)({ ...{}, class: ("col"), });
const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58)!;
let __VLS_60!: __VLS_NormalizeEmits<typeof __VLS_59.emit>;
{
const __VLS_61 = __VLS_intrinsicElements["input"];
const __VLS_62 = __VLS_elementAsFunctionalComponent(__VLS_61);
const __VLS_63 = __VLS_62({ ...{}, type: ("date"), class: ("form-control"), placeholder: ("Birthday"), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_61, typeof __VLS_63> & Record<string, unknown>) => void)({ ...{}, type: ("date"), class: ("form-control"), placeholder: ("Birthday"), });
const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63)!;
let __VLS_65!: __VLS_NormalizeEmits<typeof __VLS_64.emit>;
(__VLS_ctx.birthday);
}
(__VLS_59.slots!).default;
}
{
const __VLS_66 = __VLS_intrinsicElements["br"];
const __VLS_67 = __VLS_elementAsFunctionalComponent(__VLS_66);
const __VLS_68 = __VLS_67({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_67));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_66, typeof __VLS_68> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68)!;
let __VLS_70!: __VLS_NormalizeEmits<typeof __VLS_69.emit>;
}
{
const __VLS_71 = __VLS_intrinsicElements["div"];
const __VLS_72 = __VLS_elementAsFunctionalComponent(__VLS_71);
const __VLS_73 = __VLS_72({ ...{}, class: ("col"), }, ...__VLS_functionalComponentArgsRest(__VLS_72));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_71, typeof __VLS_73> & Record<string, unknown>) => void)({ ...{}, class: ("col"), });
const __VLS_74 = __VLS_pickFunctionalComponentCtx(__VLS_71, __VLS_73)!;
let __VLS_75!: __VLS_NormalizeEmits<typeof __VLS_74.emit>;
{
const __VLS_76 = __VLS_intrinsicElements["input"];
const __VLS_77 = __VLS_elementAsFunctionalComponent(__VLS_76);
const __VLS_78 = __VLS_77({ ...{}, value: ((__VLS_ctx.address)), type: ("text"), class: ("form-control"), placeholder: ("Address"), }, ...__VLS_functionalComponentArgsRest(__VLS_77));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_76, typeof __VLS_78> & Record<string, unknown>) => void)({ ...{}, value: ((__VLS_ctx.address)), type: ("text"), class: ("form-control"), placeholder: ("Address"), });
const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_76, __VLS_78)!;
let __VLS_80!: __VLS_NormalizeEmits<typeof __VLS_79.emit>;
}
(__VLS_74.slots!).default;
}
{
const __VLS_81 = __VLS_intrinsicElements["br"];
const __VLS_82 = __VLS_elementAsFunctionalComponent(__VLS_81);
const __VLS_83 = __VLS_82({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_82));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_81, typeof __VLS_83> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_84 = __VLS_pickFunctionalComponentCtx(__VLS_81, __VLS_83)!;
let __VLS_85!: __VLS_NormalizeEmits<typeof __VLS_84.emit>;
}
{
const __VLS_86 = __VLS_intrinsicElements["button"];
const __VLS_87 = __VLS_elementAsFunctionalComponent(__VLS_86);
const __VLS_88 = __VLS_87({ ...{}, id: ("btnSubmit"), type: ("submit"), class: ("btn btn-primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_86, typeof __VLS_88> & Record<string, unknown>) => void)({ ...{}, id: ("btnSubmit"), type: ("submit"), class: ("btn btn-primary"), });
const __VLS_89 = __VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88)!;
let __VLS_90!: __VLS_NormalizeEmits<typeof __VLS_89.emit>;
(__VLS_89.slots!).default;
}
{
const __VLS_91 = __VLS_intrinsicElements["button"];
const __VLS_92 = __VLS_elementAsFunctionalComponent(__VLS_91);
const __VLS_93 = __VLS_92({ ...{ onClick: {} as any, }, id: ("btnUpdate"), class: ("btn btn-primary"), type: ("update"), }, ...__VLS_functionalComponentArgsRest(__VLS_92));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_91, typeof __VLS_93> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, id: ("btnUpdate"), class: ("btn btn-primary"), type: ("update"), });
const __VLS_94 = __VLS_pickFunctionalComponentCtx(__VLS_91, __VLS_93)!;
let __VLS_95!: __VLS_NormalizeEmits<typeof __VLS_94.emit>;
let __VLS_96 = { 'click': __VLS_pickEvent(__VLS_95['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_92, typeof __VLS_93>).onClick) };
__VLS_96 = {
click: $event => {
__VLS_ctx.updateItem(__VLS_ctx.item.id);
// @ts-ignore
[submitForm, firstName, firstName, lastName, lastName, birthday, address, address, updateItem, item,];
}
};
(__VLS_94.slots!).default;
}
(__VLS_24.slots!).default;
}
(__VLS_18.slots!).default;
}
(__VLS_3.slots!).default;
}
{
const __VLS_97 = ({} as 'RouterView' extends keyof typeof __VLS_ctx ? { 'RouterView': typeof __VLS_ctx.RouterView; } : typeof __VLS_resolvedLocalAndGlobalComponents).RouterView;
const __VLS_98 = __VLS_asFunctionalComponent(__VLS_97, new __VLS_97({ ...{}, }));
({} as { RouterView: typeof __VLS_97; }).RouterView;
const __VLS_99 = __VLS_98({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_98));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_97, typeof __VLS_99> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_100 = __VLS_pickFunctionalComponentCtx(__VLS_97, __VLS_99)!;
let __VLS_101!: __VLS_NormalizeEmits<typeof __VLS_100.emit>;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["form-addview"];
__VLS_styleScopedClasses["button"];
__VLS_styleScopedClasses["button"];
__VLS_styleScopedClasses["form-row"];
__VLS_styleScopedClasses["col"];
__VLS_styleScopedClasses["form-control"];
__VLS_styleScopedClasses["col"];
__VLS_styleScopedClasses["form-control"];
__VLS_styleScopedClasses["col"];
__VLS_styleScopedClasses["form-control"];
__VLS_styleScopedClasses["col"];
__VLS_styleScopedClasses["form-control"];
__VLS_styleScopedClasses["btn"];
__VLS_styleScopedClasses["btn-primary"];
__VLS_styleScopedClasses["btn"];
__VLS_styleScopedClasses["btn-primary"];
}
var __VLS_slots!: {};
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
RouterLink: RouterLink as typeof RouterLink,
firstName: firstName as typeof firstName,
lastName: lastName as typeof lastName,
birthday: birthday as typeof birthday,
address: address as typeof address,
item: item as typeof item,
updateItem: updateItem as typeof updateItem,
submitForm: submitForm as typeof submitForm,
};
},

name: "AddView",
data() {
return {
firstName: '',
lastName: '',
birthday: '',
address: ','
};
},
methods: {
updateItem() {
try {
} catch (error) {
console.error('Error updating item:', error);
}
},
submitForm() {
axios.post('http://127.0.0.1:8000/api/Student', {
FirstName: firstName.value,
LastName: lastName.value,
Birthday: birthday.value,
Address: address.value
})
.then(response => {
console.log(response.data);

firstName.value = '';
lastName.value = '';
birthday.value = '';
address.value = '';

showAlert('Success', 'Form submitted successfully!');
})
.catch(error => {
console.error(error.response.data);
showAlert('Error', 'Form submission failed. Please try again later.');
});
},
showAlert(title, message) {
alert(`${title}: ${message}`);
},
fetchItem() {
try {
const response = await axios.get(`http://127.0.0.1:8000/api/Student/${itemId}`);
item.value = response.data;
} catch (error) {
console.error('Error fetching item details:', error);
}
}
}
});
return (await import('vue')).defineComponent({
setup() {
return {};
},

name: "AddView",
data() {
return {
firstName: '',
lastName: '',
birthday: '',
address: ','
};
},
methods: {
updateItem() {
try {
} catch (error) {
console.error('Error updating item:', error);
}
},
submitForm() {
axios.post('http://127.0.0.1:8000/api/Student', {
FirstName: firstName.value,
LastName: lastName.value,
Birthday: birthday.value,
Address: address.value
})
.then(response => {
console.log(response.data);

firstName.value = '';
lastName.value = '';
birthday.value = '';
address.value = '';

showAlert('Success', 'Form submitted successfully!');
})
.catch(error => {
console.error(error.response.data);
showAlert('Error', 'Form submission failed. Please try again later.');
});
},
showAlert(title, message) {
alert(`${title}: ${message}`);
},
fetchItem() {
try {
const response = await axios.get(`http://127.0.0.1:8000/api/Student/${itemId}`);
item.value = response.data;
} catch (error) {
console.error('Error fetching item details:', error);
}
}
}
});
})();
