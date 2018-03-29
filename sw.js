importScripts('/veterans-outreach/_nuxt/workbox.dev.c21f51f2.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "veterans-outreach",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/veterans-outreach/_nuxt/app.65383bf46103d6aae703.js",
    "revision": "3d16ec9428759123603426e52a9c052c"
  },
  {
    "url": "/veterans-outreach/_nuxt/layouts/default.4247d325f4022cd8adf6.js",
    "revision": "51f09c34cca2408b76ef2d5446ac09f9"
  },
  {
    "url": "/veterans-outreach/_nuxt/manifest.e361b7c07ff97491251a.js",
    "revision": "33e09853bb36394973b9d1fba3e5c57b"
  },
  {
    "url": "/veterans-outreach/_nuxt/pages/about.90bb005b82c16ca245eb.js",
    "revision": "abc3e8d19f1c787523297e072891ce22"
  },
  {
    "url": "/veterans-outreach/_nuxt/pages/chat.9d1055c14d2a48ac4a2d.js",
    "revision": "b98863d14d10ee59a38fa46e4a5a98df"
  },
  {
    "url": "/veterans-outreach/_nuxt/pages/index.1196e9debfabb6045323.js",
    "revision": "e544449b72fbd30c146e85e74b5b457c"
  },
  {
    "url": "/veterans-outreach/_nuxt/pages/resources.7903ac6cbbb8eb7cf725.js",
    "revision": "8d108733dcd6d4174926ef206e40b4fd"
  },
  {
    "url": "/veterans-outreach/_nuxt/vendor.01c691a2baed83bdc172.js",
    "revision": "7fd9658338d06461f9d0f9ed6ad0ddb2"
  }
])


workboxSW.router.registerRoute(new RegExp('/veterans-outreach/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/veterans-outreach/.*'), workboxSW.strategies.networkFirst({}), 'GET')

