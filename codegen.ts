import {CodegenConfig} from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://testsour.satel.org:60121/gql/",
  documents: ["src/**/*.{ts, js, tsx, jsx}"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql"
      }
    },
  },
  ignoreNoDocuments: true,
};

export default config
