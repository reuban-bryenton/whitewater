if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const o=e=>n(e,c),r={module:{uri:c},exports:t,require:o};s[c]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(a(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/framework-fe99aa755573eedd.js",revision:"fe99aa755573eedd"},{url:"/_next/static/chunks/main-04af13fd674286d7.js",revision:"04af13fd674286d7"},{url:"/_next/static/chunks/pages/_app-8cfae4ed7c401821.js",revision:"8cfae4ed7c401821"},{url:"/_next/static/chunks/pages/_error-fb68742d3cf986b6.js",revision:"fb68742d3cf986b6"},{url:"/_next/static/chunks/pages/index-12b132651e2ee494.js",revision:"12b132651e2ee494"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-82d7cd4553e3b866.js",revision:"82d7cd4553e3b866"},{url:"/_next/static/css/0ae92984eef67821.css",revision:"0ae92984eef67821"},{url:"/_next/static/wqrssYm7Yw0qfNaS8gK9l/_buildManifest.js",revision:"fb93e29f8ad18b06b789a05752cffd6b"},{url:"/_next/static/wqrssYm7Yw0qfNaS8gK9l/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/images/favicon.ico",revision:"b5c9d241fbd563f43a345102b49b706b"},{url:"/images/icon-128x128.png",revision:"cdd4b80b2d31bba066494421a918c49b"},{url:"/images/icon-144x144.png",revision:"3a92b0c55b77b8996fafef68a5dac629"},{url:"/images/icon-152x152.png",revision:"308f421895033a302c2047cf126fdf59"},{url:"/images/icon-192x192.png",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/images/icon-384x384.png",revision:"63e9298bb02866457b827f7050da0812"},{url:"/images/icon-512x512.png",revision:"15e1fbf36e65afcd46ecff9c2a78db7a"},{url:"/images/icon-72x72.png",revision:"251732dc1818f6657014e2194bf448e2"},{url:"/images/icon-96x96.png",revision:"a4f4a89fc5d65b21dc90be1576ff0aba"},{url:"/images/icon.png",revision:"15e1fbf36e65afcd46ecff9c2a78db7a"},{url:"/manifest.json",revision:"2391a17cbfc5923fa34316e883e71503"},{url:"/media/MainMenu.mp3",revision:"73cd97e4e0324b63f80c16c2eabe16eb"},{url:"/media/Success.mp3",revision:"8fb75c98bb5ee8764a33b368b68caeb5"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
