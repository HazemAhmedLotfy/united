(this["webpackJsonpunited-housing"]=this["webpackJsonpunited-housing"]||[]).push([[0],{24:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s.n(a),n=s(19),c=s.n(n),r=(s(24),s.p,s(12)),l=s(3),j=s(4),o=s(6),d=s(5),h=s(10),b=s.n(h),m=(s(14),s(15),s(7)),u=s(0),O=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state={items:[],options:{loop:!0,margin:0,dots:!0,responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}},a}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.apiCall()}},{key:"apiCall",value:function(){var e=this,t=new Headers;t.append("Content-Type","application/json"),t.append("accept","application/json"),fetch("http://3.138.198.198:8055/items/Announcements",{method:"GET",headers:t}).then((function(e){return e.json()})).then((function(t){e.setState({items:t.data})}))}},{key:"render",value:function(){var e=this.state.items.map((function(e){return Object(u.jsxs)("div",{className:"bannerItem",children:[Object(u.jsx)("div",{className:"bannerImage",children:Object(u.jsx)("img",{src:"http://3.138.198.198:8055/assets/"+e.Image})}),Object(u.jsx)("div",{className:"bannerInfoCont ",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"bannerInfo",children:[Object(u.jsx)("h1",{children:e.Subtitle}),Object(u.jsx)("h2",{children:e.Title}),Object(u.jsxs)(m.b,{to:e.Link,children:["View Project ",Object(u.jsx)("i",{className:"icon-arrow-down-right2"})]})]})})})]},e.id)}));return Object(u.jsx)("div",{id:"bannerSection",children:this.state.items&&0!=this.state.items.length?Object(u.jsx)(b.a,Object(r.a)(Object(r.a)({className:"resSlider projectSlider owl-theme"},this.state.options),{},{children:e})):Object(u.jsx)("h1",{children:"hello"})})}}]),s}(i.a.Component),p=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state={items:[]},a}return Object(j.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("div",{id:"stockSection",children:[Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"stockInfo d-flex align-items-center",children:[Object(u.jsxs)("div",{className:"stockTitle",children:[Object(u.jsx)("img",{src:"/assets/images/whitelogo.png"}),Object(u.jsxs)("h1",{children:[Object(u.jsx)("span",{}),"stock"]})]}),Object(u.jsx)("div",{className:"separator"}),Object(u.jsxs)("div",{className:"stockValue",children:[Object(u.jsx)("i",{className:"icon-stock"}),Object(u.jsx)("span",{children:"7.2"}),Object(u.jsx)("span",{children:"%"})]})]})}),Object(u.jsxs)("div",{className:"socialMediaLinks",children:[Object(u.jsx)("a",{href:"#",children:Object(u.jsx)("i",{className:"icon-facbeook"})}),Object(u.jsx)("span",{}),Object(u.jsx)("a",{href:"#",children:Object(u.jsx)("i",{className:"icon-linked"})}),Object(u.jsx)("span",{}),Object(u.jsx)("a",{href:"#",children:Object(u.jsx)("i",{className:"icon-Instagram"})})]})]})}}]),s}(i.a.Component),x=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state={items:[],options:{loop:!0,margin:0,nav:!0,navText:['<i class="icon-arrow"></i>','<i class="icon-arrow"></i>'],responsive:{0:{items:1},600:{items:2},1e3:{items:4}}}},a}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.apiCall()}},{key:"apiCall",value:function(){var e=this,t=new Headers;t.append("Content-Type","application/json"),t.append("accept","application/json"),fetch("http://3.138.198.198:8055/items/Projects",{method:"GET",headers:t}).then((function(e){return e.json()})).then((function(t){e.setState({items:t.data})}))}},{key:"render",value:function(){var e=this.state.items.map((function(e){return Object(u.jsx)("div",{className:"item",children:Object(u.jsxs)("div",{className:"projectItem",children:[Object(u.jsx)("div",{className:"projectImg",children:Object(u.jsx)("img",{src:"http://3.138.198.198:8055/assets/"+e.Image})}),Object(u.jsxs)("div",{className:"projectData",children:[Object(u.jsx)("h1",{children:e.Title}),Object(u.jsxs)(m.b,{to:"/project-details?id="+e.id,children:["View Project ",Object(u.jsx)("i",{className:"icon-arrow-down-right2"})]})]})]})},e.id)}));return Object(u.jsxs)("div",{id:"Portfolio",children:[Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"sectionTitle",children:[Object(u.jsxs)("h1",{children:[Object(u.jsx)("span",{}),"What we do"]}),Object(u.jsx)("h2",{children:"Helping you find the property of your dreams."})]})}),this.state.items&&0!=this.state.items.length?Object(u.jsx)(b.a,Object(r.a)(Object(r.a)({className:"resSlider projectSlider owl-theme"},this.state.options),{},{children:e})):Object(u.jsx)("h1",{children:"hello"}),Object(u.jsx)("div",{className:"viewAll",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("a",{href:"#",children:"Browse all our projects\u2026"})})})]})}}]),s}(i.a.Component),v=s(16),f=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state={items:[],imgChecker:"img1"},a.myChangeHandler=a.myChangeHandler.bind(Object(v.a)(a)),a}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.apiCall()}},{key:"apiCall",value:function(){var e=this,t=new Headers;t.append("Content-Type","application/json"),t.append("accept","application/json"),fetch("http://3.138.198.198:8055/items/HistoricalAssets",{method:"GET",headers:t}).then((function(e){return e.json()})).then((function(t){e.setState({aboutTitle:t.data.Title,aboutSub:t.data.Subtitle,aboutDesc:t.data.Description,aboutImg1:t.data.Image1,aboutImg2:t.data.Image2,aboutImg3:t.data.Image3})}))}},{key:"myChangeHandler",value:function(e){var t=e.target.name;this.setState({imgChecker:t})}},{key:"render",value:function(){return Object(u.jsx)("div",{id:"AboutUs",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"col-6 d-flex align-items-center",children:[Object(u.jsx)("div",{className:"mainImg",children:"img1"==this.state.imgChecker?Object(u.jsx)("img",{src:"http://3.138.198.198:8055/assets/"+this.state.aboutImg1}):"img2"==this.state.imgChecker?Object(u.jsx)("img",{src:"http://3.138.198.198:8055/assets/"+this.state.aboutImg2}):Object(u.jsx)("img",{src:"http://3.138.198.198:8055/assets/"+this.state.aboutImg3})}),Object(u.jsxs)("div",{className:"thumbnailsImgs",children:[Object(u.jsx)("button",{className:"imgItem",name:"img1",onClick:this.myChangeHandler,children:Object(u.jsx)("img",{src:"http://3.138.198.198:8055/assets/"+this.state.aboutImg1})}),Object(u.jsx)("button",{className:"imgItem",name:"img2",onClick:this.myChangeHandler,children:Object(u.jsx)("img",{src:"http://3.138.198.198:8055/assets/"+this.state.aboutImg2})}),Object(u.jsx)("button",{className:"imgItem",name:"img3",onClick:this.myChangeHandler,children:Object(u.jsx)("img",{src:"http://3.138.198.198:8055/assets/"+this.state.aboutImg3})})]})]}),Object(u.jsx)("div",{className:"col-6 d-flex flex-direction-column align-items-center",children:Object(u.jsxs)("div",{className:"aboutInfo",children:[Object(u.jsxs)("div",{className:"sectionTitle",children:[Object(u.jsxs)("h1",{children:[Object(u.jsx)("span",{}),this.state.aboutSub]}),Object(u.jsx)("h2",{children:this.state.aboutTitle})]}),Object(u.jsx)("p",{children:this.state.aboutDesc}),Object(u.jsxs)("a",{href:"#",className:"viewBtn",children:["Browse our historical projects ",Object(u.jsx)("i",{className:"icon-arrow-down-right2"})]})]})})]})})})}}]),s}(i.a.Component),g=s(11),N=s.n(g),w=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state={items:[]},a}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.apiCall()}},{key:"apiCall",value:function(){var e=this,t=new Headers;t.append("Content-Type","application/json"),t.append("accept","application/json"),fetch("http://3.138.198.198:8055/items/News",{method:"GET",headers:t}).then((function(e){return e.json()})).then((function(t){e.setState({items:t.data})}))}},{key:"render",value:function(){var e=this.state.items.map((function(e){return Object(u.jsx)("div",{className:"col-4",children:Object(u.jsxs)(m.b,{className:"newItem",to:"/news-details?id="+e.id,children:[Object(u.jsx)("div",{className:"newImg",children:Object(u.jsx)("img",{src:"http://3.138.198.198:8055/assets/"+e.Image})}),Object(u.jsxs)("div",{className:"newInfo",children:[Object(u.jsx)("span",{className:"newDate",children:N()(e.date_created).format("DD MMM")}),Object(u.jsxs)("span",{className:"newTxt",children:[Object(u.jsx)("h1",{children:e.Title}),Object(u.jsxs)("p",{children:[e.Brief.substring(0,150),e.Brief.length>=150&&"..."]})]})]})]})},e.id)}));return Object(u.jsx)("div",{id:"News",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"sectionTitle",children:[Object(u.jsxs)("h1",{children:[Object(u.jsx)("span",{}),"Our News"]}),Object(u.jsx)("h2",{children:"We post often to our news to keep you updated."})]}),Object(u.jsx)("div",{className:"row newContainer",children:e})]})})}}]),s}(i.a.Component),T="http://localhost:8055",y=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state={items:[]},a}return Object(j.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(O,{apiUrl:T}),Object(u.jsx)(p,{apiUrl:T}),Object(u.jsx)(x,{apiUrl:T}),Object(u.jsx)(f,{apiUrl:T}),Object(u.jsx)(w,{apiUrl:T})]})}}]),s}(i.a.Component),C=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state={items:[]},a}return Object(j.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"innerBreadCrumb",children:[Object(u.jsx)("div",{className:"breadImg",children:Object(u.jsx)("img",{src:"/assets/images/BreadCrumbs/aboutImg.png"})}),Object(u.jsx)("div",{className:"breadCont",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"breadInfo",children:[this.props.itmDate&&0!=this.props.itmDate.length?Object(u.jsx)("span",{className:"breadDate",children:N()(this.props.itmDate).format("DD MMM")}):null,Object(u.jsxs)("div",{className:"sectionTitle",children:[Object(u.jsxs)("h1",{children:[Object(u.jsx)("span",{}),this.props.title]}),Object(u.jsx)("h2",{children:this.props.itmTitle})]})]})})})]})}}]),s}(i.a.Component),I=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state={items:[],breadTitle:"About Us",itmTitle:"One of the oldest companies operating in the real estate sector."},a}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.apiCall()}},{key:"apiCall",value:function(){var e=this,t=new Headers;t.append("Content-Type","application/json"),t.append("accept","application/json"),t.append("Authorization","Basic bG90Zi5oYXplbUBnbWFpbC5jb206MTIzNA=="),fetch("http://3.138.198.198:8055/items/AboutUs",{method:"GET",headers:t}).then((function(e){return e.json()})).then((function(t){e.setState({aboutTitle:t.data.Title,aboutDesc:t.data.Description,aboutImg:t.data.Image})}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"innerPage",children:[Object(u.jsx)(C,{title:this.state.breadTitle,itmTitle:this.state.itmTitle}),Object(u.jsxs)("div",{id:"AboutUs",children:[Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row storyAbout",children:[Object(u.jsx)("div",{className:"col-7 d-flex align-items-center",children:Object(u.jsxs)("div",{className:"storyTxt",children:[Object(u.jsxs)("div",{className:"sectionTitle",children:[Object(u.jsxs)("h1",{children:[Object(u.jsx)("span",{}),"The story"]}),Object(u.jsx)("h2",{className:"w-100",children:this.state.aboutTitle})]}),Object(u.jsx)("p",{children:this.state.aboutDesc})]})}),Object(u.jsx)("div",{className:"col-6 storyImgCont",children:Object(u.jsx)("div",{className:"storyImg",children:Object(u.jsx)("img",{src:"http://3.138.198.198:8055/assets/"+this.state.aboutImg})})})]})}),Object(u.jsx)(f,{})]})]})}}]),s}(i.a.Component),k=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state={items:[],breadTitle:"Our Projects",itmTitle:"United housing and development Projects."},a}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.apiCall()}},{key:"apiCall",value:function(){var e=this,t=new Headers;t.append("Content-Type","application/json"),t.append("accept","application/json"),fetch("http://3.138.198.198:8055/items/Projects",{method:"GET",headers:t}).then((function(e){return e.json()})).then((function(t){e.setState({items:t.data})}))}},{key:"render",value:function(){var e=this.state.items.map((function(e){return Object(u.jsx)("div",{className:"col-4",children:Object(u.jsxs)("div",{className:"projectItem",children:[Object(u.jsx)("div",{className:"projectImg",children:Object(u.jsx)("img",{src:"http://3.138.198.198:8055/assets/"+e.Image})}),Object(u.jsxs)("div",{className:"projectData",children:[Object(u.jsx)("h1",{children:e.Title}),Object(u.jsxs)(m.b,{to:"/project-details?id="+e.id,children:["View Project ",Object(u.jsx)("i",{className:"icon-arrow-down-right2"})]})]})]})},e.id)}));return Object(u.jsxs)("div",{className:"innerPage",children:[Object(u.jsx)(C,{title:this.state.breadTitle,itmTitle:this.state.itmTitle}),Object(u.jsx)("div",{id:"Projects",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:e})})})]})}}]),s}(i.a.Component),D=(s(18),function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state={items:[],breadTitle:"Our News",itmTitle:"United housing and development News."},a}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.apiCall()}},{key:"apiCall",value:function(){var e=this,t=new Headers;t.append("Content-Type","application/json"),t.append("accept","application/json"),fetch("http://3.138.198.198:8055/items/News",{method:"GET",headers:t}).then((function(e){return e.json()})).then((function(t){e.setState({items:t.data})}))}},{key:"render",value:function(){var e=this.state.items.map((function(e){return Object(u.jsx)("div",{className:"col-4",children:Object(u.jsxs)(m.b,{className:"newItem",to:"/news-details?id="+e.id,children:[Object(u.jsx)("div",{className:"newImg",children:Object(u.jsx)("img",{src:"http://3.138.198.198:8055/assets/"+e.Image})}),Object(u.jsxs)("div",{className:"newInfo",children:[Object(u.jsx)("span",{className:"newDate",children:N()(e.date_created).format("DD MMM")}),Object(u.jsxs)("span",{className:"newTxt",children:[Object(u.jsx)("h1",{children:e.Title}),Object(u.jsxs)("p",{children:[e.Brief.substring(0,150),e.Brief.length>=150&&"..."]})]})]})]})},e.id)}));return Object(u.jsxs)("div",{className:"innerPage",children:[Object(u.jsx)(C,{title:this.state.breadTitle,itmTitle:this.state.itmTitle}),Object(u.jsx)("div",{id:"NewsList",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:e})})})]})}}]),s}(i.a.Component)),S=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state={items:[],breadTitle:"Our News",itmTitle:""},a}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.getIdFromUrl()}},{key:"getIdFromUrl",value:function(){var e=this,t=window.location.href,s=(window.location.host,t.split("=")),a=s[s.length-1];this.setState({itemId:Number(a)},(function(){e.apiCall()}))}},{key:"apiCall",value:function(){var e=this,t=new Headers;t.append("Content-Type","application/json"),t.append("accept","application/json"),fetch("http://3.138.198.198:8055/items/News",{method:"GET",headers:t}).then((function(e){return e.json()})).then((function(t){t.data.filter((function(t){return t.id===e.state.itemId})).map((function(t){e.setState({itemDate:t.date_created,itmTitle:t.Title,desc:t.Description,itemImage:t.Image})}))}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"innerPage",children:[Object(u.jsx)(C,{title:this.state.breadTitle,itmTitle:this.state.itmTitle,itmDate:this.state.itemDate}),Object(u.jsx)("div",{id:"NewsDetails",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"",dangerouslySetInnerHTML:{__html:this.state.desc}})})})]})}}]),s}(i.a.Component),M=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state={itemId:"",items:[],breadTitle:"Our Projects",itmTitle:""},a}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.getIdFromUrl()}},{key:"getIdFromUrl",value:function(){var e=this,t=window.location.href,s=(window.location.host,t.split("=")),a=s[s.length-1];this.setState({itemId:Number(a)},(function(){e.apiCall()}))}},{key:"apiCall",value:function(){var e=this,t=new Headers;t.append("Content-Type","application/json"),t.append("accept","application/json"),fetch("http://3.138.198.198:8055/items/Projects",{method:"GET",headers:t}).then((function(e){return e.json()})).then((function(t){t.data.filter((function(t){return t.id===e.state.itemId})).map((function(t){e.setState({itemType:t.Type,itmTitle:t.Title,location:t.Location,desc:t.Description,features:t.features})}))}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"innerPage",children:[Object(u.jsx)(C,{title:this.state.itemType,itmTitle:this.state.itmTitle}),Object(u.jsxs)("div",{id:"NewsDetails",children:[Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("p",{children:this.state.desc}),Object(u.jsxs)("div",{className:"projectConsist",children:[Object(u.jsx)("p",{children:"The project consists of"}),Object(u.jsx)("div",{className:"projectFeatures",dangerouslySetInnerHTML:{__html:this.state.features}})]})]}),Object(u.jsx)("div",{className:"salesCall",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("span",{children:"Reserve the right of first choice to live in a distinctively designed building, with amazing views."}),Object(u.jsxs)("button",{children:["Contact our Sales Team",Object(u.jsx)("i",{className:"icon-arrow"})]})]})}),Object(u.jsx)("div",{className:"projectLocation",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:"Project Adress"}),Object(u.jsx)("h2",{children:"9 st Abdelfattah Mohamed, 6 of october, Giza - Egypt."}),Object(u.jsx)("iframe",{src:this.state.location,loading:"lazy"})]})})]})]})}}]),s}(i.a.Component),H=s(2);function P(){return Object(u.jsx)(y,{})}function U(){return Object(u.jsx)(I,{})}function B(){return Object(u.jsx)(k,{})}function A(){return Object(u.jsx)(D,{})}var E=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state={items:[]},a}return Object(j.a)(s,[{key:"render",value:function(){return Object(u.jsxs)(m.a,{children:[Object(u.jsx)("header",{className:"topHeader",id:"topHeader",children:Object(u.jsx)("nav",{id:"navbar_top",className:"navbar navbar-expand-lg navbar-dark",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"vMenu d-flex w-100 align-items-center",children:[Object(u.jsx)("a",{href:"#",className:"logoHeader navbar-brand",children:Object(u.jsx)("img",{src:"./assets/images/logo.svg",alt:""})}),Object(u.jsxs)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#main_nav",children:[Object(u.jsx)("span",{className:"navbar-toggler-icon"}),Object(u.jsx)("i",{className:"icon-close"})]}),Object(u.jsx)("div",{className:"collapse navbar-collapse",id:"main_nav",children:Object(u.jsxs)("ul",{className:"navbar-nav ms-auto menuHeader",children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(m.b,{className:"nav-link",to:"/",children:"home"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(m.b,{className:"nav-link",to:"/projects",children:"Our Projects"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(m.b,{className:"nav-link",to:"/news",children:"Our News"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(m.b,{className:"nav-link",to:"/aboutus",children:"About us"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsxs)(m.b,{className:"nav-link contactUsLink",to:"/contact",children:[Object(u.jsx)("i",{className:"icon-mail"}),"contact us"]})})]})})]})})})}),Object(u.jsx)("div",{className:"mainBody",children:Object(u.jsxs)(H.c,{children:[Object(u.jsx)(H.a,{path:"/",element:Object(u.jsx)(P,{})}),Object(u.jsx)(H.a,{path:"/aboutus",element:Object(u.jsx)(U,{})}),Object(u.jsx)(H.a,{path:"/projects",element:Object(u.jsx)(B,{})}),Object(u.jsx)(H.a,{path:"/news",element:Object(u.jsx)(A,{})}),Object(u.jsx)(H.a,{path:"/news-details",element:Object(u.jsx)(S,{})}),Object(u.jsx)(H.a,{path:"/project-details",element:Object(u.jsx)(M,{})})]})})]})}}]),s}(i.a.Component);s(34);var G=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(E,{})})},F=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,36)).then((function(t){var s=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,c=t.getTTFB;s(e),a(e),i(e),n(e),c(e)}))};c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(G,{})}),document.getElementById("root")),F()}},[[35,1,2]]]);
//# sourceMappingURL=main.30dab73b.chunk.js.map