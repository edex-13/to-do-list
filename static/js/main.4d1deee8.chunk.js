(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(4),r=n.n(o),a=(n(12),n(6)),s=n(2),l=(n(13),n(0)),i=function(e){var t=e.todos,n=t.length,c=t.filter((function(e){return e.completed})).length;return Object(l.jsxs)("h2",{className:"TodoCounter",children:["Has completado ",c," de ",n," TODOs"]})},u=(n(15),function(e){var t=e.searchText,n=e.setSearchText;return Object(l.jsx)("input",{value:t,className:"TodoSearch",placeholder:"Buscar ...",onChange:function(e){n(e.target.value)}})}),d=(n(16),function(e){var t=e.children;return Object(l.jsx)("section",{children:Object(l.jsx)("ul",{children:t})})}),j=(n(17),function(e){return Object(l.jsxs)("li",{className:"TodoItem",children:[Object(l.jsx)("span",{className:"Icon Icon-check ".concat(e.completed&&"Icon-check--active"),onClick:e.onComplete,children:"\u221a"}),Object(l.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(l.jsx)("span",{className:"Icon Icon-delete",onClick:e.onDelete,children:"X"})]})}),b=(n(18),function(e){var t=e.setOpenModal;return Object(l.jsx)("button",{className:"CreateTodoButton",onClick:function(){return t((function(e){return!e}))},children:"+"})}),O=(n(19),function(e){var t=e.children,n=e.setOpenModal;return r.a.createPortal(Object(l.jsx)("div",{className:"ModalBackground",onClick:function(e){var t=e.target;"DIV"===t.tagName&&"ModalBackground"===t.className&&n(!1)},children:t}),document.getElementById("modal"))}),m=(n(20),function(e){var t=e.addTodo,n=e.setOpenModal,o=Object(c.useState)(""),r=Object(s.a)(o,2),a=r[0],i=r[1],u=function(){i(""),n(!1)};return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({text:a,completed:!1}),u()},children:[Object(l.jsx)("label",{children:"Escribe tu nuevo TODO"}),Object(l.jsx)("textarea",{value:a,onChange:function(e){i(e.target.value)},placeholder:"Hacer tareas :)",required:!0}),Object(l.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(l.jsx)("button",{type:"button",className:"TodoForm-button TodoForm-button--cancel",onClick:u,children:"Cancelar"}),Object(l.jsx)("button",{type:"submit",className:"TodoForm-button TodoForm-button--add",children:"A\xf1adir"})]})]})}),f=(n(21),function(){var e=function(e,t){var n=Object(c.useState)(!0),o=Object(s.a)(n,2),r=o[0],a=o[1],l=Object(c.useState)(!1),i=Object(s.a)(l,2),u=i[0],d=i[1],j=Object(c.useState)(t),b=Object(s.a)(j,2),O=b[0],m=b[1];return Object(c.useEffect)((function(){setTimeout((function(){try{var n=localStorage.getItem(e);console.log(localStorage.getItem(e));var c=[];c=n?JSON.parse(n):localStorage.setItem(e,JSON.stringify(t)),m(c),a(!1)}catch(u){d(!0)}}),1e3)}),[]),{item:O,saveItem:function(t){var n=JSON.stringify(t);localStorage.setItem(e,n),m(t)},loading:r,error:u}}("TODOS_V1",[]),t=e.item,n=e.saveItem,o=e.loading,r=e.error,f=Object(c.useState)(!1),x=Object(s.a)(f,2),h=x[0],p=x[1],g=Object(c.useState)(""),v=Object(s.a)(g,2),T=v[0],I=v[1],S=t.filter((function(e){var t=e.text.toLowerCase(),n=T.toLowerCase();return 0===n.length?e:t.includes(n)}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i,{todos:t}),Object(l.jsx)(u,{searchText:T,setSearchText:I}),Object(l.jsxs)(d,{children:[r&&Object(l.jsx)("p",{children:"Error .... "}),o&&Object(l.jsx)("p",{children:"Loading .... "}),!o&&0===S.length&&Object(l.jsx)("p",{children:"Crea tu primer Todo"}),S.map((function(e){return Object(l.jsx)(j,{text:e.text,completed:e.completed,onComplete:function(){return function(e){var c=t.findIndex((function(t){return t.text===e})),o=Object(a.a)(t);o[c].completed=!o[c].completed,n(o)}(e.text)},onDelete:function(){return function(e){var c=t.findIndex((function(t){return t.text===e})),o=Object(a.a)(t);o.splice(c,1),n(o)}(e.text)}},e.text)}))]}),h&&Object(l.jsx)(O,{setOpenModal:p,children:Object(l.jsx)(m,{addTodo:function(e){n([].concat(Object(a.a)(t),[e]))},setOpenModal:p})}),Object(l.jsx)(b,{setOpenModal:p})]})});r.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.4d1deee8.chunk.js.map