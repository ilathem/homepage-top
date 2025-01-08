(()=>{"use strict";var n={523:(n,e,t)=>{t.d(e,{A:()=>p});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]),a.push([n.id,"/* Basic Styling */\n\n* {\n  margin: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nbody {\n  overflow-x: hidden;\n}\n\n/* Typography */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: 'Player Display';\n  font-weight: normal;\n}\n\np {\n  font-family: 'Roboto';\n}\n\n/* About Me Section */\n\n.content {\n  overflow-x: hidden;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /* border: 2px solid green; */\n}\n\n.about-me {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.about-me-image-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  height: 450px;\n  width: 90vw;\n  padding: 1em;\n}\n\n.about-me-img {\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,\n    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\n  height: 100%;\n  object-fit: cover;\n}\n\n.about-me-name {\n  position: absolute;\n  bottom: 30px;\n  font-size: 12vw;\n  text-shadow: 0px 5px 10px gray;\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,\n    1px 1px 0 #000, 0 10px 10px gray;\n  color: white;\n}\n\n.about-me-text {\n  width: 90vw;\n  margin-top: 1rem;\n}\n\n.about-me-text > h2 {\n  font-weight: 500;\n  font-size: 10vw;\n  text-align: center;\n}\n\n.about-me-text > p {\n  line-height: 1.5;\n  font-size: 1.25rem;\n  opacity: 0.8;\n}\n\n.background-accent-container {\n  position: absolute;\n  z-index: -1;\n  filter: drop-shadow(0px 5px 5px rgba(50, 50, 0, 0.5));\n}\n\n.background-accent {\n  background-color: #0891b2;\n  height: 400px;\n  width: 100vw;\n  clip-path: polygon(0 0, 100% 0, 100% 60%, 0 100%);\n}\n\n.social-links {\n  font-size: 10vw;\n  margin-top: 1rem;\n  display: flex;\n  justify-content: center;\n}\n\n.social-links > i {\n  padding: 0.5rem;\n}\n\n/* Projects */\n\n.my-work {\n  margin-top: 16em;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /* border: 2px solid red; */\n}\n\n.my-work > h2 {\n  padding-bottom: 0.5em;\n  font-size: 3rem;\n}\n\n.proj {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /* border: 2px solid green; */\n  width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 6px 6px 1px,\n    rgba(0, 0, 0, 0.06) 0px 2px 4px 1px;\n  margin-bottom: 4em;\n}\n\n.projects-container {\n  width: 90%;\n}\n\n.proj-img {\n  aspect-ratio: 1 / 1;\n  height: 100%;\n  width: 100%;\n  font-weight: normal;\n  background-color: #7c75ca;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.proj-img > p {\n  color: white;\n  font-size: 4rem;\n  text-align: center;\n  font-family: 'Player Display';\n  width: 75%;\n}\n\n.imgNum2 {\n  background-color: #d88f39;\n}\n\n.imgNum3,\n.imgNum6 {\n  background-color: #5e8f4d;\n}\n\n.imgNum4 {\n  background-color: #ca7599;\n}\n\n.imgNum5 {\n  background-color: #4692d9;\n}\n\n.proj-text {\n  /* border: 2px solid purple; */\n  overflow: hidden;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.proj-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin-top: 1rem;\n  padding-left: 2rem;\n  padding-right: 1rem;\n  font-family: 'Playfair Display';\n}\n\n.proj-header h3 {\n  font-size: 1.5rem;\n}\n\n.proj-links {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 1rem;\n}\n\n.link-icon,\n.proj-links i {\n  width: 1.5rem;\n  font-size: 1.5rem;\n}\n\n.proj-desc {\n  padding: 1rem 1rem 4rem 1rem;\n  opacity: 0.9;\n  font-family: 'Roboto';\n}\n\n/* Footer */\n\nfooter {\n  background-color: #0891b2;\n}\n\n.contact-me {\n  color: white;\n  display: flex;\n  flex-direction: column;\n  padding: 2em 2em;\n}\n\n.contact-me h2 {\n  font-size: 3rem;\n  text-align: center;\n}\n\n.contact-message {\n  font-size: 1.5rem;\n  margin-top: 1rem;\n}\n\n.contact-addr,\n.other-contact {\n  opacity: 0.9;\n  margin-top: 1.5rem;\n}\n\n.phoneIcon,\n.emailIcon {\n  display: none;\n}\n\n.phoneDiv,\n.emailDiv {\n  display: flex;\n  align-items: center;\n  height: 30px;\n}\n\n.contact-me-links {\n  color: black;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  font-size: 2.5rem;\n  margin-top: 1.5rem;\n  gap: 2rem;\n}\n\n.closing-img {\n  object-fit: cover;\n  object-position: 65% 50%;\n  height: 600px;\n  width: 100vw;\n  margin: 0;\n}\n\n@media screen and (min-width: 600px) {\n  body {\n    background-color: white;\n  }\n\n  .background-accent {\n    background-color: #0891b2;\n    width: 100vw;\n    height: 500px;\n    clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);\n  }\n\n  .about-me {\n    background-color: white;\n    margin: 10em;\n    margin-bottom: 6em;\n    padding: 0;\n    font-size: 12px;\n    flex-direction: row;\n    display: block;\n    width: 80vw;\n    /* border: 2px solid red; */\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,\n      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\n  }\n\n  .about-me-text {\n    padding: 6em 3vw;\n    /* border: 2px solid green; */\n    width: 100%;\n  }\n\n  .spacer {\n    width: 46vw;\n    height: 355px;\n    float: left;\n    /* background-color: white; */\n  }\n\n  .about-me-text > h2 {\n    font-size: 3rem;\n    margin-bottom: 1rem;\n  }\n\n  .about-me-text > p {\n    font-size: 1.25rem;\n  }\n\n  .about-me-image-container {\n    align-items: center;\n    position: absolute;\n    top: 30px;\n    left: 30px;\n    margin: 0;\n    padding: 0px;\n    width: 50vw;\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,\n      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\n  }\n\n  .about-me-name {\n    font-size: 3rem;\n    top: 0;\n    right: -30vw;\n  }\n\n  .social-links {\n    display: none;\n  }\n\n  .my-work {\n    margin-top: 0;\n    width: 80vw;\n    margin-bottom: 8rem;\n  }\n\n  .my-work > h2 {\n    text-align: left;\n    width: 100%;\n  }\n\n  .proj {\n    width: calc(40vw - 1rem);\n    margin-bottom: 3rem;\n  }\n\n  .proj-img > p {\n    font-size: 6vw;\n  }\n\n  .projects-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    width: 100%;\n    gap: 2rem;\n  }\n\n  .proj-text {\n    height: 100%;\n  }\n\n  .proj-img {\n    aspect-ratio: 3/2;\n  }\n\n  .proj-desc {\n    flex-grow: 1;\n  }\n\n  footer {\n    display: flex;\n    flex-direction: row;\n  }\n\n  .contact-me {\n    padding-top: 6rem;\n    padding-bottom: 6rem;\n  }\n\n  .contact-me > h2 {\n    text-align: left;\n  }\n\n  .contact-message {\n    font-size: 1.25rem;\n  }\n\n  .contact-addr {\n    font-size: 1.25rem;\n  }\n\n  .other-contact {\n    font-size: 1.25rem;\n  }\n\n  .contact-me-links {\n    justify-content: start;\n  }\n\n  .closing-img {\n    width: 40vw;\n    margin: 3rem;\n    height: auto;\n  }\n\n  .phoneDiv,\n  .emailDiv {\n    display: flex;\n    align-items: center;\n    height: 60px;\n    gap: 10px;\n  }\n\n  .phoneIcon,\n  .emailIcon {\n    display: block;\n    width: 4vw;\n    color: white;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .spacer {\n    display: none;\n  }\n\n  .about-me-image-container {\n    width: 40vw;\n    height: 550px;\n    top: 50px;\n  }\n\n  .about-me-name {\n    left: 20%;\n    top: 87%;\n  }\n\n  .about-me {\n    width: 100vw;\n    background: none;\n    box-shadow: none;\n  }\n\n  .about-me-text {\n    width: 55%;\n    padding-left: 5vw;\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n    background-color: white;\n    right: 0;\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,\n      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\n    margin-left: 40vw;\n  }\n\n  .about-me-text > h2 {\n    text-align: left;\n  }\n\n  .social-links {\n    display: flex;\n    justify-content: end;\n    font-size: 2.5rem;\n    gap: 1rem;\n    margin-top: 3rem;\n  }\n\n  .background-accent {\n    height: 630px;\n  }\n\n  .my-work {\n    margin-top: 8rem;\n  }\n\n  .projects-container {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    width: 100%;\n    gap: 2rem;\n  }\n\n  .proj {\n    width: auto;\n    margin-bottom: 3rem;\n  }\n\n  .proj-img {\n    aspect-ratio: unset;\n    height: 300px;\n  }\n\n  .proj-img p {\n    font-size: 3rem;\n  }\n\n  .proj-desc {\n    padding: 1rem;\n  }\n\n  .proj-text {\n    height: min-content;\n    padding-bottom: 2rem;\n    overflow: hidden;\n  }\n\n  .proj-header h3 {\n    font-size: 2rem;\n    padding-left: 0rem;\n  }\n\n  .proj-header {\n    padding-left: 1rem;\n  }\n\n  .proj-text p {\n    font-size: 1.25rem;\n  }\n\n  footer {\n    width: 80%;\n    padding: 4rem 0;\n    justify-content: space-between;\n  }\n\n  .footerWrapper {\n    width: 100vw;\n    background-color: #0891b2;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n\n  .contact-me {\n    width: 33vw;\n    /* border: 2px solid green; */\n  }\n\n  .contact-me p {\n    font-size: 1.25rem;\n  }\n\n  .closing-img {\n    margin: 0;\n    flex: 1;\n  }\n}\n",""]);const p=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var p=0;p<this.length;p++){var c=this[p][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],p=0;p<n.length;p++){var c=n[p],d=o.base?c[0]+o.base:c[0],l=i[d]||0,s="".concat(d," ").concat(l);i[d]=l+1;var m=t(s),g={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(g);else{var f=r(g,o);o.byIndex=p,e.splice(p,0,{identifier:s,updater:f,references:1})}a.push(s)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var p=t(i[a]);e[p].references--}for(var c=o(n,r),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var o=t(72),r=t.n(o),i=t(825),a=t.n(i),p=t(659),c=t.n(p),d=t(56),l=t.n(d),s=t(540),m=t.n(s),g=t(113),f=t.n(g),x=t(523),h={};h.styleTagTransform=f(),h.setAttributes=l(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=m(),r()(x.A,h),x.A&&x.A.locals&&x.A.locals})();