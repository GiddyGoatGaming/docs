"use strict";(self.webpackChunkrethinkdocs=self.webpackChunkrethinkdocs||[]).push([[514,608],{8704:function(e,t,n){n.r(t),n.d(t,{default:function(){return ee}});var a=n(7294),o=n(3905),r=n(2263),l=n(6291),i=n(261),c=n(6010),s=n(3018),d=n(3783),m=n(7898),u=n(5537),p=n(7462),b=function(e){return a.createElement("svg",(0,p.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},h=n(4973),f=n(3366),E=n(6742),v=n(3919),g=n(8617),C="menuLinkText_1J2g",k=["items"],_=["item"],Z=["item","onItemClick","activePath"],N=["item","onItemClick","activePath"],S=function e(t,n){return"link"===t.type?(0,s.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},T=(0,a.memo)((function(e){var t=e.items,n=(0,f.Z)(e,k);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(I,(0,p.Z)({key:t,item:e},n))})))}));function I(e){var t=e.item,n=(0,f.Z)(e,_);switch(t.type){case"category":return 0===t.items.length?null:a.createElement(w,(0,p.Z)({item:t},n));case"link":default:return a.createElement(M,(0,p.Z)({item:t},n))}}function w(e){var t,n=e.item,o=e.onItemClick,r=e.activePath,l=(0,f.Z)(e,Z),i=n.items,d=n.label,m=n.collapsible,u=S(n,r),b=(0,s.uR)({initialState:function(){return!!m&&(!u&&n.collapsed)}}),h=b.collapsed,E=b.setCollapsed,v=b.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,o=e.setCollapsed,r=(0,s.D9)(t);(0,a.useEffect)((function(){t&&!r&&n&&o(!1)}),[t,r,n])}({isActive:u,collapsed:h,setCollapsed:E}),a.createElement("li",{className:(0,c.Z)("menu__list-item",{"menu__list-item--collapsed":h})},a.createElement("a",(0,p.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":m,"menu__link--active":m&&u},t[C]=!m,t)),onClick:m?function(e){e.preventDefault(),v()}:void 0,href:m?"#":void 0},l),d),a.createElement(s.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:h},a.createElement(T,{items:i,tabIndex:h?-1:0,onItemClick:o,activePath:r})))}function M(e){var t=e.item,n=e.onItemClick,o=e.activePath,r=(0,f.Z)(e,N),l=t.href,i=t.label,s=S(t,o);return a.createElement("li",{className:"menu__list-item",key:i},a.createElement(E.Z,(0,p.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":s}),to:l},(0,v.Z)(l)&&{isNavLink:!0,exact:!0,onClick:n},r),(0,v.Z)(l)?i:a.createElement("span",null,i,a.createElement(g.Z,null))))}var y="sidebar_15mo",x="sidebarWithHideableNavbar_267A",A="sidebarHidden_2kNb",P="sidebarLogo_3h0W",B="menu_Bmed",L="menuWithAnnouncementBar_2WvA",F="collapseSidebarButton_1CGd",H="collapseSidebarButtonIcon_3E-R";function R(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,h.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",F),onClick:t},a.createElement(b,{className:H}))}function W(e){var t,n,o=e.path,r=e.sidebar,l=e.onCollapse,i=e.isHidden,d=function(){var e=(0,s.nT)().isClosed,t=(0,a.useState)(!e),n=t[0],o=t[1];return(0,m.Z)((function(t){var n=t.scrollY;e||o(0===n)})),n}(),p=(0,s.LU)(),b=p.navbar.hideOnScroll,h=p.hideableSidebar,f=(0,s.nT)().isClosed;return a.createElement("div",{className:(0,c.Z)(y,(t={},t[x]=b,t[A]=i,t))},b&&a.createElement(u.Z,{tabIndex:-1,className:P}),a.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",B,(n={},n[L]=!f&&d,n))},a.createElement("ul",{className:"menu__list"},a.createElement(T,{items:r,activePath:o}))),h&&a.createElement(R,{onClick:l}))}var D=function(e){var t=e.toggleSidebar,n=e.sidebar,o=e.path;return a.createElement("ul",{className:"menu__list"},a.createElement(T,{items:n,activePath:o,onItemClick:function(){return t()}}))};function z(e){return a.createElement(s.Cv,{component:D,props:e})}var Y=a.memo(W),J=a.memo(z);function K(e){var t=(0,d.Z)(),n="desktop"===t||"ssr"===t,o="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(Y,e),o&&a.createElement(J,e))}var U=n(3769),q=n(4608),G="backToTopButton_35hR",O="backToTopButtonShow_18ls";function Q(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var X=function(){var e,t=Q(),n=t.smoothScrollTop,o=t.cancelScrollToTop,r=(0,a.useState)(!1),l=r[0],i=r[1];return(0,m.Z)((function(e,t){var n=e.scrollY;if(t){var a=n<t.scrollY;if(a||o(),n<300)i(!1);else if(a){var r=document.documentElement.scrollHeight;n+window.innerHeight<r&&i(!0)}else i(!1)}}),[]),a.createElement("button",{className:(0,c.Z)("clean-btn",G,(e={},e[O]=l,e)),type:"button",title:"Scroll to top",onClick:function(){return n()}},a.createElement("svg",{viewBox:"0 0 24 24",width:"28"},a.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},j=n(5977),V={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function $(e){var t,n,l,d=e.currentDocRoute,m=e.versionMetadata,u=e.children,p=(0,r.Z)().isClient,f=m.pluginId,E=m.version,v=d.sidebar,g=v?m.docsSidebars[v]:void 0,C=(0,a.useState)(!1),k=C[0],_=C[1],Z=(0,a.useState)(!1),N=Z[0],S=Z[1],T=(0,a.useCallback)((function(){N&&S(!1),_(!k)}),[N]);return a.createElement(i.Z,{key:p,wrapperClassName:s.kM.wrapper.docPages,pageClassName:s.kM.page.docPage,searchMetadatas:{version:E,tag:(0,s.os)(f,E)}},a.createElement("div",{className:V.docPage},a.createElement(X,null),g&&a.createElement("aside",{className:(0,c.Z)(V.docSidebarContainer,(t={},t[V.docSidebarContainerHidden]=k,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(V.docSidebarContainer)&&k&&S(!0)}},a.createElement(K,{key:v,sidebar:g,path:d.path,onCollapse:T,isHidden:N}),N&&a.createElement("div",{className:V.collapsedDocSidebar,title:(0,h.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:T,onClick:T},a.createElement(b,{className:V.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,c.Z)(V.docMainContainer,(n={},n[V.docMainContainerEnhanced]=k||!g,n))},a.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",V.docItemWrapper,(l={},l[V.docItemWrapperEnhanced]=k,l))},a.createElement(o.Zo,{components:U.Z},u)))))}var ee=function(e){var t=e.route.routes,n=e.versionMetadata,o=e.location,r=t.find((function(e){return(0,j.LX)(o.pathname,e)}));return r?a.createElement($,{currentDocRoute:r,versionMetadata:n},(0,l.Z)(t,{versionMetadata:n})):a.createElement(q.default,e)}},4608:function(e,t,n){n.r(t);var a=n(7294),o=n(261),r=n(4973);t.default=function(){return a.createElement(o.Z,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);