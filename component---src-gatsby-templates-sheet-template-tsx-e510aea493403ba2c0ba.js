(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=(n(30),n(162)),c=n.n(i),o=n(155),s=n(6),l=n.n(s),u=n(209),m=n.n(u)()("app:DisqusScript"),d=function(e){function t(){return e.apply(this,arguments)||this}l()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.props,t=e.host,n=e.url,a=e.identifier;m('componentDidMount() started for "%s".',n),setTimeout(function(){window.disqus_config=function(){m("Disqus has called window.disqus_config()."),this.page.url=n,this.page.identifier=a},function(e){m('injectScript("%s") called',e),function(e){var t=document.createElement("script");t.src="https://"+e+"/embed.js",t.setAttribute("data-timestamp","#{+new Date()}");var n=document.head||document.body;n&&n.appendChild(t)}(e),function(e){var t=document.createElement("script");t.src="https://"+e+"/count.js",t.id="dsq-count-scr",t.async=!0;var n=document.head||document.body;n&&n.appendChild(t)}(e)}(t)},100)},n.render=function(){var e=this.props,t=e.host,n=e.url,a=e.identifier,i=e.children,c={host:t,url:n,identifier:a},o={thread:r.a.createElement("div",{id:"disqus_thread"}),count:r.a.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":a,"data-disqus-url":n},"Comments")};return r.a.createElement(r.a.Fragment,null,r.a.createElement("noscript",{data:JSON.stringify(c)}),"function"==typeof i?i(o):null)},t}(r.a.Component);var f=n(312),h=n.n(f),p=n(150),g=n.n(p),v=n(163),E=n(314),y=n.n(E),N=function(e){var t=e.count;return r.a.createElement("summary",{className:y.a.root},r.a.createElement("i",{className:g()(y.a.icon,y.a.isLine),dangerouslySetInnerHTML:{__html:v.e}}),r.a.createElement("i",{className:g()(y.a.icon,y.a.isSolid),dangerouslySetInnerHTML:{__html:v.f}}),r.a.createElement("strong",{className:y.a.count},t)," ",r.a.createElement("span",{className:y.a.suffix},"for this cheatsheet.")," ",r.a.createElement("span",{className:y.a.fauxlink},"Write yours!"))},b=function(e){var t=e.thread;return r.a.createElement("div",{className:"comments-section"},r.a.createElement("div",{className:"comments"},t))},j=function(e){e.thread;var t=e.count;return r.a.createElement("section",{className:h.a.root,id:"comments","data-js-no-preview":!0},r.a.createElement("div",{className:h.a.container},r.a.createElement("details",{className:h.a.details},r.a.createElement(N,{count:t}),r.a.createElement(b,e))))},w=function(){return r.a.createElement(d,{host:"devhints.disqus.com",url:"https://devhints.io/react",identifier:"react"},function(e){var t=e.thread,n=e.count;return r.a.createElement(j,{thread:t,count:n})})},P=n(210),k=n(317),S=n.n(k),C=function(e){var t=e.children,n=e.className;return r.a.createElement("div",{className:g()(S.a.root,n)},t)},x=function(e){var t=e.title,n=e.suffix;return r.a.createElement("header",{className:"main-heading -center"},r.a.createElement("h1",{className:"h1"},t," ",r.a.createElement("em",null,n)),r.a.createElement("div",{className:"adbox"}))};n(79),n(33);function O(e){return e.replace(/`(.*?)`/g,function(e,t){return"<code>"+O(t)+"</code>"}).replace(/\*\*(.*?)\*\*/g,function(e,t){return"<strong>"+O(t)+"</strong>"}).replace(/\[([^\]]*)\]\((.*?)\)/g,function(e,t,n){return"<a href="+(a=n,JSON.stringify(a))+">"+O(t)+"</a>";var a})}function A(e){return e.split("\n\n").map(function(e){return"<p>"+e+"</p>"}).join("")}var q=function(e){var t=e.source;return r.a.createElement("span",{className:"mini-markdown",dangerouslySetInnerHTML:{__html:A(O(t))}})},_=n(319),L=n(351),M=n.n(L),D=function(){return r.a.createElement("div",{className:M.a.root},r.a.createElement("i",{className:M.a.icon}))},I=n(298),T=n(363),H=n.n(T),J=(n(72),n(168)),B=n(368),F=n.n(B),R=function(){return r.a.createElement("label",{className:g()(F.a.root,F.a.isSmall)},r.a.createElement("span",{className:F.a.prefix},"devhints.io"),r.a.createElement("span",{className:F.a.sep},"/"),r.a.createElement(J.a,{placeholder:"Search 360+ cheatsheets"}),r.a.createElement("i",{className:F.a.icon,dangerouslySetInnerHTML:{__html:v.d}}))},U=n(151),z=n(370),W=n.n(z),G=function(){return r.a.createElement(U.a,{className:W.a.root,to:"/"},r.a.createElement("i",{className:W.a.icon,dangerouslySetInnerHTML:{__html:v.c}}))},K=n(372),Q=n.n(K),V=function(){return r.a.createElement("section",{className:Q.a.root},r.a.createElement("div",{className:Q.a.search},r.a.createElement("form",{action:"/",method:"get"},r.a.createElement(R,null))),r.a.createElement("div",{className:Q.a.links},r.a.createElement(G,null)))},X=function(){return r.a.createElement("aside",{className:H.a.root,"data-js-no-preview":!0},r.a.createElement("div",{className:H.a.container},r.a.createElement(V,null)))},Y=n(208),Z=function(){var e=Object(o.a)(),t=ae();if(!t)return null;var n=t.sheet,a=t.frontmatter,i=t.path,s=t.pageCount,l=n.htmlAst,u=t.relatedPages,m=t.topPages,d=n.title||"",f={sheetSuffix:e.sheet.suffix},h=a&&a.intro;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("title",null,d+" "+f.sheetSuffix)),r.a.createElement(P.a,null),r.a.createElement(Y.a,{back:!0,title:d,path:i}),r.a.createElement("div",{className:"body-area"},r.a.createElement(x,{title:d,suffix:f.sheetSuffix}),h?r.a.createElement(C,{className:"MarkdownBody"},r.a.createElement(q,{source:h})):null,r.a.createElement(_.a,Object.assign({className:"post-content MarkdownBody"},{htmlAst:l}))),r.a.createElement(D,null),r.a.createElement(w,null),r.a.createElement(X,null),r.a.createElement(I.a,{pageCount:s,relatedPages:u,topPages:m,category:a.category}))},$=n(185),ee=n(217);n.d(t,"useSheetContext",function(){return ae}),n.d(t,"query",function(){return re});var te=r.a.createContext(null),ne=function(e){var t=e.data,n=e.pageContext.nodePath,a=Object(ee.b)(t.relatedPages),r=Object(ee.b)(t.topPages),i=t.markdownRemark.frontmatter;return{sheet:{path:n,title:i.title,htmlAst:t.markdownRemark.htmlAst},frontmatter:i,topPages:r,relatedPages:a,path:n,pageCount:t.allPages.totalCount}},ae=function(){return Object(a.useContext)(te)},re=(t.default=function(e){var t=ne(e);return r.a.createElement(te.Provider,{value:t},r.a.createElement($.a,null,r.a.createElement(Z,null)))},"3422222932")},185:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(162),c=n.n(i);t.a=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{title:"Devhints.io",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),t)}},210:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(162),c=n.n(i);n(244);t.a=function(){return r.a.createElement(c.a,null,r.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Cousine"}))}},217:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return o});n(30),n(71),n(51),n(31),n(165);var a=n(218),r=n.n(a);function i(e){return e&&e.edges?e.edges.map(c):[]}function c(e){return{path:e.node.context.nodePath,title:e.node.context.title}}function o(e){var t=r()(e.edges,function(e){return e.node.context.category});return Object.keys(t).reduce(function(e,n){var a,r=t[n];return Object.assign({},e,((a={})[n]=r.map(c),a))},{})}},319:function(e,t,n){"use strict";(function(e){n(36),n(31);var a=n(209),r=n.n(a),i=n(0),c=n.n(i),o=n(320),s=n(323),l=n(487),u=r()("app:PostContent"),m=(0,c.a.memo)(function(e){var t=e.htmlAst,n=e.className,a=Object(l.a)(t);return c.a.createElement("div",{className:n,role:"main",ref:d},a)});function d(t){var n=u.bind(null,"doPostTransform()");return n("working on",t),Promise.resolve().then(function(){return t?(n("Invoking Isotope"),Object(o.a)(t),Object(s.a)(t)):e.Prism}).then(function(e){t&&(n("Highlighting via Prism"),e.highlightAllUnder(t))}).catch(function(e){n("Prism/isotope error:",e)})}t.a=m}).call(this,n(74))},320:function(e,t,n){"use strict";n.d(t,"a",function(){return a});n(73),n(194);function a(e){if(e&&e.children&&"undefined"!=typeof window){var t=e.children[0];if(t){var n=t.querySelectorAll(".h3-section-list");Array.from(n).forEach(r)}}}function r(e){var t=new(n(321))(e,{itemSelector:".h3-section",transitionDuration:0}),a=e.querySelectorAll("img");Array.from(a).forEach(function(e){e.addEventListener("load",function(){t.layout()})}),window.addEventListener("load",function(){t.layout()})}},322:function(e,t){},323:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return m});n(33),n(195),n(80),n(79),n(81),n(194),n(71),n(51),n(73),n(36),n(31);var a=n(209),r=n.n(a),i=n(324),c=n.n(i),o=r()("app:Prism"),s="1.14.0",l={coffee:"coffeescript",dockerfile:"docker",dosini:"ini",jade:"pug",js:"javascript",make:"makefile",md:"markdown",rb:"ruby",sh:"bash",tsx:"jsx",vimscript:"vim",yml:"yaml",zsh:"bash"},u={nohighlight:!0,html:!0};function m(t){return Promise.resolve().then(function(){var n=function(t){var n=function(e){if(!e)return[];var t=e.querySelectorAll('[class*="language-"]');return Array.from(t).map(function(e){return Array.from(e.className.split(" ")).find(function(e){return!!e.match(/^language-/)})}).filter(Boolean).map(function(e){return e.replace(/^language-/,"")}).map(function(e){return l[e]||e}).sort().filter(function(e,t,n){return n.indexOf(e)===t}).filter(function(e){return!u[e]})}(t).map(function(e){return function(e){return d("components/prism-"+e+".min.js")}(e)});return[].concat(e.Prism?[]:[d()],[d("plugins/line-highlight/prism-line-highlight.min.js"),d("plugins/line-highlight/prism-line-highlight.min.css")],n)}(t);return o("loadPrism() → Loading URLs",n),function(e){return Promise.all(e.map(function(e){return function(e){return new Promise(function(t){c()(e,{before:function(e,t){t.setAttribute("data-manual",""),t.setAttribute("defer",""),t.removeAttribute("async")},success:function(){t()},error:function(e){o("loadScript() error:",e),t()}})})}(e)})).then(f)}(n)}).then(function(){return e.Prism})}function d(e){return void 0===e&&(e="prism.min.js"),"https://cdn.jsdelivr.net/npm/prismjs@"+s+"/"+e}function f(){}}).call(this,n(74))},487:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(325),c=n.n(i),o=n(327),s=n.n(o),l=n(348),u=n.n(l);n(30);function m(e,t){if(0===e.length)return[];var n=e.slice(0,e.length-1),a=e[e.length-1];return[].concat(n,[t(a)])}var d=function(e){var t,n,a;return e=function(e){return f(e,{tagName:"h2",sectionClass:["h2-section"],bodyClass:["body","h3-section-list"]})}(e),n=function(e){return(e||[]).map(function(e){return n=function(e){return f(e,{tagName:"h3",sectionClass:["h3-section"],bodyClass:["body"]})},a=(t=e).children||[],Object.assign({},t,{children:m(a,n)});var t,n,a})},a=n((t=e).children||[]),e=Object.assign({},t,{children:a})};function f(e,t){var n=void 0===t?{}:t,a=n.tagName,r=void 0===a?"h2":a,i=n.sectionClass,c=void 0===i?["h2-section"]:i,o=n.bodyClass,s=void 0===o?["body"]:o,l=e.children.reduce(function(e,t){if(t.tagName===r){var n=function(e){return e&&(e.properties||{}).className}(t),a=h([].concat(s,[n]),[]);return[].concat(e,[h([].concat(c,[n]),[t,a])])}if(e.length)return m(e,function(e){return Object.assign({},e,{children:m(e.children,function(e){return function(e,t){var n=[].concat(e.children||[],[t]);return Object.assign({},e,{children:n})}(e,t)})})});var i=h(s,[t]);return[h(c,[i])]},[]);return Object.assign({},e,{children:l})}function h(e,t){return{type:"element",tagName:"div",properties:{className:e},children:t}}function p(e){return e=u()(d(c()(e))),g(e)}n.d(t,"a",function(){return p});var g=new s.a({createElement:r.a.createElement}).Compiler}}]);
//# sourceMappingURL=component---src-gatsby-templates-sheet-template-tsx-e510aea493403ba2c0ba.js.map