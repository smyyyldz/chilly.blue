webpackJsonp([70144966829960],{512:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(3),f=r(s),d=n(8),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).map(function(t){return t+"="+encodeURIComponent(e[t])}).join("&")},p=function(e,t,n,r,i){var o=void 0;return r?(o="mailto:"+r,i&&(o+="?"+h(i))):e?o="tel:"+e:t?o="sms:"+t:n&&(o="facetime:"+n),o},m=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={humanInteraction:!1},n}return l(t,e),u(t,[{key:"render",value:function(){return this.props.obfuscate?this.renderObfuscatedLink():this.renderLink()}},{key:"renderLink",value:function(){var e=this.props,t=e.tel,n=e.sms,r=e.facetime,o=e.email,a=(e.obfuscate,e.headers),l=e.children,u=i(e,["tel","sms","facetime","email","obfuscate","headers","children"]);return f.default.createElement("a",c({href:p(t,n,r,o,a)},u),l||t||n||r||o)}},{key:"reverse",value:function(e){return e.split("").reverse().join("")}},{key:"renderObfuscatedLink",value:function(){var e=this,t=this.props,n=t.tel,r=t.sms,o=t.facetime,a=t.email,l=(t.obfuscate,t.headers,t.children),u=t.style,s=t.linkText,d=i(t,["tel","sms","facetime","email","obfuscate","headers","children","style","linkText"]),h=this.state.humanInteraction===!0||l?c({},u||{},{unicodeBidi:"bidi-override",direction:"ltr"}):c({},u||{},{unicodeBidi:"bidi-override",direction:"rtl"}),p=function(t){return e.state.humanInteraction===!0?l||n||r||o||a:l||e.reverse(n||r||o||a).replace("(",")").replace(")","(")};return f.default.createElement("a",c({onClick:this.handleClick.bind(this),onFocus:this.handleCopiability.bind(this),onMouseOver:this.handleCopiability.bind(this),onContextMenu:this.handleCopiability.bind(this),href:s||"obfuscated"},d,{style:h}),p())}},{key:"handleClick",value:function(e){e.preventDefault();var t=this.props,n=t.tel,r=t.sms,i=t.facetime,o=t.email,a=t.headers;window.location.href=p(n,r,i,o,a)}},{key:"handleCopiability",value:function(){this.setState(function(e){return c({},e,{humanInteraction:!0})})}}]),t}(s.Component);m.propTypes={children:d.node,tel:d.string,sms:d.string,facetime:d.string,email:d.string,headers:d.object,obfuscate:d.bool,style:d.object,linkText:d.string},m.defaultProps={obfuscate:!0},t.default=m},265:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){return e.raw=t,e}t.__esModule=!0;var c=l(["\n  padding: ",";\n  max-width: 30rem;\n"],["\n  padding: ",";\n  max-width: 30rem;\n"]),u=l(["\n  line-height: 3rem;\n  font-size: 3rem;\n  margin: ",";\n\n  a {\n    text-decoration: none;\n    color: #72a0c1;\n    font-size: 1rem;\n\n    &:hover {\n      color: #9cbcd3;\n    }\n  }\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"],["\n  line-height: 3rem;\n  font-size: 3rem;\n  margin: ",";\n\n  a {\n    text-decoration: none;\n    color: #72a0c1;\n    font-size: 1rem;\n\n    &:hover {\n      color: #9cbcd3;\n    }\n  }\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]),s=n(3),f=r(s),d=n(512),h=r(d),p=n(65),m=r(p),b=n(32),y=m.default.div(c,(0,b.rhythm)(2)),v=m.default.p(u,(0,b.rhythm)(1.5)),w=function(e){function t(){return i(this,t),o(this,e.apply(this,arguments))}return a(t,e),t.prototype.render=function(){return f.default.createElement(y,null,f.default.createElement(v,null,"Contact me:"),f.default.createElement(v,null,f.default.createElement(h.default,{email:"william.chiu@columbiaspectator.com"})),f.default.createElement(v,null,f.default.createElement(h.default,{tel:"tel:516-606-8013"})),f.default.createElement("br",null),f.default.createElement(v,null,"Social me:"),f.default.createElement(v,null,f.default.createElement("a",{href:"https://www.linkedin.com/in/william-chiu/"},"LinkedIn")),f.default.createElement(v,null,f.default.createElement("a",{href:"https://www.facebook.com/achillyblue"},"Facebook")),f.default.createElement(v,null,f.default.createElement("a",{href:"https://github.com/WilliamChiu"},"GitHub")),f.default.createElement(v,null,f.default.createElement("a",{href:"https://www.snapchat.com/add/chillyblue"},"Snapchat")))},t}(f.default.Component);t.default=w,t.frontmatter={title:"Contact",inChilly:!0},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-contact-js-9a53701502d80a5b915a.js.map