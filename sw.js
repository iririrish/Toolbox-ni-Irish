const V='toolbox-v1.10';
const CORE=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','apple-touch-icon.png'];
const C='https://cdnjs.cloudflare.com/ajax/libs/';
const LIBS=[C+'pdf-lib/1.17.1/pdf-lib.min.js',C+'jspdf/2.5.1/jspdf.umd.min.js',C+'pdf.js/3.11.174/pdf.min.js',C+'pdf.js/3.11.174/pdf.worker.min.js',C+'tesseract.js/5.0.5/tesseract.min.js'];
const ESM=['https://cdn.jsdelivr.net/npm/gifenc@1.0.3/+esm','https://cdn.jsdelivr.net/npm/gifuct-js@2.1.2/+esm'];
const HOSTS=['cdnjs.cloudflare.com','cdn.jsdelivr.net','staticimgly.com','tessdata.projectnaptha.com','fonts.googleapis.com','fonts.gstatic.com'];
self.addEventListener('install',e=>{e.waitUntil((async()=>{const c=await caches.open(V);await c.addAll(CORE);await Promise.allSettled(LIBS.concat(ESM).map(u=>fetch(u).then(r=>r.ok&&c.put(u,r))));self.skipWaiting()})())});
self.addEventListener('activate',e=>{e.waitUntil((async()=>{for(const k of await caches.keys())if(k!==V)await caches.delete(k);await self.clients.claim()})())});
self.addEventListener('fetch',e=>{
 const r=e.request;if(r.method!=='GET'||r.headers.has('range'))return;
 const u=new URL(r.url),same=u.origin===location.origin;if(!same&&!HOSTS.includes(u.hostname))return;
 e.respondWith((async()=>{
  const hit=await caches.match(r,{ignoreSearch:same});
  const net=fetch(r).then(res=>{if(res.status===200||res.type==='opaque'){const cp=res.clone();caches.open(V).then(c=>c.put(r,cp))}return res});
  if(hit){net.catch(()=>{});return hit}
  try{return await net}catch(err){if(r.mode==='navigate'){const f=await caches.match('index.html');if(f)return f}throw err}
 })());
});
