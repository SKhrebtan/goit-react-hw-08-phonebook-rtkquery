"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[891],{891:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var a=n(4165),r=n(5861),s=n(9439),i=n(2791),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")},u=n(6747),o=n(2596),d=n(6004),l=n(5218),m="Form_form__e1yzW",p="Form_btn__0ebGo",f=n(3329);var h=function(){var e=(0,i.useState)(""),t=(0,s.Z)(e,2),n=t[0],h=t[1],x=(0,i.useState)(""),b=(0,s.Z)(x,2),v=b[0],g=b[1],_=(0,d.Tn)(),j=(0,s.Z)(_,1)[0],y=(0,d.wY)().data,w=c(),Z=c(),k=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":h(a);break;case"number":g(a);break;default:console.log("\u0449\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a")}},C=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.t0=n,e.t1=v,e.next=5,c();case 5:if(e.t2=e.sent,r={name:e.t0,number:e.t1,id:e.t2},!y.find((function(e){return e.name.includes(r.name)}))){e.next=9;break}return e.abrupt("return",alert("ay, \u0442\u0430\u043a\u0438\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0432\u0436\u0435 \u0456\u0441\u043d\u0443\u0454"));case 9:return A(),e.prev=10,e.next=13,j(r);case 13:l.Am.success("\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0434\u043e\u0434\u0430\u043d\u043e",{duration:4e3,position:"top-right"}),e.next=19;break;case 16:e.prev=16,e.t3=e.catch(10),l.Am.error("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 19:case"end":return e.stop()}}),e,null,[[10,16]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){h(""),g("")};return(0,f.jsx)("form",{onSubmit:C,className:m,children:(0,f.jsxs)(u.Z,{sx:{padding:"20px",display:"flex",gap:"20px",marginBottom:"20px"},children:[(0,f.jsx)(o.Z,{id:"outlined-basic",label:"Name",variant:"outlined",type:"text",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,myid:w,onChange:k}),(0,f.jsx)(o.Z,{id:"outlined-basic",label:"Number",variant:"outlined",type:"tel",name:"number",value:v,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,myid:Z,onChange:k}),(0,f.jsx)("button",{type:"submit",className:p,children:"Add contact"})]})})},x=n(5048),b=n(6617),v=n(4217),g=function(){var e=(0,x.v9)(v.zK),t=(0,x.I0)();return(0,f.jsx)(o.Z,{id:"standard-basic",label:"Find contacts by name",variant:"standard",type:"text",name:"filter",value:e,onChange:function(e){return t((0,b.h)(e.currentTarget.value))},sx:{marginLeft:"20px"}})},_="ListUpdate_list__unpIe",j="ListUpdate_item__VXSfh",y="ListUpdate_listBtn__BPhEl",w="ListUpdate_text__FZ-zv",Z=function(e){var t=e.contact,n=t.id,a=t.name,r=t.number,i=(0,d.Nt)(),c=(0,s.Z)(i,2),u=c[0],o=c[1].isLoading;return(0,f.jsxs)("li",{className:j,children:[(0,f.jsxs)("p",{className:w,children:[a,": ",r]}),(0,f.jsx)("button",{type:"button",onClick:function(){u(n),l.Am.success("\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043e")},className:y,disabled:o,children:o?"Deleting...":"Delete"})]},n)},k=function(){var e=(0,x.v9)(v.zK),t=(0,d.wY)(),n=t.data,a=t.refetch,r=t.error,s=t.isLoading;(0,i.useEffect)((function(){a()}),[a]);var c=e.toLowerCase(),u=(0,i.useMemo)((function(){if(n)return n.filter((function(e){return e.name.toLowerCase().includes(c)}))}),[c,n]);return(0,f.jsxs)("div",{children:[s&&(0,f.jsx)("h1",{children:"Loading..."}),(0,f.jsx)("ul",{className:_,children:n&&u.map((function(e){return(0,f.jsx)(Z,{contact:e},e.id)}))}),r&&(0,f.jsxs)("h1",{children:["Something went wrong: ",r.message]})]})};function C(){return(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{children:"Contacts"}),(0,f.jsx)(h,{}),(0,f.jsx)(g,{}),(0,f.jsx)(k,{})]})}}}]);
//# sourceMappingURL=891.7a5b7142.chunk.js.map