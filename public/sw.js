if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/1bfc9850-643af16dde27334f.js",revision:"643af16dde27334f"},{url:"/_next/static/chunks/252f366e-2723c0dc2cb7b719.js",revision:"2723c0dc2cb7b719"},{url:"/_next/static/chunks/639-efb850d48da4bcd8.js",revision:"efb850d48da4bcd8"},{url:"/_next/static/chunks/78e521c3-73b34f8efac96742.js",revision:"73b34f8efac96742"},{url:"/_next/static/chunks/849-3c03c23e9a01c8e3.js",revision:"3c03c23e9a01c8e3"},{url:"/_next/static/chunks/framework-7751730b10fa0f74.js",revision:"7751730b10fa0f74"},{url:"/_next/static/chunks/main-b6582f245bf11510.js",revision:"b6582f245bf11510"},{url:"/_next/static/chunks/pages/_app-88c6d5d572341d56.js",revision:"88c6d5d572341d56"},{url:"/_next/static/chunks/pages/_error-e4f561a102d9bb14.js",revision:"e4f561a102d9bb14"},{url:"/_next/static/chunks/pages/index-56d8deab773408ab.js",revision:"56d8deab773408ab"},{url:"/_next/static/chunks/pages/personagens-b9ba2c108732e3a5.js",revision:"b9ba2c108732e3a5"},{url:"/_next/static/chunks/pages/personagens/ficha-af6d51d37751a9f9.js",revision:"af6d51d37751a9f9"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-7e0a04d6d1a844f2.js",revision:"7e0a04d6d1a844f2"},{url:"/_next/static/szuCTSWv0BcdY10rH-51T/_buildManifest.js",revision:"8d2027435cbcca71e5fdee9a27732274"},{url:"/_next/static/szuCTSWv0BcdY10rH-51T/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon-16x16.ico",revision:"cc8077dbdf3f3ca3bda1e2437359ae7c"},{url:"/favicon-32x32.ico",revision:"561ad65b3c9d74034864fb6d42298776"},{url:"/images/avatar.jpg",revision:"a218a0c0edfdaf904e41da89ee2a4547"},{url:"/images/drawer-image.jpg",revision:"f93988593f2d35ec10b1052b90ff0d69"},{url:"/pwa/icon-192x192.png",revision:"0bd9d3b71790887ab07ef32b1dcc62ae"},{url:"/pwa/icon-256x256.png",revision:"a3e55742652d41c5aad2ca6a3c955688"},{url:"/pwa/icon-384x384.png",revision:"46835d1f5dd533f500f0e95abdf98175"},{url:"/pwa/icon-512x512.png",revision:"480d6e37f99eb7eeee9ac0955f2229ec"},{url:"/pwa/icon-maskable.png",revision:"9ae6daa78e80f9c0b91e319eb205b0fd"},{url:"/pwa/manifest.json",revision:"702a9e710f65a5f607d2314bf10c8c6b"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));