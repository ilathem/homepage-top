(()=>{"use strict";var n={523:(n,e,t)=>{t.d(e,{A:()=>c});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]),a.push([n.id,'/* Basic Styling */\n\n* {\n  margin: 0;\n  box-sizing: border-box;\n}\n\n/* Typography */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: "Player Display";\n  font-weight: normal;\n}\n\nh2 {\n  font-size: 8rem;\n  text-align: center;\n  font-weight: normal;\n}\n\np {\n  font-family: "Roboto";\n}\n\n/* About Me Section */\n\n.content {\n  overflow-x: hidden;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /* border: 2px solid green; */\n}\n\n.about-me {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.about-me-image-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 6em;\n  position: relative;\n  height: 40vh;\n  width: 80%;\n  padding: 1em;\n}\n\n.about-me-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.about-me-name {\n  position: absolute;\n  bottom: 30px;\n  font-size: 8rem;\n  text-shadow: 0px 5px 10px gray;\n  text-shadow:\n    -1px -1px 0 #000,\n    1px -1px 0 #000,\n    -1px 1px 0 #000,\n    1px 1px 0 #000,\n    0 10px 10px gray;\n  color: white;\n}\n\n.about-me-text {\n  /* border: 2px solid red; */\n  padding: 6em 4em 0 4em;\n}\n\n.about-me-text > h1 {\n  font-weight: 500;\n  font-size: 8rem;\n  text-align: center;\n}\n\n.about-me-text > p {\n  font-size: 4rem;\n  line-height: 1.5;\n  opacity: 0.8;\n}\n\n.background-accent-container {\n  position: absolute;\n  z-index: -1;\n  filter: drop-shadow(0px 5px 5px rgba(50, 50, 0, 0.5));\n}\n\n.background-accent {\n  background-color: #0891b2;\n  width: 100vw;\n  height: 1200px;\n  clip-path: polygon(0 0, 100% 0, 100% 60%, 0 100%);\n}\n\n.social-links {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n/* Projects */\n\n.my-work {\n  padding-top: 16em;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.my-work > h2 {\n  padding-bottom: 0.5em;\n}\n\n.proj {\n  box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.5);\n  margin-bottom: 12em;\n}\n\n.social-links > i {\n  font-size: 6rem;\n  padding: 2rem 2rem;\n}\n\n.proj-img {\n  height: 850px;\n  width: 850px;\n  font-weight: normal;\n  background-color: #7c75ca;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.proj-img > p {\n  color: white;\n  font-size: 9rem;\n  text-align: center;\n  font-family: "Player Display";\n  width: 75%;\n}\n\n.imgNum2 {\n  background-color: #d88f39;\n}\n\n.imgNum3,\n.imgNum6 {\n  background-color: #5e8f4d;\n}\n\n.imgNum4 {\n  background-color: #ca7599;\n}\n\n.imgNum5 {\n  background-color: #4692d9;\n}\n\n.proj-text {\n  width: 850px;\n  height: 500px;\n  padding: 4rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.proj-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  font-size: 3.5rem;\n  padding-left: 2rem;\n  font-family: "Playfair Display";\n}\n\n.link-icon {\n  width: 4rem;\n}\n\n.proj-links {\n  display: flex;\n  gap: 4rem;\n  font-size: 4rem;\n}\n\n.proj-desc {\n  padding-top: 2rem;\n  opacity: 0.9;\n  font-family: "Roboto";\n  font-size: 3rem;\n}\n\n/* Footer */\n\nfooter {\n  background-color: #0891b2;\n}\n\n.contact-me {\n  color: white;\n  display: flex;\n  flex-direction: column;\n  padding: 2em 2em;\n  font-size: 3rem;\n}\n\n.contact-message {\n  margin-top: 3rem;\n}\n\n.contact-addr,\n.other-contact {\n  font-size: 2.5rem;\n  margin-top: 5rem;\n  opacity: 0.9;\n}\n\n.phoneNum {\n  margin-bottom: 1rem;\n}\n\n.contact-me-links {\n  color: black;\n  font-size: 7rem;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  gap: 4rem;\n  padding: 4rem 0;\n}\n\n.closing-img {\n  width: 100vw;\n  object-fit: cover;\n  height: 30vh;\n}\n\n@media screen and (min-width: 0px) {\n  body {\n    background-color: green;\n  }\n}\n\n\n@media screen and (min-width: 425px) {\n  body {\n    background-color: white;\n  }\n\n  .background-accent {\n    background-color: #0891b2;\n    width: 100vw;\n    height: 500px;\n    clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);\n  }\n\n  .about-me {\n    background-color: white;\n    margin: 10em;\n    padding: 0;\n    font-size: 12px;\n    flex-direction: row;\n    display: block;\n    /* border: 2px solid red; */\n  }\n\n  .about-me-text {\n    flex-basis: 50%;\n    padding: 6em 4em;\n    /* border: 2px solid green; */\n    box-shadow:\n      rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,\n      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\n  }\n\n  .spacer {\n    width: 375px;\n    height: 350px;\n    float: left;\n    /* background-color: white; */\n  }\n\n  .about-me-text > h2 {\n    font-size: 3rem;\n    margin-bottom: 1rem;\n  }\n\n  .about-me-text > p {\n    font-size: 1.25rem;\n  }\n\n  .about-me-image-container {\n    /* display: flex; */\n    /* flex-direction: column; */\n    align-items: center;\n    position: absolute;\n    top: 50px;\n    left: 50px;\n    margin: 0;\n    padding: 0px;\n    /* top: -140px; */\n    /* left: -50px; */\n    max-width: 425px;\n    float: left;\n    box-shadow:\n      rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,\n      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\n  }\n\n  .about-me-name {\n    font-size: 3rem;\n    top: 0;\n    left: 110%;\n  }\n\n  .social-links {\n    display: none;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  body {\n    background-color: pink;\n  }\n}\n',""]);const c=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var p=this[c][0];null!=p&&(a[p]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);o&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),e.push(s))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var p=n[c],l=o.base?p[0]+o.base:p[0],s=i[l]||0,d="".concat(l," ").concat(s);i[l]=s+1;var m=t(d),u={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var f=r(u,o);o.byIndex=c,e.splice(c,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var p=o(n,r),l=0;l<i.length;l++){var s=t(i[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}i=p}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var o=t(72),r=t.n(o),i=t(825),a=t.n(i),c=t(659),p=t.n(c),l=t(56),s=t.n(l),d=t(540),m=t.n(d),u=t(113),f=t.n(u),g=t(523),x={};x.styleTagTransform=f(),x.setAttributes=s(),x.insert=p().bind(null,"head"),x.domAPI=a(),x.insertStyleElement=m(),r()(g.A,x),g.A&&g.A.locals&&g.A.locals})();