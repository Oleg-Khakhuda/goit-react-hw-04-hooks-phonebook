(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),i=(n(16),n(11)),s=n(3),l=n(19),u=n(2),b=n.n(u),m=n(0),d=function(t){var e=t.addNewContact,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],o=c[1],i=Object(a.useState)(""),u=Object(s.a)(i,2),d=u[0],j=u[1],f=Object(l.a)(),h=Object(l.a)(),O=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":o(a);break;case"number":j(a);break;default:return}},p=function(){j(""),o("")};return Object(m.jsxs)("form",{className:b.a.form,onSubmit:function(t){t.preventDefault(),e(r,d),p()},children:[Object(m.jsx)("label",{className:b.a.label,htmlFor:f,children:"Name"}),Object(m.jsx)("input",{className:b.a.input,type:"text",value:r,id:f,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:O}),Object(m.jsx)("label",{className:b.a.label,htmlFor:h,children:"Number"}),Object(m.jsx)("input",{className:b.a.input,type:"tel",value:d,id:h,name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:O}),Object(m.jsx)("button",{className:b.a.button,type:"submit",children:"Add contact"})]})},j=n(6),f=n.n(j),h=function(t){var e=t.contacts,n=t.handleDelete;return Object(m.jsx)("ul",{className:f.a.list,children:e.map((function(t){return Object(m.jsxs)("li",{className:f.a.listItem,children:[t.name,":  ",t.number,Object(m.jsx)("button",{className:f.a.deleteButton,type:"button",id:t.id,onClick:n,children:"Delete"})]},t.id)}))})},O=n(7),p=n.n(O),_=function(t){var e=t.changeFilter,n=Object(l.a)();return Object(m.jsxs)("form",{className:p.a.form,children:[Object(m.jsx)("label",{className:p.a.label,htmlFor:n,children:"Find contacts by name"}),Object(m.jsx)("input",{className:p.a.input,type:"text",id:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",onChange:e})]})},x=function(){var t=Object(a.useState)((function(){var t=localStorage.getItem("contacts");return t?JSON.parse(t):[]})),e=Object(s.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(s.a)(r,2),u=o[0],b=o[1];Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(d,{addNewContact:function(t,e){var a={id:Object(l.a)(),name:t,number:e};n.find((function(e){return e.name===t}))?alert("".concat(t," is already in contacts!")):n.find((function(t){return t.number===e}))?alert("".concat(e," is already in contacts!")):c((function(t){return[].concat(Object(i.a)(t),[a])}))}}),Object(m.jsx)("h1",{children:"Contacts"}),Object(m.jsx)(_,{changeFilter:function(t){var e=t.target.value;b(e)}}),Object(m.jsx)(h,{contacts:function(){var t=u.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}(),handleDelete:function(t){c(n.filter((function(e){return e.id!==t.target.id})))}})]})};o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={form:"ContactForm_form__29fIC",input:"ContactForm_input__1Dvu7",label:"ContactForm_label__3-9GI",button:"ContactForm_button__Jm76U"}},6:function(t,e,n){t.exports={list:"ContactsList_list__2Ca3y",listItem:"ContactsList_listItem__mKj65",deleteButton:"ContactsList_deleteButton__JIMQN"}},7:function(t,e,n){t.exports={form:"Filter_form__4fRlV",label:"Filter_label__UUmHE",input:"Filter_input__11IEC"}}},[[18,1,2]]]);
//# sourceMappingURL=main.6b7cd286.chunk.js.map