var t=r(d[0]);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t(r(d[1])),u=(function(t,n){if(!n&&t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var u=l(n);if(u&&u.has(t))return u.get(t);var o={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in t)if("default"!==f&&Object.prototype.hasOwnProperty.call(t,f)){var s=c?Object.getOwnPropertyDescriptor(t,f):null;s&&(s.get||s.set)?Object.defineProperty(o,f,s):o[f]=t[f]}o.default=t,u&&u.set(t,o);return o})(r(d[2])),o=r(d[3]),c=(t(r(d[4])),t(r(d[5])));function l(t){if("function"!=typeof WeakMap)return null;var n=new WeakMap,u=new WeakMap;return(l=function(t){return t?u:n})(t)}var f=o.StyleSheet.create({container:{flex:1,justifyContent:'center',alignItems:'center',background:'#CECECE'},text:{color:'#000'}}),s=function(){return(0,u.useEffect)(function(){var t;n.default.async(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,n.default.awrap(c.default.get('https://api.github.com/users/mensinho'));case 2:t=u.sent,console.log(t.data);case 4:case"end":return u.stop()}},null,null,null,Promise)},[]),u.default.createElement(o.View,{style:f.container},u.default.createElement(o.Button,{title:"Click-me"}))};e.default=s