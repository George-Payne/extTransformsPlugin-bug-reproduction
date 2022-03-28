import { Config } from "@stencil/core";
// import { postcss } from '@stencil/postcss';

export const config: Config = {
  namespace: "collectionconsumer",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "./loader",
    },
  ],
  plugins: [],
};
