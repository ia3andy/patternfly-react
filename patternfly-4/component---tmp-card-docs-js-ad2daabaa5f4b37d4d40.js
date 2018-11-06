webpackJsonp([0xd653dafb5c90,19724466949611],{742:function(e,r,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}r.__esModule=!0;var n=t(4),o=t(148),d=a(o);r.default={title:"Card",components:{Card:n.Card,CardHeader:n.CardHeader,CardBody:n.CardBody,CardFooter:n.CardFooter},examples:[d.default]},e.exports=r.default},148:function(e,r,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function o(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function d(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}r.__esModule=!0;var l=t(2),f=a(l),i=t(4),u=function(e){function r(){return n(this,r),o(this,e.apply(this,arguments))}return d(r,e),r.prototype.render=function(){return f.default.createElement(i.Card,null,f.default.createElement(i.CardHeader,null,"Card Header"),f.default.createElement(i.CardBody,null,"Card Body"),f.default.createElement(i.CardFooter,null,"Card Footer"))},r}(f.default.Component);u.title="Simple Card",r.default=u,u.__docgenInfo={description:"",displayName:"SimpleCard"},e.exports=r.default},597:function(e,r){e.exports="import React from 'react';\nimport { Card, CardHeader, CardBody, CardFooter } from '@patternfly/react-core';\n\nclass SimpleCard extends React.Component {\n  static title = 'Simple Card';\n\n  render() {\n    return (\n      <Card>\n        <CardHeader>Card Header</CardHeader>\n        <CardBody>Card Body</CardBody>\n        <CardFooter>Card Footer</CardFooter>\n      </Card>\n    );\n  }\n}\n\nexport default SimpleCard;\n"},871:function(e,r,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}r.__esModule=!0;var n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o=t(2),d=a(o),l=t(742),f=a(l),i=t(15),u=a(i),c=[{name:"SimpleCard",path:"../../react-core/src/components/Card/examples/SimpleCard.js",file:t(597)}],p=[{name:"pf_logo.svg",file:t(10)},{name:"pf_mini_logo_white.svg",file:t(11)},{name:"img_avatar.png",file:t(13)},{name:"pf_logo.svg",file:t(14)},{name:"img_avatar.png",file:t(8)},{name:"l_pf-reverse-164x11.png",file:t(9)},{name:"pfbg_992.jpg",file:t(12)}];r.default=function(){return d.default.createElement(u.default,n({rawExamples:c,images:p},f.default))},e.exports=r.default}});
//# sourceMappingURL=component---tmp-card-docs-js-ad2daabaa5f4b37d4d40.js.map