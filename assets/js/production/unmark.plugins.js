/*! Unmark - http://unmark.it - 2016-09-14 - http://plainmade.com */ 
var Hogan={};!function(a,b){function c(a){return String(null===a||void 0===a?"":a)}function d(a){return a=c(a),j.test(a)?a.replace(e,"&amp;").replace(f,"&lt;").replace(g,"&gt;").replace(h,"&#39;").replace(i,"&quot;"):a}a.Template=function(a,c,d,e){this.r=a||this.r,this.c=d,this.options=e,this.text=c||"",this.buf=b?[]:""},a.Template.prototype={r:function(){return""},v:d,t:c,render:function(a,b,c){return this.ri([a],b||{},c)},ri:function(a,b,c){return this.r(a,b,c)},rp:function(a,b,c,d){var e=c[a];return e?(this.c&&"string"==typeof e&&(e=this.c.compile(e,this.options)),e.ri(b,c,d)):""},rs:function(a,b,c){var d=a[a.length-1];if(!k(d))return void c(a,b,this);for(var e=0;e<d.length;e++)a.push(d[e]),c(a,b,this),a.pop()},s:function(a,b,c,d,e,f,g){var h;return k(a)&&0===a.length?!1:("function"==typeof a&&(a=this.ls(a,b,c,d,e,f,g)),h=""===a||!!a,!d&&h&&b&&b.push("object"==typeof a?a:b[b.length-1]),h)},d:function(a,b,c,d){var e=a.split("."),f=this.f(e[0],b,c,d),g=null;if("."===a&&k(b[b.length-2]))return b[b.length-1];for(var h=1;h<e.length;h++)f&&"object"==typeof f&&e[h]in f?(g=f,f=f[e[h]]):f="";return d&&!f?!1:(d||"function"!=typeof f||(b.push(g),f=this.lv(f,b,c),b.pop()),f)},f:function(a,b,c,d){for(var e=!1,f=null,g=!1,h=b.length-1;h>=0;h--)if(f=b[h],f&&"object"==typeof f&&a in f){e=f[a],g=!0;break}return g?(d||"function"!=typeof e||(e=this.lv(e,b,c)),e):d?!1:""},ho:function(a,b,c,d,e){var f=this.c,g=this.options;g.delimiters=e;var d=a.call(b,d);return d=null==d?String(d):d.toString(),this.b(f.compile(d,g).render(b,c)),!1},b:b?function(a){this.buf.push(a)}:function(a){this.buf+=a},fl:b?function(){var a=this.buf.join("");return this.buf=[],a}:function(){var a=this.buf;return this.buf="",a},ls:function(a,b,c,d,e,f,g){var h=b[b.length-1],i=null;if(!d&&this.c&&a.length>0)return this.ho(a,h,c,this.text.substring(e,f),g);if(i=a.call(h),"function"==typeof i){if(d)return!0;if(this.c)return this.ho(i,h,c,this.text.substring(e,f),g)}return i},lv:function(a,b,d){var e=b[b.length-1],f=a.call(e);return"function"==typeof f&&(f=c(f.call(e)),this.c&&~f.indexOf("{{"))?this.c.compile(f,this.options).render(e,d):c(f)}};var e=/&/g,f=/</g,g=/>/g,h=/\'/g,i=/\"/g,j=/[&<>\"\']/,k=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)}}("undefined"!=typeof exports?exports:Hogan),function(a){function b(a){"}"===a.n.substr(a.n.length-1)&&(a.n=a.n.substring(0,a.n.length-1))}function c(a){return a.trim?a.trim():a.replace(/^\s*|\s*$/g,"")}function d(a,b,c){if(b.charAt(c)!=a.charAt(0))return!1;for(var d=1,e=a.length;e>d;d++)if(b.charAt(c+d)!=a.charAt(d))return!1;return!0}function e(a,b,c,d){for(var h=[],i=null,j=null;a.length>0;)if(j=a.shift(),"#"==j.tag||"^"==j.tag||f(j,d))c.push(j),j.nodes=e(a,j.tag,c,d),h.push(j);else{if("/"==j.tag){if(0===c.length)throw new Error("Closing tag without opener: /"+j.n);if(i=c.pop(),j.n!=i.n&&!g(j.n,i.n,d))throw new Error("Nesting error: "+i.n+" vs. "+j.n);return i.end=j.i,h}h.push(j)}if(c.length>0)throw new Error("missing closing tag: "+c.pop().n);return h}function f(a,b){for(var c=0,d=b.length;d>c;c++)if(b[c].o==a.n)return a.tag="#",!0}function g(a,b,c){for(var d=0,e=c.length;e>d;d++)if(c[d].c==a&&c[d].o==b)return!0}function h(a){return a.replace(u,"\\\\").replace(r,'\\"').replace(s,"\\n").replace(t,"\\r")}function i(a){return~a.indexOf(".")?"d":"f"}function j(a){for(var b="",c=0,d=a.length;d>c;c++){var e=a[c].tag;"#"==e?b+=k(a[c].nodes,a[c].n,i(a[c].n),a[c].i,a[c].end,a[c].otag+" "+a[c].ctag):"^"==e?b+=l(a[c].nodes,a[c].n,i(a[c].n)):"<"==e||">"==e?b+=m(a[c]):"{"==e||"&"==e?b+=n(a[c].n,i(a[c].n)):"\n"==e?b+=p('"\\n"'+(a.length-1==c?"":" + i")):"_v"==e?b+=o(a[c].n,i(a[c].n)):void 0===e&&(b+=p('"'+h(a[c])+'"'))}return b}function k(a,b,c,d,e,f){return"if(_.s(_."+c+'("'+h(b)+'",c,p,1),c,p,0,'+d+","+e+',"'+f+'")){_.rs(c,p,function(c,p,_){'+j(a)+"});c.pop();}"}function l(a,b,c){return"if(!_.s(_."+c+'("'+h(b)+'",c,p,1),c,p,1,0,0,"")){'+j(a)+"};"}function m(a){return'_.b(_.rp("'+h(a.n)+'",c,p,"'+(a.indent||"")+'"));'}function n(a,b){return"_.b(_.t(_."+b+'("'+h(a)+'",c,p,0)));'}function o(a,b){return"_.b(_.v(_."+b+'("'+h(a)+'",c,p,0)));'}function p(a){return"_.b("+a+");"}var q=/\S/,r=/\"/g,s=/\n/g,t=/\r/g,u=/\\/g,v={"#":1,"^":2,"/":3,"!":4,">":5,"<":6,"=":7,_v:8,"{":9,"&":10};a.scan=function(a,e){function f(){r.length>0&&(s.push(new String(r)),r="")}function g(){for(var a=!0,b=w;b<s.length;b++)if(a=s[b].tag&&v[s[b].tag]<v._v||!s[b].tag&&null===s[b].match(q),!a)return!1;return a}function h(a,b){if(f(),a&&g())for(var c,d=w;d<s.length;d++)s[d].tag||((c=s[d+1])&&">"==c.tag&&(c.indent=s[d].toString()),s.splice(d,1));else b||s.push({tag:"\n"});t=!1,w=s.length}function i(a,b){var d="="+y,e=a.indexOf(d,b),f=c(a.substring(a.indexOf("=",b)+1,e)).split(" ");return x=f[0],y=f[1],e+d.length-1}var j=a.length,k=0,l=1,m=2,n=k,o=null,p=null,r="",s=[],t=!1,u=0,w=0,x="{{",y="}}";for(e&&(e=e.split(" "),x=e[0],y=e[1]),u=0;j>u;u++)n==k?d(x,a,u)?(--u,f(),n=l):"\n"==a.charAt(u)?h(t):r+=a.charAt(u):n==l?(u+=x.length-1,p=v[a.charAt(u+1)],o=p?a.charAt(u+1):"_v","="==o?(u=i(a,u),n=k):(p&&u++,n=m),t=u):d(y,a,u)?(s.push({tag:o,n:c(r),otag:x,ctag:y,i:"/"==o?t-y.length:u+x.length}),r="",u+=y.length-1,n=k,"{"==o&&("}}"==y?u++:b(s[s.length-1]))):r+=a.charAt(u);return h(t,!0),s},a.generate=function(b,c,d){var e='var _=this;_.b(i=i||"");'+j(b)+"return _.fl();";return d.asString?"function(c,p,i){"+e+";}":new a.Template(new Function("c","p","i",e),c,a,d)},a.parse=function(a,b,c){return c=c||{},e(a,"",[],c.sectionTags||[])},a.cache={},a.compile=function(a,b){b=b||{};var c=a+"||"+!!b.asString,d=this.cache[c];return d?d:(d=this.generate(this.parse(this.scan(a,b.delimiters),a,b),a,b),this.cache[c]=d)}}("undefined"!=typeof exports?exports:Hogan),function(a){function b(b,d,e){var f=this;return this.on("click.pjax",b,function(b){var g=a.extend({},m(d,e));g.container||(g.container=a(this).attr("data-pjax")||f),c(b,g)})}function c(b,c,d){d=m(c,d);var f=b.currentTarget;if("A"!==f.tagName.toUpperCase())throw"$.fn.pjax or $.pjax.click requires an anchor element";if(!(b.which>1||b.metaKey||b.ctrlKey||b.shiftKey||b.altKey||location.protocol!==f.protocol||location.hostname!==f.hostname||f.hash&&f.href.replace(f.hash,"")===location.href.replace(location.hash,"")||f.href===location.href+"#")){var g={url:f.href,container:a(f).attr("data-pjax"),target:f},h=a.extend({},g,d),i=a.Event("pjax:click");a(f).trigger(i,[h]),i.isDefaultPrevented()||(e(h),b.preventDefault(),a(f).trigger("pjax:clicked",[h]))}}function d(b,c,d){d=m(c,d);var f=b.currentTarget;if("FORM"!==f.tagName.toUpperCase())throw"$.pjax.submit requires a form element";var g={type:f.method.toUpperCase(),url:f.action,data:a(f).serializeArray(),container:a(f).attr("data-pjax"),target:f};e(a.extend({},g,d)),b.preventDefault()}function e(b){function c(b,c){var e=a.Event(b,{relatedTarget:d});return h.trigger(e,c),!e.isDefaultPrevented()}b=a.extend(!0,{},a.ajaxSettings,e.defaults,b),a.isFunction(b.url)&&(b.url=b.url());var d=b.target,f=l(b.url).hash,h=b.context=n(b.container);b.data||(b.data={}),b.data._pjax=h.selector;var i;b.beforeSend=function(a,d){return"GET"!==d.type&&(d.timeout=0),a.setRequestHeader("X-PJAX","true"),a.setRequestHeader("X-PJAX-Container",h.selector),c("pjax:beforeSend",[a,d])?(d.timeout>0&&(i=setTimeout(function(){c("pjax:timeout",[a,b])&&a.abort("timeout")},d.timeout),d.timeout=0),void(b.requestUrl=l(d.url).href)):!1},b.complete=function(a,d){i&&clearTimeout(i),c("pjax:complete",[a,d,b]),c("pjax:end",[a,b])},b.error=function(a,d,e){var f=q("",a,b),h=c("pjax:error",[a,d,e,b]);"GET"==b.type&&"abort"!==d&&h&&g(f.url)},b.success=function(d,i,k){var m="function"==typeof a.pjax.defaults.version?a.pjax.defaults.version():a.pjax.defaults.version,n=k.getResponseHeader("X-PJAX-Version"),o=q(d,k,b);if(m&&n&&m!==n)return void g(o.url);if(!o.contents)return void g(o.url);e.state={id:b.id||j(),url:o.url,title:o.title,container:h.selector,fragment:b.fragment,timeout:b.timeout},(b.push||b.replace)&&window.history.replaceState(e.state,o.title,o.url),document.activeElement.blur(),o.title&&(document.title=o.title),h.html(o.contents);var p=h.find("input[autofocus], textarea[autofocus]").last()[0];if(p&&document.activeElement!==p&&p.focus(),r(o.scripts),"number"==typeof b.scrollTo&&a(window).scrollTop(b.scrollTo),""!==f){var s=l(o.url);s.hash=f,e.state.url=s.href,window.history.replaceState(e.state,o.title,s.href);var t=a(s.hash);t.length&&a(window).scrollTop(t.offset().top)}c("pjax:success",[d,i,k,b])},e.state||(e.state={id:j(),url:window.location.href,title:document.title,container:h.selector,fragment:b.fragment,timeout:b.timeout},window.history.replaceState(e.state,document.title));var m=e.xhr;m&&m.readyState<4&&(m.onreadystatechange=a.noop,m.abort()),e.options=b;var m=e.xhr=a.ajax(b);return m.readyState>0&&(b.push&&!b.replace&&(s(e.state.id,h.clone().contents()),window.history.pushState(null,"",k(b.requestUrl))),c("pjax:start",[m,b]),c("pjax:send",[m,b])),e.xhr}function f(b,c){var d={url:window.location.href,push:!1,replace:!0,scrollTo:!1};return e(a.extend(d,m(b,c)))}function g(a){window.history.replaceState(null,"","#"),window.location.replace(a)}function h(b){var c=b.state;if(c&&c.container){if(x&&y==c.url)return;if(e.state.id===c.id)return;var d=a(c.container);if(d.length){var f,h=A[c.id];e.state&&(f=e.state.id<c.id?"forward":"back",t(f,e.state.id,d.clone().contents()));var i=a.Event("pjax:popstate",{state:c,direction:f});d.trigger(i);var j={id:c.id,url:c.url,container:d,push:!1,fragment:c.fragment,timeout:c.timeout,scrollTo:!1};h?(d.trigger("pjax:start",[null,j]),c.title&&(document.title=c.title),d.html(h),e.state=c,d.trigger("pjax:end",[null,j])):e(j),d[0].offsetHeight}else g(location.href)}x=!1}function i(b){var c=a.isFunction(b.url)?b.url():b.url,d=b.type?b.type.toUpperCase():"GET",e=a("<form>",{method:"GET"===d?"GET":"POST",action:c,style:"display:none"});"GET"!==d&&"POST"!==d&&e.append(a("<input>",{type:"hidden",name:"_method",value:d.toLowerCase()}));var f=b.data;if("string"==typeof f)a.each(f.split("&"),function(b,c){var d=c.split("=");e.append(a("<input>",{type:"hidden",name:d[0],value:d[1]}))});else if("object"==typeof f)for(key in f)e.append(a("<input>",{type:"hidden",name:key,value:f[key]}));a(document.body).append(e),e.submit()}function j(){return(new Date).getTime()}function k(a){return a.replace(/\?_pjax=[^&]+&?/,"?").replace(/_pjax=[^&]+&?/,"").replace(/[\?&]$/,"")}function l(a){var b=document.createElement("a");return b.href=a,b}function m(b,c){return b&&c?c.container=b:c=a.isPlainObject(b)?b:{container:b},c.container&&(c.container=n(c.container)),c}function n(b){if(b=a(b),b.length){if(""!==b.selector&&b.context===document)return b;if(b.attr("id"))return a("#"+b.attr("id"));throw"cant get selector for pjax container!"}throw"no pjax container for "+b.selector}function o(a,b){return a.filter(b).add(a.find(b))}function p(b){return a.parseHTML(b,document,!0)}function q(b,c,d){var e={};if(e.url=k(c.getResponseHeader("X-PJAX-URL")||d.requestUrl),/<html/i.test(b))var f=a(p(b.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0])),g=a(p(b.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]));else var f=g=a(p(b));if(0===g.length)return e;if(e.title=o(f,"title").last().text(),d.fragment){if("body"===d.fragment)var h=g;else var h=o(g,d.fragment).first();h.length&&(e.contents=h.contents(),e.title||(e.title=h.attr("title")||h.data("title")))}else/<html/i.test(b)||(e.contents=g);return e.contents&&(e.contents=e.contents.not(function(){return a(this).is("title")}),e.contents.find("title").remove(),e.scripts=o(e.contents,"script[src]").remove(),e.contents=e.contents.not(e.scripts)),e.title&&(e.title=a.trim(e.title)),e}function r(b){if(b){var c=a("script[src]");b.each(function(){var b=this.src,d=c.filter(function(){return this.src===b});if(!d.length){var e=document.createElement("script");e.type=a(this).attr("type"),e.src=a(this).attr("src"),document.head.appendChild(e)}})}}function s(a,b){for(A[a]=b,C.push(a);B.length;)delete A[B.shift()];for(;C.length>e.defaults.maxCacheLength;)delete A[C.shift()]}function t(a,b,c){var d,e;A[b]=c,"forward"===a?(d=C,e=B):(d=B,e=C),d.push(b),(b=e.pop())&&delete A[b]}function u(){return a("meta").filter(function(){var b=a(this).attr("http-equiv");return b&&"X-PJAX-VERSION"===b.toUpperCase()}).attr("content")}function v(){a.fn.pjax=b,a.pjax=e,a.pjax.enable=a.noop,a.pjax.disable=w,a.pjax.click=c,a.pjax.submit=d,a.pjax.reload=f,a.pjax.defaults={timeout:650,push:!0,replace:!1,type:"GET",dataType:"html",scrollTo:0,maxCacheLength:20,version:u},a(window).on("popstate.pjax",h)}function w(){a.fn.pjax=function(){return this},a.pjax=i,a.pjax.enable=v,a.pjax.disable=a.noop,a.pjax.click=a.noop,a.pjax.submit=a.noop,a.pjax.reload=function(){window.location.reload()},a(window).off("popstate.pjax",h)}var x=!0,y=window.location.href,z=window.history.state;z&&z.container&&(e.state=z),"state"in window.history&&(x=!1);var A={},B=[],C=[];a.inArray("state",a.event.props)<0&&a.event.props.push("state"),a.support.pjax=window.history&&window.history.pushState&&window.history.replaceState&&!navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/),a.support.pjax?v():w()}(jQuery),function(a){"use strict";a.fn.fitVids=function(b){var c={customSelector:null};if(!document.getElementById("fit-vids-style")){var d=document.createElement("div"),e=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0],f="&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>";d.className="fit-vids-style",d.id="fit-vids-style",d.style.display="none",d.innerHTML=f,e.parentNode.insertBefore(d,e)}return b&&a.extend(c,b),this.each(function(){var b=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];c.customSelector&&b.push(c.customSelector);var d=a(this).find(b.join(","));d=d.not("object object"),d.each(function(){var b=a(this);if(!("embed"===this.tagName.toLowerCase()&&b.parent("object").length||b.parent(".fluid-width-video-wrapper").length)){var c="object"===this.tagName.toLowerCase()||b.attr("height")&&!isNaN(parseInt(b.attr("height"),10))?parseInt(b.attr("height"),10):b.height(),d=isNaN(parseInt(b.attr("width"),10))?b.width():parseInt(b.attr("width"),10),e=c/d;if(!b.attr("id")){var f="fitvid"+Math.floor(999999*Math.random());b.attr("id",f)}b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*e+"%"),b.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto);