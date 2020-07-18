(this.webpackJsonpreact_employee_directory=this.webpackJsonpreact_employee_directory||[]).push([[0],{19:function(e,t,a){e.exports=a(43)},24:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),o=a.n(l),c=(a(24),a(12)),s=a(13),i=a(14),u=a(18),m=a(17);var h={backgroundColor:"#02075D",color:"#FFFFFF",fontFamily:"Arial, Helvetica, sans-serif",textAlign:"center",paddingTop:"20px",paddingBottom:"10px",borderBottom:"3px solid red"},d=function(){return r.a.createElement("header",{style:h},r.a.createElement("h1",null,"Employee Directory"),r.a.createElement("p",null,"Click on the sort button to filter by last name or use the search box to search by first name."))};var p={padding:"6px",width:"20%",border:"1px solid grey",marginTop:"20px",marginRight:"auto",marginLeft:"auto",fontSize:"17px"},f=function(e){return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{style:p,onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Search",id:"search"})))},g=a(15),E=a.n(g);var v={backgroundColor:"orange",border:"none",color:"white",padding:"2px 3px",textAlign:"center",textDecoration:"none",display:"inline-block",fontSize:"8px",marginLeft:"2px"},y=function(e){return r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Image"),r.a.createElement("th",{scope:"col"},"Name",r.a.createElement("button",{style:v,onClick:function(){return e.handleSort()}}," Sort")),r.a.createElement("th",{scope:"col"},"Phone"),r.a.createElement("th",{scope:"col"},"Email"),r.a.createElement("th",{scope:"col"},"DOB"))),r.a.createElement("tbody",null,e.results.map((function(e){var t=E()(e.dob.date).format("LL");return r.a.createElement("tr",{key:e.phone},r.a.createElement("td",null,r.a.createElement("img",{alt:"employee",src:e.picture.thumbnail})),r.a.createElement("td",null,e.name.first+" "+e.name.last),r.a.createElement("td",null,e.phone),r.a.createElement("td",null,e.email),r.a.createElement("td",null,t))}))))},b=a(16),x=a.n(b),k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={search:"",results:[]},e.handleInputChange=function(t){var a=t.target.name,n=t.target.value;e.setState(Object(c.a)({},a,n));var r=e.state.results.filter((function(t){return t.name.first.toLowerCase().includes(e.state.search.toLowerCase())}));console.log(r),e.setState({results:r})},e.handleSort=function(t){var a=e.state.results.sort((function(e,t){return e.name.last>t.name.last?1:-1}));e.setState({results:a})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;x.a.get("https://randomuser.me/api/?results=200&nat=u").then((function(t){return e.setState({results:t.data.results})}))}},{key:"componentDidUpdate",value:function(){console.log(this.state.search),console.log(this.state.results)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(f,{search:this.state.search,handleInputChange:this.handleInputChange}),r.a.createElement(y,{results:this.state.results,handleSort:this.handleSort}))}}]),a}(n.Component);var w=function(){return r.a.createElement(k,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.8f1535e9.chunk.js.map