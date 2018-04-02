importScripts('/veterans-outreach/_nuxt/workbox.dev.c21f51f2.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "veterans-outreach",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/veterans-outreach/_nuxt/app.c8a0e8f20c33ff71c029.js",
    "revision": "20200183ef251e25ae725164c5a509fc"
  },
  {
    "url": "/veterans-outreach/_nuxt/layouts/default.8f799b291006ba9e2467.js",
    "revision": "711e58cea37615b9397fb975e3951ebe"
  },
  {
    "url": "/veterans-outreach/_nuxt/manifest.ad092e46f20cbf668fd9.js",
    "revision": "49775a0dc5f531d8815c8da2d5e90234"
  },
  {
    "url": "/veterans-outreach/_nuxt/pages/about.9ac281e2f77f2c2f72dc.js",
    "revision": "2e06b1d4a1017cdba8adb688d7ad8458"
  },
  {
    "url": "/veterans-outreach/_nuxt/pages/chat.b715b34fbbbf5475dd4a.js",
    "revision": "30e1b266b951328c827cb938797132c7"
  },
  {
    "url": "/veterans-outreach/_nuxt/pages/index.cd41ad450bdb26f1cdb8.js",
    "revision": "bc133712aaccf287fe3a232a28f474d4"
  },
  {
    "url": "/veterans-outreach/_nuxt/pages/resources.578e36c757458b37972e.js",
    "revision": "03512f21ee17cd768c7ecb9bd3e87997"
  },
  {
    "url": "/veterans-outreach/_nuxt/vendor.01c691a2baed83bdc172.js",
    "revision": "7fd9658338d06461f9d0f9ed6ad0ddb2"
  }
])


workboxSW.router.registerRoute(new RegExp('/veterans-outreach/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/veterans-outreach/.*'), workboxSW.strategies.networkFirst({}), 'GET')

