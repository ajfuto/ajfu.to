(self.webpackChunkajfu_to=self.webpackChunkajfu_to||[]).push([[946],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,r){var n=r(9489),a=r(7067);function l(t,r,o){return a()?(e.exports=l=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=l=function(e,t,r){var a=[null];a.push.apply(a,t);var l=new(Function.bind.apply(e,a));return r&&n(l,r.prototype),l},e.exports.default=e.exports,e.exports.__esModule=!0),l.apply(null,arguments)}e.exports=l,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},1810:function(e,t,r){var n=r(3646),a=r(6860),l=r(379),o=r(8206);e.exports=function(e){return n(e)||a(e)||l(e)||o()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},6725:function(e,t,r){var n=r(3395);e.exports={MDXRenderer:n}},3395:function(e,t,r){var n=r(9100),a=r(1810),l=r(9713),o=r(7316),c=["scope","children"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=r(7294),u=r(4983).mdx,p=r(9480).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,l=o(e,c),s=p(t),f=m.useMemo((function(){if(!r)return null;var e=i({React:m,mdx:u},s),t=Object.keys(e),l=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(a(t),[""+r])).apply(void 0,[{}].concat(a(l)))}),[r,t]);return m.createElement(f,i({},l))}},5610:function(e,t,r){"use strict";var n=r(6736),a=r(7294),l=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){return a.createElement("footer",null,a.createElement("div",{className:"container-fluid"},a.createElement("div",{className:"container"},a.createElement("div",{className:"row justify-content-center"},a.createElement("div",{className:"col text-center"},a.createElement("a",{className:"mx-2","aria-label":"Twitter",target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/ajfuto"},a.createElement("svg",{className:"main-social-svg",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},a.createElement("path",{d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"}))),a.createElement("a",{className:"mx-2","aria-label":"GitHub",target:"_blank",rel:"noopener noreferrer",href:"https://www.github.com/ajfuto"},a.createElement("svg",{className:"main-social-svg",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},a.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"}))),a.createElement("a",{className:"mx-2","aria-label":"LinkedIn",target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/ajfuto/"},a.createElement("svg",{className:"main-social-svg",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},a.createElement("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"}))))),a.createElement("div",{className:"row justify-content-center"},a.createElement("div",{className:"col text-center"},a.createElement("p",null,a.createElement("small",null,"Copyright © ",(new Date).getFullYear()," AJ Futo")))))))},t}(a.Component);t.Z=l},6255:function(e,t,r){"use strict";var n=r(6736),a=r(7294),l=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){return a.createElement("div",{className:"container invisible py-5"},a.createElement("nav",{className:"main-navbar d-flex flex-md-row flex-column navbar navbar-expand navbar-custom"},a.createElement("span",{className:"navbar-brand"},a.createElement("div",{style:{height:"0px",width:"46px"}})),a.createElement("div",{className:"d-flex flex-row"},a.createElement("div",{style:{height:"1.5em",margin:"0rem 1rem"}}))))},t}(a.Component);t.Z=l},545:function(e,t,r){"use strict";r.r(t);var n=r(7294),a=r(5444),l=r(6725),o=r(5610),c=r(6255),s=r(3751);t.default=function(e){var t=e.data,r=(e.location,t.mdx),i=t.previous,m=t.next;t.site.siteMetadata.siteUrl,r.fields.slug;return n.createElement("div",{className:"main-page h-100"},n.createElement(s.Z,{title:r.frontmatter.title,description:r.frontmatter.description||r.excerpt,image:r.frontmatter.image}),n.createElement("section",{id:"top",className:"container-fluid d-flex flex-column main-mh-100"},n.createElement(c.Z,null),n.createElement("div",{className:"row justify-content-center"},n.createElement("div",{className:"d-none d-xl-block col-xl-2"}),n.createElement("div",{className:"col-md-10 col-xl-8"},n.createElement("p",{className:"m-0 main-fade-in-animation"},n.createElement(a.rU,{to:"/tech-tips"},n.createElement("strong",null,"../"))),n.createElement("article",{id:"post-content",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("h1",{itemProp:"headline"},r.frontmatter.title),n.createElement("p",null,r.frontmatter.date),n.createElement("hr",null)),n.createElement("section",{itemProp:"articleBody"},n.createElement(l.MDXRenderer,null,r.body)),n.createElement("hr",null))),n.createElement("div",{className:"d-none d-xl-block col-xl-2"})),n.createElement("div",{className:"row justify-content-center"},n.createElement("div",{className:"col-md-10 col-xl-8"})),n.createElement("nav",{className:"mb-5"},n.createElement("div",{className:"row justify-content-center"},n.createElement("div",{className:"col-6 col-md-5 col-xl-4 text-start"},m&&n.createElement(n.Fragment,null,n.createElement("p",{className:"m-0"},"← Newer"),n.createElement(a.rU,{to:m.fields.slug,rel:"next"},m.frontmatter.title))),n.createElement("div",{className:"col-6 col-md-5 col-xl-4 text-end"},i&&n.createElement(n.Fragment,null,n.createElement("p",{className:"m-0"},"Older →"),n.createElement(a.rU,{to:i.fields.slug,rel:"prev"},i.frontmatter.title))))),n.createElement(o.Z,null)))}}}]);
//# sourceMappingURL=component---src-templates-post-template-js-99befbf18f4426534200.js.map