(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,a,t){e.exports=t.p+"static/media/logo.396f3729.png"},21:function(e,a,t){e.exports=t.p+"static/media/background.46d4f952.jpg"},22:function(e,a,t){e.exports=t.p+"static/media/news2.78ad0f0a.jpeg"},23:function(e){e.exports={company_name:"W.I.T Insider",home:"Home",service:"Service",about_us:"About Us",read_more:"Read More",company:"Company",team:"Team",press:"Press",career:"Career",help:"Help",contact_us:"Contact Us",sign_up_for_newsletters:"Sign up for newsletters",sign_up:"SIGN UP",enter_your_email:"Enter your email"}},24:function(e){e.exports={company_name:"\u667a\u8d8a\u521b\u65b0",home:"\u4e3b\u9875",service:"\u670d\u52a1",about_us:"\u5173\u4e8e\u6211\u4eec",read_more:"\u9605\u8bfb\u66f4\u591a",company:"\u516c\u53f8\u4fe1\u606f",team:"\u56e2\u961f",press:"\u65b0\u95fb",career:"\u804c\u4e1a\u53d1\u5c55",help:"\u5e2e\u52a9",contact_us:"\u8054\u7cfb\u6211\u4eec",sign_up_for_newsletters:"\u8ba2\u9605\u8d44\u8baf",sign_up:"\u6ce8\u518c",enter_your_email:"\u8bf7\u8f93\u5165\u90ae\u7bb1"}},25:function(e,a,t){e.exports=t.p+"static/media/Wechat.d5492d6c.jpeg"},26:function(e,a,t){e.exports=t.p+"static/media/Connecting.59cf3f43.jpg"},27:function(e,a,t){e.exports=t.p+"static/media/Culture influencer.8543b26c.jpg"},28:function(e,a,t){e.exports=t(69)},33:function(e,a,t){},34:function(e,a,t){},37:function(e,a){},46:function(e,a){},60:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},69:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(19),i=t.n(c),l=t(71);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(33);var s=t(3),o=t(4),m=t(6),u=t(5),d=t(7),h=t(2),p=t(74),f=t(73),g=t(72),b=t(70),E=t(20),w=t.n(E),v=(t(34),t(11)),y=t.n(v),j=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={},t.setLangType=t.setLangType.bind(Object(h.a)(Object(h.a)(t))),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"setLangType",value:function(e){this.props.langType(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("nav",{className:"NavBar"},r.a.createElement("nav",{className:"nav desktopNav"},r.a.createElement("div",{className:"navLogo"},r.a.createElement(b.a,{to:"/",className:"complex",target:"_self"},r.a.createElement("img",{src:w.a,className:"logo",alt:"logo"})),r.a.createElement("span",{className:"companyName"},y.a.get("company_name"))),r.a.createElement("div",{className:"navContent",id:"nav_content"},r.a.createElement(b.a,{to:"/",className:"navItem",target:"_self",id:"home"},y.a.get("home")),r.a.createElement(b.a,{to:"/service",className:"navItem",target:"_self",id:"service"},y.a.get("service"))),r.a.createElement("div",{className:"language"},r.a.createElement("span",{onClick:function(){e.setLangType("en_US")}},"EN")," | ",r.a.createElement("span",{onClick:function(){e.setLangType("zh_CN")}},"\u4e2d\u6587"))))}}]),a}(r.a.Component),O=(t(60),t(61),t(21)),N=t.n(O),k=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={},t.handleClick=t.handleClick.bind(Object(h.a)(Object(h.a)(t))),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"handleClick",value:function(){}},{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement("div",{className:"jumbotron",style:{backgroundImage:"url(".concat(N.a,")")}},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Well-informed"),r.a.createElement("h1",null,"Inspired"),r.a.createElement("h1",null,"Trustworthy")))))}}]),a}(r.a.Component),_=(t(62),t(63),function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.news;return r.a.createElement("a",{href:e.srcUrl,target:"_blank",className:"news",rel:"noopener noreferrer"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:e.imageSrc,alt:""})),r.a.createElement("div",{className:"newsContent"},r.a.createElement("div",{className:"details"},r.a.createElement("h5",null,e.source," ",r.a.createElement("i",{class:"icon fa fa-fw fa-external-link"})),r.a.createElement("h4",null,e.header))))}}]),a}(r.a.Component)),C=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"newsList",id:"news"},this.props.newsList.map(function(e){return r.a.createElement(_,{news:e,key:e.id})}))}}]),a}(r.a.Component),S=t(22),T=[{id:1,imageSrc:"https://www.canadastudynews.com/wp-content/uploads/2017/08/Huang-Yang-300x225.jpg",srcUrl:"https://www.canadastudynews.com/2017/08/14/tech-graduates-bridging-gap-between-canadian-chinese-entrepreneurs/",time:"August 14, 2017",header:"Meet the Tech Graduates Bridging the Gap Between Canadian and Chinese Entrepreneurs",source:"\bCANADA STUDY NEWS "},{id:2,imageSrc:t.n(S).a,srcUrl:"https://uwaterloo.ca/arts/news/master-digital-experience-innovation-graduates-build-digital",time:"August 04, 2017",header:"Master of Digital Experience Innovation graduates build digital bridges to China",source:"UNIVERSITY OF WATERLOO"},{id:3,imageSrc:"https://dynamicmedia.zuza.com/zz/m/original_/7/a/7a17d0f0-ae58-4c44-87d6-e1472117a93a/B823471192Z.1_20170802102244_000_G411U6M48.1_Super_Portrait.jpg",srcUrl:"https://www.therecord.com/news-story/7482497-tech-writers-build-digital-bridges-to-china/",time:"August 03, 2017",header:"Tech writers build digital bridges to China",source:"THE RECORD"}],I=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={},t.handleClick=t.handleClick.bind(Object(h.a)(Object(h.a)(t))),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"handleClick",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"brief"},r.a.createElement(k,null),r.a.createElement("h2",null,"About Us"),r.a.createElement("p",null,"The Chinese in Canada hate it when they don\u2019t know how to pursue a better life in a different/unfamiliar environment by themselves. They would love it if there is a cultural and lifestyle leader that give advice and guidance to help them succeed, a community that they belong to, a leader that they can rely on."),r.a.createElement("p",null,"That\u2019s what we do at W.I.T Insider, We help the Chinese Canadian community live a better life by building the community where they can get Informative and related content concerning cultural differences, find their packs through interacted conversations and feel connected again with both sides."),r.a.createElement("h3",null,"in the news"),r.a.createElement(C,{newsList:T}))}}]),a}(r.a.Component),x=(t(64),t(65),function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.service;return r.a.createElement("div",{className:"service"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:e.imageSrc,alt:""})),r.a.createElement("div",{className:"details"},r.a.createElement("h2",null,e.header),r.a.createElement("p",null,e.description)))}}]),a}(r.a.Component)),L=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"serviceList"},this.props.serviceList.map(function(e){return r.a.createElement(x,{service:e,key:e.id})}))}}]),a}(r.a.Component),U=(t(66),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={email:""},t.handleChange=t.handleChange.bind(Object(h.a)(Object(h.a)(t))),t.handleKeyPress=t.handleKeyPress.bind(Object(h.a)(Object(h.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(h.a)(Object(h.a)(t))),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"handleChange",value:function(e){this.setState({email:e.target.value})}},{key:"handleKeyPress",value:function(e){"Enter"===e.key&&e.preventDefault()}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.refs.Email.value="",alert("You have signed up now! Thanks, we will be in touch!")}},{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("section",{className:"groups"},r.a.createElement("div",{className:"company group"},r.a.createElement("header",null,y.a.get("company")),r.a.createElement("br",null),r.a.createElement("ul",{className:"footer-links"},r.a.createElement("li",null,r.a.createElement(b.a,{to:"/",className:"link",target:"_self"},y.a.get("press"))),r.a.createElement("li",null,r.a.createElement(b.a,{to:"/service",className:"link",target:"_self"},y.a.get("service"))))),r.a.createElement("div",{className:"help group"},r.a.createElement("header",null,y.a.get("help")),r.a.createElement("br",null),r.a.createElement("ul",{className:"footer-links"},r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:rita.h@witinsider.com",className:"link",target:"_self"},y.a.get("contact_us"))))))),r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},r.a.createElement("section",{className:"legal"},r.a.createElement("p",{className:"copyright"},"\xa9 2019 ",y.a.get("company_name"))),r.a.createElement("section",{className:"social"},r.a.createElement("ul",{className:"social-icons"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/witinsider/",className:"facebook",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-facebook"}))),r.a.createElement("li",null," ",r.a.createElement("a",{href:"https://twitter.com/witinsider/",className:"twitter",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-twitter"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.instagram.com/witinsider/",className:"instagram",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-instagram"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/company/witinsider/",className:"linkedin",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-linkedin"}))))))))}}]),a}(r.a.Component)),W=(t(67),t(23)),A=t(24),D=t(25),z=t.n(D),P=t(26),B=t.n(P),M=t(27),R=t.n(M),G={en_US:W,zh_CN:A},H=[{id:1,imageSrc:z.a,header:"Wechat Media Kit",description:"We create customized contents to help the business reach to our followers.   At the same time, we manage the social media accounts and WeChat Platforms for the business owners to make their life easier."},{id:2,imageSrc:B.a,header:"Connecting",description:"We connect all the dots together, which means we are match-maker pro!   Not only for the single, but also we connect employers with the right condidates."},{id:3,imageSrc:R.a,header:"Culture Influencer",description:"As we mentioned, we are the bridge between the Chinese and Canadian community.   So language is always the first thing when we talk about the cultrue.   We have regular Chinese classes open to local who are interested in Chinese culture and language. Come and learn with us!"}],K=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).langType=function(e){localStorage.setItem("lang_type",e),window.location.reload()},t.loadLocales=function(){y.a.init({currentLocale:localStorage.getItem("lang_type")||"en_US",locales:G}).then(function(){t.setState({initDone:!0})})},t.state={initDone:!1},t.langType=t.langType.bind(Object(h.a)(Object(h.a)(t))),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.loadLocales()}},{key:"render",value:function(){return this.state.initDone&&r.a.createElement("div",{className:"App"},r.a.createElement(j,{langType:this.langType}),r.a.createElement(p.a,null,r.a.createElement(f.a,{exact:!0,path:"/",component:I}),r.a.createElement(f.a,{exact:!0,path:"/service",render:function(){return r.a.createElement(L,{serviceList:H})}}),r.a.createElement(g.a,{from:"*",to:"/"})),r.a.createElement(U,null))}}]),a}(n.Component);i.a.render(r.a.createElement(l.a,{basename:"".concat("")},r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.a37b360e.chunk.js.map