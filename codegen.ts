import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./graphql/schema.graphql",
  documents: "./graphql/**/*.ts",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
  config: {
    scalars: {
      Episode: "string",
    },
  },
};

export default config;
