/*rou.js beta-0.71*/
'use strict';var rou={ps:{def:{},cg:{},bl:{}},status:!1,id:0,el:"",unknown:!1,uk:function(a){return this.unknown=a,this},c:function(){var a,b,c,d=this,e=window.location.href,f=d.sp(e),g=d.ps.def.ky;for(let e in f?(a=f.substring(0,1),c=f.split("/")):(a="",c=[]),1<c.length&&(f=c[0]),d.ps.cg)if(""!==a&&-1!==e.indexOf(a)&&-1!==f.indexOf(e)){b=f.replace(e,""),a=e;break}if(c.shift(),-1!==e.indexOf("#")&&f!==g){d.ps.bl.hasOwnProperty(f)?(a="",b=f):a=a;var h=d.j(a,b).c,j=d.j(a,b).id;"function"==typeof h?h(b,j,c):""===h?d.unknown&&(b=f,d.unknown(b,c)):d.el.innerHTML=h}else if(g){var h=d.ps.def.c,j=d.ps.def.id;f||(window.location.href+="#"+g),"function"==typeof h?h("home",j,c):d.el.innerHTML=h}},j:function(a,c){const d=this.ps.cg[a]||this.ps.bl[c]||{[c]:{c:"",i:""}};return d[c]||this.ps.bl[c]||{c:"",i:""}},x:function(a){return this.el=document.getElementById(a),this},sp:function(a){let b=a.split("?")[0].split("#");return b.shift(),b.join("#")},r:function(){var a=this;return a.ev=a.ev||a.c.bind(a),a.status?(window.removeEventListener("hashchange",a.ev),a.status=!1):(window.addEventListener("hashchange",a.ev),a.c(),a.status=!0),a},a:function(a,b,d,e=!1,f=!1){var g=this;return f||(f=g.id,g.id+=1),e=e?e:""==e&&"string"==typeof e?e:"!","def"==a?g.ps.def={ky:b,id:f,c:d}:"reg"==a&&(!g.ps.cg[e]&&""!==e&&(g.ps.cg[e]={}),g.ps.bl[e]||""!=e||!1===e?g.ps.cg[e][b]={id:f,c:d}:g.ps.bl[b]={id:f,c:d}),g}};