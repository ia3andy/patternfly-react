webpackJsonp([0xd58956cb009c,0x9a23b2fec5a3],{811:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=l(4),r=l(214),a=n(r);t.default={title:"Title",components:{Title:i.Title},enumValues:{"Object.values(TitleSize)":Object.values(i.TitleSize)},examples:[a.default]},e.exports=t.default},214:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=l(2),s=n(o),u=l(4),f=function(e){function t(){return i(this,t),r(this,e.apply(this,arguments))}return a(t,e),t.prototype.render=function(){return s.default.createElement(s.default.Fragment,null,s.default.createElement(u.Title,{size:"4xl"},"4xl Title"),s.default.createElement(u.Title,{size:"3xl"},"3xl Title"),s.default.createElement(u.Title,{size:"2xl"},"2xl Title"),s.default.createElement(u.Title,{size:"xl"},"xl Title"),s.default.createElement(u.Title,{size:"lg"},"lg Title"),s.default.createElement(u.Title,{size:"md"},"md Title"))},t}(s.default.Component);f.title="Title Sizes",t.default=f,f.__docgenInfo={description:"",displayName:"TitleSizes"},e.exports=t.default},659:function(e,t){e.exports='import React from \'react\';\nimport { Title } from \'@patternfly/react-core\';\n\nclass TitleSizes extends React.Component {\n  static title = \'Title Sizes\';\n\n  render() {\n    return (\n      <React.Fragment>\n        <Title size="4xl">4xl Title</Title>\n        <Title size="3xl">3xl Title</Title>\n        <Title size="2xl">2xl Title</Title>\n        <Title size="xl">xl Title</Title>\n        <Title size="lg">lg Title</Title>\n        <Title size="md">md Title</Title>\n      </React.Fragment>\n    );\n  }\n}\n\nexport default TitleSizes;\n'},894:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},r=l(2),a=n(r),o=l(811),s=n(o),u=l(15),f=n(u),c=[{name:"TitleSizes",path:"../../react-core/src/components/Title/examples/TitleSizes.js",file:l(659)}],p=[{name:"pf_logo.svg",file:l(10)},{name:"pf_mini_logo_white.svg",file:l(11)},{name:"img_avatar.png",file:l(13)},{name:"pf_logo.svg",file:l(14)},{name:"img_avatar.png",file:l(8)},{name:"l_pf-reverse-164x11.png",file:l(9)},{name:"pfbg_992.jpg",file:l(12)}];t.default=function(){return a.default.createElement(f.default,i({rawExamples:c,images:p},s.default))},e.exports=t.default}});
//# sourceMappingURL=component---tmp-title-docs-js-89967bad335af085ab90.js.map