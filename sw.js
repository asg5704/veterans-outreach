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
<<<<<<< HEAD
    "url": "/veterans-outreach/_nuxt/pages/chat.f99476aa9ecb81fb3d14.js",
    "revision": "f87e813a44c5f7ebebbbda02d7276074"
=======
    "url": "/veterans-outreach/_nuxt/pages/chat.b715b34fbbbf5475dd4a.js",
    "revision": "30e1b266b951328c827cb938797132c7"
>>>>>>> 88b05bd0c7ec0e161a1abb7a09d6ec2d159f2fb5
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

