import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "collectionconsumer",
  globalScript: "src/global.ts",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "./loader",
    },
    {
      type: "www",
      serviceWorker: null,
    },
  ],
  plugins: [],
};
