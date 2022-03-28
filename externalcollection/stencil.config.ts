import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "externalcollection",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "./loader",
    },
  ],
};
