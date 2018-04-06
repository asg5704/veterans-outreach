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
    "url": "/veterans-outreach/_nuxt/layouts/default.ee9821dea8b61d4e3324.js",
    "revision": "a5a76bf74e50252418b316f4b52a74f2"
  },
  {
    "url": "/veterans-outreach/_nuxt/manifest.0ba9dac57fde2cb860a5.js",
    "revision": "d36f88dd4fdd6e1d0b3c4685a7fd1910"
  },
  {
    "url": "/veterans-outreach/_nuxt/pages/about.3d372450ce011d5dfc10.js",
    "revision": "21c0ff99ca9aca42fa82351eab0202a2"
  },
  {
    "url": "/veterans-outreach/_nuxt/pages/chat.b63c53dc94a6327d58cc.js",
    "revision": "715accba6cd34ca2eb858b2f65fe045c"
  },
  {
    "url": "/veterans-outreach/_nuxt/pages/index.3bb223774afd9824d25b.js",
    "revision": "55b1f735c7aba7dc1df99c7a71d1d7a1"
  },
  {
    "url": "/veterans-outreach/_nuxt/pages/resources.57efd15a1ef7255c6f47.js",
    "revision": "4a8af401549f4b40a02d2e4e3ee63d43",
    "url": "/veterans-outreach/_nuxt/layouts/default.deecdc2d2518e7460420.js",
    "revision": "0890acf7c9d074a91995203133f04245"
  },
  {
    "url": "/veterans-outreach/_nuxt/manifest.143b7e555dd42850f71d.js",
    "revision": "5d8ceee7f674380b00d7678f0f0d210c"
  },
  {
    "url": "/veterans-outreach/_nuxt/pages/about.9ac281e2f77f2c2f72dc.js",
    "revision": "2e06b1d4a1017cdba8adb688d7ad8458"
  },
  {
    "url": "/veterans-outreach/_nuxt/pages/chat.f99476aa9ecb81fb3d14.js",
    "revision": "f87e813a44c5f7ebebbbda02d7276074"
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

