(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,a){e.exports={partBody:"PartNewsBody_partBody__2XaQI",inputTextWrap:"PartNewsBody_inputTextWrap__VHZAw",inputText:"PartNewsBody_inputText__3FIMz",inputTitle:"PartNewsBody_inputTitle__3QwS1",addInputText:"PartNewsBody_addInputText__2pmTb",imgInputsLabel:"PartNewsBody_imgInputsLabel__3XmBu",lables:"PartNewsBody_lables__1rala",imgInputsWrap:"PartNewsBody_imgInputsWrap__eopuJ",imgprevievWrap:"PartNewsBody_imgprevievWrap__1wZx9",previews:"PartNewsBody_previews__nFLnb",addInputPhoto:"PartNewsBody_addInputPhoto__PSrDN",acceptButton:"PartNewsBody_acceptButton__2-2sJ",accepted:"PartNewsBody_accepted__3z0F7",acceptedWrap:"PartNewsBody_acceptedWrap__17x8n"}},,,,,,function(e,t,a){e.exports={addNews:"AddNews_addNews__2et-O",imageMain:"AddNews_imageMain__2uRwT",sended:"AddNews_sended__2QLur",arrived:"AddNews_arrived__2g675",sendedWrap:"AddNews_sendedWrap__AbvHa",err:"AddNews_err__2G339",addNewPartBody:"AddNews_addNewPartBody__2BCOK",newsPartBody:"AddNews_newsPartBody__3EFeO",titleMain:"AddNews_titleMain__2KHNN",imgMainWrap:"AddNews_imgMainWrap__1kKXi",imgpreviev:"AddNews_imgpreviev__2XFWC"}},function(e,t,a){e.exports={lines:"Lines_lines__1_ZFo",withGrey:"Lines_withGrey__8A19h",titleWrap:"Lines_titleWrap__2SuQK",dateWrap:"Lines_dateWrap__2ZGXQ",dash:"Lines_dash__37SUw"}},,function(e,t,a){e.exports={menu:"Menu_menu__3x2Sp",menuButton:"Menu_menuButton__16a4Q",menuActive:"Menu_menuActive__tBElS",overlay:"Menu_overlay__11cJc"}},,function(e,t){e.exports={addr:"http://xcxlow.xyz",backEnd:"https://admin.xcxlow.xyz/api"}},,function(e,t,a){e.exports={remove:"RemoveNews_remove__1eK5d",form:"RemoveNews_form__1a5Sd",actionWrap:"RemoveNews_actionWrap__3Sa7Q",deleteButton:"RemoveNews_deleteButton__39Dig"}},function(e,t,a){e.exports={changeComponents:"NewsEditor_changeComponents__snxQh",changeComponentsWrap:"NewsEditor_changeComponentsWrap__1u5yI"}},,,,function(e,t,a){e.exports={App:"App_App__1fGbL"}},function(e,t,a){},function(e,t,a){e.exports=a(32)},,,,,,function(e,t,a){},,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(18),s=a.n(i),l=(a(27),a(2)),c=a(3),o=a(5),u=a(4),d=a(6),m=a(10),p=a.n(m),h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isMobile:!1,toggleMenu:!0},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.innerWidth<600&&this.setState({isMobile:!0})}},{key:"onClickMenu",value:function(){this.setState({toggleMenu:!this.state.toggleMenu})}},{key:"menuItem",value:function(){return r.a.createElement(r.a.Fragment,null,this.state.isMobile?r.a.createElement("div",{className:p.a.menuButton,onClick:this.onClickMenu.bind(this)},r.a.createElement("span",null)," "):r.a.createElement("h2",null,"\u0410\u0434\u043c\u0438\u043d \u043f\u0430\u043d\u0435\u043b\u044c"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u044f\u043c\u0438")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"))),r.a.createElement("div",{className:p.a.overlay,onClick:this.onClickMenu.bind(this)}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.state.toggleMenu?r.a.createElement("div",{className:"".concat(p.a.menu," ").concat(p.a.menuActive)},this.menuItem()," "):r.a.createElement("div",{className:p.a.menu},this.menuItem()," "))}}]),t}(r.a.Component),v=a(19),f=a.n(v),g=a(15),_=a.n(g),E=a(20),y=a.n(E),b=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:y.a.edit},"EditNews !")}}]),t}(r.a.Component),w=a(7),N=a.n(w),k=a(1),x=a.n(k),I=a(9),B=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={title:"",imgInputs:[null],textInputs:[null],filesInput:[],textsInput:[],imgpreviev:[],disableSubm:!1,delete:!1},a.handleImg=function(e){var t=e.currentTarget,n=void 0;if(t.files[0]&&(n=window.URL.createObjectURL(t.files[0])),t.id<a.state.filesInput.length){for(var i=[],s=[],l=0;l<a.state.filesInput.length;l++)+t.id===l?(i[l]=t.files,s[l]=r.a.createElement("div",{key:t.id,className:x.a.imgprevievWrap},r.a.createElement("img",{className:x.a.imgpreviev,src:n,alt:""}),r.a.createElement("span",null,"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 ",+t.id+1))):(i[l]=a.state.filesInput[l],s[l]=a.state.imgpreviev[l]);a.setState({filesInput:i,imgpreviev:s})}else"image/jpeg"===t.files[0].type||"image/png"===t.files[0].type?(a.setState(function(e){return{list:e.filesInput.push(t.files),value:""}}),a.setState(function(e){return{list:e.imgpreviev.push(r.a.createElement("div",{key:t.id,className:x.a.imgprevievWrap},r.a.createElement("img",{className:x.a.imgpreviev,src:n,alt:""}),r.a.createElement("span",null,"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 ",+t.id+1))),value:""}})):a.setState(function(e){return{list:e.filesInput.push(""),value:""}})},a.addPreview=function(){return a.state.imgpreviev[a.state.imgInputs.length]},a.addInputPhoto=function(e){e.preventDefault(),a.state.imgInputs.length===a.state.filesInput.length&&a.setState(function(e){return{list:e.imgInputs.push(r.a.createElement("label",{key:a.state.imgInputs.length,className:x.a.imgInputsLabel},r.a.createElement("input",{id:a.state.imgInputs.length,onInput:a.handleImg,type:"file",name:"image"}),"\u0412\u044b\u0431\u0440\u0430\u0442\u044a/\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443 ",a.state.filesInput.length+1)),value:""}})},a.addInputText=function(e){e.preventDefault();var t=a.state.textsInput;t[t.length-1]&&(a.setState(function(e){return{list:e.textInputs.push(r.a.createElement(I.a,{className:x.a.inputText,id:a.state.textInputs.length,key:Date.now(),placeholder:"\u0422\u0435\u043a\u0441\u0442",type:"textarea",name:"text",onChange:a.handleText})),value:""}}),a.setState(function(e){return{list:e.textsInput.push(""),value:""}}))},a.handleText=function(e){for(var t=[],n=0;n<a.state.textInputs.length;n++)+e.currentTarget.id===n?t[n]=e.currentTarget.value:t[n]=a.state.textsInput[n];a.setState({textsInput:t})},a.handleTitle=function(e){return a.setState({title:e.currentTarget.value})},a.handleAccept=function(e){e.preventDefault();var t=a.state,n=t.title,r=t.filesInput,i=t.textsInput;a.props.partBody(n,i,r),a.setState({disableSubm:!0,delete:!0})},a.handleDelete=function(e){e.preventDefault(),a.props.deletePart(a.props.id)},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:x.a.partBody},r.a.createElement(I.a,{className:x.a.inputTitle,value:this.state.title,onChange:this.handleTitle,placeholder:"\u041f\u043e\u0434\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",type:"text",name:"title"}),r.a.createElement("div",{className:x.a.inputTextWrap},r.a.createElement(I.a,{className:x.a.inputText,id:"0",placeholder:"\u0422\u0435\u043a\u0441\u0442",type:"textArea",name:"text",onChange:this.handleText}),this.state.textInputs.map(function(e){return e})),r.a.createElement("button",{className:x.a.addInputText,onClick:this.addInputText},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0442\u0435\u043a\u0441\u0442"),r.a.createElement("div",{className:x.a.imgInputsWrap},r.a.createElement("div",{className:x.a.previews},this.state.imgpreviev.map(function(e){return e})),r.a.createElement("div",{className:x.a.lables},r.a.createElement("label",{className:x.a.imgInputsLabel},r.a.createElement("input",{onInput:this.handleImg,id:"0",type:"file",name:"image"}),"\u0412\u044b\u0431\u0440\u0430\u0442\u044c/\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443 1"),this.state.imgInputs.map(function(e){return e}))),r.a.createElement("button",{className:x.a.addInputPhoto,onClick:this.addInputPhoto},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0435 \u0444\u043e\u0442\u043e"),r.a.createElement("button",{onClick:this.handleAccept,className:x.a.acceptButton,disabled:this.state.disableSubm},"\u0413\u043e\u0442\u043e\u0432\u043e"),r.a.createElement("div",{className:x.a.acceptedWrap},this.state.disableSubm&&r.a.createElement("p",{className:x.a.accepted},"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043e"),this.state.delete&&r.a.createElement("i",{onClick:this.handleDelete,title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0431\u043b\u043e\u043a"})))}}]),t}(r.a.Component),C=function(e){var t=e.getDate();t<10&&(t="0"+t);var a=e.getMonth()+1;a<10&&(a="0"+a);var n=e.getFullYear()%100;return n<10&&(n="0"+n),t+"."+a+"."+n},P=a(12),S=a.n(P),O=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={title:"",img:null,body:[],imgpreviev:null,partsBody:[],sended:!1,err:!1},a.sendData=function(e){var t=a.state,n=t.title,r=t.img,i=t.body,s=new FormData;r&&s.append("mainImg",r),i.length&&i.forEach(function(e,t){e.img&&e.img.forEach(function(e){s.append("file"+t,e[0])}),e.text&&e.text.forEach(function(e){return s.append("text"+t,e)}),e.title?s.append("bodyTitle",e.title):s.append("bodyTitle",".")}),n&&s.append("title",n),e.preventDefault(),s.append("date",C(new Date)),i.length&&n?(fetch(S.a.backEnd+"/posts",{method:"POST",body:s}),a.setState({sended:!0,err:!1})):a.setState({err:!0})},a.handleTitle=function(e){return a.setState({title:e.currentTarget.value})},a.imgSelect=function(e){if(e.currentTarget.files[0]){a.setState({img:e.currentTarget.files[0]});var t=window.URL.createObjectURL(e.currentTarget.files[0]);a.setState({imgpreviev:r.a.createElement("img",{key:Date(),className:N.a.imgpreviev,src:t,alt:""})})}},a.addNewPartBody=function(e){e&&e.preventDefault(),a.setState(function(e){return{list:e.partsBody.push(r.a.createElement("div",{key:Date()},r.a.createElement("p",{className:N.a.newsPartBody},"\u041d\u043e\u0432\u0430\u044f \u0447\u0430\u0441\u0442\u044c \u043f\u043e\u0441\u0442\u0430"),r.a.createElement(B,{deletePart:a.deletePart,id:a.state.partsBody.length,key:Date(),partBody:a.partBody}))),value:""}})},a.partBody=function(e,t,n){var r={title:e,text:t,img:n};a.setState(function(e){return{list:e.body.push(r),value:""}}),a.addNewPartBody()},a.deletePart=function(e){a.setState(function(t){return{list:t.partsBody.splice(e,1),value:""}}),a.setState(function(t){return{list:t.body.splice(e,1),value:""}})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState(function(t){return{list:t.partsBody.push(r.a.createElement(B,{deletePart:e.deletePart,id:e.state.partsBody.length,key:Date(),partBody:e.partBody})),value:""}})}},{key:"render",value:function(){return r.a.createElement("div",{className:N.a.addNews},r.a.createElement("form",{method:"post",encType:"multipart/form-data"},r.a.createElement("label",{className:N.a.titleMain},r.a.createElement("span",null,"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u041d\u043e\u0432\u043e\u0441\u0442\u0438"),r.a.createElement(I.a,{onChange:this.handleTitle,value:this.state.title,minRows:1,placeholder:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",name:"title"})),r.a.createElement("div",{className:N.a.imgMainWrap},r.a.createElement("label",{className:N.a.imageMain,title:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043b"},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043f\u0440\u0435\u0432\u044c\u044e \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438",r.a.createElement("input",{onInput:this.imgSelect,title:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",type:"file",name:"image"})),this.state.imgpreviev),r.a.createElement("div",{className:N.a.addNewPartBody},r.a.createElement("button",{onClick:this.addNewPartBody},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0431\u043b\u043e\u043a")),this.state.partsBody.map(function(e){return e}),r.a.createElement("div",{className:N.a.sendedWrap},r.a.createElement("button",{className:N.a.sended,onClick:this.sendData,type:"submit"},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"),this.state.sended&&r.a.createElement("p",{className:N.a.arrived},"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e"),this.state.err&&r.a.createElement("p",{className:N.a.err},"\u041d\u0435 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b \u0434\u0430\u043d\u044b\u0435"))))}}]),t}(r.a.Component),j=a(13),T=a.n(j),W=a(16),A=a(14),M=a.n(A),L=a(8),D=a.n(L),F=function(e){var t=function(t){e.chekedPost(e.id,t.currentTarget.checked)};return r.a.createElement(r.a.Fragment,null,e.withGrey&&r.a.createElement("div",{className:D.a.lines},r.a.createElement("div",{className:D.a.dateWrap},r.a.createElement("span",null,e.date.substring(0,10)),r.a.createElement("span",{className:D.a.dash},"-")),r.a.createElement("div",{className:D.a.titleWrap},r.a.createElement("h4",null,e.text),r.a.createElement("div",null,r.a.createElement("input",{onChange:t,name:"checkbox",type:"checkbox"})))),!e.withGrey&&r.a.createElement("div",{className:"".concat(D.a.lines," ").concat(D.a.withGrey)},r.a.createElement("div",{className:D.a.dateWrap},r.a.createElement("span",null,e.date.substring(0,10)),r.a.createElement("span",{className:D.a.dash},"-")),r.a.createElement("div",{className:D.a.titleWrap},r.a.createElement("h4",null,e.text),r.a.createElement("input",{onChange:t,name:"checkbox",type:"checkbox"}))))},R=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={data:[],titles:[],chekedList:null,deletedCount:void 0},a.renderListPost=function(e){var t=[];if(e[0]){var n=e.map(function(e,n){return n%2===0?(t.push({id:e._id,checked:!1}),r.a.createElement(F,{chekedPost:a.chekedPost,id:e._id,key:n,date:e.date,text:e.title,withGrey:!0})):(t.push({id:e._id,checked:!1}),r.a.createElement(F,{chekedPost:a.chekedPost,id:e._id,key:n,date:e.date,text:e.title,withGrey:!1}))});a.setState({titles:n,chekedList:t})}},a.chekedPost=function(e,t){var n=a.state.chekedList.map(function(a){return a.id===e?{id:e,checked:t}:a});a.setState({chekedList:n})},a.fetchRequests=function(){var e=Object(W.a)(T.a.mark(function e(t){return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e){var a=[],n=0;t.forEach(function(e){e.checked&&a.push(fetch(S.a.backEnd+"/posts/"+e.id,{method:"delete"}).then(function(e){return e.json()}).then(function(e){e.deletedCount&&n++}).catch(function(e,t){return console.log(e,t)}))}),Promise.all(a).then(function(){e(n)})}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.deletePosts=Object(W.a)(T.a.mark(function e(){return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.state.chekedList&&a.fetchRequests(a.state.chekedList).then(function(e){alert("succesful delete "+e+" posts"),setTimeout(function(){window.location.reload()},1500)});case 1:case"end":return e.stop()}},e)})),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(S.a.backEnd+"/posts/").then(function(e){return e.json()}).then(function(t){e.setState({data:t}),e.renderListPost(t)})}},{key:"render",value:function(){return r.a.createElement("div",{className:M.a.remove},r.a.createElement("p",null,"\u041f\u043e\u0441\u0442\u044b"),this.state.deletedCount&&r.a.createElement("p",null,"\u0423\u0434\u0430\u043b\u0435\u043d\u043e"),r.a.createElement("div",{className:M.a.actionWrap},r.a.createElement("form",{className:M.a.form},r.a.createElement(I.a,null),r.a.createElement("button",null,"\u041f\u043e\u0438\u0441\u043a")),r.a.createElement("button",{title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u044b\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438",className:M.a.deleteButton,onClick:this.deletePosts},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")),this.state.data[0]&&this.state.titles.map(function(e){return e}))}}]),t}(r.a.Component),G=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={changeComponents:r.a.createElement(O,null)},a.changeComponents=function(e){var t=void 0;switch(e?e.currentTarget.name:""){case"add":t=r.a.createElement(O,null),a.setState({changeComponents:t});break;case"edit":t=r.a.createElement(b,null),a.setState({changeComponents:t});break;case"delete":t=r.a.createElement(R,null),a.setState({changeComponents:t});break;default:t=r.a.createElement(r.a.Fragment,null,"asd"),a.setState({changeComponents:t})}},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:_.a.newsEditor},r.a.createElement("div",{className:_.a.changeComponents},r.a.createElement("div",{className:_.a.changeComponentsWrap},r.a.createElement("button",{onClick:this.changeComponents,title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0441\u0442\u044c",name:"add"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0441\u0442\u044c"),r.a.createElement("button",{onClick:this.changeComponents,title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u043e\u0432\u043e\u0441\u0442\u044c",name:"edit"},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u043e\u0432\u043e\u0441\u0442\u044c"),r.a.createElement("button",{onClick:this.changeComponents,title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0441\u0442\u044c",name:"delete"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0441\u0442\u044c"))),r.a.createElement("div",null,this.state.changeComponents))}}]),t}(r.a.Component),Q=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:f.a.App},r.a.createElement(h,null),r.a.createElement(G,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[21,1,2]]]);
//# sourceMappingURL=main.83e1397c.chunk.js.map