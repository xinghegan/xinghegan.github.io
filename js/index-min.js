// JavaScript Document
function MoveH(a,b){a.iSpeed=0,a.iNow=0;var c=4;clearInterval(a.timer),a.timer=setInterval(function(){a.offsetHeight<b?c=4:a.offsetHeight>b&&(c=-4),a.iSpeed+=c;var d=a.offsetHeight+a.iSpeed;d>b&&c>0||b>d&&0>c?(a.iNow++,d=b,a.iSpeed*=-.55,2==a.iNow&&clearInterval(a.timer)):a.iNow=0,a.style.height=d+"px"},30)}function getStyle(a,b){return(a.currentStyle||getComputedStyle(a,!1))[b]}function move(a,b,c){c=c||{},c.type=c.type||"ease-out",c.time=c.time||800;var d={},e={};for(var f in b){if(e[f]=parseFloat(getStyle(a,f)),isNaN(e[f]))switch(f){case"width":e[f]=a.offsetWidth;break;case"height":e[f]=a.offsetHeight;break;case"top":e[f]=a.offsetTop;break;case"left":e[f]=a.offsetLeft;break;case"opacity":e[f]=1;break;case"borderWidth":e[f]=0}d[f]=b[f]-e[f];var g=0,h=Math.floor(c.time/30);clearInterval(a.timer),a.timer=setInterval(function(){g++;for(var f in b){switch(c.type){case"linear":var i=e[f]+d[f]*g/h;break;case"ease-in":var j=g/h,i=e[f]+d[f]*Math.pow(j,3);break;case"ease-out":var j=1-g/h,i=e[f]+d[f]*(1-Math.pow(j,3))}"opacity"==f?(a.style.opacity=i,a.style.filter="alpha(opacity:"+100*i+")"):a.style[f]=i+"px"}h==g&&(clearInterval(a.timer),c.end&&c.end())},30)}}window.onload=function(){function a(a,b,c){a.style["Webkit"+b.charAt(0).toUpperCase()+b.substring(1)]=c,a.style["Moz"+b.charAt(0).toUpperCase()+b.substring(1)]=c,a.style["ms"+b.charAt(0).toUpperCase()+b.substring(1)]=c,a.style["O"+b.charAt(0).toUpperCase()+b.substring(1)]=c,a.style[b]=c}function b(){return document.body.scrollTop||document.documentElement.scrollTop}!function(){var a=document.getElementById("bg"),b=a.getElementsByTagName("img");document.documentElement.clientWidth>1349&&(a.style.width=document.documentElement.clientWidth+"px",a.style.height=document.documentElement.clientHeight+20+"px"),window.onresize=function(){a.style.width=document.documentElement.clientWidth+"px",a.style.height=document.documentElement.clientHeight+20+"px"};var c=0;setInterval(function(){c++,c>b.length-1&&(c=0);for(var a=0;a<b.length;a++)move(b[a],{opacity:0},{type:"linear"});move(b[c],{opacity:1},{type:"linear",time:900})},1e4)}(),function(){function a(){function a(a,b,c){a.style["Webkit"+b.charAt(0).toUpperCase()+b.substring(1)]=c,a.style["Moz"+b.charAt(0).toUpperCase()+b.substring(1)]=c,a.style["ms"+b.charAt(0).toUpperCase()+b.substring(1)]=c,a.style["O"+b.charAt(0).toUpperCase()+b.substring(1)]=c,a.style[b]=c}function c(){b.style.display="none",b.removeEventListener("transitionend",c,!1)}var d=null;clearTimeout(d),d=setTimeout(function(){startMoveH(b,100)},500);for(var e=b.getElementsByTagName("p")[1],f=b.getElementsByTagName("p")[2],g="鐢佃瘽锛�158-1006-2339",h="閭锛歩trenhang@163.com",i=0;i<g.length;i++)e.innerHTML+="<span>"+g.charAt(i)+"</span>";for(var i=0;i<h.length;i++)f.innerHTML+="<span>"+h.charAt(i)+"</span>";for(var j=e.getElementsByTagName("span"),i=0;i<j.length;i++)!function(a){e.timer=setTimeout(function(){move(j[a],{opacity:1})},1e3+100*a)}(i);for(var k=f.getElementsByTagName("span"),i=0;i<k.length;i++)!function(a){f.timer=setTimeout(function(){move(k[a],{opacity:1})},2500+100*a)}(i);var l=b.getElementsByTagName("a")[0];l.onclick=function(){a(b,"transition",".5s all ease"),b.style.opacity=0,a(b,"transform","scale(2)"),clearTimeout(e.timer),clearTimeout(f.timer),b.addEventListener("transitionend",c,!1)}}var b=document.getElementById("con1");a()}(),function(){for(var b=document.querySelector(".add .add_prev"),c=document.querySelector(".add .add_next"),d=(document.querySelector(".add .ul_box"),document.querySelectorAll(".add .ul_box li")),e=document.querySelector(".add .ul_box .cur"),f=e.getElementsByTagName("img")[0],g=[],h=0;h<d.length;h++)g.push(d[h].className);b.onclick=function(){e.onmouseover=null,e.onmouseout=null,g.push(g.shift());for(var b=0;b<d.length;b++)d[b].className=g[b];e=document.querySelector(".add .ul_box .cur"),f=e.getElementsByTagName("img")[0],e.onmouseover=function(){a(f,"transition","1s all ease"),a(f,"transform","scale(1.2) rotate(5deg)")},e.onmouseout=function(){a(f,"transition","1s all ease"),a(f,"transform","scale(1) rotate(0deg)")}},c.onclick=function(){e.onmouseover=null,e.onmouseout=null,g.unshift(g.pop());for(var b=0;b<d.length;b++)d[b].className=g[b];e=document.querySelector(".add .ul_box .cur"),f=e.getElementsByTagName("img")[0],e.onmouseover=function(){a(f,"transition","1s all ease"),a(f,"transform","scale(1.2) rotate(5deg)")},e.onmouseout=function(){a(f,"transition","1s all ease"),a(f,"transform","scale(1) rotate(0deg)")}},e.onmouseover=function(){a(f,"transition","1s all ease"),a(f,"transform","scale(1.2) rotate(5deg)")},e.onmouseout=function(){a(f,"transition","1s all ease"),a(f,"transform","scale(1) rotate(0deg)")}}();var c=0;!function(){for(var a=document.getElementById("ul1"),b=a.children,d=b[b.length-1],e=0;e<b.length-1;e++)b[e].index=e,b[e].onmouseover=function(){startMove(d,this.offsetLeft)},b[e].onmouseout=function(){startMove(d,c*b[0].offsetWidth)}}(),function(){function a(a){var b=document.getElementById(a),c=b.children[1],d=c.children[0];b.onmouseover=function(){move(c,{width:130}),d.className="cur"},b.onmouseout=function(){move(c,{width:0}),d.className=""}}var b=(document.getElementById("tel"),document.getElementById("weixin")),c=b.getElementsByTagName("img")[1];a("tel");b.onmouseover=function(){move(c,{width:200,height:200,opacity:1})},b.onmouseout=function(){move(c,{width:0,height:0,opacity:0})}}(),function(){function a(a){var c=a;clearInterval(g),g=setInterval(function(){b(c)},30)}function b(a){var b=document.documentElement.scrollTop||document.body.scrollTop;710*a>b&&a>=f?(b+=71,window.scrollTo(0,b)):b>710*a&&f>=a?(b-=71,710*a>b&&(b=710*a),window.scrollTo(0,b)):(window.scrollTo(0,710*a),f=a,clearInterval(g))}for(var d=document.getElementById("ul1"),e=d.children,f=0,g=null,h=0;h<e.length;h++)e[h].index=h,e[h].onclick=function(){c=this.index,a(this.index)}}(),function(){var a=document.getElementById("foot"),b=a.getElementsByTagName("div")[0];b.onclick=function(){0==a.offsetHeight?MoveH(a,200):MoveH(a,0)}}(),function(){var a=document.getElementById("box2"),b=a.children[0],c=a.children[1],d=b.children,e=c.children;MoveH(e[0],580);for(var f=0;f<d.length;f++)d[f].index=f,d[f].onclick=function(){for(var a=0;a<d.length;a++)d[a].className="",MoveH(e[a],0),e[a].style.display="none";this.className="active",e[this.index].style.display="block",MoveH(e[this.index],580)}}(),function(){var a=document.getElementById("back"),b=document.getElementById("ul1"),d=b.children,e=d[d.length-1],f=!1;window.onscroll=function(b){f&&clearInterval(a.timer),f=!0;var g=document.documentElement.scrollTop||document.body.scrollTop;g>100?a.style.display="block":a.style.display="none",c=Math.floor((g+200)/710),startMove(e,c*d[0].offsetWidth)},a.onclick=function(){var b=document.documentElement.scrollTop||document.body.scrollTop,c=0,d=c-b,e=Math.floor(100),g=0;clearInterval(a.timer),a.timer=setInterval(function(){g++;var c=1-g/e;f=!1,document.documentElement.scrollTop=document.body.scrollTop=b+d*(1-Math.pow(c,3)),g==e&&clearInterval(a.timer)},30)}}(),function(){function a(a){return 180*a/Math.PI}function c(c,d){var e=document.body.scrollHeight-710,f=b(),g=c.offsetWidth,h=c.offsetHeight,i=c.offsetLeft+g/2-d.clientX,j=c.offsetTop+h/2-(d.clientY+(f-e));return Math.round((a(Math.atan2(j,i))+180)/90)%4}function d(a){var b=a.children[1];a.onmouseover=function(a){var d=a||event,e=d.formElement||d.relatedTarget;if(!this.contains(e)){var f=c(this,d);switch(f){case 0:b.style.left="150px",b.style.top=0;break;case 1:b.style.left=0,b.style.top="150px";break;case 2:b.style.left="-150px",b.style.top=0;break;case 3:b.style.left=0,b.style.top="-150px"}move(b,{top:0,left:0})}},a.onmouseout=function(a){var d=a||event,e=d.toElement||d.relatedTarget;if(!this.contains(e)){var f=c(this,d);switch(f){case 0:move(b,{left:150,top:0});break;case 1:move(b,{left:0,top:150});break;case 2:move(b,{left:-150,top:0});break;case 3:move(b,{left:0,top:-150})}}}}for(var e=document.getElementById("works_ul"),f=e.children,g=0;g<f.length;g++)d(f[g])}(),function(){for(var a=document.getElementById("works_btn_java"),b=document.getElementById("works_btn_html"),c=document.getElementById("works_ul"),d=c.getElementsByTagName("img"),e=c.getElementsByTagName("a"),f=[],g=0;g<e.length;g++)g%2!=0&&f.push(e[g]);for(var h=c.children,i=["javascript/point.html","javascript/window.html","javascript/tab.html","javascript/play.html","javascript/ball.html","javascript/drag.html"],j=["html5/clock.html","html5/blow/blow.html","html5/jsimg/demo.html","html5/3dtupian/demo.html","html5/bw.html","html5/geolocation.html"],k=["shoufengqin","fenbu","tab","youxi","ball","gundong"],l=["shizhong","blow","img","tupianhuan","wuziqi","ditu"],m=["鎵嬮鐞�","鍒嗗竷杩愬姩","鏃犵紳婊氬姩閫夋樉鍗�","娓告垙","鎵旀槦鐞�","鍥剧墖姣斾緥缂╂斁"],n=["鏃堕挓","鐖嗙偢绛夋晥鏋�","JS鍥剧墖灞曠ず","3D鍥剧墖鐜�","浜斿瓙妫�","鐧惧害鍦板浘"],o=[],g=0;g<h.length;g++)o.push({left:h[g].offsetLeft,top:h[g].offsetTop});for(var g=0;g<h.length;g++)h[g].style.left=o[g].left+"px",h[g].style.top=o[g].top+"px",h[g].style.position="absolute",h[g].style.margin=0;var p=!1;a.onclick=function(){if(!p){p=!0;for(var a=0;a<h.length;a++)!function(b){setTimeout(function(){move(h[b],{left:560,top:560,width:0,height:0,opacity:0},{end:function(){for(var a=0;a<d.length;a++)d[a].src="img/"+k[a]+".png",f[a].innerHTML=m[a],f[a].href=i[a];if(b==h.length-1)for(var a=h.length-1;a>=0;a--)!function(b){setTimeout(function(){move(h[b],{left:o[b].left,top:o[b].top,width:150,height:150,opacity:1},{end:function(){0==b&&(p=!1)}})},100*(h.length-a))}(a)}})},100*a)}(a)}},b.onclick=function(){if(!p){p=!0;for(var a=0;a<h.length;a++)!function(b){setTimeout(function(){move(h[b],{left:760,top:560,width:0,height:0,opacity:0},{end:function(){for(var a=0;a<d.length;a++)d[a].src="img/"+l[a]+".png",f[a].innerHTML=n[a],f[a].href=j[a];if(b==h.length-1)for(var a=h.length-1;a>=0;a--)!function(b){setTimeout(function(){move(h[b],{left:o[b].left,top:o[b].top,width:150,height:150,opacity:1},{end:function(){0==b&&(p=!1)}})},100*(h.length-a))}(a)}})},100*a)}(a)}}}(),-1==window.navigator.userAgent.indexOf("MSIE 8.0")&&-1==window.navigator.userAgent.indexOf("MSIE 7.0")||alert("鎮ㄧ殑娴忚鍣ㄧ増鏈繃浣庯紒鏈綉绔欎笉鏀寔浣庣増鏈祻瑙堝櫒锛岃鍗囩骇锛侊紒锛�")},function(a){var b=0,c=0,d=null;a.startMove=function(a,e){clearInterval(d),d=setInterval(function(){c+=(e-a.offsetLeft)/5,c*=.7,b+=c,a.style.left=b+"px",0==Math.round(c)&&Math.round(b)==e&&clearInterval(d)},30)}}(window),function(a){var b=0,c=0,d=null;a.startMoveH=function(a,e){clearInterval(d),d=setInterval(function(){c+=(e-a.offsetTop)/5,c*=.8,b+=c,a.style.top=b+"px",0==Math.round(c)&&Math.round(b)==e&&clearInterval(d)},30)}}(window);