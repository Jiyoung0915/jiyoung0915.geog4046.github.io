// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/lang dojo/on dojo/_base/html dojo/keys dojo/query esri/lang dijit/Tooltip dojo/dom-geometry jimu/utils".split(" "),function(g,m,h,q,r,v,w,x,k){var l={TabindexForSplash:1,TabindexForSkipLinks:101,TabindexRangeForController:1E4,TabindexRangeForWidget:200,_setTabindex:function(a,c){function n(b,a){b&&("undefined"!==typeof b.bottom&&(b.top=a.h-b.bottom-100,delete b.bottom),"undefined"!==typeof b.right&&(b.left=a.w-b.right-100,delete b.right))}function u(b,a,d){a=g.clone(a.position||
a.panel&&a.panel.position);d=g.clone(d.position||d.panel&&d.panel.position);n(a,b);n(d,b);return a.top===d.top?a.left-d.left:a.top-d.top}var f=[],p=[],t=!1,d=null;c?a.visitElement(function(b,a){a.isOnScreen&&(a=b.position||b.panel&&b.panel.position)&&!Array.isArray(b.widgets)&&"widgetOnScreen"===b.gid&&b.visible&&("browser"===a.relativeTo?(f.push(b),"Splash"===b.name&&(t=!0)):p.push(b))}):a.visitElement(function(b,a){a.isOnScreen&&(a=b.position||b.panel&&b.panel.position)&&("widgetOnScreen"===b.gid&&
b.visible||!b.visible&&b.panel)&&("browser"===a.relativeTo?("AttributeTable"===b.name?d=b:f.push(b),"Splash"===b.name&&(t=!0)):p.push(b))});a=x.getMarginBox(this.layoutId);var y=x.getMarginBox(this.mapId),f=f.sort(g.hitch(this,u,a)),p=p.sort(g.hitch(this,u,y));c?f.unshift(this.map):f.push(this.map);d&&p.push(d);var e=l.TabindexForSplash;t?f.every(function(b){return"Splash"===b.name?(b.tabIndex=e,!1):!0}):(a=r("#skipContainer")[0],h.setAttr(a,"tabindex",e+""),this.own(m(a,"focus",g.hitch(this,function(){k.focusOnFirstSkipLink()}))));
this._initSkipLinks(c,f,d);e+=l.TabindexRangeForWidget;c?(f.forEach(function(b){"Splash"!==b.name&&(b.tabIndex=e,e=b.isController?e+l.TabindexRangeForController:e+l.TabindexRangeForWidget)}),e=this._initGridLayoutPanels(e),this._initGridMapEvents(e)):(f.forEach(function(b){"Splash"!==b.name&&(b.inPanel?b.tabIndexJimu=e:"map"===b.id?b.container.tabIndex=e:b.tabIndex=e,e=b.isController?e+l.TabindexRangeForController:e+l.TabindexRangeForWidget)}),this._initAbsoluteMapEvents());a=r(".trapLinkNode");c=
a[0];this.lastTrapNode=a[1];a=v.substitute({value:window.jimuNls.skips.skips},window.jimuNls.skips.tabAway);h.setAttr(this.lastTrapNode,"aria-label",a);k.addTooltipByDomNode(w,this.lastTrapNode,a);this.own(m(c,"focus",g.hitch(this,function(b){k.tryToFocusSplashWidget(b)||this.lastTrapNode.focus()})));this.own(m(this.lastTrapNode,"keydown",g.hitch(this,function(b){b.shiftKey&&b.keyCode===q.TAB&&(b.preventDefault(),k.focusOnFirstSkipLink())})));e+=1E3;p.forEach(function(b){b.inPanel?b.tabIndexJimu=
e:b.tabIndex=e;e=b.isController?e+l.TabindexRangeForController:e+l.TabindexRangeForWidget})},_initGridLayoutPanels:function(a){for(var c=r(".lm_item.lm_stack",this.layoutContainer),n=c.on("focus",g.hitch(this,function(a){n.remove();k.tryToFocusSplashWidget(a)||k.focusOnFirstSkipLink()})),l=0;l<=c.length-1;l++){var f=c[l];f.tabIndex=a-1;this.own(m(f,"keydown",g.hitch(this,function(a,c){h.hasClass(c.target,"lm_stack")?c.keyCode===q.ENTER?(a=r(".jimu-widget",a)[0])&&(h.hasClass(a.parentNode,"map")?this.map.container.focus():
k.focusFirstFocusNode(a)):c.keyCode!==q.TAB||c.shiftKey||a.nextSibling||a.parentNode.nextSibling||(c.preventDefault(),this.lastTrapNode.focus()):c.keyCode===q.ESCAPE&&a.focus()},f)))}return a},_initMapAttrs:function(a){a&&h.setAttr(this.map.container,"tabindex",a);h.setAttr(this.map.container,"aria-label",window.jimuNls.common.mapArea);k.addTooltipByDomNode(w,this.map.container,window.jimuNls.common.mapArea)},_initGridMapEvents:function(a){this._initMapAttrs(a);this.own(m(this.map.container,"keydown",
g.hitch(this,function(a){"map"===h.getAttr(a.target,"id")&&a.shiftKey&&a.keyCode===q.TAB&&a.preventDefault()})));this.own(m(this.map.container,"focus",g.hitch(this,function(a){k.isInNavMode()&&"map"===h.getAttr(a.target,"id")&&(a=document.getElementById("map_container"),a.addEventListener("mouseover",function(){}),a.simulateEvent=new MouseEvent("mouseover",{view:window,bubbles:!0,cancelable:!0}),this.map.isKeyboardNavigationOrigin=this.map.isKeyboardNavigation,a.dispatchEvent(a.simulateEvent)&&this.map.enableKeyboardNavigation())})));
this.own(m(this.map.container,"blur",g.hitch(this,function(a){k.isInNavMode()&&"map"===h.getAttr(a.target,"id")&&(document.getElementById("map_container").removeEventListener("mouseover",function(){}),this.map.isKeyboardNavigationOrigin||this.map.disableKeyboardNavigation())})))},_initAbsoluteMapEvents:function(){this._initMapAttrs();this.own(m(this.map.container,"keydown",g.hitch(this,function(a){"map"===h.getAttr(a.target,"id")&&a.keyCode===q.ESCAPE&&k.trapToNextFocusContainer(this.map.container)})));
window.isMoveFocusWhenInit=!0;this.own(m(this.map.container,"focus",g.hitch(this,function(a){k.isInNavMode()&&"map"===h.getAttr(a.target,"id")&&!this.widgetManager._resetFirstFocusNode()&&(a=document.getElementById("map_container"),a.addEventListener("mouseover",function(){}),a.simulateEvent=new MouseEvent("mouseover",{view:window,bubbles:!0,cancelable:!0}),this.map.isKeyboardNavigationOrigin=this.map.isKeyboardNavigation,a.dispatchEvent(a.simulateEvent)&&this.map.enableKeyboardNavigation())})));
this.own(m(this.map.container,"blur",g.hitch(this,function(a){k.isInNavMode()&&"map"===h.getAttr(a.target,"id")&&!this.widgetManager._resetFirstFocusNode()&&(document.getElementById("map_container").removeEventListener("mouseover",function(){}),this.map.isKeyboardNavigationOrigin||this.map.disableKeyboardNavigation())})))},_initSkipLinks:function(a,c,n){var u=l.TabindexForSkipLinks,f=window.jimuNls.skips,p="",t=r("#skipContainer")[0];h.setAttr(t,"aria-label",f.skips);c.forEach(function(a){if("Splash"!==
a.name){var d;if("map"===a.id)d=f.map;else if(a.panel&&a.widgets){if(0===a.widgets.length)return;d=a.isOnScreen?f.sidePanel:a.label}else{if(a.inPanel)return;d=v.substitute({value:a.label},f.skipTo)}p+='\x3cli\x3e\x3ca role\x3d"link" id\x3d"skip_'+a.id+'" aria-hidden\x3d"true" tabindex\x3d"'+u+'"\x3e'+d+"\x3c/a\x3e\x3c/li\x3e"}});n&&(c=v.substitute({value:n.label},f.skipTo),p+='\x3cli\x3e\x3ca role\x3d"link" id\x3d"skip_'+n.id+'" aria-hidden\x3d"true" tabindex\x3d"'+u+'"\x3e'+c+"\x3c/a\x3e\x3c/li\x3e");
t.innerHTML="\x3cul\x3e"+p+"\x3c/ul\x3e";n=r("a",t);this.own(m(n,"focus",g.hitch(this,function(a){this.widgetManager._resetFirstFocusNode()||h.setAttr(a.target,"aria-hidden","false")})));this.own(m(n,"blur",g.hitch(this,function(a){h.setAttr(a.target,"aria-hidden","true")})));this.own(m(n,"keydown",g.hitch(this,function(d){if(d.keyCode===q.ENTER){d=d.target.id.split("skip_")[1];var c=r("#"+d)[0];c||(c=r("#"+d+"_panel")[0]);c.focus()}else{var e;a&&(e=r(".lm_item.lm_stack",this.layoutContainer));!d.target.parentNode.previousSibling&&
d.shiftKey&&d.keyCode===q.TAB?(d.preventDefault(),a?c=e[e.length-1]:(d=k.getFrameNodesByAsc(),c=d[d.length-1])):d.keyCode===q.ESCAPE&&(c=k.trapToNextFocusContainer(t),a&&!c&&(c=e[0]));c&&c.focus()}})))}};return l});