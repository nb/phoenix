"use strict";(self.webpackChunk_phoenix_docs=self.webpackChunk_phoenix_docs||[]).push([[618],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},399:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={},l="Task",c={unversionedId:"api/task",id:"api/task",title:"Task",description:"Use the Task-object to construct tasks, access their properties or to terminate them. Beware that some task properties are only set after the task has completed.",source:"@site/docs/api/15-task.md",sourceDirName:"api",slug:"/api/task",permalink:"/phoenix/api/task",editUrl:"https://github.com/kasper/phoenix/tree/master/docs/docs/api/15-task.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{},sidebar:"sidebar",previous:{title:"Timer",permalink:"/phoenix/api/timer"},next:{title:"Image",permalink:"/phoenix/api/image"}},p=[{value:"Interface",id:"interface",children:[],level:2},{value:"Static Methods",id:"static-methods",children:[],level:2},{value:"Instance Properties",id:"instance-properties",children:[],level:2},{value:"Constructor",id:"constructor",children:[],level:2},{value:"Instance Methods",id:"instance-methods",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"task"},"Task"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Task"),"-object to construct tasks, access their properties or to terminate them. Beware that some task properties are only set after the task has completed."),(0,i.kt)("h2",{id:"interface"},"Interface"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"class Task implements Identifiable\n\n  static int run(String path, Array arguments, Function callback)\n  static void terminate(int identifier)\n\n  property int status\n  property String output\n  property String error\n\n  constructor Task Task(String path, Array arguments, Function callback)\n  void terminate()\n\nend\n")),(0,i.kt)("h2",{id:"static-methods"},"Static Methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"run(String path, Array arguments, Function callback)")," constructs a managed handler for a task and returns the identifier for the handler, for arguments see ",(0,i.kt)("inlineCode",{parentName:"li"},"new Task(...)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"terminate(int identifier)")," terminates the managed handler for a task with the given identifier")),(0,i.kt)("h2",{id:"instance-properties"},"Instance Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status")," read-only property for the termination status"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"output")," read-only property for the standard output"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"error")," read-only property for the standard error")),(0,i.kt)("h2",{id:"constructor"},"Constructor"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"new Task(String path, Array arguments, Function callback)")," constructs a task that asynchronously executes an absolute path with the given arguments and returns the handler, you must keep a reference to the handler in order for your callback to get called, the callback function receives its handler as the only argument")),(0,i.kt)("h2",{id:"instance-methods"},"Instance Methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"terminate()")," terminates the task immediately")))}d.isMDXComponent=!0}}]);