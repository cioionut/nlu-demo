(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(52)},39:function(e,t,a){},40:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(15),r=a.n(c),o=(a(38),a(10)),l=a(11),i=a(13),m=a(12),u=a(14),d=a(7),h=a(22),p=a(9);a(39),a(40);function v(e){return!0===e.isMe?s.a.createElement("div",{className:"row justify-content-end"},s.a.createElement("div",{className:"card message-card bg-lightblue m-1"},s.a.createElement("div",{className:"card-body p-2"},s.a.createElement("span",{className:"mx-2"},e.value)))):s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"card message-card m-1"},s.a.createElement("div",{className:"card-body p-2"},s.a.createElement("span",{className:"mx-2"},e.value))))}var b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).scrollToBottom=function(){a.messagesEnd.scrollIntoView({behavior:"smooth"})},a.scrollToBottom=a.scrollToBottom.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"render",value:function(){var e=this,t=this.props.messages.map(function(e,t){return s.a.createElement(v,{value:e.text,isMe:e.isMe,key:t})});return s.a.createElement("div",{className:"container-fluid message-scroll"},t,s.a.createElement("div",{style:{float:"left",clear:"both"},ref:function(t){e.messagesEnd=t}}))}}]),t}(n.Component),f=function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).startUtt="...";return a.apiUrl="".concat("http://0.0.0.0:5000","/api/v1"),a.handleUtteranceChange=a.handleUtteranceChange.bind(Object(d.a)(Object(d.a)(a))),a.handleSubmitFrom=a.handleSubmitFrom.bind(Object(d.a)(Object(d.a)(a))),a.state={dialog:[],apiResponse:{},utterance:"",sessionId:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new URL(this.apiUrl+"/sessions");fetch(t,{method:"POST",credentials:"include",mode:"cors"}).then(function(e){if(200===e.status)return e.json()}).then(function(t){t&&e.setState({sessionId:t.session_id})}).catch(function(e){return console.error("Error:",e)})}},{key:"handleUtteranceChange",value:function(e){var t=e.target.value;"\n"===t.charAt(t.length-1)?this.handleSubmitFrom(e):this.setState({utterance:e.target.value})}},{key:"handleSubmitFrom",value:function(e){var t=this;e.preventDefault(),this.setState({utterance:""});var a=new URL("".concat(this.apiUrl,"/").concat(this.state.sessionId,"/message")),n=this.state.dialog;n.push({isMe:!0,text:this.state.utterance});var s={input:{text:this.state.utterance}};fetch(a,{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"},credentials:"include",mode:"cors"}).then(function(e){if(200===e.status)return e.json()}).then(function(e){e&&n.push({isMe:!1,text:e.output}),t.setState({apiResponse:e,dialog:n})}).catch(function(e){return console.error("Error:",e)})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-header"},s.a.createElement("h5",null,"My Virtual Asisstant")),s.a.createElement("div",{className:"card-body d-flex flex-column p-1"},s.a.createElement(b,{messages:this.state.dialog}),s.a.createElement("form",{onSubmit:this.handleSubmitFrom,className:"mt-3 p-1"},s.a.createElement("div",{className:"input-group"},s.a.createElement("input",{type:"text",className:"form-control",id:"utterance",autocomplete:"off",value:this.state.utterance,onChange:this.handleUtteranceChange,placeholder:this.startUtt}),s.a.createElement("div",{className:"input-group-prepend"},s.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Send"))))))))))}}]),t}(n.Component),g=a(54),E=a(55),N=a(56),O=a(60),j=a(57),y=a(58),w=a(59),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).toggleNavbar=a.toggleNavbar.bind(Object(d.a)(Object(d.a)(a))),a.state={collapsed:!0},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){return s.a.createElement(h.a,{basename:"/nlu-demo"},s.a.createElement("div",null,s.a.createElement(g.a,{color:"faded",light:!0,expand:"md"},s.a.createElement(E.a,{href:"/",className:"mr-auto brand-title"},"CIO Dialog System"),s.a.createElement(N.a,{onClick:this.toggleNavbar,className:"mr-2"}),s.a.createElement(O.a,{isOpen:!this.state.collapsed,navbar:!0},s.a.createElement(j.a,{navbar:!0,right:"true",className:"ml-auto"},s.a.createElement(y.a,null,s.a.createElement(w.a,{tag:h.b,to:"/"},"Assistant"))))),s.a.createElement(p.a,{path:"/",component:f})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.8b3fe087.chunk.js.map