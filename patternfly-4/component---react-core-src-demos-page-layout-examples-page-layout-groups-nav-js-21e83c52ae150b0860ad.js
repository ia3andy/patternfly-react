webpackJsonp([0xcdc6ebbebf89],{217:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=a(2),c=n(i),s=a(4),d=a(7),u=a(18),m=n(u),g=a(17),p=n(g),f=a(5),b=a(16),v=a(9),E=n(v),I=a(8),w=n(I),S=function(e){function t(a){o(this,t);var n=l(this,e.call(this,a));n.onDropdownToggle=function(e){n.setState({isDropdownOpen:e})},n.onDropdownSelect=function(e){n.setState({isDropdownOpen:!n.state.isDropdownOpen})},n.onKebabDropdownToggle=function(e){n.setState({isKebabDropdownOpen:e})},n.onKebabDropdownSelect=function(e){n.setState({isKebabDropdownOpen:!n.state.isKebabDropdownOpen})},n.onNavSelect=function(e){n.setState({activeItem:e.itemId})},n.onNavToggle=function(){n.setState({isNavOpen:!n.state.isNavOpen})};var r="undefined"!=typeof window&&window.innerWidth>=parseInt(d.global_breakpoint_md.value,10);return n.state={isDropdownOpen:!1,isKebabDropdownOpen:!1,activeItem:"grp-1_itm-1",isNavOpen:r},n}return r(t,e),t.prototype.render=function(){var e,t=this.state,a=t.isDropdownOpen,n=t.isKebabDropdownOpen,o=t.activeItem,l=t.isNavOpen,r=c.default.createElement(s.Nav,{onSelect:this.onNavSelect,"aria-label":"Nav"},c.default.createElement(s.NavGroup,{title:"System Panel"},c.default.createElement(s.NavItem,{to:"#grouped-1",itemId:"grp-1_itm-1",isActive:"grp-1_itm-1"===o},"Overview"),c.default.createElement(s.NavItem,{to:"#grouped-2",itemId:"grp-1_itm-2",isActive:"grp-1_itm-2"===o},"Resource Usage"),c.default.createElement(s.NavItem,{to:"#grouped-3",itemId:"grp-1_itm-3",isActive:"grp-1_itm-3"===o},"Hypervisors"),c.default.createElement(s.NavItem,{to:"#grouped-4",itemId:"grp-1_itm-4",isActive:"grp-1_itm-4"===o},"Instances"),c.default.createElement(s.NavItem,{to:"#grouped-5",itemId:"grp-1_itm-5",isActive:"grp-1_itm-5"===o},"Volumes"),c.default.createElement(s.NavItem,{to:"#grouped-6",itemId:"grp-1_itm-6",isActive:"grp-1_itm-6"===o},"Network")),c.default.createElement(s.NavGroup,{title:"Policy"},c.default.createElement(s.NavItem,{to:"#grouped-7",itemId:"grp-2_itm-1",isActive:"grp-2_itm-1"===o},"Hosts"),c.default.createElement(s.NavItem,{to:"#grouped-8",itemId:"grp-2_itm-2",isActive:"grp-2_itm-2"===o},"Virtual Machines"),c.default.createElement(s.NavItem,{to:"#grouped-9",itemId:"grp-2_itm-3",isActive:"grp-2_itm-3"===o},"Storage"))),i=c.default.createElement(s.Toolbar,null,c.default.createElement(s.ToolbarGroup,{className:(0,f.css)(m.default.srOnly,m.default.visibleOnLg)},c.default.createElement(s.ToolbarItem,null,c.default.createElement(s.Button,{id:"nav-toggle","aria-label":"Overflow actions",variant:s.ButtonVariant.plain},c.default.createElement(b.BellIcon,null))),c.default.createElement(s.ToolbarItem,null,c.default.createElement(s.Button,{id:"nav-toggle","aria-label":"Overflow actions",variant:s.ButtonVariant.plain},c.default.createElement(b.CogIcon,null)))),c.default.createElement(s.ToolbarGroup,null,c.default.createElement(s.ToolbarItem,{className:(0,f.css)(m.default.hiddenOnLg,p.default.mr_0)},c.default.createElement(s.Dropdown,{isPlain:!0,position:"right",onSelect:this.onKebabDropdownSelect,toggle:c.default.createElement(s.KebabToggle,{onToggle:this.onKebabDropdownToggle}),isOpen:n},c.default.createElement(s.DropdownItem,null,c.default.createElement(b.BellIcon,null)," Notifications"),c.default.createElement(s.DropdownItem,null,c.default.createElement(b.CogIcon,null)," Settings"))),c.default.createElement(s.ToolbarItem,{className:(0,f.css)(m.default.srOnly,m.default.visibleOnMd)},c.default.createElement(s.Dropdown,{isPlain:!0,position:"right",onSelect:this.onDropdownSelect,isOpen:a,toggle:c.default.createElement(s.DropdownToggle,{onToggle:this.onDropdownToggle},"Kyle Baker")},c.default.createElement(s.DropdownItem,null,"Link"),c.default.createElement(s.DropdownItem,{component:"button"},"Action"),c.default.createElement(s.DropdownItem,{isDisabled:!0},"Disabled Link"),c.default.createElement(s.DropdownItem,{isDisabled:!0,component:"button"},"Disabled Action"),c.default.createElement(s.DropdownSeparator,null),c.default.createElement(s.DropdownItem,null,"Separated Link"),c.default.createElement(s.DropdownItem,{component:"button"},"Separated Action"))))),d=(e={},e[s.BackgroundImageSrc.lg]="/assets/images/pfbg_1200.jpg",e[s.BackgroundImageSrc.md]="/assets/images/pfbg_992.jpg",e[s.BackgroundImageSrc.md2x]="/assets/images/pfbg_992@2x.jpg",e[s.BackgroundImageSrc.sm]="/assets/images/pfbg_768.jpg",e[s.BackgroundImageSrc.sm2x]="/assets/images/pfbg_768@2x.jpg",e[s.BackgroundImageSrc.xl]="/assets/images/pfbg_2000.jpg",e[s.BackgroundImageSrc.xs]="/assets/images/pfbg_576.jpg",e[s.BackgroundImageSrc.xs2x]="/assets/images/pfbg_576@2x.jpg",e[s.BackgroundImageSrc.filter]="/assets/images/background-filter.svg#image_overlay",e),u=c.default.createElement(s.PageHeader,{logo:c.default.createElement(s.Brand,{src:E.default,alt:"Patternfly Logo"}),toolbar:i,avatar:c.default.createElement(s.Avatar,{src:w.default,alt:"Avatar image"}),showNavToggle:!0,onNavToggle:this.onNavToggle}),g=c.default.createElement(s.PageSidebar,{nav:r,isNavOpen:l});return c.default.createElement(c.default.Fragment,null,c.default.createElement(s.BackgroundImage,{src:d}),c.default.createElement(s.Page,{header:u,sidebar:g},c.default.createElement(s.PageSection,{variant:s.PageSectionVariants.light},c.default.createElement(s.TextContent,null,c.default.createElement(s.Text,{component:"h1"},"Main Title"),c.default.createElement(s.Text,{component:"p"},"Body text should be Overpass Regular at 16px. It should have leading of 24px because ",c.default.createElement("br",null),"of it’s relative line height of 1.5."))),c.default.createElement(s.PageSection,{variant:s.PageSectionVariants.light},"Light"),c.default.createElement(s.PageSection,{variant:s.PageSectionVariants.dark},"Dark"),c.default.createElement(s.PageSection,{variant:s.PageSectionVariants.darker},"Darker"),c.default.createElement(s.PageSection,null,"Content")))},t}(c.default.Component);S.title="Using grouped navigation",t.default=S,S.__docgenInfo={description:"",displayName:"PageLayoutGroupsNav"},e.exports=t.default}});
//# sourceMappingURL=component---react-core-src-demos-page-layout-examples-page-layout-groups-nav-js-21e83c52ae150b0860ad.js.map