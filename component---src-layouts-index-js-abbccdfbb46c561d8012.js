webpackJsonp([0x67ef26645b2a,60335399758886],{121:function(n,t){n.exports={data:{allJavascriptFrontmatter:{edges:[{node:{fields:{slug:"/contact/"},frontmatter:{title:"Contact"}}},{node:{fields:{slug:"/posts/"},frontmatter:{title:"Posts"}}},{node:{fields:{slug:"/"},frontmatter:{title:"Home"}}}]}},layoutContext:{}}},260:function(n,t,e){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}t.__esModule=!0;var r=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},o=e(3),a=i(o),s=e(264),l=i(s),h=e(121),d=i(h);t.default=function(n){return a.default.createElement(l.default,r({},n,d.default))},n.exports=t.default},263:function(n,t,e){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function o(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function a(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}function s(n,t){return n.raw=t,n}t.__esModule=!0;var l=s(["\n  right: 1rem;\n  bottom: 1rem;\n  position: fixed;\n"],["\n  right: 1rem;\n  bottom: 1rem;\n  position: fixed;\n"]),h=s(["\n  height: ",";\n  width: ",";\n  overflow: hidden;\n  transition: width .5s cubic-bezier(0.175, 0.885, 0.32, 1.275),\n    height .5s cubic-bezier(0.175, 0.885, 0.32, 1.275),\n    border-radius .25s;\n  background-color: #add8e6;\n  position: relative;\n  border-radius: ",";\n  box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14),\n    0 1px 10px 0 rgba(0,0,0,0.12),\n    0 2px 4px -1px rgba(0,0,0,0.3);\n\n  &:hover {\n    filter: brightness(1.05);\n  }\n\n  & {\n    cursor: pointer;\n  }\n\n  &[data-sleeping='true'] {\n    height: ",";\n    border-radius: "," "," "," ",";\n    transition: height 1s, border-radius 1s;\n    transform-origin: bottom;\n    animation: breathing 3s ease-out 1s infinite alternate;\n  }\n\n  @keyframes breathing {\n    from {\n      transform: scale3d(1, 1, 1);\n      border-radius: "," "," "," ",";\n    }\n    to {\n      transform: scale3d(1.02, 0.9, 1);\n      border-radius: "," "," "," ",";\n    }\n  }\n"],["\n  height: ",";\n  width: ",";\n  overflow: hidden;\n  transition: width .5s cubic-bezier(0.175, 0.885, 0.32, 1.275),\n    height .5s cubic-bezier(0.175, 0.885, 0.32, 1.275),\n    border-radius .25s;\n  background-color: #add8e6;\n  position: relative;\n  border-radius: ",";\n  box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14),\n    0 1px 10px 0 rgba(0,0,0,0.12),\n    0 2px 4px -1px rgba(0,0,0,0.3);\n\n  &:hover {\n    filter: brightness(1.05);\n  }\n\n  & {\n    cursor: pointer;\n  }\n\n  &[data-sleeping='true'] {\n    height: ",";\n    border-radius: "," "," "," ",";\n    transition: height 1s, border-radius 1s;\n    transform-origin: bottom;\n    animation: breathing 3s ease-out 1s infinite alternate;\n  }\n\n  @keyframes breathing {\n    from {\n      transform: scale3d(1, 1, 1);\n      border-radius: "," "," "," ",";\n    }\n    to {\n      transform: scale3d(1.02, 0.9, 1);\n      border-radius: "," "," "," ",";\n    }\n  }\n"]),d=s(["\n  width: ",";\n  margin: 0 auto;\n  right: 0;\n  position: relative;\n  transition: transform .5s cubic-bezier(.02,.91,.71,1);\n"],["\n  width: ",";\n  margin: 0 auto;\n  right: 0;\n  position: relative;\n  transition: transform .5s cubic-bezier(.02,.91,.71,1);\n"]),p=s(["\n  from {\n    top: ",";\n  }\n  to {\n    top: ",";\n  }\n"],["\n  from {\n    top: ",";\n  }\n  to {\n    top: ",";\n  }\n"]),c=s(["\n  width: ",";\n  height: ",";\n  top: ",";\n  background-color: #2ac;\n  border-radius: 50%;\n  position: absolute;\n\n  &[data-sleeping='false'][data-blinking='true'] {\n    animation: blink-left 10s infinite;\n  }\n\n  @keyframes blink-left {\n    0% {\n      height: ",";\n      width: ",";\n      left: 0;\n      top: ",";\n    }\n    0.5% {\n      height: ",";\n      width: ",";\n      left: ",";\n      top: ",";\n    }\n    2.5% {\n      height: ",";\n      width: ",";\n      left: 0;\n      top: ",";\n    }\n  }\n\n  &[data-sleeping='true']:after {\n    position: relative;\n    content: \" \";\n    display: block;\n    border-radius: 50%;\n    width: ",";\n    height: ",";\n    animation: "," 1s forwards;\n    background-color: #add8e6;\n  }\n\n  &[data-open='true']:after {\n    position: relative;\n    content: \" \";\n    display: block;\n    border-radius: 50%;\n    width: ",";\n    height: ",";\n    top: ",";\n    background-color: #add8e6;\n  }\n"],["\n  width: ",";\n  height: ",";\n  top: ",";\n  background-color: #2ac;\n  border-radius: 50%;\n  position: absolute;\n\n  &[data-sleeping='false'][data-blinking='true'] {\n    animation: blink-left 10s infinite;\n  }\n\n  @keyframes blink-left {\n    0% {\n      height: ",";\n      width: ",";\n      left: 0;\n      top: ",";\n    }\n    0.5% {\n      height: ",";\n      width: ",";\n      left: ",";\n      top: ",";\n    }\n    2.5% {\n      height: ",";\n      width: ",";\n      left: 0;\n      top: ",";\n    }\n  }\n\n  &[data-sleeping='true']:after {\n    position: relative;\n    content: \" \";\n    display: block;\n    border-radius: 50%;\n    width: ",";\n    height: ",";\n    animation: "," 1s forwards;\n    background-color: #add8e6;\n  }\n\n  &[data-open='true']:after {\n    position: relative;\n    content: \" \";\n    display: block;\n    border-radius: 50%;\n    width: ",";\n    height: ",";\n    top: ",";\n    background-color: #add8e6;\n  }\n"]),u=s(["\n  width: ",";\n  height: ",";\n  top: ",";\n  right: 0;\n  background-color: #2ac;\n  border-radius: 50%;\n  position: absolute;\n\n  &[data-sleeping='false'][data-blinking='true'] {\n    animation: blink-right 10s infinite;\n  }\n\n  @keyframes blink-right {\n    0% {\n      height: ",";\n      width: ",";\n      right: 0;\n      top: ",";\n    }\n    0.5% {\n      height: ",";\n      width: ",";\n      right: ",";\n      top: ",";\n    }\n    2.5% {\n      height: ",";\n      width: ",";\n      right: 0;\n      top: ",";\n    }\n  }\n\n  &[data-sleeping='true']:after {\n    position: relative;\n    content: \" \";\n    display: block;\n    border-radius: 50%;\n    width: ",";\n    height: ",";\n    animation: "," 1s forwards;\n    background-color: #add8e6;\n  }\n\n  &[data-open='true']:after {\n    position: relative;\n    content: \" \";\n    display: block;\n    border-radius: 50%;\n    width: ",";\n    height: ",";\n    top: ",";\n    background-color: #add8e6;\n  }\n"],["\n  width: ",";\n  height: ",";\n  top: ",";\n  right: 0;\n  background-color: #2ac;\n  border-radius: 50%;\n  position: absolute;\n\n  &[data-sleeping='false'][data-blinking='true'] {\n    animation: blink-right 10s infinite;\n  }\n\n  @keyframes blink-right {\n    0% {\n      height: ",";\n      width: ",";\n      right: 0;\n      top: ",";\n    }\n    0.5% {\n      height: ",";\n      width: ",";\n      right: ",";\n      top: ",";\n    }\n    2.5% {\n      height: ",";\n      width: ",";\n      right: 0;\n      top: ",";\n    }\n  }\n\n  &[data-sleeping='true']:after {\n    position: relative;\n    content: \" \";\n    display: block;\n    border-radius: 50%;\n    width: ",";\n    height: ",";\n    animation: "," 1s forwards;\n    background-color: #add8e6;\n  }\n\n  &[data-open='true']:after {\n    position: relative;\n    content: \" \";\n    display: block;\n    border-radius: 50%;\n    width: ",";\n    height: ",";\n    top: ",";\n    background-color: #add8e6;\n  }\n"]),f=s(["\n  bottom: ",";\n  right: 1rem;\n  text-align: center;\n  position: fixed;\n  transition: visibility 0s .2s, opacity .2s;\n  visibility: hidden;\n  opacity: 0;\n  font-size: 3rem;\n\n  &[data-open='true'] {\n    transition: opacity .5s;\n    transition-delay: .5s;\n    visibility: visible;\n    opacity: 1;\n  }\n\n  a:link {\n    color: white;\n    text-decoration: none;\n  }\n\n  a:visited {\n    color: white;\n  }\n\n  a:hover {\n    text-decoration: underline;\n  }\n"],["\n  bottom: ",";\n  right: 1rem;\n  text-align: center;\n  position: fixed;\n  transition: visibility 0s .2s, opacity .2s;\n  visibility: hidden;\n  opacity: 0;\n  font-size: 3rem;\n\n  &[data-open='true'] {\n    transition: opacity .5s;\n    transition-delay: .5s;\n    visibility: visible;\n    opacity: 1;\n  }\n\n  a:link {\n    color: white;\n    text-decoration: none;\n  }\n\n  a:visited {\n    color: white;\n  }\n\n  a:hover {\n    text-decoration: underline;\n  }\n"]),m=e(3),g=i(m),y=e(48),b=i(y),k=e(32),v=e(81),w=i(v),x=b.default.div(l),C=b.default.div(h,(0,k.rhythm)(3),(0,k.rhythm)(3),(0,k.rhythm)(1.5),(0,k.rhythm)(2.5),(0,k.rhythm)(1.5),(0,k.rhythm)(1.5),(0,k.rhythm)(.5),(0,k.rhythm)(.5),(0,k.rhythm)(1.5),(0,k.rhythm)(1.5),(0,k.rhythm)(.5),(0,k.rhythm)(.5),(0,k.rhythm)(1.5),(0,k.rhythm)(1.5),(0,k.rhythm)(.3),(0,k.rhythm)(.3)),E=b.default.div(d,(0,k.rhythm)(1.5)),_=(0,y.keyframes)(p,(0,k.rhythm)(-.75),(0,k.rhythm)(-.1)),O=b.default.div(c,(0,k.rhythm)(.5),(0,k.rhythm)(1),(0,k.rhythm)(1),(0,k.rhythm)(1),(0,k.rhythm)(.5),(0,k.rhythm)(1),(0,k.rhythm)(.25),(0,k.rhythm)(.8),(0,k.rhythm)(-.15),(0,k.rhythm)(1.75),(0,k.rhythm)(1),(0,k.rhythm)(.5),(0,k.rhythm)(1),(0,k.rhythm)(.5),(0,k.rhythm)(.75),_,(0,k.rhythm)(.5),(0,k.rhythm)(.5),(0,k.rhythm)(.7)),j=b.default.div(u,(0,k.rhythm)(.5),(0,k.rhythm)(1),(0,k.rhythm)(1),(0,k.rhythm)(1),(0,k.rhythm)(.5),(0,k.rhythm)(1),(0,k.rhythm)(.25),(0,k.rhythm)(.8),(0,k.rhythm)(-.15),(0,k.rhythm)(1.75),(0,k.rhythm)(1),(0,k.rhythm)(.5),(0,k.rhythm)(1),(0,k.rhythm)(.5),(0,k.rhythm)(.75),_,(0,k.rhythm)(.5),(0,k.rhythm)(.5),(0,k.rhythm)(.7)),T=b.default.div(f,(0,k.rhythm)(4)),P=function(n){function t(){r(this,t);var e=o(this,n.call(this));return e.state={leftEyeBlinking:!0,rightEyeBlinking:!0,sleeping:!1},e.timer=e.timer.bind(e),e.refreshTimer=e.refreshTimer.bind(e),e.sleepCount=30,e}return a(t,n),t.prototype.componentDidMount=function(){this.timerInterval=setInterval(this.timer,1e3)},t.prototype.componentWillUnmount=function(){clearInterval(this.timerInterval)},t.prototype.timer=function(){this.sleepCount&&!this.props.open?this.sleepCount--:this.state.sleeping||this.props.open||this.setState({sleeping:!0})},t.prototype.refreshTimer=function(){this.sleepCount=30,console.log(this.sleepCount),this.setState({sleeping:!1})},t.prototype.render=function(){var n=this;return console.log(this.state),g.default.createElement("div",null,g.default.createElement(T,{"data-open":this.props.open},this.props.links.map(function(t,e){return g.default.createElement("div",{key:e},g.default.createElement(w.default,{onClick:n.props.onClick,to:t.fields.slug},t.frontmatter.title))})),g.default.createElement(x,{onClick:this.props.onClick},g.default.createElement(C,{"data-sleeping":this.state.sleeping,"data-open":this.props.open,onMouseOver:this.refreshTimer,linksLength:this.props.links.length},g.default.createElement(E,null,g.default.createElement(O,{"data-sleeping":this.state.sleeping,"data-open":this.props.open,"data-blinking":this.state.leftEyeBlinking}),g.default.createElement(j,{"data-sleeping":this.state.sleeping,"data-open":this.props.open,"data-blinking":this.state.rightEyeBlinking})))))},t}(g.default.Component);t.default=P,n.exports=t.default},264:function(n,t,e){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function o(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function a(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}function s(n,t){return n.raw=t,n}t.__esModule=!0,t.pageQuery=void 0;var l=s(["\n  overflow: hidden;\n"],["\n  overflow: hidden;\n"]),h=s(["\n  background-color: white;\n  transition: transform 1s;\n  transform-origin: top right;\n  &[data-open='true'] {\n    transform: rotate(30deg);\n  }\n"],["\n  background-color: white;\n  transition: transform 1s;\n  transform-origin: top right;\n  &[data-open='true'] {\n    transform: rotate(30deg);\n  }\n"]),d=e(3),p=i(d),c=e(81),u=(i(c),e(263)),f=i(u),m=e(48),g=i(m),y=g.default.div(l),b=g.default.div(h),k=function(n){function t(e){r(this,t);var i=o(this,n.call(this,e));return i.state={chillyActive:!1},i.closeChilly=i.closeChilly.bind(i),i.openChilly=i.openChilly.bind(i),i.toggleChilly=i.toggleChilly.bind(i),i.links=i.formatLinks(e.data),i.injectHtmlColor(),i}return a(t,n),t.prototype.injectHtmlColor=function(){document.querySelector("html").style.backgroundColor="#aabbcc"},t.prototype.closeChilly=function(){console.log("Closing Chilly"),this.setState({chillyActive:!1})},t.prototype.openChilly=function(){console.log("Opening Chilly"),this.setState({chillyActive:!0})},t.prototype.toggleChilly=function(){this.setState(function(n){return{chillyActive:!n.chillyActive}})},t.prototype.formatLinks=function(n){return console.log(n),n.allJavascriptFrontmatter.edges.map(function(n){return n.node})},t.prototype.render=function(){var n=this.props,t=(n.location,n.children);return p.default.createElement(y,null,p.default.createElement(b,{"data-open":this.state.chillyActive,onClick:this.closeChilly},t()),p.default.createElement(f.default,{onClick:this.toggleChilly,open:this.state.chillyActive,links:this.links}))},t}(p.default.Component);k.propTypes={children:p.default.PropTypes.func,location:p.default.PropTypes.object,route:p.default.PropTypes.object},t.default=k;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-layouts-index-js-abbccdfbb46c561d8012.js.map