(()=>{"use strict";var e={6618:(e,t,o)=>{o(8964),o(702);var r=o(1957),a=o(1947),s=o(499),n=o(9835);function i(e,t,o,r,a,s){const i=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(i)}const l=(0,n.aZ)({name:"App"});var c=o(1639);const d=(0,c.Z)(l,[["render",i]]),p=d;var u=o(3340),h=o(2502),g=o(8273);const m=(0,u.h)((()=>{const e=(0,h.WB)();return e.use(g.Z),e}));var v=o(8339);const f=[{path:"/",component:()=>Promise.all([o.e(736),o.e(592)]).then(o.bind(o,7592)),children:[{path:"",component:()=>Promise.all([o.e(736),o.e(260)]).then(o.bind(o,3260))},{path:"/password-change",component:()=>Promise.all([o.e(736),o.e(110)]).then(o.bind(o,2110))},{path:"/LoginPage",component:()=>Promise.all([o.e(736),o.e(6)]).then(o.bind(o,3006))},{path:"/RegisterPage",component:()=>Promise.all([o.e(736),o.e(826)]).then(o.bind(o,6826))},{path:"/ResetPassword",component:()=>Promise.all([o.e(736),o.e(439)]).then(o.bind(o,6439))},{path:"/DashboardPage",component:()=>Promise.all([o.e(736),o.e(966)]).then(o.bind(o,2966))},{path:"/StoresList",component:()=>Promise.all([o.e(736),o.e(664)]).then(o.bind(o,5664))}]},{path:"/admin",component:()=>Promise.all([o.e(736),o.e(592)]).then(o.bind(o,7592)),children:[{path:"",component:()=>Promise.all([o.e(736),o.e(361)]).then(o.bind(o,1361))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([o.e(736),o.e(862)]).then(o.bind(o,1862))}],b=f,y=(0,u.BC)((function(){const e=v.r5,t=(0,v.p7)({scrollBehavior:()=>({left:0,top:0}),routes:b,history:e("")});return t}));async function w(e,t){const o=e(p);o.use(a.Z,t);const r="function"===typeof m?await m({}):m;o.use(r);const n=(0,s.Xl)("function"===typeof y?await y({store:r}):y);return r.use((({store:e})=>{e.router=n})),{app:o,store:r,router:n}}var S=o(6827);const k={config:{},plugins:{Notify:S.Z}},P="";async function j({app:e,router:t,store:o},r){let a=!1;const s=e=>{try{return t.resolve(e).href}catch(o){}return Object(e)===e?null:e},n=e=>{if(a=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=s(e);null!==t&&(window.location.href=t,window.location.reload())},i=window.location.href.replace(window.location.origin,"");for(let c=0;!1===a&&c<r.length;c++)try{await r[c]({app:e,router:t,store:o,ssrContext:null,redirect:n,urlPath:i,publicPath:P})}catch(l){return l&&l.url?void n(l.url):void console.error("[Quasar] boot error:",l)}!0!==a&&(e.use(t),e.mount("#q-app"))}w(r.ri,k).then((e=>Promise.all([Promise.resolve().then(o.bind(o,1569)),Promise.resolve().then(o.bind(o,8812))]).then((t=>{const o=t.map((e=>e.default)).filter((e=>"function"===typeof e));j(e,o)}))))},8812:(e,t,o)=>{o.r(t),o.d(t,{default:()=>n});var r=o(3340),a=o(6827),s=o(6928);const n=(0,r.xr)((async({router:e})=>{const t=(0,s.t)();e.beforeEach(((e,o,r)=>{t.isAuthenticated||"/LoginPage"==e.path?r():(a.Z.create({message:"برای دیدن این صفحه لطفا وارد شوید",color:"negative"}),"/LoginPage"!==e.path&&r("/LoginPage"))}))}))},1569:(e,t,o)=>{o.r(t),o.d(t,{api:()=>n,default:()=>i});var r=o(3340),a=o(9981),s=o.n(a);const n=s().create({baseURL:"https://stage-apiepayment.igame.market"}),i=(0,r.xr)((({app:e})=>{e.config.globalProperties.$axios=s(),e.config.globalProperties.$api=n}))},6928:(e,t,o)=>{o.d(t,{t:()=>n});var r=o(2502),a=o(6827),s=o(1569);const n=(0,r.Q_)("Auth",{state:()=>({username:"",email:"",token:"ّّ",isAuthenticated:!1,stores:[]}),actions:{async doLogin(e){console.log(e),await s.api.post("/api/v1/User/Login",{username:e.username,password:e.password}).then((e=>{console.log(e),"Success"==e.data.status?(this.isAuthenticated=!0,this.token=e.data.data.token,this.username=e.data.data.username,this.email=e.data.data.email,this.router.push({path:"/StoresList"})):(console.log(e.data.joinedErrors),a.Z.create({color:"negative",message:"نام کاربری یا رمز عبور اشتباه است"}))})).catch((e=>{e.response?(console.log(e.response),console.log("server responded")):e.request?console.log("network error"):console.log(e)}))},async getStores(){console.log("getstroes in auth.js"),console.log(this.token),await s.api.get("/api/v1/Store/list",{headers:{Authorization:"Bearer "+this.token}}).then((e=>{console.log(e.data),this.stores=e.data.data,"Success"==e.data.status?console.log("get list success"):(console.log(e.data.joinedErrors),a.Z.create({color:"negative",message:e.data.joinedErrors}))})).catch((e=>{e.response?(console.log(e.response),console.log("server responded")):e.request?console.log("network error"):console.log(e)}))},async getStore(e){await s.api.get("/api/v1/Store/"+e,{headers:{Authorization:"Bearer "+this.token}}).then((e=>{console.log(e.data),"Success"==e.data.status?(console.log("get store success"),a.Z.create({position:"center",color:"info",multiLine:"true",icon:"store",actions:[{label:"X",color:"‌yellow"}],message:" فروشگاه "+e.data.data.name+" "+(e.data.data.disabled?"(غیرفعال)":"(فعال)")})):a.Z.create({color:"negative",message:e.data.joinedErrors})})).catch((e=>{e.response?(console.log(e.response),a.Z.create({color:"negative",message:"Server response: "+e.response.data}),console.log("server responded")):e.request?console.log("network error"):console.log(e)}))},async addStore(e){console.log("addstore in auth"),console.log(e),await s.api.post("/api/v1/Store/Add/",{Name:e.name,Disabled:e.disabled},{headers:{Authorization:"Bearer "+this.token}}).then((t=>{"Success"==t.data.status?(this.getStores(),a.Z.create({color:"positive",message:"فروشگاه جدید "+e.name+" اضافه شد "})):(console.log(t.data.joinedErrors),a.Z.create({color:"negative",message:t.data.joinedErrors}))})).catch((e=>{e.response?(console.log(e.response),console.log("server responded"),a.Z.create({color:"negative",message:"Server response: "+e.response.data})):e.request?console.log("network error"):console.log(e)}))},async updateStore(e){await s.api.post("/api/v1/Store/Update/",{id:e.id,name:e.name,disabled:e.disabled},{headers:{Authorization:"Bearer "+this.token}}).then((e=>{"Success"==e.data.status?(this.getStores(),a.Z.create({color:"positive",message:" فروشگاه با موفقیت بروزرسانی شد"})):a.Z.create({color:"negative",message:e.data.joinedErrors})})).catch((e=>{e.response?a.Z.create({color:"negative",message:"Server response: "+e.response.data}):e.request?console.log("network error"):console.log(e)}))},async deleteStore(e,t){await s.api.post("/api/v1/Store/Delete/"+e,{id:e},{headers:{Authorization:"Bearer "+this.token}}).then((e=>{"Success"==e.data.status?(console.log(" delete success"),this.getStores(),a.Z.create({color:"positive",message:" فروشگاه "+t+" حذف شد "})):(console.log(e.data.joinedErrors),a.Z.create({color:"negative",message:e.data.joinedErrors}))})).catch((e=>{e.response?(console.log(e.response),console.log("server responded"),a.Z.create({color:"negative",message:"Server response: "+e.response.data})):e.request?console.log("network error"):console.log(e)}))},signout(){this.isAuthenticated=!1,this.username="",this.email="",this.token=""}},persist:!0})}},t={};function o(r){var a=t[r];if(void 0!==a)return a.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,o),s.exports}o.m=e,(()=>{var e=[];o.O=(t,r,a,s)=>{if(!r){var n=1/0;for(d=0;d<e.length;d++){for(var[r,a,s]=e[d],i=!0,l=0;l<r.length;l++)(!1&s||n>=s)&&Object.keys(o.O).every((e=>o.O[e](r[l])))?r.splice(l--,1):(i=!1,s<n&&(n=s));if(i){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[r,a,s]}})(),(()=>{o.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(t,{a:t}),t}})(),(()=>{o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[]))})(),(()=>{o.u=e=>"js/"+e+"."+{6:"e26e2efa",110:"a1fb01da",260:"8c06b180",361:"1d01f22e",439:"ab904867",592:"97c59a93",664:"d8947faf",826:"aad829a0",862:"7cf0d36d",966:"4eb64a67"}[e]+".js"})(),(()=>{o.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{6:"f301c0d0",143:"fcfc39c7",736:"4ac499eb"}[e]+".css"})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="dashboarddev:";o.l=(r,a,s,n)=>{if(e[r])e[r].push(a);else{var i,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var p=c[d];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==t+s){i=p;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+s),i.src=r),e[r]=[a];var u=(t,o)=>{i.onerror=i.onload=null,clearTimeout(h);var a=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(o))),t)return t(o)},h=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),l&&document.head.appendChild(i)}}})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.p=""})(),(()=>{var e=(e,t,o,r)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var s=s=>{if(a.onerror=a.onload=null,"load"===s.type)o();else{var n=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=n,l.request=i,a.parentNode.removeChild(a),r(l)}};return a.onerror=a.onload=s,a.href=t,document.head.appendChild(a),a},t=(e,t)=>{for(var o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var a=o[r],s=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(s===e||s===t))return a}var n=document.getElementsByTagName("style");for(r=0;r<n.length;r++){a=n[r],s=a.getAttribute("data-href");if(s===e||s===t)return a}},r=r=>new Promise(((a,s)=>{var n=o.miniCssF(r),i=o.p+n;if(t(n,i))return a();e(r,i,a,s)})),a={143:0};o.f.miniCss=(e,t)=>{var o={6:1};a[e]?t.push(a[e]):0!==a[e]&&o[e]&&t.push(a[e]=r(e).then((()=>{a[e]=0}),(t=>{throw delete a[e],t})))}})(),(()=>{var e={143:0};o.f.j=(t,r)=>{var a=o.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var s=new Promise(((o,r)=>a=e[t]=[o,r]));r.push(a[2]=s);var n=o.p+o.u(t),i=new Error,l=r=>{if(o.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var s=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",i.name="ChunkLoadError",i.type=s,i.request=n,a[1](i)}};o.l(n,l,"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,r)=>{var a,s,[n,i,l]=r,c=0;if(n.some((t=>0!==e[t]))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);if(l)var d=l(o)}for(t&&t(r);c<n.length;c++)s=n[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(d)},r=globalThis["webpackChunkdashboarddev"]=globalThis["webpackChunkdashboarddev"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=o.O(void 0,[736],(()=>o(6618)));r=o.O(r)})();