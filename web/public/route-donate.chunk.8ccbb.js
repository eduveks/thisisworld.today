webpackJsonp([3],{HjOq:function(t){t.exports={donate:"donate__37IAh"}},tp2j:function(t,e,n){"use strict";function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"default",function(){return s});var i=n("KM04"),c=(n.n(i),n("HjOq")),u=n.n(c),l=Object(i.h)("h1",null),a=Object(i.h)("p",null,"This is the Discovery component."),s=function(t){function e(){for(var e,n,r,i=arguments.length,c=Array(i),u=0;u<i;u++)c[u]=arguments[u];return e=n=o(this,t.call.apply(t,[this].concat(c))),n.state={time:Date.now(),count:10},n.updateTime=function(){n.setState({time:Date.now()})},n.increment=function(){n.setState({count:n.state.count+1})},r=e,o(n,r)}return r(e,t),e.prototype.componentDidMount=function(){this.timer=setInterval(this.updateTime,1e3)},e.prototype.componentWillUnmount=function(){clearInterval(this.timer)},e.prototype.render=function(t,e){var n=t.user,o=e.time,r=e.count;return Object(i.h)("div",null,Object(i.h)("div",{class:u.a.donate},Object(i.h)("h1",null,"Donate: ",n),Object(i.h)("p",null,"This is the user profile for a user named ",n,"."),Object(i.h)("div",null,"Current time: ",new Date(o).toLocaleString()),Object(i.h)("p",null,Object(i.h)("button",{onClick:this.increment},"Click Me")," ","Clicked ",r," times.")),Object(i.h)("div",{class:u.a.home},l,a))},e}(i.Component)}});
//# sourceMappingURL=route-donate.chunk.8ccbb.js.map