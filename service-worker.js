"use strict";var precacheConfig=[["/seek-and-find/index.html","6305d4e96d5cc3c06758a93793beba33"],["/seek-and-find/static/css/main.3af67962.css","e73d8e1c4edc09999838e92d8ff03b33"],["/seek-and-find/static/js/main.8042014c.js","425d74cfc5172e347f27ef22d5f3aeca"],["/seek-and-find/static/media/App.132ab0ef.scss","132ab0ef43a0a874d3b9007bb1f94bde"],["/seek-and-find/static/media/Arapya.8b8776c2.jpg","8b8776c24382fe3a3513b0e3d19cdd27"],["/seek-and-find/static/media/Az.bd4cf072.jpg","bd4cf07215ddb3bc2eeef1c0f82377b3"],["/seek-and-find/static/media/BeliPlast.9790c6e9.jpg","9790c6e91b48794f0d40a814e2191a0f"],["/seek-and-find/static/media/Home.1ebd4cb3.scss","1ebd4cb30ae14976523d979218c65df6"],["/seek-and-find/static/media/Homework.91d7e443.scss","91d7e4431e833317ab0a5db2aab615a9"],["/seek-and-find/static/media/Irakli.aa19dc94.jpg","aa19dc94fd3a8929d13e48458f6aa2dc"],["/seek-and-find/static/media/Kamchia.82c9292a.jpg","82c9292a8a12ba7dbb82beb7612286f9"],["/seek-and-find/static/media/Kushla.15d8d8a3.jpg","15d8d8a3a18f522d11054d9cb954d4b4"],["/seek-and-find/static/media/Melnik.dd483bc7.jpg","dd483bc76c7e639919d4456154870e7a"],["/seek-and-find/static/media/Places.489373e3.scss","489373e39f7169468bce8f46671168fa"],["/seek-and-find/static/media/PlacesContainer.5a3f3e7c.scss","5a3f3e7c040ad9b6aeca37b7b774b29c"],["/seek-and-find/static/media/Silistar.c3b4b812.jpg","c3b4b8121e1e8c7b48e6d327a7b51fc0"],["/seek-and-find/static/media/Tulenovo.81460fc0.jpg","81460fc0f20bac57e2f226c1ed09a00c"],["/seek-and-find/static/media/YakotoMqsto.65d6d729.jpg","65d6d729baea1e1b6bf3b1e595eea083"],["/seek-and-find/static/media/_colours.38346ebc.scss","38346ebc0f0ad2e8cec49428add9a1e2"],["/seek-and-find/static/media/_fonts.5557ee45.scss","5557ee45b6e631156c5b4dadf4923af5"],["/seek-and-find/static/media/_fonts.66786e96.scss","66786e96d74c803178e8da899b6da428"],["/seek-and-find/static/media/brain.227d0885.png","227d0885d456b603958e47548db040df"],["/seek-and-find/static/media/bulgaria.9bc2b640.jpg","9bc2b640d8cb6b4d8f84b5ff05754f5c"],["/seek-and-find/static/media/bulgaria.ba5b264a.png","ba5b264adbbc31c65377a634871162f4"],["/seek-and-find/static/media/church.f67f66c9.jpg","f67f66c917104fe3322ef10b4c7bae89"],["/seek-and-find/static/media/map.c2c57df1.png","c2c57df12f07333ce4ea95c43c5e794b"],["/seek-and-find/static/media/map.d756bca4.jpg","d756bca417e071b5f4e2cd2ac4d777ba"],["/seek-and-find/static/media/mountains.a960305a.jpg","a960305a14357a2eb7df67093fe9fce2"],["/seek-and-find/static/media/sea.1a3df7c9.jpg","1a3df7c9f07d1ffff353ceca5d02690f"],["/seek-and-find/static/media/village.680ad017.jpg","680ad017e962f41770b44e86d75543e9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=a),n.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,n,t){var c=new URL(e);return t&&c.pathname.match(t)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var n=new URL(a).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return n.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],n=e[1],t=new URL(a,self.location),c=createCacheKey(t,hashParamName,n,/\.\w{8}\./);return[t.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!n.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,n=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,t),e=urlsToCacheKeys.has(n));var c="/seek-and-find/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(n=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});