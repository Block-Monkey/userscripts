// ==UserScript==
// @name           Sploit
// @author         Divide
// @description    Powerful Krunker mod
// @version        1.6.5
// @license        gpl-3.0
// @namespace      https://e9x.github.io/
// @icon           https://y9x.github.io/webpack/libs/gg.gif?
// @extracted      Thu, 24 Jun 2021 21:10:10 GMT
// @connect        sys32.dev
// @connect        github.io
// @connect        krunker.io
// @grant          GM.setValue
// @grant          GM_getValue
// @grant          GM.xmlHttpRequest
// @source         https://github.com/y9x/webpack/
// @supportURL     https://y9x.github.io/discord/
// @match          *://krunker.io/*
// @match          *://*.browserfps.com/*
// @run-at         document-start
// @noframes
// ==/UserScript==

(()=>{'use strict';var e={93:e=>{e.exports=class{ls_prefix='ss';gm='function'==typeof GM_getValue;get(e,t){var r=this.get_raw(e);if('string'==typeof r)try{return JSON.parse(r)}catch(e){return console.error('DATASTORE ERROR',e,r),r}switch(t){case'object':return{};case'array':return[]}}set(e,t){return t instanceof Set&&(t=[...t]),this.set_raw(e,JSON.stringify(t))}get_raw(e){return this.gm?GM_getValue(e):localStorage.getItem(this.ls_prefix+e)}set_raw(e,t){return this.gm?GM.setValue(e,t):localStorage.setItem(this.ls_prefix+e,t)}}},653:e=>{var t=e=>'object'==typeof e&&null!=e,r=e=>'string'==typeof e||e instanceof Location||e instanceof URL,s=e=>{if(t(e)){if(e instanceof Headers){let t={};for(let[r,s]of e)t[r]=s;return t}return e}return{}};class a{constructor(){this.text_promise=(()=>{var e,t,r=new Promise(((r,s)=>{e=r,t=s}));return r.resolve=e,r.reject=t,r.resolve_in=(e=0,t)=>setTimeout((()=>r.resolve(t)),e),r})(),this.headers=new Headers}run(e){return new Promise(((t,r)=>{e.onreadystatechange=e=>{switch(e.readyState){case e.DONE:this.text_promise.resolve(e.responseText);break;case e.HEADERS_RECEIVED:t(this.parse_headers(e.responseHeaders))}},e.onerror=e=>r('Unknown error'),GM.xmlHttpRequest(e)}))}async text(){return await this.text_promise}async json(){return JSON.parse(await this.text_promise)}async arrayBuffer(){return(new TextEncoder).encode(await this.text_promise).buffer}parse_headers(e){for(let t of e.split('\r\n')){if(!t)continue;let e=t.split(':');this.headers.append(e.splice(0,1)[0],e.join(':').replace(/^\s+/,''))}return this}}var n=async e=>{if(!t(e))throw new TypeError('Input must be an object');var r={cache:e.cache?'default':'no-cache',headers:s(e.headers)};t(e.data)&&(r.method='POST',r.body=JSON.stringify(e.data),r.headers['content-type']='application/json');var a=['text','json','arrayBuffer'].includes(e.result)?e.result:'text';return await(await n.fetch(n.resolve(e),r))[a]()};n.resolve=e=>{if(!r(e.target))throw new TypeError('Target must be specified');var t=new URL(e.target);return r(e.endpoint)&&(t=new URL(e.endpoint,t)),'object'==typeof e.query&&null!=e.query&&(t.search='?'+new URLSearchParams(Object.entries(e.query))),t},n.fetch='object'==typeof GM?async(e,r)=>{t(r)||(r={});var n={headers:s(r.headers),url:new URL(e,location).href,method:'string'==typeof r.method?r.method:'GET'};return'string'==typeof r.cache&&'default'!=r.cache&&(n.headers.pragma=n.headers['cache-control']=r.cache),r.body&&(n.data=r.body),(new a).run(n)}:window.fetch.bind(window),e.exports=n},637:e=>{e.exports=class{constructor(e){this.load(e)}get(e){return this.data[e]}set(e,t){return this.data[e]=t,this}delete(e){return delete this.data[e]}load(e={}){return this.data=Object.setPrototypeOf(e,null),this}parse(e){var t={};return e.slice(0,e.indexOf('==/UserScript==')).replace(/@(\S+)(?: +(.*))?$/gm,((e,r,s)=>{t[r]=r in t?[].concat(t[r],s):s})),this.data=t,this}toString(){var e=0;for(let t in this.data)t.length>e&&(e=t.length);var t='// ==UserScript==\n';for(let r in this.data)for(let s of[].concat(this.data[r]))t+='// @'+r.padEnd(s?e+4:0,' ')+s+'\n';return t+='// ==/UserScript=='}toJSON(){return this.data}}}},t={};function r(s){var a=t[s];if(void 0!==a)return a.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,r),n.exports}var s={};(()=>{var e=r(637),t=r(93),s=r(653);class a{constructor(e,r=!1){this.url=e,this.logs=r,this.store=new t}log(...e){this.logs&&console.log('[LOADER]',...e)}warn(...e){this.logs&&console.warn('[LOADER]',...e)}async check_latest(t){var r=await s({target:this.url,result:'text'}),a=new Date((new e).parse(t).get('extracted')).getTime(),n=new Date((new e).parse(r).get('extracted')).getTime();a<n?(this.log('Script will update, current script is',n-a,' MS behind latest'),this.store.set(this.url,r),this.log('Update complete, a refresh is required')):this.warn('Script will NOT update',n,a)}request(){this.log('Requesting latest script...');var e=new XMLHttpRequest;e.open('GET',this.url,!1),e.send();var t=e.responseText;return this.store.set(this.url,t),t}load(){this.log('Loading...');var e=this.store.get(this.url);e?(this.log('Script cache loaded'),this.check_latest(e)):e=this.request(),eval(e)}}new a("https://y9x.github.io/userscripts/serve/sploit.user.js",!0).load()})()})();
