To reproduce:
_yarn is being used for workspaces, npm wont work_

1. `yarn`
2. `yarn build`

Observe:

```
collectionconsumer
├── dist
│   ├── cjs
│   ├── collection
│   ├── collectionconsumer
│   ├── esm
│   ├── index.cjs.js
│   ├── index.js
│   ├── loader
│   └── types
├── externalcollection    <------------- This folder should not be outputed
│   └── dist
│       └── collection
│           └── components
│               └── ext-component
│                   └── ext-component.css
├── node_modules
├── package.json
├── src
├── stencil.config.ts
└── tsconfig.json
```
